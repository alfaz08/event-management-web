
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
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container">
          <img src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" />
          <div className="text-overlay">Text for Slide 3utyu</div>
        </div>
          
        </SwiperSlide>
        
         <SwiperSlide>
          <img  src="https://i.ibb.co/BGyKtbL/wan-san-yip-ID1y-Wa1-Wpx0-unsplash.jpg" alt="" />
         
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://i.ibb.co/vhfmGy0/corporate-meeting.jpg" alt="" />
        </SwiperSlide>
       
        
        <SwiperSlide>
          <img src="https://i.ibb.co/xHVjzsg/award-ceremony.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://i.ibb.co/W6k6vsc/pexels-pavel-danilyuk-8761523.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
  );
};

export default Slider;