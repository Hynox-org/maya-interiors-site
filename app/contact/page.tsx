"use client"

import Contact from "@/components/contact"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter();
  return (
    <main className="w-full overflow-hidden pt-20 min-h-screen flex flex-col">
      <Header onServiceClick={() => router.push("/#services")}/>
      <div className="flex-grow">
        <Contact />
      </div>
      <Footer />
      <WhatsAppFloat
        phoneNumber="919840808883"
        message="Hi! I'd like to know more about your services."
      />
    </main>
  )
}
