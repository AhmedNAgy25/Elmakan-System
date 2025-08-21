import {
  INavLink,
  ISlide,
  IService,
  IProject,
  ITestimonial,
  ITeam,
  IContactUs,
  ISocialMediaLink,
  IAboutCard,
} from "./types";

import {
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Github,
  Twitter,
  Calendar,
  Users,
  Lightbulb,
  Headphones,
} from "lucide-react";

export const links: INavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];
export const slides: ISlide = {
  title: "We Build Modern\n Web Apps",
  description:
    "Transform your ideas into powerful, scalable web applications using\n cutting-edge technologies and best practices.",
  highlight: "Professional Web Development",
};
export const services: IService[] = [
  {
    id: "web-dev",
    icon: "images/services/web.svg",
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks and responsive design principles.",
    features: [
      "React & Next.js Applications",
      "Responsive Design",
      "Progressive Web Apps",
      "API Integration",
    ],
  },
  {
    id: "backend-dev",
    icon: "images/services/backend.svg",
    title: "Backend Development",
    description:
      "Scalable server-side solutions with robust databases and API architectures.",
    features: [
      "Node.js & Express",
      "Database Design",
      "RESTful APIs",
      "Cloud Integration",
    ],
  },
  {
    id: "ui-ux",
    icon: "images/services/UI-UX.svg",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality.",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Prototyping",
      "Design Systems",
    ],
  },
];
export const projects: IProject[] = [
  {
    id: 1,
    title: "Englisher",
    description:
      "An online English learning academy helping learners worldwide improve communication, fluency, and confidence with expert-led courses.",
    image: "/images/projects/project1.jpg",
    link: "https://englisherofficial.com/en",
  },
  {
    id: 2,
    title: "BellaRoom",
    description:
      "A task management web app with progress tracking, deadlines, and team collaboration features.",
    image: "/images/projects/project2.jpg",
    link: "https://bellaroomeg.com/",
  },
  {
    id: 3,
    title: "Elqamhawy",
    description:
      "Lightweight desktop applications using Tauri and React for modern, cross-platform solutions.",
    image: "/images/projects/project3.jpg",
    link: "",
  },
  {
    id: 4,
    title: "Supernova system",
    description:
      "Lightweight desktop applications using Tauri and React for modern, cross-platform solutions.",
    image: "/images/projects/project4.jpg",
    link: "",
  },
  {
    id: 5,
    title: "Bio?",
    description:
      "Lightweight desktop applications using Tauri and React for modern, cross-platform solutions.",
    image: "/images/projects/project5.jpg",
    link: "",
  },
  {
    id: 6,
    title: "Eup",
    description:
      "Lightweight desktop applications using Tauri and React for modern, cross-platform solutions.",
    image: "/images/projects/project6.jpg",
    link: "",
  },
];
export const aboutCards: IAboutCard[] = [
  { number: "5+", label: "Years in Market", icon: Calendar },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "50+", label: "Idea to Life", icon: Lightbulb },
  { number: "24/7", label: "Support & Service", icon: Headphones },
];
export const testimonials: ITestimonial[] = [
  {
    id: 1,
    name: "Ali Mohamed",
    position: "CEO, Enkloko",
    feedback:
      "Elmakan System helped us streamline our operations with a custom software solution. Their professionalism and dedication exceeded our expectations.",
    image: "/images/testimonials/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Ahmed Ali",
    position: "Founder, StartUp Hub",
    feedback:
      "The team at Elmakan delivered exactly what we needed—scalable, reliable, and beautifully designed. Highly recommended!",
    image: "/images/testimonials/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Mohamed Salah",
    position: "CTO, Englisher",
    feedback:
      "Their technical expertise and attention to detail made a huge difference in our product launch. We look forward to working with them again.",
    image: "/images/testimonials/testimonial3.jpg",
  },
];
export const team: ITeam[] = [
  {
    name: "Abdelrahman Seada",
    position: "Co-Founder & CEO",
    image: "/images/team/AbdelrahmanSeada.jpg",
    category: "main",
  },
  {
    name: "Ahmed Ayman",
    position: "Co-Founder & CTO",
    image: "/images/team/AhmedAyman1.png",
    category: "main",
  },
  {
    name: "Ahmed Seada",
    position: "Technical Lead",
    image: "/images/team/Ahmed Seada.jpg",
    category: "main",
  },
  {
    name: "Mohamed Abdelfatah",
    position: "Back-end Engineer",
    image: "/images/team/MohamedAbdelfatah.jpg",
    category: "main",
  },
  {
    name: "Ahmed Elgoz",
    position: "Front-end Engineer",
    image: "/images/team/AhmedElghoz.webp",
    category: "main",
  },
];
export const successors: ITeam[] = [
  {
    name: "Ahmed Nagy",
    position: "Front-end intern",
    image: "/images/successors/Ahmed NAgy.webp",
    category: "successor",
  },
  {
    name: "Abdelrahman Elaraby",
    position: "Back-end intern",
    image: "/images/successors/AbdelrahmanAmr.png",
    category: "successor",
  },
  {
    name: "Hussein",
    position: "Front-end intern",
    image: "/images/successors/Hussein.png",
    category: "successor",
  },
  {
    name: "Noor",
    position: "Back-end intern",
    image: "/images/successors/Noor.webp",
    category: "successor",
  },
];
export const contactUs: IContactUs[] = [
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
];
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
];
