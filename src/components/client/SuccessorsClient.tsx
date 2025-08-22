"use client";

import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ITeam } from "@/lib/types";
import Carousel from "./Carousel.tsx";

export default function SuccessorsClient({ successors }: { successors: ITeam[] }) {
  return (
    <Carousel>
      {successors.map((member, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col justify-between items-center text-center min-h-65 bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 group">
            
            {/* top section */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="96px"
                  loading="lazy"
                  className="rounded-full object-cover border border-gray-300 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-800">{member.name}</h3>
            </div>

            {/* bottom section */}
            <p className="text-sm text-gray-500 italic mt-2">{member.position}</p>
          </div>
        </SwiperSlide>
      ))}
    </Carousel>
  );
}
