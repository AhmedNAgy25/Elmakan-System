import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-24 px-12 bg-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
        {/* image */}
        <div className="relative items-center justify-items-center">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full blur-2xl opacity-60" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-60" />
          <Image
            src="/images/about/about.png"
            alt="About Elmakan System"
            width={500}
            height={400}
            className="relative z-10 rounded-2xl shadow-lg p-2 border-2 border-purple-300"
          />
        </div>

        {/* text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            <span className="text-purple-600">&lt; </span>
            About Us
            <span className="text-purple-600"> /&gt;</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            At <span className="font-semibold text-purple-600">Elmakan System</span>, 
            we provide innovative technical solutions, software development, and system 
            integrations tailored for businesses of all sizes. 
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our team blends creativity, expertise, and modern technologies to deliver 
            scalable solutions that empower organizations to achieve sustainable growth.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition">
              Learn More
            </button>
            <button className="px-6 py-3 border border-purple-300 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
