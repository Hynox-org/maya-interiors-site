"use client"

import { FaShieldAlt, FaShippingFast, FaCheckCircle } from "react-icons/fa"

export default function WarrantySection() {
  return (
    <section className="bg-white py-4">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl">
        
        {/* Two Hero Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          
          {/* 10 Years Warranty */}
          <div className="group relative">
            <div className="absolute inset-0 bg-[#8BA186]/5 rounded-2xl sm:rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 group-hover:border-[#8BA186] transition-all duration-300">
              <FaShieldAlt className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#8BA186] mb-4 sm:mb-5 md:mb-6" />
              <div className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-1 sm:mb-2">10</div>
              <div className="text-xl sm:text-2xl font-bold text-[#8BA186] mb-4 sm:mb-5 md:mb-6">Years Warranty</div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Complete protection on all furniture and installations with zero-cost repairs and replacements.
              </p>
            </div>
          </div>

          {/* 30 Days Delivery */}
          <div className="group relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-2xl sm:rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 group-hover:border-blue-500 transition-all duration-300">
              <FaShippingFast className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-500 mb-4 sm:mb-5 md:mb-6" />
              <div className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-1 sm:mb-2">30</div>
              <div className="text-xl sm:text-2xl font-bold text-blue-500 mb-4 sm:mb-5 md:mb-6">Days Delivery</div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Fast turnaround from order to installation. Your dream interior delivered within a month.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
