"use client";
import React from "react";
import { useContactForm } from "@/hook/useContactForm";
import InputField from "../ui/InputField";

export default function ContactForm() {
  const { formData, errors, loading, success, handleChange, handleSubmit } =
    useContactForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-purple-100 shadow-xl space-y-6"
    >
      <InputField
        name="name"
        value={formData.name}
        placeholder="Your Name"
        error={errors.name}
        onChange={handleChange}
      />
      <InputField
        name="email"
        type="email"
        value={formData.email}
        placeholder="Your Email"
        error={errors.email}
        onChange={handleChange}
      />
      <InputField
        name="message"
        value={formData.message}
        placeholder="Your Message"
        error={errors.message}
        onChange={handleChange}
        textarea
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p
          className={`text-sm mt-2 ${
            success.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {success}
        </p>
      )}
    </form>
  );
}
