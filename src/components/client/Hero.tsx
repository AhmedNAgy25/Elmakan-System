"use client";

import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { ISlide } from "@/lib/types"; 

export default function HeroSlider({ slides }: { slides: ISlide[] }) {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <>
      {/* title */}
      <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-bold mb-4">
        <Typewriter
          words={[slide.title]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      {/* subtitle */}
      <p className="text-lg md:text-2xl text-center mb-6">{slide.subtitle}</p>

      {/* highlight */}
      <h2 className="text-xl md:text-3xl text-center font-semibold text-purple-300">
        <Typewriter
          words={[slide.highlight]}
          loop={false}
          cursor
          cursorStyle="▌"
          typeSpeed={70}
          delaySpeed={500}
        />
      </h2>

      {/* CTA */}
      <a
        href="#contact"
        className="hover:bg-purple-800 bg-purple-700 text-white mt-14 px-6 py-3 rounded-lg 
                   font-semibold shadow-lg transition transform hover:scale-105"
      >
        Get Started
      </a>

      {/* controls dots */}
      <div className="absolute bottom-6 flex gap-3">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </>
  );
}
