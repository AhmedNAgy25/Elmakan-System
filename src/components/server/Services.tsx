export const dynamic = "force-static";
export const revalidate = 10;

import { IService } from "@/lib/types";
import { getServices } from "@/lib/data";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";

export default async function Services({ id }: { id: string }) {
  const services = await getServices();

  return (
    <section
      id={id}
      className="relative py-28 px-6 sm:px-10 lg:px-20 bg-slate-50"
    >
      {/* sec title */}
      <div className="container mx-auto text-center mb-20">
        <SectionTitle text="Our Services" />
        <SectionSubtitle
          text="We offer comprehensive web development services to bring your digital
          vision to life with modern technologies and best practices."
        />
      </div>

      {/* services container */}
      <div className="grid gap-8 sm:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
        {services.map((service: IService) => (
          <div
            key={service.id}
            className="flex flex-col bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {/* icon */}
            <div className="flex justify-center mb-8 text-purple-600 text-5xl">
              {service.icon}
            </div>

            {/* title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 text-center">
              {service.title}
            </h3>

            {/* description */}
            <p className="text-gray-600 text-base sm:text-lg text-center mb-8 leading-relaxed">
              {service.description}
            </p>

            {/* features (pushed to bottom) */}
            <ul className="space-y-3 text-base text-gray-700 mt-auto">
              {service.features?.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
