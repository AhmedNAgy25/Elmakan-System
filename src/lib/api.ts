import axios from "axios";
import { safeFetch } from "./data";

const api = axios.create({
  baseURL: process.env.BACK_END_API || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

//* projects
export const getProjects = async () => {
  const { data } = await api.get("/projects");
  return data;
};

//* hero-slides
export const getSlides = async () => {
  const { data } = await api.get("/hero-slides");
  return data;
};

//* services
export const getServices = async () => {
  const { data } = await api.get("/services");
  return data;
};

//* testimonials
export const getTestimonials = async () => {
  const { data } = await api.get("/testimonials");
  return data;
};

//* team
export const getTeam = async () => {
  const { data } = await api.get("/team");
  return data;
};

//* successors
export const getSuccessors = async () => {
  const { data } = await api.get("/successors");
  return data;
};

//* contact info
export const getContactUs = async () => {
  const { data } = await api.get("/contact-us");
  return data;
};

//* social media links
export const getSocialMediaLinks = async () => {
  const { data } = await api.get("/social-links");
  return data;
};

//* contactForm
type ContactResponse = { success: boolean; message: string };

export const sendContactForm = (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    return Promise.resolve({
      success: true,
      message: "Mock: message stored locally",
    });
  }

  return safeFetch<ContactResponse>(
    async () => {
      const { data } = await api.post<ContactResponse>("/contact", formData);
      return data;
    },
    { success: true, message: "Mock: message stored locally" }
  );
};
