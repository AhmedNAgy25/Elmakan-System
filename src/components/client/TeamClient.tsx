"use client";

import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ITeam } from "@/lib/types";
import Carousel from "./Carousel.tsx";

export default function TeamClient({ team }: { team: ITeam[] }) {
  return (
    <Carousel>
      {team.map((member, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col mx-auto justify-between items-center min-h-60 max-w-85/100 text-center group">
            
            {/* top section */}
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="128px"
                  loading="lazy"
                  className="rounded-full object-cover shadow-lg border-2 border-purple-200 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            </div>

            {/* bottom section */}
            <p className="text-purple-600 font-medium mt-2">{member.position}</p>
          </div>
        </SwiperSlide>
      ))}
    </Carousel>
  );
}
