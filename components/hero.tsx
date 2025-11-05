"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-25">
      <div className="max-w-7xl w-full">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg relative">
          {/* Banner Image - Takes full viewport */}
          <div className="relative w-full h-[80vh]">
            <Image
              src="/modern-luxury-interior-living-room-with-elegant-fu.jpg"
              alt="Luxury Interior Design"
              fill
              className="object-cover rounded-lg"
              priority
            />
            {/* Gradient overlay for better button visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            
            {/* Button Overlay - Positioned at bottom center */}
            <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 z-10 w-full px-6 sm:px-8 flex justify-center">
              <Button
                className="bg-[#8BA186] hover:bg-[#7a9177] text-white px-8 sm:px-10 py-6 sm:py-7 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(139,161,134,0.3)] hover:shadow-[0_15px_40px_rgba(139,161,134,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 w-full sm:w-auto max-w-md"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
