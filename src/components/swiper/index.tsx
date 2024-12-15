import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TestimonialCard from "@/components/testimonial-card";
import { testimonials } from "@/utils/testimonials";

export default function Slider() {
  return (
    <section className="mb-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              title={testimonial.title}
              description={testimonial.description}
              subtitle={testimonial.subtitle}
              imageUrl={testimonial.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
