import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "../client/ContactForm";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";

export default function ContactWraper({ id }: { id: string }) {
  return (
    <section id={id} className="py-24 px-12 bg-white">
      <div className="container mx-auto">
        {/* title */}
        <div className="text-center mb-12">
          <SectionTitle text="Contact Us" />
          <SectionSubtitle
            text="Have a question or want to work with us? Fill out the form and our
            team will get back to you."
          />
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
