"use client"

import { Card, CardContent } from "@/components/ui/card"
import { UtensilsCrossed, HardDrive as Wardrobe, Sofa, Tv2, Building2, Home } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const services = [
  {
    icon: UtensilsCrossed,
    title: "Modular Kitchens",
    description: "Custom-designed modular kitchens in Chennai with premium materials and 15+ years of expertise.",
  },
  {
    icon: Wardrobe,
    title: "Wardrobes & Closet Solutions",
    description: "Functional and stylish wardrobe and closet solutions tailored for your home.",
  },
  {
    icon: Sofa,
    title: "Living Room Designs",
    description: "Create your perfect gathering space with bespoke living room interior designs.",
  },
  {
    icon: Tv2,
    title: "TV Units & False Ceiling",
    description: "Modern entertainment units and elegant false ceiling solutions for contemporary homes.",
  },
  {
    icon: Home,
    title: "Pooja Units",
    description: "Custom prayer room designs (Pooja units) that blend tradition with modern aesthetics.",
  },
  {
    icon: Building2,
    title: "Commercial Interiors",
    description: "Expert office and retail space interior design services for businesses in Chennai.",
  },
  {
    icon: Home,
    title: "Turnkey Projects",
    description: "Complete home interior transformation solutions, from concept to execution, by Livinza.",
  },
]

export default function Services() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          speed={5000}
          loop={true}
          slidesPerView="auto"
          spaceBetween={24}
          className="services-swiper py-8"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <SwiperSlide key={service.title} style={{ width: '300px' }}>
                 <div className="min-w-[300px] bg-white rounded-xl p-6 shadow-sm my-4 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">          
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="inline-block p-4 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors mx-auto">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}