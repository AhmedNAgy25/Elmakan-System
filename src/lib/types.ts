import { LucideIcon } from "lucide-react";

export interface INavLink {
  href: string;
  label: string;
}

export interface ISlide {
  title: string;
  description: string;
  highlight: string;
}

export interface IService {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  link: string;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface IAboutCard {
  number: string;
  label: string;
  icon: LucideIcon;
}

export interface ITestimonial {
  id: number;
  name: string;
  position: string;
  feedback: string;
  image: string;
}

export interface ITeam {
  name: string;
  position: string;
  image: string;
  category: "main" | "successor";
}

export interface IContactUs {
  name: string;
  value: string;
  icon: LucideIcon;
}

export interface ISocialMediaLink {
  name: string;
  href: string;
  icon: LucideIcon;
}
