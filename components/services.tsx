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
      },40) // Increased interval for slower scroll and potentially smoother animation on iOS
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
      }, 2000) // Resume auto-scroll 2 seconds after touch ends
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
        className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-6 lg:gap-8 py-3 sm:py-4 scrollbar-hide max-w-7xl mx-auto px-3 sm:px-4 md:px-6"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch', // Critical for iOS smooth scrolling
          touchAction: 'pan-x', // Allow horizontal touch scrolling
        }}
      >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px] flex-shrink-0 group hover:shadow-xl transition-all duration-300 border-border hover:border-accent"
              >
                <CardContent className="p-3 sm:p-5 md:p-6 lg:p-8 text-center h-full flex flex-col">
                  <div className="inline-block p-2 sm:p-3 md:p-4 rounded-lg bg-accent/10 mb-2 sm:mb-3 md:mb-4 group-hover:bg-accent/20 transition-colors mx-auto">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-accent" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-foreground mb-1.5 sm:mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-[11px] sm:text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
    </section>
  )
}
