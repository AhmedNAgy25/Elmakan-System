"use client";

import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ITeam } from "@/lib/types";
import Carousel from "./Carousel.tsx";

export default function TeamClient({ team, layout = "grid" }: { team: ITeam[], layout?: "grid" | "carousel" }) {
  if (layout === "grid") {
    return (
      <div className="pt-3 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="128px"
                className="rounded-full object-cover shadow-lg border-2 border-purple-200 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-purple-600 font-medium">{member.position}</p>
          </div>
        ))}
      </div>
    );
  }

  // carousel mode
  return (
    <Carousel>
      {team.map((member, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="128px"
                className="rounded-full object-cover shadow-lg border-2 border-purple-200 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
            <p className="text-purple-600 font-medium">{member.position}</p>
          </div>
        </SwiperSlide>
      ))}
    </Carousel>
  );
}
