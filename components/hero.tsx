"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onConsultClick: () => void
}

export default function Hero({ onConsultClick }: HeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center pt-16">
      {/* Background Image */}
      <Image
        src="/modern-luxury-interior-living-room-with-elegant-fu.jpg"
        alt="Luxury Interior Design for Exquisite Homes & Offices"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Luxury Interior Design for Exquisite Homes & Offices
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 text-balance">
          Elevate your living and working environments with Livinza's bespoke design solutions.
        </p>
        <Button
          onClick={onConsultClick}
          className="bg-[#8BA186] cursor-pointer hover:bg-green-800/90 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get a Free Design Consultation
        </Button>
      </div>
    </section>
  )
}
