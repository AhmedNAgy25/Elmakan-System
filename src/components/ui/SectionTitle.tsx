import React from "react";

export default function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
      <span className="text-purple-600">&lt; </span>
      {text}
      <span className="text-purple-600"> /&gt;</span>
    </h2>
  );
}
