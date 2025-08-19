"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { sendContactForm } from "@/lib/api"; //uncomment after add backend

// types
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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setErrors({});
      setLoading(true);
      setSuccess(null);

      const response = await sendContactForm(formData); //uncomment after add backend

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      console.log("API Response:", response); //uncomment after add backend
    } catch (err) {
      setSuccess("Something went wrong. Please try again.");
      console.error("Error sending contact form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* contact form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-purple-100 shadow-xl space-y-6"
      >
        {/* name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* message */}
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* submit btn */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* success/error message */}
        {success && (
          <p
            className={`text-sm mt-2 ${
              success.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {success}
          </p>
        )}
      </form>
    </>
  );
}
