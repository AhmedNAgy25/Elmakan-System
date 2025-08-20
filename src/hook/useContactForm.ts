import { useState } from "react";
import { sendContactForm } from "@/lib/api";

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (formData.message.length < 5)
      newErrors.message = "Message must be at least 5 characters";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});
      setSuccess(null);
      const response = await sendContactForm(formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      console.log("API Response:", response);
    } catch (err) {
      setSuccess("Something went wrong. Please try again.");
      console.error("Error sending contact form:", err);
    } finally {
      setLoading(false);
    }
  };

  return { formData, errors, loading, success, handleChange, handleSubmit };
};
