import './App.css'
import Navbar from "./components/Navbar/index.jsx";
import Home from "./components/Home/index.jsx"
import { Routes, Route } from 'react-router-dom';
import ContactPage from "./components/ContactPage/index.jsx";
import PortfolioPage from "./components/PortfolioPage/index.jsx"
import {ToastContainer} from 'react-toastify';
import {ListObjectsV2Command, S3Client} from "@aws-sdk/client-s3";

import {Link} from "react-router-dom";
import {useEffect, useState} from "react";


const s3Client = new S3Client({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
});

async function listObjectsInFolder(bucketName, folderName){
    const params = {
        Bucket: bucketName,
        Prefix: folderName,
    };
    try{
        const data = await s3Client.send(new ListObjectsV2Command(params));
        return data.Contents.map(item => item.Key);
    }
    catch(err){
        console.log("Error", err);
        return [];
    }
}


function App() {
    const [homeImages, setHomeImages] = useState([]);
    const [portfolioImages, setPortfolioImages] =  useState([]);

    useEffect(() => {
        async function fetchHomeImages(){
            const keys = await  listObjectsInFolder("senpaiiart-photos", "home");
            const imageUrls = keys.map(key => `https://senpaiiart-photos.s3.us-west-1.amazonaws.com/${key}`)
            setHomeImages(imageUrls);
        }
        fetchHomeImages();
    }, []);

    useEffect(() => {
        async function fetchPortfolioImages(){
            const keys = await  listObjectsInFolder("senpaiiart-photos", "portfolio");
            const imageUrls = keys.map(key => `https://senpaiiart-photos.s3.us-west-1.amazonaws.com/${key}`)
            setPortfolioImages(imageUrls);
        }
        fetchPortfolioImages();
    }, []);


  return (
    <>
        <div className="w-full overflow-hidden">
            <Navbar/>
            <Routes>
                <Route path = "/" element={<Home images={homeImages.slice(1,)}/>}/>
                <Route path = "/contact" element = {<ContactPage s3Client={s3Client}/>} />
                <Route path = "/portfolio" element = {<PortfolioPage images={portfolioImages.slice(1,)}/>} />
                {/*<Route path = "/contact" element = {<ContactPage/>} />*/}
            </Routes>

        </div>


    </>
  )
}

export default App
