export const dynamic = "force-static";
export const revalidate = 10;

import { getContactUs } from "@/lib/data";
import { IContactUs } from "@/lib/types";

export default async function ContactInfo() {
  const contactUs = await getContactUs();
  return (
    <div className="flex flex-col justify-center space-y-6">
      {contactUs.map(
        ({ name, value, icon: Icon }: IContactUs, index: number) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="p-3 bg-purple-100 rounded-full">
              <Icon className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{name}</h3>
              <p className="text-gray-600 whitespace-pre-line">{value}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
