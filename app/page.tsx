"use client"

import { useRef } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import WarrantySection from "@/components/warrenty-section"
import GoogleReviews from "@/components/google-reviews"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="w-full overflow-hidden">
      <Header onContactClick={scrollToContact} onServiceClick={scrollToServices} />
      <Hero onConsultClick={scrollToContact} />
      {/* <About /> */}
      <div ref={servicesRef}>
        <Services />
      </div>
      {/* <div ref={portfolioRef}>
        <Portfolio />
      </div> */}
      
      {/* 10 Years Warranty Section */}
      <WarrantySection />
      
      {/* Google Reviews Section with Sample Data */}
      <GoogleReviews onContactClick={scrollToContact}/>
      
      <Contact ref={contactRef} />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat 
        phoneNumber="919840808883" 
        message="Hi! I'd like to know more about your services."
      />
    </main>
  )
}