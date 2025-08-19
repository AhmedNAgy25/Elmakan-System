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
export const slides: ISlide = {
  title: "We Build Modern\n Web Apps",
  description:
    "Transform your ideas into powerful, scalable web applications using\n cutting-edge technologies and best practices.",
  highlight: "Professional Web Development",
};
//in this way untill i hold the api
export const services: IService[] = [
  {
    id: "web-dev",
    icon: "🌐",
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks and responsive design principles.",
    features: [
      "React & Next.js Applications",
      "Responsive Design",
      "Progressive Web Apps",
      "API Integration",
    ],
    link: "#",
  },
  {
    id: "mobile-dev",
    icon: "📱",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
    features: [
      "React Native Apps",
      "Cross-Platform Solutions",
      "App Store Deployment",
      "Performance Optimization",
    ],
    link: "#",
  },
  {
    id: "backend-dev",
    icon: "🚀",
    title: "Backend Development",
    description:
      "Scalable server-side solutions with robust databases and API architectures.",
    features: [
      "Node.js & Express",
      "Database Design",
      "RESTful APIs",
      "Cloud Integration",
    ],
    link: "#",
  },
  {
    id: "ui-ux",
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality.",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Prototyping",
      "Design Systems",
    ],
    link: "#",
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI Integration",
    description:
      "Intelligent features powered by artificial intelligence and machine learning.",
    features: [
      "ChatBot Development",
      "AI-Powered Features",
      "Machine Learning",
      "Data Analytics",
    ],
    link: "#",
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment solutions for modern applications.",
    features: [
      "AWS & Azure Deployment",
      "DevOps & CI/CD",
      "Performance Monitoring",
      "Security Implementation",
    ],
    link: "#",
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
