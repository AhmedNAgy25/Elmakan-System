"use client";

import { useState } from "react";
import { links } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white backdrop-blur-md shadow-sm z-50">
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500 via-purple-300 to-purple-200 absolute top-full left-0"></div>
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* logo */}
        <a
          href="#home"
          className="flex items-center transform transition-transform duration-500 ease-in-out hover:scale-110"
        >
          <Image
            priority
            src="/logo.svg"
            alt="Elmakan System logo"
            width={120}
            height={42}
          />
        </a>

        {/*links*/}
        <ul
          className={`
      flex flex-col lg:flex-row
      absolute lg:static top-full left-0 w-full lg:w-auto
      bg-white lg:bg-transparent
      shadow-md lg:shadow-none
      space-y-4 lg:space-y-0 lg:space-x-8
      p-6 lg:p-0
      transition-all duration-300
      ${
        open
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 lg:opacity-100 lg:translate-y-0"
      }
      `}
        >
          {links.map((link) => (
            <li key={link.href} className="text-center">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-purple-700 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* call us */}
        <a
          href="tel:+201234567890"
          className="hidden lg:block bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
        >
          Call Us
        </a>

        {/* mobile toggle icon */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </header>
  );
}
