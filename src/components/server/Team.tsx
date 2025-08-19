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
        {/* sec title */}
        <SectionTitle text="Meet Our Team"></SectionTitle>
        {/* sub title */}
        <SectionSubtitle
          text="Meet the people behind Elmakan System — passionate innovators
          dedicated to delivering impactful solutions."
        />

        {/* team container */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((member: ITeam, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* pic */}
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  loading="lazy"
                  className="rounded-full object-cover shadow-lg border-2 border-purple-200 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* name */}
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              {/* role */}
              <p className="text-purple-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
