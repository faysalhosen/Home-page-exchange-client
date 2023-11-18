import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
    return (
        <div>
            <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper "
      >
        {/* Slider-1 */}
        <SwiperSlide>
          <div
            className="hero min-h-screen "
            style={{ backgroundImage: "url(https://i.ibb.co/9WsJqzx/slider1.jpg)" }}
          >
            <div className=" md:mr-80">
              <div className="max-w-md my-4">
                <h1 className=" text-black  text-3xl mb-3 lg:text-6xl font-bold">
                Solution For <br /> All Home Service
                </h1>
                <p className="  font-serif">
                Home services encompass a variety of tasks performed at home, such as cleaning, repairs, maintenance, and renovations, enhancing domestic comfort and functionality.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider-2 */}
        <SwiperSlide>     
          <div
            className="hero min-h-screen "
            style={{ backgroundImage: "url(https://i.ibb.co/BZnXrBz/slider2.jpg)" }}
          >
            <div className=" mb-20">
              <div className="max-w-md my-4 ">
                <h1 className="text-black  text-3xl mb-6 lg:text-6xl font-bold">
                Solution For <br /> All Home Service
                </h1>
                <p className="text-black  font-serif">
                Home services encompass a variety of tasks performed at home, such as cleaning, repairs, maintenance, and renovations, enhancing domestic comfort and functionality.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider-3 */}
        <SwiperSlide>     
          <div
            className="hero min-h-screen "
            style={{ backgroundImage: "url(https://i.ibb.co/n16z3bv/slider3.jpg)" }}
          >
            <div className=" ">
              <div className="max-w-md my-4  md:mr-80">
                <h1 className="text-white  text-3xl mb-6 lg:text-6xl font-bold">
                Solution For <br /> All Home Service
                </h1>
                <p className="text-white  font-serif">
                Home services encompass a variety of tasks performed at home, such as cleaning, repairs, maintenance, and renovations, enhancing domestic comfort and functionality.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Slider-4*/}
        <SwiperSlide>     
          <div
            className="hero min-h-screen "
            style={{ backgroundImage: "url(https://i.ibb.co/z5czbyK/slider-4.jpg)" }} >
            <div className=" ">
              <div className="max-w-md my-4 mb-60">
                <h1 className="text-black  text-3xl mb-6 lg:text-6xl font-bold">
                Solution For <br /> All Home Service
                </h1>
                <p className="text-black  font-serif">
                Home services encompass a variety of tasks performed at home, such as cleaning, repairs, maintenance, and renovations, enhancing domestic comfort and functionality.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      
        
      </Swiper>
        </div>
    );
};

export default Banner;