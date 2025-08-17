"use client";
import React from "react";
import { contactUs } from "@/lib/constants";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-12 bg-white">
      <div className="container mx-auto">
        {/* title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="text-purple-600">&lt; </span>
            Contact Us
            <span className="text-purple-600"> /&gt;</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work with us? Fill out the form and our
            team will get back to you.
          </p>
        </div>

        {/* contact container */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* contact form */}
          <form className="bg-gray-50 p-8 rounded-2xl outline-1 outline-purple-300 shadow-lg space-y-6 ">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* contact info */}
          <div className="flex flex-col justify-center space-y-6">
      {contactUs.map(({ name, value, icon: Icon }, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <div className="p-3 bg-purple-100 rounded-full">
            <Icon className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-gray-600 whitespace-pre-line">{value}</p>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </section>
  );
}
