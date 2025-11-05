import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { poppins } from "@/lib/fonts";
import "./globals.css";
import FacebookPixel from "@/components/FacebookPixel";

export const metadata: Metadata = {
  title: "LIVINZA - Interior Design & Renovation Services",
  description:
    "LIVINZA: Expert interior design and renovation services for homes and businesses. Create beautiful, functional spaces with our consultation.",
  generator: "hynox",
  openGraph: {
    title: "LIVINZA - Interior Design & Renovation Services",
    description:
      "LIVINZA: Expert interior design and renovation services for homes and businesses. Create beautiful, functional spaces with our consultation.",
    url: "https://www.mayainteriors.com", // Replace with actual domain
    siteName: "LIVINZA",
    images: [
      {
        url: "https://www.mayainteriors.com/placeholder-logo.png", // Replace with an actual image for social sharing
        width: 800,
        height: 600,
        alt: "LIVINZA - Interior Design",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <FacebookPixel />
        <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
        <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />{" "}
        {/* Replace with your actual GA4 Measurement ID */}
      </body>
    </html>
  );
}
