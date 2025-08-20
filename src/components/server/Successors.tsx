export const dynamic = "force-static";
export const revalidate = 10;

import React from "react";
import Image from "next/image";
import { ITeam } from "@/lib/types";
import { getSuccessors } from "@/lib/data";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";

export default async function Successors({ id }: { id: string }) {
  const successors = await getSuccessors();
  return (
    <section id={id} className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* sec title */}
        <SectionTitle text="Our Successors" />
        {/* sub title */}
        <SectionSubtitle text="The next generation of engineers growing with Elmakan System." />

        {/* successors container */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
          {successors.map((member: ITeam, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              {/* pic */}
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  loading="lazy"
                  className="rounded-full object-cover border border-gray-300"
                />
              </div>
              {/* name */}
              <h3 className="text-base font-semibold text-gray-800">
                {member.name}
              </h3>
              {/* role */}
              <p className="text-sm text-gray-500 italic mt-1">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
