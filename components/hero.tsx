"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Award, Clock } from "lucide-react"

interface HeroProps {
  onConsultClick: () => void
}

export default function Hero({ onConsultClick }: HeroProps) {
  return (
    <section className="relative max-w-7xl mx-auto h-[calc(100vh-100px)] my-8 rounded-2xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="/modern-luxury-interior-living-room-with-elegant-fu.jpg"
        alt="Luxury Interior Design for Exquisite Homes & Offices"
        fill
        className="object-cover hidden md:block"
        priority
      />

      {/* Desktop Layout - Centered */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 hidden md:block"/>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={onConsultClick}
            className="bg-[#8BA186] hover:bg-[#7a9177] text-white px-10 py-7 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-[#8BA186]/30 hover:scale-105"
          >
            Get a Free Design Consultation
          </Button>
        </div>
      </div>

      {/* Mobile Layout - Bottom Card */}
      <div className="md:hidden absolute inset-0 flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b hidden lg:block from-black/20 via-black/30 to-black/70" />
        <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-t-3xl p-6 mx-4 mb-4 shadow-2xl">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-[#8BA186]" />
            <span className="text-sm font-semibold text-gray-700">Premium Interior Design</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Transform Your Space
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Get expert consultation for luxury homes & offices
          </p>
          <Button
            onClick={onConsultClick}
            className="w-full bg-[#8BA186] hover:bg-[#7a9177] text-white py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>15+ Years</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>500+ Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}