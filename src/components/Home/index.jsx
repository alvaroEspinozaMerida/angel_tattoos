import "./Home.scss"
import stockImage from "/src/assets/car-service.png"

import background_1 from "/src/assets/senpaiiiart_1.jpg"
import background_2 from "/src/assets/senpaiiiart_2.jpg"
import background_3 from "/src/assets/senpaiiiart_3.jpg"
import background_4 from "/src/assets/senpaiiiart_4.jpg"
import background_5 from "/src/assets/senpaiiiart_5.jpg"

import ImageGrid from "../ImageGrid/index.jsx";
import React from "react";
import MapComponent from "../MapComponent/index.jsx";
import Footer from "../Footer/index.jsx";


import content from '/src/assets/home.json';// Adjust the path according to your project structure


const Home = () => {
    const home = content.home;
    const images = [
        { src: "/src/assets/senpaiiart_home/senpaiiiart_g_1.jpg", link: '/page1', details: "Ceramic Coating" },
        { src: "/src/assets/senpaiiart_home/senpaiiiart_g_19.jpg", link: '/page2', details: "Clear Bra" },
        { src: "/src/assets/senpaiiart_home/senpaiiiart_g_15.jpg", link: '/page3', details: "Auto Detailing" },
        { src: "/src/assets/senpaiiart_home/senpaiiiart_g_4.jpg", link: '/page4', details: "Paint Correction" },
        { src: "/src/assets/senpaiiart_home/senpaiiiart_g_5.jpg", link: '/page5', details: "Dealership Services" },
        { src: "/src/assets/senpaiiart_home/senpaiiiart_g_6.jpg", link: '/page6', details: "Window Tinting" },
    ];


    return (
        <>
            <section className="min-h-96 lg:min-h-screen flex justify-center relative bg-center bg-no-repeat bg-cover bg-fixed bg-bg_4">
                <div className="z-10 flex flex-col gap-7 items-center justify-center">
                    <h1 className = "text-3xl lg:text-7xl text-light-primary " >{home[0]}</h1>
                    <h1 className = "text-2xl lg:text-5xl text-light-primary " >{home[1]}</h1>
                    <h1 className = "text-1xl lg:text-2xl text-light-primary " >{home[2]}</h1>
                    <div className="z-10 flex flex-row gap-7 items-center justify-center" >
                        <button className="button_1">
                            Contact Me
                        </button>
                        <button className="button_1" >
                            See Gallery
                        </button>
                    </div>
                </div>
            </section>

            <div className="relative overflow-hidden ">
                <section className="flex flex-col gap-5 lg:gap-0 p-10 min-h-96 lg:min-h-screen bg-dark-secondary justify-center items-center">
                            <div className = "flex flex-col gap-5 lg:gap-0 lg:flex-row">

                                <h2 className = "basis-1/2 text-center paragraph2 ">
                                    {home[3].split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}<br/>
                                        </React.Fragment>
                                    ))}
                                </h2>

                                <p className="basis-1/2 text-center paragraph">
                                    {home[4]}
                                </p>
                            </div>
                            <div className = "flex flex-col lg:flex-row justify-center items-center" >
                                <p className="p-5 lg:p-20 basis-1/2 text-center paragraph">
                                    {home[5]}
                                </p>
                            </div>
                </section>

                <section >
                    <ImageGrid images={images}/>
                </section>

                <div className="h-72 w-full bg-no-repeat bg-center bg-cover bg-fixed bg-bg_7"></div>

                <section className="lg:p-0 lg:p-0 h-40 lg:h-64 bg-dark-primary neon-border-top-bottom flex justify-center items-center">
                    <div className="flex flex-row justify-center items-center gap-4 lg:gap-16">
                        <img src={"/src/assets/senpaiiiart_logo.png"} alt={`Logo`} className=" w-24 lg:w-48 object-cover" />

                        <button className="button_1">
                            Get a Free Quote
                        </button>
                        <h3 className = " text-lg lg:text-3xl text-primary-text-dark " >Quality is one click away</h3>
                    </div>
                </section>

                <section className="lg:p-12 min-h-screen bg-dark-secondary bg-flex justify-center items-center">
                    <div className="z-10 flex flex-col gap-7 items-center justify-center">

                        <div className=" flex flex-col lg:flex-row gap-7 ">
                            {/*<img src={background_2} alt={`Image2`} className=" w-auto h-auto " />*/}
                            <div className=" flex flex-col gap-7 items-center justify-center">
                                <h1 className="paragraph">Transforming Ideas Into Art</h1>
                                <button className="button_1">{home[7]}</button>
                                <button className="button_1">{home[8]}</button>
                                <button className="button_1">{home[9]}</button>

                            </div>
                        </div>

                        <div className=" flex flex-col gap-7 items-center justify-center">
                            <h1 className="paragraph">{home[10]}</h1>
                            <div className=" flex flex-col lg:flex-row gap-7 items-center justify-center paragraph">
                                <h3 className="p-10">
                                    {home[11]}
                                </h3>

                                <h3 className="p-10" >
                                    {home[12]}
                                </h3>
                                <h3 className="p-10" >
                                    {home[13]}
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-72 w-full bg-no-repeat bg-cover bg-center bg-fixed bg-bg_6"></div>


                <section className="flex flex-col lg:flex-row min-h-screen bg-dark-secondary justify-center items-center gap-16">
                    <div className="z-10 flex flex-col gap-7 ">
                        <h2 className = "text-3xl lg:text-5xl text-primary-text-dark  neon-border-bottom border-accent" >Find me here</h2>
                        <h1 className = "text-xl lg:text-3xl text-primary-text-dark bullet-point" >Carlsbad</h1>
                        <h1 className = "text-base text-secondary-text-dark " >2630 Flower Fields Way <br/>Carlsbad, CA 92010</h1>
                    </div>
                    <div className="w-96">
                        <MapComponent />

                    </div>
                </section>

            </div>

            <section className="h-64 bg-dark-primary flex justify-center p-10 neon-border-top">
               <Footer/>
            </section>

        </>
    )

}

export default Home;