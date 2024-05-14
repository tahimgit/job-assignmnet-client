import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function AutoCarousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero min-h-96 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/001/871/553/small_2x/promotion-to-find-workers-with-the-words-look-and-find-jobs-concept-ilustration-can-use-for-landing-page-template-ui-web-mobile-poster-banner-flyer-background-website-advertisement-free-vector.jpg"
                className="max-w-sm h-96 rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Frontend Developer!</h1>
                <p className="py-6">
                  Finding a most productive and energetic dev. Who are able to take responsibility for
                  making interactive UI design and as well as development.We will ensure a comfortable 
                  work environment and competitive salary.Besides,we have a recreation room for refreshing minds for our employers.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-96 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85oeB6gnZ7R-nRzunGkOH9galIL7CXD89WYEZFxivXZ1GtDdell4saRj8ypgKr--CcJU&usqp=CAU"
                className="max-w-sm h-96 rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Jr Software Developer!</h1>
                <p className="py-6">
                Finding a most productive and energetic Software Engineer. Who are able to take responsibility for
                  making a robust and highly scalable software.We will ensure a comfortable 
                  work environment and competitive salary.Besides,we have a recreation room for refreshing minds for our employers.
                </p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-96 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://us.123rf.com/450wm/artinspiring/artinspiring2104/artinspiring210400343/167056380-job-interview-concept-idea-of-employment-and-hiring-procedure.jpg?ver=6"
                className="max-w-sm h-96 rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Backend Engineer!</h1>
                <p className="py-6">
                Finding a most productive and energetic Software Engineer. Who are able to take responsibility for
                  making a robust and highly scalable software.We will ensure a comfortable 
                  work environment and competitive salary.Besides,we have a recreation room for refreshing minds for our employers.
                </p>
               
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
