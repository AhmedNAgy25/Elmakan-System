import React from "react";
import { getContactUs } from "@/lib/data";
import { IContactUs } from "@/lib/types";

export default async function ContactInfo() {
  const contactUs = await getContactUs();
  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-10 py-8 bg-gray-50 flex flex-col justify-items-start  space-y-6 md:rounded-r-2xl rounded-b-2xl">
      {/* text */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 text-center md:text-left">
          Contact Information
        </h2>
        <p className="text-gray-600 text-center md:text-left">
          Reach out to us through any of these channels. We&apos;re here to
          help!
        </p>
      </div>

      {/* cards */}
      <div className="space-y-4">
        {contactUs.map(({ name, value, icon: Icon }: IContactUs, i: number) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-white shadow-sm p-4 rounded-xl"
          >
            <Icon className="text-purple-600 w-6 h-6 mt-1 shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800">{name}</h3>
              <p className="text-gray-600 text-sm">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
