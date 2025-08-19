import React from "react";

export default function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 font-extrabold text-gray-900">
      <span className="text-purple-600">&lt; </span>
      {text}
      <span className="text-purple-600"> /&gt;</span>
    </h2>
  );
}
