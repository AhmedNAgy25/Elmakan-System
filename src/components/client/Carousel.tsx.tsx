"use client";

import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface CarouselProps {
  children: React.ReactNode;
  slidesPerView?: { base: number; md: number; lg: number };
  delay?: number;
}

export default function Carousel({
  children,
  slidesPerView = { base: 2, md: 3, lg: 4 },
  delay = 3000,
}: CarouselProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: slidesPerView.base },
        768: { slidesPerView: slidesPerView.md },
        1024: { slidesPerView: slidesPerView.lg },
      }}
    >
      {children}
    </Swiper>
  );
}
