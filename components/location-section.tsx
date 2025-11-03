"use client"

import { FaMapMarkerAlt, FaClock, FaDirections } from "react-icons/fa"

interface HeaderProps {
  onContactClick?: () => void
}

export default function LocationSection({onContactClick} : HeaderProps) {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaMapMarkerAlt className="h-4 w-4" />
            Visit Our Showroom
          </div>
          {/* <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Experience Our Designs
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore our curated collection of premium furniture and interior solutions
          </p> */}
        </div>

        <div className="grid grid-cols-1 gap-12 items-start max-w-7xl mx-auto">
          {/* Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://maps.app.goo.gl/EHGRHkJcZmmqTt4P7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#8BA186] hover:bg-gray-700 text-white p-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex flex-col items-center justify-center"
            >
              <FaDirections className="h-8 w-8 mb-3" />
              <span className="font-bold block">Get Directions</span>
            </a>
            <button 
              onClick={onContactClick}
              className="bg-[#8BA186] hover:bg-gray-700 text-white p-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex flex-col items-center justify-center"
            >
              <FaClock className="h-8 w-8 mb-3" />
              <span className="font-bold block">Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
