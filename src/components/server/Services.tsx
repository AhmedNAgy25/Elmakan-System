export const dynamic = "force-static";
export const revalidate = 10;

import { IService } from "@/lib/types";
import { getServices } from "@/lib/data";
import SectionTitle from "../ui/SectionTitle";

export default async function Services({ id }: { id: string }) {
  const services = await getServices();
  return (
    <section
      id={id}
      className="relative py-24 px-12 bg-gradient-to-b from-white to-gray-50"
    >
      {/* sec title */}
      <div className="container mx-auto text-center mb-16">
        <SectionTitle text="Our Services"></SectionTitle>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Elmakan System provides innovative and scalable solutions tailored to
          empower your business growth.
        </p>
      </div>

      {/* Services container */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service:IService) => (
          <div
            key={service.id}
            className="relative group bg-white rounded-2xl border border-purple-300 p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-10 blur-2xl transition" />

            {/* icon */}
            <div className="text-5xl mb-6 flex justify-center">
              {service.icon}
            </div>

            {/* title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              {service.title}
            </h3>

            {/* descrption */}
            <p className="text-gray-600 text-sm text-center mb-12">
              {service.description}
            </p>

            {/* button */}
            <div className="absolute inset-6 mt-auto flex justify-center">
              <a
                href={service.link}
                target="_blank"
                className="mt-auto px-4 py-2 text-sm font-medium text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
