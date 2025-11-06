"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Contact from "@/components/contact"

const Services = dynamic(() => import("@/components/services"), { loading: () => <p>Loading services...</p> })
const Portfolio = dynamic(() => import("@/components/portfolio"), { loading: () => <p>Loading portfolio...</p> })
const WarrantySection = dynamic(() => import("@/components/warrenty-section"), { loading: () => <p>Loading warranty...</p> })
const GoogleReviews = dynamic(() => import("@/components/google-reviews"), { loading: () => <p>Loading reviews...</p> })
const Footer = dynamic(() => import("@/components/footer"), { loading: () => <p>Loading footer...</p> })
const WhatsAppFloat = dynamic(() => import("@/components/whatsapp-float"), { ssr: false, loading: () => <p>Loading chat...</p> })

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="w-full overflow-hidden">
      <Header onServiceClick={scrollToServices} />
      <Hero />
      <h1 className="sr-only">Livinza - Interior Design and Renovation Services</h1>
      {/* <About /> */}
      <div ref={servicesRef} id="services">
        <Services />
      </div>
      {/* <div ref={portfolioRef}>
        <Portfolio />
      </div> */}
      
      {/* 10 Years Warranty Section */}
      <WarrantySection />
      
      {/* Google Reviews Section with Sample Data */}
      <GoogleReviews />

      <Contact />
      
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat 
        phoneNumber="919840808883" 
        message="Hi! I'd like to know more about your services."
      />
    </main>
  )
}
