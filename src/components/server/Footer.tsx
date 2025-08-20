export const dynamic = "force-static";
export const revalidate = 10;

import { getContactUs, getSocialMediaLinks } from "@/lib/data";
import { IContactUs, ISocialMediaLink } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default async function Footer() {
  const contactUs = await getContactUs();
  const socialMediaLinks = await getSocialMediaLinks();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:divide-x md:divide-gray-800 text-center md:text-left">
        
        {/* info */}
        <div className="max-w-sm mx-auto md:mx-0">
          <Link href="#home" className="flex justify-center md:justify-start">
            <Image
              priority
              src="/logo-inverse.svg"
              alt="Elmakan System logo"
              width={120}
              height={42}
            />
          </Link>
          <p className="text-gray-400 mt-6 leading-relaxed">
            We provide technical solutions, software development, and systems
            tailored to your business needs.
          </p>
        </div>

        {/* links */}
        <div className="pl-0 md:pl-8">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
              { label: "Careers", href: "/careers" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-purple-400 hover:translate-x-1 transition duration-200 inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div className="pl-0 md:pl-8">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4">
            {contactUs.map(({ value, icon: Icon }: IContactUs, i: number) => (
              <li
                key={i}
                className="flex flex-col md:flex-row items-center md:items-start gap-3"
              >
                <div className="flex items-center justify-center p-2 bg-purple-600 rounded-full shadow-md">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="whitespace-pre-line text-gray-300">{value}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* social */}
        <div className="pl-0 md:pl-8">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            {socialMediaLinks.map(({ name, href, icon: Icon }: ISocialMediaLink) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 hover:scale-105 transition duration-300 shadow-sm"
                aria-label={name}
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Elmakan System. All rights reserved.
      </div>
    </footer>
  );
}


