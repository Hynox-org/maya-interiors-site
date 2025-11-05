"use client"

import { useRef } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import WarrantySection from "@/components/warrenty-section"
import GoogleReviews from "@/components/google-reviews"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

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
      
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat 
        phoneNumber="919840808883" 
        message="Hi! I'd like to know more about your services."
      />
    </main>
  )
}
