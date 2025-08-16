import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elmakan System | Technical Solutions & Software Development",
  description:
    "Elmakan System is a tech company providing cutting-edge technical solutions, custom software development, and IT systems for businesses seeking digital growth.",
  keywords: [
    "Elmakan System",
    "technical solutions",
    "software development",
    "IT services",
    "digital transformation",
    "system integration",
  ],
  openGraph: {
    title: "Elmakan System | Technical Solutions & Software Development",
    description:
      "We provide innovative technical solutions and software development services that help businesses scale and succeed in the digital era.",
    siteName: "Elmakan System",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
