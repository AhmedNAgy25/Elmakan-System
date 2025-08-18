export const dynamic = "force-static";
export const revalidate = 10;

import { projects } from "@/lib/constants";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

export default function Features({ id }: { id: string }) {
  return (
    <section id={id} className="py-24 px-12 bg-white">
      <div className="container mx-auto text-center mb-12">
        {/* sec title */}
        <SectionTitle text="Our Projects"></SectionTitle>
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore some of the solutions we’ve built to help businesses thrive
          with cutting-edge technology.
        </p>
      </div>

      {/* proj container*/}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            key={project.id}
            className="group bg-gray-50 rounded-xl shadow-md border border-transparent hover:border-purple-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            {/* proj img*/}
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* card content */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 flex-grow">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
