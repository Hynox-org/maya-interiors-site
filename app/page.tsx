"use client"

import { useRef } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

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
      <Header onContactClick={scrollToContact} onServiceClick={scrollToServices} onPortfolioClick={scrollToPortfolio} />
      <Hero onConsultClick={scrollToContact} />
      <About />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Testimonials />
      <Contact ref={contactRef} />
      <Footer />
    </main>
  )
}
