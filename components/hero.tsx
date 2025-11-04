"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onConsultClick: () => void;
}

export default function Hero({ onConsultClick }: HeroProps) {
  return (
    <section className="relative max-w-xl mx-auto h-auto my-8 rounded-2xl overflow-hidden">
      {/* Background Image - Hidden on Mobile */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/modern-luxury-interior-living-room-with-elegant-fu.jpg"
          alt="Luxury Interior Design"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay - Hidden on Mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40 hidden md:block" />

      {/* Content */}
      <div className="relative my-20 z-10 h-full flex items-center justify-center px-10 py-8 md:px-8 lg:px-10">
        <Button
          onClick={onConsultClick}
          className="bg-[#8BA186] hover:bg-[#7a9177] text-white px-20 py-7 rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(139,161,134,0.3)] hover:shadow-[0_15px_40px_rgba(139,161,134,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 w-full sm:w-auto"
        >
          Get Free Consultation
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
