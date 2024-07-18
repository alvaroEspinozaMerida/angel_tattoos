import styles from "./GameCarousel.module.scss"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import testImg from "../../../src/assets/senpaiiiart_1.jpg"
import testImg2 from "../../../src/assets/senpaiiiart_1.jpg"
import testImg3 from "../../../src/assets/senpaiiiart_1.jpg"


function GameCarousel(props) {

    return (
        <div className = "w-full">
            <Swiper
                // Specify the modules to use
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
            >
                <SwiperSlide>
                    <div className={styles.carousel_container__item} >
                        <img src={testImg2} alt="Image 2" />
                        <img src={testImg} alt="Image 2" />
                        <img src={testImg3} alt="Image 2" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className={styles.carousel_container__item} >
                        <img src={testImg} alt="Image 1" />
                        <img src={testImg2} alt="Image 2" />
                        <img src={testImg3} alt="Image 2" />
                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className={styles.carousel_container__item} >
                        <img src={testImg} alt="Image 1" />
                        <img src={testImg2} alt="Image 2" />
                        <img src={testImg3} alt="Image 2" />
                    </div>

                </SwiperSlide>

            </Swiper>

        </div>
    );
}

export default GameCarousel;