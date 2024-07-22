import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import styles from "../ImageCarousel/GameCarousel.module.scss";
import testImg2 from "../../assets/senpaiiiart_1.jpg";
import testImg from "../../assets/senpaiiiart_1.jpg";
import testImg3 from "../../assets/senpaiiiart_1.jpg";
import React from "react";



function GameCarousel(props) {

    const image_names = [
        "../../src/assets/senpaiiart_gallery/senpaiiiart_gl_1.jpg",
        "../../src/assets/senpaiiart_gallery/senpaiiiart_gl_2.jpg",
        "../../src/assets/senpaiiart_gallery/senpaiiiart_gl_3.jpg",
        "../../src/assets/senpaiiart_gallery/senpaiiiart_gl_4.jpg",
        "../../src/assets/senpaiiart_gallery/senpaiiiart_gl_5.jpg",
        "../../src/assets/senpaiiart_gallery/senpaiiiart_gl_6.jpg",
        "../../src/assets/senpaiiart_gallery/senpaiiiart_gl_7.jpg",
        "../../src/assets/senpaiiart_gallery/senpaiiiart_gl_8.jpg",
        "../../src/assets/senpaiiart_gallery/senpaiiiart_gl_9.jpg"
    ];

    const column1 = image_names.slice(0, 3);
    const column2 = image_names.slice(3, 6);
    const column3 = image_names.slice(6, 9);






    return (
        <div className="flex justify-center w-full items-center flex-col lg:flex-row gap-5 p-10 pt-0">
            <div className="flex flex-col gap-8">
                {column1.map((image, index) => (
                    <img
                        key={index}
                        className="h-[32rem] w-[28rem] shadow-2xl"
                        src={image}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </div>
            <div className="flex flex-col gap-8 pt-20">
                {column2.map((image, index) => (
                    <img
                        key={index}
                        className="h-[32rem] w-[28rem] shadow-2xl"
                        src={image}
                        alt={`Image ${index + 4}`}
                    />
                ))}
            </div>
            <div className="flex flex-col gap-8">
                {column3.map((image, index) => (
                    <img
                        key={index}
                        className="h-[32rem] w-[28rem] shadow-2xl"
                        src={image}
                        alt={`Image ${index + 7}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default GameCarousel;