export const dynamic = "force-static"
export const revalidate = 10

import { contactUs, socialMediaLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* info */}
        <div>
          <Link href="#home" className="flex items-center">
            <Image
              priority
              src="/logo-inverse.svg"
              alt="Elmakan System logo"
              width={120}
              height={42}
            />
          </Link>
          <p className="text-gray-400 mt-6">
            We provide technical solutions, software development, and systems
            tailored to your business needs.
          </p>
        </div>

        {/* links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-purple-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-purple-400 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-400 transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="hover:text-purple-400 transition"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4">
            {contactUs.map(({ value, icon: Icon }, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="p-2 bg-purple-600 rounded-full">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="whitespace-pre-line">{value}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {socialMediaLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition"
                aria-label={name}
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* copywrite */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Elmakan System. All rights reserved.
      </div>
    </footer>
  );
}
