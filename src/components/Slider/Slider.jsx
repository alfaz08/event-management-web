
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
          <img src="https://i.ibb.co/2PXQn7k/Corporate-Event-1.webp" alt="" />
          <div className="text-overlay font-bold text-amber-400 hidden sm:block">Corporate Event Solutions <span className="text-2xl text-amber-400"> <br /> Make Your Event Awesome</span></div>
        </div>
          
        </SwiperSlide>

        
        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container">
          <img src="https://i.ibb.co/Yd8TyXc/https-cdn-cnn-com-cnnnext-dam-assets-190912124633-amazon-product-event-2018-file.jpg" alt="" />
          <div className="text-overlay font-bold text-amber-400 hidden sm:block">Explore Our Exclusive Event <br /> <button className='btn btn-warning'>Get Start</button> </div>
        </div>
          
        </SwiperSlide>


        <SwiperSlide>
        <div className="image-container">
          <img  src="https://i.ibb.co/MVBd91X/Expo-Young-Stars-Just-Dance-Fine-Art-Training-Center-Dubai-at-Al-Wasl-Stage-m9353.jpg" alt="" />
          <div className=" text-overlay font-bold text-amber-400 hidden sm:block">Show Some Exclusive Expo  Event 2023</div>
        </div>
        </SwiperSlide>

         <SwiperSlide>
          
          <div className="image-container">
          <img  src="https://i.ibb.co/5rQgFcN/Events-Workshops-and-Seminars.png" alt="" />
          <div className="text-overlay font-bold text-amber-400 hidden sm:block">Consistently Delivering Exceptional Events</div>
        </div>



        </SwiperSlide>

       
       
        
        <SwiperSlide>
         
          <div className="image-container">
          <img src="https://i.ibb.co/xHVjzsg/award-ceremony.jpg" alt="" />
          <div className=" text-overlay font-bold text-amber-400 hidden sm:block">Some Exclusive Moment With US</div>
        </div>
        </SwiperSlide>


       
        
      </Swiper>
  );
};

export default Slider;