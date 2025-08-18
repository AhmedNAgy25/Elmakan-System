import {
  INavLink,
  ISlide,
  IService,
  IProject,
  ITestimonial,
  ITeam,
  IContactUs,
  ISocialMediaLink,
} from "./types";

import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

export const links: INavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
]; //in this way untill i hold the api
export const slides: ISlide[] = [
  {
    id: 1,
    title: "We Build Modern Web Apps",
    subtitle: "Using Powerfull Technoloyies",
    highlight: "Fast. Secure. Scalable.",
  },
  {
    id: 2,
    title: "Custom Software Solutions",
    subtitle: "Make for Your Business",
    highlight: "Efficiency with Innovation.",
  },
  {
    id: 3,
    title: "AI Integrated Systems",
    subtitle: "Powered by AI & Cloud",
    highlight: "Stay Ahead of the Curve.",
  },
  {
    id: 4,
    title: "Large Scalable Systems",
    subtitle: "Make For Today and Up",
    highlight: "Strong Scalable System For Your Shine Business.",
  },
]; //in this way untill i hold the api
export const services: IService[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive and modern web applications using cutting edge technology.",
    link: "https://www.google.com/",
    icon: "💻",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description:
      "Creating cross-platform mobile applications with smooth UX and performance.",
    link: "https://www.google.com/",
    icon: "📱",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "Deploy scalable and secure applications in the cloud, ready for growth.",
    link: "https://www.google.com/",
    icon: "☁️",
  },
  {
    id: 4,
    title: "AI Integration",
    description:
      "Integrate AI solutions to automate processes and enhance decision-making.",
    link: "https://www.google.com/",
    icon: "🤖",
  },
]; //in this way untill i hold the api
export const projects: IProject[] = [
  {
    id: 1,
    title: "E-Marketplace Platform",
    description:
      "A scalable multi-merchant marketplace where businesses can create their own online store or join the global market.",
    image: "/images/projects/project1.jpg",
    link: "https://www.project1.com",
  },
  {
    id: 2,
    title: "Task Follow-Up System",
    description:
      "A task management web app with progress tracking, deadlines, and team collaboration features.",
    image: "/images/projects/project2.jpg",
    link: "https://www.project2.com",
  },
  {
    id: 3,
    title: "Desktop Solutions",
    description:
      "Lightweight desktop applications using Tauri and React for modern, cross-platform solutions.",
    image: "/images/projects/project3.jpg",
    link: "https://www.project3.com",
  },
  {
    id: 4,
    title: "Desktop Solutions",
    description:
      "Lightweight desktop applications using Tauri and React for modern, cross-platform solutions.",
    image: "/images/projects/project4.jpg",
    link: "https://www.project4.com",
  },
  {
    id: 5,
    title: "Desktop Solutions",
    description:
      "Lightweight desktop applications using Tauri and React for modern, cross-platform solutions.",
    image: "/images/projects/project5.jpg",
    link: "https://www.project5.com",
  },
  {
    id: 6,
    title: "Desktop Solutions",
    description:
      "Lightweight desktop applications using Tauri and React for modern, cross-platform solutions.",
    image: "/images/projects/project6.jpg",
    link: "https://www.project6.com",
  },
]; //in this way untill i hold the api
export const testimonials: ITestimonial[] = [
  {
    id: 1,
    name: "Ali Mohamed",
    role: "CEO, Enkloko",
    feedback:
      "Elmakan System helped us streamline our operations with a custom software solution. Their professionalism and dedication exceeded our expectations.",
    image: "/images/testimonials/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Ahmed Ali",
    role: "Founder, StartUp Hub",
    feedback:
      "The team at Elmakan delivered exactly what we needed—scalable, reliable, and beautifully designed. Highly recommended!",
    image: "/images/testimonials/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Mohamed Salah",
    role: "CTO, Englisher",
    feedback:
      "Their technical expertise and attention to detail made a huge difference in our product launch. We look forward to working with them again.",
    image: "/images/testimonials/testimonial3.jpg",
  },
]; //in this way untill i hold the api
export const team: ITeam[] = [
  {
    name: "Ahmed Ayman",
    role: "Co-Founder & Technical Lead",
    image: "/images/team/Ahmed Ayman.jpg",
  },
  {
    name: "Abdelrahman Seada",
    role: "Senior Engineer",
    image: "/images/team/Abdelrahman Seada.jpg",
  },
  {
    name: "Mohamed Abdelfatah",
    role: "Backend Engineer",
    image: "/images/team/Mohamed Abdelfatah.jpg",
  },
  {
    name: "Ahmed Elgoth",
    role: "Frontend Engineer",
    image: "/images/team/Ahmed Elgoth.jpg",
  },
]; //in this way untill i hold the api
export const contactUs: IContactUs[] = [
  {
    name: "Our Location",
    value: "123 Elmakan Street\nZagazig, Egypt",
    icon: MapPin,
  },
  {
    name: "Email",
    value: "info@elmakan.com",
    icon: Mail,
  },
  {
    name: "Phone",
    value: "+20 123 456 789",
    icon: Phone,
  },
]; //in this way untill i hold the api
export const socialMediaLinks: ISocialMediaLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/elmakansystems",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/ElmakanSystem",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/ElmakanSystem",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ElmakanSystem",
    icon: Twitter,
  },
]; //in this way untill i hold the api
