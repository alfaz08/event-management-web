import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/src/assets/-1x-1.jpg" alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img src="/src/assets/corporate meeting.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/award ceremony.jpg" alt="" />
        </SwiperSlide>
       
        
        <SwiperSlide>
          <img src="/src/assets/expo.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/wan-san-yip-ID1yWa1Wpx0-unsplash.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
  );
};

export default Slider;