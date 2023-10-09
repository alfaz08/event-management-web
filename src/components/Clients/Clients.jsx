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
    <h2  className="text-center mt-8 font-semibold text-4xl">Meet Our Clients</h2>
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
          <img id="image" src="https://i.ibb.co/k5jDd4B/Oracle-Logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="image" src="https://i.ibb.co/cySP7JX/Microsoft.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="image" src="https://i.ibb.co/X8VqYYX/79183.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="image" src="https://i.ibb.co/VjjzWFQ/Accenture-logo.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="image" src="https://i.ibb.co/XxQNsjp/Brain-Station-23-Ltd.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  id="image" src="https://i.ibb.co/7222QJg/GE-Symbol.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img id="image" src="https://i.ibb.co/Y2RtHqY/649-unilever.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Clients;
