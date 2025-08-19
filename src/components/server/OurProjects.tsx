export const dynamic = "force-static";
export const revalidate = 10;

import { getProjects } from "@/lib/data";
import { IProject } from "@/lib/types";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

export default async function OurProjects({ id }: { id: string }) {
  const projects = await getProjects();
  return (
    <section id={id} className="py-24 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="container mx-auto text-center mb-12">
        {/* title */}
        <SectionTitle text="Our Projects" />
        <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore some of the solutions we’ve built to help businesses thrive
          with cutting-edge technology.
        </p>
      </div>

      {/* container */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: IProject) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="group flex flex-col bg-gray-50 rounded-xl shadow-md border border-transparent hover:border-purple-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            {/* image */}
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                width={600}
                height={400}
                loading="lazy"
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* card content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 flex-grow">{project.description}</p>
              <span className="text-purple-600 font-medium mt-4 group-hover:underline">
                View Project →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
