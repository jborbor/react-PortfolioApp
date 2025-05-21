import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Projectsp() {
  return (
    <>
      <section id="projects" className="container">
        <h1 className="sectionTitle">Projects</h1>
        <div className="projectsContainer">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="swiper-slide-custom">
              <div className="slide-content">
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt="Descripción"
                  className="slide-image"
                />
                <div className="slide-text">Nombre del Proyecto</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <div className="slide-content">
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt="Descripción"
                  className="slide-image"
                />
                <div className="slide-text">Nombre del Proyecto</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <div className="slide-content">
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt="Descripción"
                  className="slide-image"
                />
                <div className="slide-text">Nombre del Proyecto</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
