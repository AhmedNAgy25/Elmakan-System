import ContactForm from "@/components/client/ContactForm";
import Navbar from "@/components/client/Navbar";
import About from "@/components/server/About";
import Features from "@/components/server/Features";
import Footer from "@/components/server/Footer";
import Hero from "@/components/client/Hero";
import Services from "@/components/server/Services";
import Team from "@/components/server/Team";
import Testimonials from "@/components/server/Testimonials";

import React from "react";

export default function page() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Features></Features>
      <About id="#about"></About>
      <Testimonials></Testimonials>
      <Team></Team>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}
