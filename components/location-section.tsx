"use client"

import GoogleMap from "./google-map"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaDirections } from "react-icons/fa"

export default function LocationSection() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62189.2243184027!2d80.133543!3d13.046712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261a4f0fb5d49%3A0x4450d6bd00454358!2sChellammal%20Nagar%20St%2C%20Moovendhar%20Nagar%2C%20Pillaiyar%20Madathingal%2C%20Chennai%2C%20Tamil%20Nadu%20600077%2C%20India!5e0!3m2!1sen!2sus!4v1762162079690!5m2!1sen!2sus"

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
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Experience Our Designs
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore our curated collection of premium furniture and interior solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <GoogleMap 
                embedUrl={mapEmbedUrl}
                height="550px"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Address Card */}
            <div className="bg-black rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                    <FaMapMarkerAlt className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Showroom Address</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Chellammal Nagar St, Moovendhar Nagar<br />
                      Pillaiyar Madathingal<br />
                      Chennai, Tamil Nadu 600077
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                    <FaPhone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Phone</h4>
                    <p className="text-gray-300">+91 98765 43210</p>
                    <p className="text-gray-300">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                    <FaEnvelope className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email</h4>
                    <p className="text-gray-300">info@livinza.in</p>
                    <p className="text-gray-300">sales@livinza.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                    <FaClock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
                    <p className="text-gray-300">Mon - Sat: 10:00 AM - 8:00 PM</p>
                    <p className="text-gray-300">Sunday: 11:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="bg-[#8BA186] hover:bg-gray-700 text-white p-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <FaDirections className="h-8 w-8 mb-3 mx-auto" />
                <span className="font-bold block">Get Directions</span>
              </button>
              <button className="bg-[#8BA186] hover:bg-gray-700 text-white p-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <FaClock className="h-8 w-8 mb-3 mx-auto" />
                <span className="font-bold block">Book Appointment</span>
              </button>
            </div>

            {/* Info Banner */}
            <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
              <p className="text-gray-700 text-center font-medium">
                💡 <strong>Pro Tip:</strong> Schedule a visit to experience our full collection and get personalized design consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
