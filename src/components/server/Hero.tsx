export const dynamic = "force-static";
export const revalidate = 10;
import React from "react";
import { ISlide } from "@/lib/types";
import { getSlides } from "@/lib/data";

export default async function Hero({ id }: { id: string }) {
  const Slide: ISlide = await getSlides();
  return (
    <section
      id={id}
      className="hero min-h-screen flex items-center justify-center bg-gradient-to-r from-[#7081e4] to-[#7853aa] text-white relative overflow-hidden"
    >
      {/* bubbles */}
      <div className="absolute w-18 h-18 bg-white opacity-15 rounded-full top-45 left-36 animate-float"></div>
      <div className="absolute w-14 h-14 bg-white opacity-15 rounded-full bottom-110 right-75 animate-float-delayed"></div>
      <div className="absolute w-26 h-26 bg-white opacity-15 rounded-full bottom-50 right-40 animate-float-slow"></div>

      {/* hero container */}
      <div className="container max-w-4xl md:max-w-3xl sm:max-w-2xl mx-auto px-6 text-center relative z-10">
        {/* highlight */}
        <p className="text-white mb-2 text-lg mt-6">{Slide.highlight}</p>

        {/* title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {Slide.title}
        </h1>

        {/* description */}
        <p className="max-w-2xl mx-auto mb-8 text-white/80 text-lg">
          {Slide.description}
        </p>

        {/* tech stack */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            "React & Next.js",
            "Node.js & Express",
            "AI Integration",
            "Cloud Deploy",
          ].map((tech) => (
            <span
              key={tech}
              className="px-5 py-2.5 border border-white/80 bg-[#ffffff33] text-white rounded-full text-sm hover:bg-[#ffffff61] transition transform hover:-translate-y-[2px] duration-500 ease-in-out  shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-6 flex-wrap">
          {/* start your project */}
          <a
            href="#contact"
            className="relative px-9 py-5 rounded-[30px] border border-white bg-[#ffffff33] text-white font-semibold overflow-hidden transition-transform duration-500 ease-in-out hover:-translate-y-[6px] group"
          >
            {/* light sweep */}
            <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full skew-x-12 transition-transform duration-200 ease-in-out"></span>

            <span className="relative z-10">Start your project</span>
          </a>

          {/* discover more */}
          <a
            href="#services"
            className="
              px-9 py-5 rounded-[30px] bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-[#667eea] transition transform hover:-translate-y-[6px] duration-500 ease-in-out"
          >
            Discover more
          </a>
        </div>
      </div>
    </section>
  );
}
