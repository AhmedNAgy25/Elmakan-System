import React from "react";

interface SectionSubtitleProps {
  text: string;
}

export default function SectionSubtitle({ text }: SectionSubtitleProps) {
  return (
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
      {text}
    </p>
  );
}
