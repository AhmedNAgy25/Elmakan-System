export const dynamic = "force-static";
export const revalidate = 10;

import React from "react";
import Image from "next/image";
import { ITeam } from "@/lib/types";
import { getTeam } from "@/lib/data";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";

export default async function Team({ id }: { id: string }) {
  const team = await getTeam();
  return (
    <section id={id} className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* section title */}
        <SectionTitle text="Meet Our Team" />

        {/* subtitle */}
        <SectionSubtitle text="Meet the people behind Elmakan System — passionate innovators dedicated to delivering impactful solutions." />

        {/* team container */}
        <div className="pt-3 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
          {team.map((member: ITeam, index: number) => (
            <div
              key={index}
              className="flex flex-wrap flex-col items-center justify-between text-center group"
            >
              {/* avatar */}
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

              {/* name */}
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>

              {/* position */}
              <p className="text-purple-600 font-medium">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
