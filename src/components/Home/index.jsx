import stockVideo from "/src/assets/videos/vecteezy_car-passing-through-highway-tunnel_33500491.mp4"
import "./Home.scss"
import stockImage from "/src/assets/car-service.png"

import background_1 from "/src/assets/wet_car.jpg"
import background_2 from "/src/assets/wet_car_2.jpg"

import ImageGrid from "../ImageGrid/index.jsx";
import React from "react";
import MapComponent from "../MapComponent/index.jsx";
import Footer from "../Footer/index.jsx";
const Home = () => {
    const images = [
        { src: "/src/assets/car_service2.jpg", link: '/page1', details: "Ceramic Coating" },
        { src: "/src/assets/car_service2.jpg", link: '/page2', details: "Clear Bra" },
        { src: "/src/assets/car_service2.jpg", link: '/page3', details: "Auto Detailing" },
        { src: "/src/assets/car_service2.jpg", link: '/page4', details: "Paint Correction" },
        { src: "/src/assets/car_service2.jpg", link: '/page5', details: "Dealership Services" },
        { src: "/src/assets/car_service2.jpg", link: '/page6', details: "Window Tinting" },
    ];


    return (
        <>
            {/*Mobile complete */}
            <section className="min-h-96 lg:min-h-screen flex justify-center relative">
                <video src = {stockVideo} autoPlay loop muted className="absolute z-0 w-full h-full object-cover"/>
                <div className="z-10 pe-8 lg:pe-0 flex flex-col gap-7 items-center justify-center">
                    <h1 className = "text-3xl lg:text-7xl text-primary-text-dark " >Top Quality Auto Detail</h1>
                    <h1 className = "text-2xl lg:text-5xl text-primary-text-dark " >Best in San Diego</h1>
                    <h1 className = "text-1xl lg:text-2xl text-primary-text-dark " >Perfection is one call away</h1>
                    <div className="z-10 flex flex-row gap-7 items-center justify-center" >
                        <button className="button_1">
                            Services
                        </button>
                        <button className="button_1" >
                            Talk to Rep
                        </button>
                    </div>
                </div>
            </section>

            {/*Mobile complete*/}

            <div className="relative overflow-hidden">
                <section className="flex flex-col p-6 pe-12 lg:pe-0 gap-7 min-h-96 lg:min-h-screen bg-dark-secondary justify-center items-center">
                            <div className = "flex flex-col lg:flex-row">
                                <h2 className = "basis-1/2 text-center paragraph2 ">
                                   Exceptional Quality<br/>
                                   Competitive Rates<br/>
                                   Comprehensive Services<br/>
                                   Reliability and Trust<br/>
                                   Customer Satisfaction<br/>
                                </h2>
                                <p className="p-5 lg:p-20 basis-1/2 text-center paragraph">
                                    At Premier Auto Detailing, we pride ourselves on being one of the best detailers in the area. Our reputation for excellence is built on years of providing top-tier services to dealerships and individual clients alike. We understand the unique needs of dealerships, and our specialized services are tailored to meet and exceed your expectations.
                                </p>
                            </div>

                            <div className = "flex flex-col lg:flex-row justify-center items-center" >
                                <p className="p-5 lg:p-20 basis-1/2 text-center paragraph">
                                    At Premier Auto Detailing, we pride ourselves on being one of the best detailers in the area. Our reputation for excellence is built on years of providing top-tier services to dealerships and individual clients alike. We understand the unique needs of dealerships, and our specialized services are tailored to meet and exceed your expectations.
                                </p>
                                <div className="p-5 lg:p-20 basis-1/2  flex justify-center items-center">
                                    <img src = {stockImage}></img>
                                </div>
                            </div>
                    </section>


                <section>
                    <ImageGrid images={images}/>
                </section>

                <div className="h-72 w-full bg-no-repeat bg-cover bg-fixed bg-wet-car "></div>

                <section className="pe-8 lg:p-0 lg:p-0 h-40 lg:h-64 bg-dark-primary border-accent border-y-2 flex justify-center items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16">
                        <h2 className = " text-lg lg:text-7xl text-primary-text-dark " >Logo Here</h2>
                        <button className="button_1">
                            Get Free Quote
                        </button>
                        <h3 className = "text-1xl text-primary-text-dark " >Quality is one call away</h3>
                    </div>
                </section>

                <section className="pe-4 lg:p-12 min-h-screen bg-dark-secondary bg-flex justify-center items-center">
                    <div className="z-10 flex flex-col gap-7 items-center justify-center">

                        <div className=" flex flex-col lg:flex-row gap-7 ">
                            <img src={background_2} alt={`Image2`} className=" w-auto lg:w-1/2 h-auto " />
                            <div className=" flex flex-col gap-7 items-center justify-center">
                                <h1 className="paragraph">Why choose us</h1>
                                <button className="button_1">
                                    Unmatched Quality Service
                                </button>
                                <button className="button_1">
                                    Testimonials
                                </button>
                                <button className="button_1">
                                    Ultimate Quality Paint Protection
                                </button>

                            </div>
                        </div>

                        <div className=" flex flex-col gap-7 items-center justify-center">
                            <h1 className="paragraph">WHY IS PAINT PROTECTION IMPORTANT?</h1>
                            <div className=" flex flex-col lg:flex-row gap-7 items-center justify-center paragraph">
                                <h3 className="p-10">
                                    At Excellence Auto Detail, our passion for cars matches yours, and we are committed to preserving the pristine appearance and value of your vehicle. The constant road work in Chula Vista makes us all more susceptible to the need for car detailing. Regular maintenance is essential, but it’s equally important to protect your car’s exterior. As the industry leader in paint protection technology, our advanced nano-ceramic coatings are designed to keep your vehicle’s paint in immaculate condition. These coatings form an invisible shield, guarding your paint against scratches, rock chips, dirt, and debris. Not only do they provide unparalleled protection, but they also feature a self-cleaning effect, simplifying maintenance and washing. Invest in your vehicle now to enhance its resale value in the future. Choosing Excellence Auto Detail means opting for the premier auto detailing experience in San Diego.
                                </h3>

                                <h3 className="p-10" >
                                    At Excellence Auto Detail, our passion for cars matches yours, and we are committed to preserving the pristine appearance and value of your vehicle. The constant road work in Chula Vista makes us all more susceptible to the need for car detailing. Regular maintenance is essential, but it’s equally important to protect your car’s exterior. As the industry leader in paint protection technology, our advanced nano-ceramic coatings are designed to keep your vehicle’s paint in immaculate condition. These coatings form an invisible shield, guarding your paint against scratches, rock chips, dirt, and debris. Not only do they provide unparalleled protection, but they also feature a self-cleaning effect, simplifying maintenance and washing. Invest in your vehicle now to enhance its resale value in the future. Choosing Excellence Auto Detail means opting for the premier auto detailing experience in San Diego.
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-72 w-full bg-no-repeat bg-cover bg-fixed bg-wet-car2"></div>


                <section className="flex flex-col lg:flex-row min-h-screen bg-dark-secondary justify-center items-center gap-16">
                    <div className="z-10 flex flex-col gap-7 ">
                        <h2 className = "text-3xl lg:text-5xl text-primary-text-dark  border-b-4 border-accent" >Our Locations</h2>
                        <h1 className = "text-xl lg:text-3xl text-primary-text-dark bullet-point" >Carlsbad</h1>
                        <h1 className = "text-base text-secondary-text-dark " >2630 Flower Fields Way <br/>Carlsbad, CA 92010</h1>
                    </div>
                    <MapComponent />
                </section>

            </div>

            <section className="h-64 bg-dark-primary flex justify-center p-10">
               <Footer/>
            </section>

        </>
    )

}

export default Home;