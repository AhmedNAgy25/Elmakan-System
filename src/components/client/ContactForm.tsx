"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { contactUs } from "@/lib/constants";
import SectionTitle from "../ui/SectionTitle";

interface FormData {
  name: string;
  email: string;
  message: string;
}
interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.message.length < 5)
      newErrors.message = "Message must be at least 5 characters";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <section id="contact" className="py-24 px-12 bg-white">
      <div className="container mx-auto">
        {/* title */}
        <div className="text-center mb-12">
          <SectionTitle text="Contact Us"></SectionTitle>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work with us? Fill out the form and our
            team will get back to you.
          </p>
        </div>

        {/* contact container */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* contact form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-2xl outline-1 outline-purple-300 shadow-lg space-y-6 "
          >
            {/* name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-purple-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-purple-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-purple-500"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
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
