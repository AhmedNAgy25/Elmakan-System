export const dynamic = "force-static";
export const revalidate = 10;

import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import { getAboutCards } from "@/lib/data";
import { IAboutCard } from "@/lib/types";
import { ArrowRight, Phone } from "lucide-react";

export default async function About({ id }: { id: string }) {
  const aboutCards: IAboutCard[] = await getAboutCards();

  return (
    <section
      id={id}
      className="relative py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-white to-purple-50 overflow-hidden"
    >
      <div className="container mx-auto">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle text="About Us" />
          <SectionSubtitle text="At Elmakan System, we provide innovative technical solutions, software development, and system integrations tailored for businesses of all sizes." />
        </div>

        {/* content layout */}
        <div className="flex flex-col items-center text-center gap-12">
          {/* image */}
          <Image
            src="/images/about/about.svg"
            alt="Elmakan System team"
            width={953}
            height={336}
            className="w-full max-w-2xl "
          />

          {/* text */}
          <div className="max-w-2xl">
            <p className="text-base text-start sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Our team blends creativity, expertise, and modern technologies to
              deliver scalable solutions that empower organizations to achieve
              sustainable growth.
            </p>

            {/* stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {aboutCards.map(
                ({ number, label, icon }: IAboutCard, i: number) => {
                  const Icon = icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg transition"
                    >
                      <Icon className="w-6 h-6 text-purple-600 mb-2" />
                      <h3 className="text-2xl font-bold text-purple-600">
                        {number}
                      </h3>
                      <p className="text-gray-700 text-sm font-medium text-center">
                        {label}
                      </p>
                    </div>
                  );
                }
              )}
            </div>

            {/* actions */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-[26px] border border-purple-400 shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+201234567890"
                className="inline-flex items-center gap-2 bg-gradient-to-tr from-purple-600 to-purple-500 text-white px-6 py-3 rounded-[26px] shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
              >
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
