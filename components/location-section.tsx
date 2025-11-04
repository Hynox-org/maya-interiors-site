"use client";

import { ArrowRight } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaDirections,
  FaGoogle,
} from "react-icons/fa";
import { Button } from "./ui/button";

interface HeaderProps {
  onContactClick?: () => void;
}

export default function LocationSection({ onContactClick }: HeaderProps) {
  return (
    <section className="relative bg-white py-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 gap-12 items-start max-w-7xl mx-auto">
          {/* Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://maps.app.goo.gl/EHGRHkJcZmmqTt4P7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-[#8BA186] text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <FaDirections className="h-6 w-6" />
                Get Directions
              </a>
            <Button
              onClick={onContactClick}
              className="bg-[#8BA186] hover:bg-[#7a9177] text-white px-8 sm:px-10 py-3 sm:py-7 rounded-full sm:text-lg font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(139,161,134,0.3)] hover:shadow-[0_15px_40px_rgba(139,161,134,0.4)] hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3"
            >
              <FaClock className="h-6 w-6" />
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
