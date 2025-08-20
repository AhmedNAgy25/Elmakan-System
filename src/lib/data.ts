import * as api from "./api";
import * as constants from "./constants";

export async function safeFetch<T>(
  fn: () => Promise<T>,
  fallback: T
): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
      console.warn("Using mock data instead of API response.");
    } else {
      console.error("safeFetch error:", err);
    }
    return fallback;
  }
}

export const getSlides = () => {
  return safeFetch(api.getSlides, constants.slides);
};
export const getServices = () => {
  return safeFetch(api.getServices, constants.services);
};
export const getProjects = () => {
  return safeFetch(api.getProjects, constants.projects);
};
export const getTestimonials = () => {
  return safeFetch(api.getTestimonials, constants.testimonials);
};
export const getTeam = () => {
  return safeFetch(api.getTeam, constants.team);
};
export const getContactUs = () => {
  return safeFetch(api.getContactUs, constants.contactUs);
};
export const getSocialMediaLinks = () => {
  return safeFetch(api.getSocialMediaLinks, constants.socialMediaLinks);
};
