"use client"

import { Card, CardContent } from "@/components/ui/card"
import { UtensilsCrossed, HardDrive as Wardrobe, Sofa, Tv2, Building2, Home } from "lucide-react"
import React, { useRef, useEffect } from "react"

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
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout
    let isUserInteracting = false

    const startScrolling = () => {
      if (isUserInteracting) return
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }, 40)
    }

    const stopScrolling = () => {
      clearInterval(scrollInterval)
    }

    const handleMouseEnter = () => {
      isUserInteracting = true
      stopScrolling()
    }

    const handleMouseLeave = () => {
      isUserInteracting = false
      startScrolling()
    }

    const handleTouchStart = () => {
      isUserInteracting = true
      stopScrolling()
    }

    const handleTouchEnd = () => {
      isUserInteracting = false
      setTimeout(() => {
        if (!isUserInteracting) {
          startScrolling()
        }
      }, 2000)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)
    scrollContainer.addEventListener("touchstart", handleTouchStart, { passive: true })
    scrollContainer.addEventListener("touchend", handleTouchEnd, { passive: true })

    startScrolling()

    return () => {
      stopScrolling()
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
      scrollContainer.removeEventListener("touchstart", handleTouchStart)
      scrollContainer.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  return (
    <section className="w-full bg-white">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 py-8 scrollbar-hide max-w-7xl mx-auto px-6"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x',
        }}
      >
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="min-w-[300px] bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
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
          )
        })}
      </div>
    </section>
  )
}
