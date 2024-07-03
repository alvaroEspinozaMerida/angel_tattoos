import {useState} from "react";
import {v4 as uuidv4} from 'uuid'
import {toast} from 'react-toastify'
import Loader from "../Loader/index.jsx";

import "./ContactPage.scss"

function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading , setIsLoading] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();
        setIsLoading(true);


        if (event.target.elements["bot-field"].value) {
            return;
        }

        const uniqueID = uuidv4();


        const endpoint = 'https://l21gr8mq98.execute-api.us-east-2.amazonaws.com/prod2/email-portfolio';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ from: email, ID: uniqueID, name: name , body: message }),
        };

        try {
            const response = await fetch(endpoint, requestOptions);
            if (response.ok) {
                console.log('Request succeeded');

            } else {
                console.log('Request failed');

            }
        } catch (error) {
            console.error(error);
        }

        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: new URLSearchParams(new FormData(event.target)).toString(),
        })
            .then(() => {
                setName("");
                setEmail("");
                setMessage("");

                toast.success(
                    <div className={styles.successToast}>
                        <span >Form submitted successfully!</span>
                    </div>,
                    {
                        position: toast.POSITION.TOP_RIGHT,
                        icon: false,
                        autoClose: 500,
                        closeButton: false,
                        hideProgressBar: false,
                        draggable: false,
                        closeOnClick: true,
                        style: {
                            fontSize: "inherit",
                            backgroundColor: "rgb(68, 68, 68)",
                            color: "inherit",
                            boxShadow: "none",
                        },
                    }
                )

            })
            .catch((error) => {
                toast.error('Form submission failed. Please try again.', {
                    position: toast.POSITION.TOP_RIGHT,
                });
            });
        setIsLoading(false);

    };

    return (
        <div>
            {isLoading ? (
                <div>
                    <Loader/>
                </div>
            ): (
                <div className="min-h-screen bg-dark-secondary text-2xl text-primary-text-dark flex justify-center items-center px-12">
                    <form
                        className="flex flex-col gap-12 "
                        onSubmit={handleSubmit}
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="bot-field" />

                        <div  className="flex flex-col">
                            <label htmlFor="name">
                                Name:
                            </label>
                            <input  className="contact_input"
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

                        <div className="flex flex-row gap-10">

                            <div className="flex flex-col">
                                <label htmlFor="email">
                                    Email:
                                </label>
                                <input  className="contact_input"
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
                                <label htmlFor="email">
                                    Phone Number:
                                </label>
                                <input  className="contact_input"
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
                        </div>
                        <div className="flex flex-col h-4/5">
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