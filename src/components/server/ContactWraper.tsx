import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "../client/ContactForm";
import SectionTitle from "../ui/SectionTitle";

export default function ContactWraper() {
  return (
    <section id="contact" className="py-24 px-12 bg-white">
      <div className="container mx-auto">
        {/* title */}
        <div className="text-center mb-12">
          <SectionTitle text="Contact Us" />
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work with us? Fill out the form and our
            team will get back to you.
          </p>
        </div>
        {/* contact container */}
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm></ContactForm>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
