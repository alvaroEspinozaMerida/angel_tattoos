import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid'
import {toast} from 'react-toastify'
import Loader from "../Loader/index.jsx";
import {S3Client, ListObjectsV2Command, PutObjectCommand} from "@aws-sdk/client-s3"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { format } from 'date-fns';




import "./ContactPage.scss"

function ContactPage({s3Client}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");



    const [dateTime, setDateTime] = useState(new Date());

    const [state , setState] = useState("form")

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadError, setUploadError] = useState(null);

    const handleDateChange = (date) => {
        if (date instanceof Date && !isNaN(date)) {
            setDateTime(date);
        } else {
            console.error('Invalid date:', date);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const formatDateTimeFull = (date) => {
        return format(date, 'EEEE, MMMM do, yyyy h:mm:ss a');
    };




    const handleSubmit = async (event) => {
        event.preventDefault();
        // setIsLoading(true);
        setState("loading")
        if (event.target.elements["bot-field"].value) {
            return;
        }

        await new Promise((resolve) => setTimeout(resolve, 0));

        console.log(dateTime.toISOString())



        // Uploading image to s3
        const uniqueID = uuidv4();
        const endpoint = import.meta.env.VITE_CONTACT_API;
        var fileUrl = "";
        setUploadError(null);

        try {
            if (selectedFile) {
                const prefix = "contact_form/";
                const key = `${prefix}${selectedFile.name}`;
                const params = {
                    Bucket: import.meta.env.VITE_S3_BUCKET_NAME,
                    Key: key,
                    Body: selectedFile,
                    ContentType: selectedFile.type
                };
                const command = new PutObjectCommand(params);
                await s3Client.send(command);
                fileUrl = `https://${params.Bucket}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${key}`;
            } else {
                fileUrl = "NO IMAGE UPLOADED";
            }
        } catch (error) {
            setUploadError(error.message);
            fileUrl = "NO IMAGE UPLOADED";
        }


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, email: email, phoneNumber: phoneNumber, id:uniqueID, timestamp:formatDateTimeFull(dateTime.toISOString()), imageLink: fileUrl, message:message }),
        };


        try {
            const response = await fetch(endpoint, requestOptions);
            if (response.ok) {
                // make a success page load when this is successful
                console.log('Request succeeded');
                setState("confirmation")


            } else {
                // console.log('Request failed');
                setState("failed")
            }
        } catch (error) {
            setState("failed")
        }



        // setIsLoading(false);

    };

    return (
        <div>
            {state === 'loading' && (
                <div>
                    <Loader />
                </div>
            )}

            {state === 'confirmation' && (
                <div className="min-h-screen bg-dark-secondary  flex flex-col justify-center items-center px-12 ">
                    <h1 className="paragraph2">We have successfully received your form submission. </h1>
                    <h1 className="text-xl lg:text-3xl text-primary-text-dark">We will reach out to you soon.</h1>

                </div>
            )}

            {state === 'failed' && (
                <div className="min-h-screen bg-dark-secondary  flex flex-col justify-center items-center px-12 ">
                    <h1 className="paragraph2">Form submission could not be processed at this time. </h1>
                    <h1 className="text-xl lg:text-3xl text-primary-text-dark">Apologies for the inconvenience</h1>
                </div>
            )}


            {state === 'form' && (
                <div
                    className="min-h-screen bg-dark-secondary text-2xl text-primary-text-dark flex justify-center items-center">
                    <form
                        className="flex flex-col gap-12 justify-center items-center mt-6"
                        onSubmit={handleSubmit}
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="contact"/>
                        <input type="hidden" name="bot-field"/>

                        <div className="flex flex-col w-full">
                            <label htmlFor="name">
                                Name:
                            </label>
                            <input className="contact_input"
                                   type="text"
                                   id="name"
                                   name="name"
                                   autoComplete="off"
                                   placeholder=""
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   required
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row gap-10 w-full">

                            <div className="flex flex-col ">
                                <label htmlFor="email">
                                    Email:
                                </label>
                                <input className="contact_input"
                                       type="email"
                                       id="email"
                                       name="email"
                                       autoComplete="off"
                                       placeholder=""
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="phoneNumber">
                                    Phone Number:
                                </label>
                                <input className="contact_input"
                                       type="phone"
                                       id="email"
                                       name="email"
                                       autoComplete="off"
                                       placeholder=""
                                       value={phoneNumber}
                                       onChange={(e) => setPhoneNumber(e.target.value)}
                                       required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1>Reference Picture(Optional):</h1>
                            <input type="file" onChange={handleFileChange}/>
                            {uploadError && <p style={{color: 'red'}}>{uploadError}</p>}

                        </div>

                        <div>
                            <DatePicker
                                selected={dateTime}
                                onChange={handleDateChange}
                                showTimeSelect
                                minDate={new Date()}
                                dateFormat="Pp"
                                className="mt-2 p-2 border rounded bg-dark-secondary"
                            />
                        </div>


                        <div className="flex flex-col h-4/5 w-full">
                            <label htmlFor="message">
                                Information:
                            </label>

                            <textarea
                                className="contact_input2"
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-center items-center">
                            <button className="border-2 border-light-secondary w-56 " type="submit">Send</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );

}

export default ContactPage;