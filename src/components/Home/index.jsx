import stockVideo from "/src/assets/videos/vecteezy_car-passing-through-highway-tunnel_33500491.mp4"
import "./Home.scss"
import stockImage from "/src/assets/car-service.png"

import ImageGrid from "../ImageGrid/index.jsx";
const Home = () => {
    const images = [
        { src: "/src/assets/car_service2.jpg", link: '/page1' },
        { src: "/src/assets/car_service2.jpg", link: '/page2' },
        { src: "/src/assets/car_service2.jpg", link: '/page3' },
        { src: "/src/assets/car_service2.jpg", link: '/page4' },
        { src: "/src/assets/car_service2.jpg", link: '/page5' },
        { src: "/src/assets/car_service2.jpg", link: '/page6' },
    ];


    return (
        <>
            <section className="min-h-screen flex justify-center relative">
                <video src = {stockVideo} autoPlay loop muted className="absolute z-0 w-full h-full object-cover"/>

                <div className="z-10 flex flex-col gap-7 items-center justify-center">
                    <h2 className = "text-7xl text-primary-text-dark " >Top Quality Auto Detail</h2>
                    <h1 className = "text-5xl text-primary-text-dark " >Best in San Diego</h1>
                    <h3 className = "text-1xl text-primary-text-dark " >Perfection is one call away</h3>
                    <div className="z-10 flex flex-row gap-7 items-center justify-center" >
                        <button className="button_1">
                            Services
                        </button>
                        <button className="button_1">
                            Talk to Rep
                        </button>
                    </div>
                </div>
            </section>

            <section className="min-h-screen bg-dark-secondary flex justify-center items-center px-12">
                <div className = "flex flex-col gap-7 ">
                    <div className = "flex justify-center items-center flex-row">
                        <h2 className = "basis-1/2 text-center paragraph2 ">
                            Exceptional Quality<br />
                            Competitive Rates<br />
                            Comprehensive Services<br />
                            Reliability and Trust<br />
                            Customer Satisfaction<br />
                        </h2>
                        <p className="p-20 basis-1/2 text-center paragraph">
                            At Premier Auto Detailing, we pride ourselves on being one of the best detailers in the area. Our reputation for excellence is built on years of providing top-tier services to dealerships and individual clients alike. We understand the unique needs of dealerships, and our specialized services are tailored to meet and exceed your expectations.
                        </p>
                    </div>

                    <div className = "flex justify-center items-center flex-row" >
                        <p className="p-20 basis-1/2 text-center paragraph">
                            At Premier Auto Detailing, we pride ourselves on being one of the best detailers in the area. Our reputation for excellence is built on years of providing top-tier services to dealerships and individual clients alike. We understand the unique needs of dealerships, and our specialized services are tailored to meet and exceed your expectations.
                        </p>
                        <div className="p-20 basis-1/2  flex justify-center items-center">
                            <img src = {stockImage}></img>
                        </div>

                    </div>
                </div>
            </section>


            <section className=" bg-green-500 flex justify-center items-center">
                <ImageGrid images={images}/>
            </section>



            <section className="min-h-screen bg-yellow-500 flex justify-center items-center">
                <h2 className="text-white text-3xl">Gallery in Section 4</h2>
            </section>
            <section className="min-h-screen bg-purple-500 flex justify-center items-center">
                <h2 className="text-white text-3xl">Services in Section 5</h2>
            </section>
            <section className="min-h-screen bg-orange-500 flex justify-center items-center">
                <h2 className="text-white text-3xl">Contact in Section 6</h2>
            </section>
            <section className="min-h-screen bg-pink-500 flex justify-center items-center">
                <h2 className="text-white text-3xl">About in Section 7</h2>
            </section>


        </>
    )

}

export default Home;