"use client";

import { useState, useEffect } from "react";
import { heroSlides } from "@/lib/constants";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-left bg-gradient-to-br from-purple-600 via-indigo-700 to-gray-950 text-white px-4">
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

      {/* high light text */}
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
        href="#contact" // change this to your target section or page
        className="hover:bg-purple-800 bg-purple-700 text-white mt-14 px-6 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
      >
        Get Started
      </a>
      {/* controls dots */}
      <div className="absolute bottom-6 flex gap-3">
        {heroSlides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
