"use client";

import { useState } from "react";
import { links } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      {/* gradient line below navbar */}
      {/* <div className="h-0.5 w-full bg-gradient-to-r from-purple-500 via-purple-300 to-purple-200 absolute top-full left-0"></div> */}

      <nav
        className="mx-auto mt-1
      w-full lg:w-5/6 
      flex justify-between items-center
      px-6 py-4 
      bg-white/10 backdrop-blur-sm 
      border border-white/20 
      rounded-2xl shadow-md"
      >
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

        {/* links */}
        <ul
          className={`bg-white/80 backdrop-blur-3xl mt-1 border-white/20 rounded-2xl flex flex-col lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto shadow-md lg:bg-transparent lg:backdrop-blur-none border lg:border-0 lg:shadow-none space-y-4 lg:space-y-0 lg:space-x-8 p-6 lg:p-0 transition-all duration-300 ${
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
                className="relative text-gray-800 font-medium transition-colors duration-300 hover:text-purple-700 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* call us */}
        <a
          href="tel:+201234567890"
          className="hidden lg:block bg-gradient-to-tr from-purple-600 to-purple-500 text-white px-6.5 py-3 rounded-[26px] shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          Call Us
        </a>

        {/* mobile toggle icon */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-800 hover:text-purple-700 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </header>
  );
}
