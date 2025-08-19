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
      <div className="absolute w-20 h-20 bg-white opacity-10 rounded-full top-20 right-20 animate-float-slower"></div>


      {/* hero container */}
      <div className="container max-w-4xl md:max-w-3xl sm:max-w-2xl mx-auto px-6 text-center relative z-10">
        {/* highlight */}
        <p className="text-white text-sm sm:text-base md:text-lg mb-2 mt-4">
          {Slide.highlight}
        </p>

        {/* title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-snug md:leading-tight">
          {Slide.title}
        </h1>

        {/* description */}
        <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-full md:max-w-xl mx-auto mb-8">
          {Slide.description}
        </p>

        {/* tech stack */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10">
          {["React & Next.js","Node.js & Express","AI Integration","Cloud Deploy"].map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 border border-white/80 bg-[#ffffff33] text-white text-xs sm:text-sm md:text-sm rounded-full hover:bg-[#ffffff61] transition transform hover:-translate-y-[1px] sm:hover:-translate-y-[2px] duration-500 ease-in-out shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {/* start your project */}
          <a
            href="#contact"
            className="relative px-6 sm:px-8 md:px-9 py-3 sm:py-4 md:py-5 rounded-[25px] md:rounded-[30px] border border-white bg-[#ffffff33] text-white font-semibold overflow-hidden transition-transform duration-500 ease-in-out hover:-translate-y-[4px] sm:hover:-translate-y-[5px] md:hover:-translate-y-[6px] group"
          >
            {/* light sweep */}
            <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full skew-x-12 transition-transform duration-200 ease-in-out"></span>
            <span className="relative z-10 text-sm sm:text-base md:text-lg">Start your project</span>
          </a>

          {/* discover more */}
          <a
            href="#services"
            className="px-6 sm:px-8 md:px-9 py-3 sm:py-4 md:py-5 rounded-[25px] md:rounded-[30px] bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-[#667eea] transition transform hover:-translate-y-[4px] sm:hover:-translate-y-[5px] md:hover:-translate-y-[6px] duration-500 ease-in-out text-sm sm:text-base md:text-lg"
          >
            Discover more
          </a>
        </div>
      </div>
    </section>
  );
}
