import React from "react";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function ProjectSlider({ projects }) {
  return (
    <div className="py-8 bg-gradient-to-b from-[#6EDFF6] to-[#1f98c4] relative">
      <h2 className="text-3xl font-bold text-[#1E1E1E] text-center mb-8 px-4">
        Other Projects You Can Support
      </h2>

      <div className="mx-auto max-w-full relative px-2 sm:px-6">
        {/* Increased container padding */}
        <div className="px-8 sm:px-12">  
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center h-full pb-8 px-1 sm:px-2">
                  <ProjectCard
                    title={project.title}
                    desc={project.desc}
                    img={project.img}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons - Positioned outside swiper container */}
        <div className="swiper-button-prev !text-blue-600 !-left-1 sm:!left-2 !top-[42%] hover:!scale-110 transition-transform !w-10 !h-10"></div>
        <div className="swiper-button-next !text-blue-600 !-right-1 sm:!right-2 !top-[42%] hover:!scale-110 transition-transform !w-10 !h-10"></div>
      </div>
    </div>
  );
}

export default ProjectSlider;