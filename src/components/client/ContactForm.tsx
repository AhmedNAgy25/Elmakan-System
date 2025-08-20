"use client";
import React from "react";
import { useContactForm } from "@/hook/useContactForm";
import InputField from "../ui/InputField";

export default function ContactForm() {
  const { formData, errors, loading, success, handleChange, handleSubmit } =
    useContactForm();

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-10 py-8 flex flex-col justify-between ">
      {/* text */}
      <div>
        <h2 className=" text-2xl font-bold text-gray-800 text-center md:text-left">
          Send us a message
        </h2>
        <p className=" text-gray-600 mt-2 text-center md:text-left">
          Fill out the form below and our team will get back to you within 24
          hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <InputField
          name="name"
          value={formData.name}
          placeholder="Enter your full name"
          error={errors.name}
          onChange={handleChange}
        />

        <InputField
          name="email"
          type="email"
          value={formData.email}
          placeholder="Enter your email address"
          error={errors.email}
          onChange={handleChange}
        />

        <InputField
          name="message"
          value={formData.message}
          placeholder="Tell us more about your inquiry..."
          error={errors.message}
          onChange={handleChange}
          textarea
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p
            className={`text-sm mt-2 text-center md:text-left ${
              success.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {success}
          </p>
        )}
      </form>
    </div>
  );
}
