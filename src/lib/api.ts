import axios from "axios";

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
export const sendContactForm = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const { data } = await api.post("/contact", formData);
  return data;
};
