import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elmakan System | Professional Web Development & IT Solutions",
  description:
    "Elmakan System provides modern web applications, mobile apps, backend solutions, UI/UX design, AI integration, and cloud services tailored for businesses seeking digital transformation.",
  keywords: [
    "Elmakan System",
    "web development",
    "software development",
    "IT solutions",
    "mobile apps",
    "AI integration",
    "cloud services",
    "UI UX design",
    "Node.js",
    "React",
    "Next.js",
    "digital transformation",
  ],
  authors: [{ name: "Elmakan System", url: "https://elmakan.com" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
        itemScope
        itemType="http://schema.org/WebPage"
      >
        {children}
      </body>
    </html>
  );
}
