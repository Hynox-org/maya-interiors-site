"use client"

import { Button } from "@/components/ui/button"

interface HeroProps {
  onConsultClick: () => void
}

export default function Hero({ onConsultClick }: HeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/modern-luxury-interior-living-room-with-elegant-fu.jpg')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl   font-bold mb-6 text-balance">
          Transform Your Space with Modern Interiors
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 text-balance">
          From design to execution, we create spaces that inspire.
        </p>
        <Button
          onClick={onConsultClick}
          className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get a Free Design Consultation
        </Button>
      </div>
    </section>
  )
}
