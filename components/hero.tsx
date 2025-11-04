"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onConsultClick: () => void;
}

export default function Hero({ onConsultClick }: HeroProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl overflow-hidden">
        {/* Banner Image - Visible on all screens */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]">
          <Image
            src="/modern-luxury-interior-living-room-with-elegant-fu.jpg"
            alt="Luxury Interior Design"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Content Below Image */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <Button
            onClick={onConsultClick}
            className="bg-[#8BA186] hover:bg-[#7a9177] text-white px-8 sm:px-10 py-6 sm:py-7 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(139,161,134,0.3)] hover:shadow-[0_15px_40px_rgba(139,161,134,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 w-full sm:w-auto max-w-md"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
