"use client"

import { FaShieldAlt, FaShippingFast, FaCheckCircle } from "react-icons/fa"

export default function WarrantySection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Two Hero Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* 10 Years Warranty */}
          <div className="group relative">
            <div className="absolute inset-0 bg-[#8BA186]/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white border border-gray-200 rounded-3xl p-10 group-hover:border-[#8BA186] transition-all duration-300">
              <FaShieldAlt className="h-12 w-12 text-[#8BA186] mb-6" />
              <div className="text-7xl font-black text-gray-900 mb-2">10</div>
              <div className="text-2xl font-bold text-[#8BA186] mb-6">Years Warranty</div>
              <p className="text-gray-600 leading-relaxed">
                Complete protection on all furniture and installations with zero-cost repairs and replacements.
              </p>
            </div>
          </div>

          {/* 30 Days Delivery */}
          <div className="group relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white border border-gray-200 rounded-3xl p-10 group-hover:border-blue-500 transition-all duration-300">
              <FaShippingFast className="h-12 w-12 text-blue-500 mb-6" />
              <div className="text-7xl font-black text-gray-900 mb-2">30</div>
              <div className="text-2xl font-bold text-blue-500 mb-6">Days Delivery</div>
              <p className="text-gray-600 leading-relaxed">
                Fast turnaround from order to installation. Your dream interior delivered within a month.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
            <FaCheckCircle className="h-6 w-6 text-[#8BA186] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Premium Materials</h4>
              <p className="text-gray-600 text-sm">Certified quality & international standards</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
            <FaCheckCircle className="h-6 w-6 text-[#8BA186] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Free Maintenance</h4>
              <p className="text-gray-600 text-sm">Complimentary service throughout warranty period</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
            <FaCheckCircle className="h-6 w-6 text-[#8BA186] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 mb-1">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Dedicated assistance whenever you need it</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
