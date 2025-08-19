export const dynamic = "force-static";
export const revalidate = 10;

import { getTestimonials } from "@/lib/data";
import { ITestimonial } from "@/lib/types";
import Image from "next/image";
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";

export default async function Testimonials({ id }: { id: string }) {
  const testimonials = await getTestimonials();
  return (
    <section id={id} className="relative py-24 px-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <SectionTitle text="What Our Clients Say"></SectionTitle>
        <SectionSubtitle text="See what our clients have to say about working with Elmakan System" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((t: ITestimonial) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-purple-300 hover:shadow-xl transition"
            >
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="120px"
                  loading="lazy"
                  className="rounded-full object-cover border-1 border-purple-400"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.role}</p>
              <p className="text-gray-600 italic leading-relaxed">
                “{t.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
