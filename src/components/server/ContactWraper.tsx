import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "../client/ContactForm";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";

export default function ContactWrapper({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative py-24 px-4 sm:px-6 bg-gradient-to-br from-white to-purple-50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* sec header */}
        <div className="text-center mb-12">
          <SectionTitle text="Contact Us" />
          <SectionSubtitle text="Have a question or want to work with us? Fill out the form and our team will get back to you." />
        </div>

        {/* content container */}
        <div className="grid gap-8 md:grid-cols-2 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
          {/* left form */}
          <ContactForm />

          {/* right info */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
