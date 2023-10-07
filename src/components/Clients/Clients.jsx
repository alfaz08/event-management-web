import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Clients.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Clients = () => {
  
   
  return (
    <>
    <h2  className="text-center font-semibold text-5xl">Meet Our Clients</h2>
       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide id='image'>
          <img id="image" src="/src/assets/Oracle-Logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="image" src="/src/assets/Microsoft.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="image" src="/src/assets/Accenture-logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="image" src="/src/assets/Xiaomi-logo.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="image" src="/src/assets/Brain Station--23 Ltd.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  id="image" src="/src/assets/649_unilever.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="image" src="/src/assets/GE-Symbol.png" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Clients;
