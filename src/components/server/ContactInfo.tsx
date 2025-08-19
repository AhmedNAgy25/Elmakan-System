export const dynamic = "force-static";
export const revalidate = 10;

import { getContactUs } from "@/lib/data";
import { IContactUs } from "@/lib/types";

export default async function ContactInfo() {
  const contactUs = await getContactUs();
  return (
    <div className="flex flex-col justify-start space-y-6">
      {contactUs.map(
        ({ name, value, icon: Icon }: IContactUs, index: number) => (
          <div
            key={index}
            className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            {/* icon */}
            <div className="flex items-center justify-center p-2.5 rounded-full bg-gradient-to-tr from-purple-500 to-purple-600 shadow-md">
              <Icon className="w-5 h-5 text-white" />
            </div>

            {/* text */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              <p className="text-gray-700 whitespace-pre-line">{value}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
