import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"
import "./globals.css"
import FacebookPixel from "@/components/FacebookPixel"

export const metadata: Metadata = {
  title: "Livinza | Luxury Interior Design & Home Decor",
  description: "Livinza is an interior design company based in Chennai, India, specializing in modular kitchen and home interior design services with 15+ years of experience. We offer comprehensive solutions for residential and commercial spaces, including wardrobes, TV units, and Pooja units.",
  generator: "hynox",
  openGraph: {
    title: "Livinza | Luxury Interior Design & Home Decor",
    description: "Livinza is an interior design company based in Chennai, India, specializing in modular kitchen and home interior design services with 15+ years of experience. We offer comprehensive solutions for residential and commercial spaces, including wardrobes, TV units, and Pooja units.",
    url: "https://www.livinza.in",
    siteName: "Livinza",
    images: [
      {
        url: "https://www.livinza.in/placeholder-logo.png", // Replace with an actual image for social sharing
        width: 800,
        height: 600,
        alt: "Livinza Interior Design",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <FacebookPixel />
        <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
        <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} /> {/* Replace with your actual GA4 Measurement ID */}
      </body>
    </html>
  )
}
