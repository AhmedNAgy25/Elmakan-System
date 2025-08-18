import React from "react";

export default function HeroBackground({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      id={id}
      className="relative h-screen flex flex-col items-center justify-center text-left 
                 bg-gradient-to-br from-purple-600 via-indigo-700 to-gray-950 text-white px-4"
    >
      {children}
    </section>
  );
}
