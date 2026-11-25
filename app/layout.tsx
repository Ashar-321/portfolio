import type { Metadata, Viewport } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashar | Frontend-focused Full Stack Developer",
  description:
    "Ashar builds thoughtful frontend experiences, Shopify storefronts, and practical web applications.",
  applicationName: "Ashar Portfolio",
  openGraph: {
    title: "Ashar | Full Stack Developer",
    description: "Thoughtful interfaces. Useful products. Built for the web.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f8f5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollReveal />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
