import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import styles from "../ImageCarousel/GameCarousel.module.scss";
import React from "react";



function GameCarousel({images}) {

    const column1 = images.slice(0, 3);
    const column2 = images.slice(3, 6);
    const column3 = images.slice(6, 9);


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