import React from 'react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import cat_01 from '../assets/Images/cat_01.jpg'
import cat_02 from '../assets/Images/cat_02.jpg'
import cat_bb from '../assets/Images/cat_bb.jpg'
import cat_dog from '../assets/Images/cat_dog.jpg'
import dog_01 from '../assets/Images/dog_01.jpg'
import dog01 from '../assets/Images/dog01.jpg'
import golden from '../assets/Images/golden.jpg' 
export const Home = () => {
  return (
    <div className='container'>
     
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        >    
        <SwiperSlide>
          <img src={cat_01} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat_02} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat_bb} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat_dog} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dog_01} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dog01} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={golden} alt="slide_image" />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>   
  )
}
