"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    content:
      "The team transformed our dated apartment into a modern masterpiece. Their attention to detail and professionalism was outstanding.",
    rating: 5,
    avatar: "/professional-woman.png",
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content:
      "Our office space now reflects our brand perfectly. The design is both functional and inspiring for our team.",
    rating: 5,
    avatar: "/professional-man.png",
  },
  {
    name: "Neha Desai",
    role: "Homeowner",
    content: "Exceeded all our expectations. The execution was flawless, and they delivered on time and within budget.",
    rating: 5,
    avatar: "/professional-woman-warm.jpg",
  },
  {
    name: "Amit Patel",
    role: "Apartment Owner",
    content:
      "The modular kitchen design is exactly what we needed. Premium quality materials and excellent installation team.",
    rating: 5,
    avatar: "/professional-man-portrait.jpg",
  },
  {
    name: "Kavya Singh",
    role: "Business Owner",
    content:
      "Outstanding wardrobe designs that maximize space. The team understood our requirements perfectly and delivered beyond expectations.",
    rating: 5,
    avatar: "/professional-woman.png",
  },
  {
    name: "Vikram Deshmukh",
    role: "Homeowner",
    content: "Transformed our living room into a showpiece. The TV unit and false ceiling work is absolutely stunning.",
    rating: 5,
    avatar: "/man-portrait.jpg",
  },
  {
    name: "Anjali Gupta",
    role: "Homeowner",
    content:
      "Professional team with creative ideas. They made our small space look larger and more functional. Highly recommended!",
    rating: 5,
    avatar: "/smiling-woman.png",
  },
  {
    name: "Sanjay Reddy",
    role: "Commercial Client",
    content: "Our office renovation was completed on schedule. Great attention to ergonomics and modern aesthetics.",
    rating: 5,
    avatar: "/professional-man-smiling.jpg",
  },
  {
    name: "Ritika Nair",
    role: "Homeowner",
    content:
      "Amazing team! They listened to every detail and made our dream home a reality. The craftsmanship is impeccable.",
    rating: 5,
    avatar: "/woman-portrait-professional.jpg",
  },
]

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const mobileScrollRef = useRef<HTMLDivElement>(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return

    const scrollContainer = scrollContainerRef.current
    let scrollPosition = 0
    const scrollSpeed = 1
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth

    const autoScroll = setInterval(() => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }, 50)

    return () => clearInterval(autoScroll)
  }, [isAutoScrolling])

  useEffect(() => {
    if (!mobileScrollRef.current) return

    const mobileScroll = mobileScrollRef.current
    let scrollPosition = 0
    const scrollSpeed = 0.5
    const maxScroll = mobileScroll.scrollWidth - mobileScroll.clientWidth

    const autoScroll = setInterval(() => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0
      }
      mobileScroll.scrollLeft = scrollPosition
    }, 50)

    return () => clearInterval(autoScroll)
  }, [])

  const handleMouseEnter = () => setIsAutoScrolling(false)
  const handleMouseLeave = () => setIsAutoScrolling(true)

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-accent to-accent/80 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl   font-bold mb-4">Client Reviews</h2>
          <p className="text-lg opacity-90">What our satisfied clients have to say</p>
        </div>

        {/* Desktop View - Auto scrolling horizontal */}
        <div
          ref={scrollContainerRef}
          className="hidden md:flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="flex-shrink-0 w-80 bg-white/10 border-white/20 hover:bg-white/20 transition-colors"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm opacity-90">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-white/90 leading-relaxed line-clamp-4">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={mobileScrollRef} className="md:hidden overflow-x-auto scroll-smooth pb-4">
          <div className="flex gap-3 w-fit">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="flex-shrink-0 w-64 bg-white/10 border-white/20 hover:bg-white/20 transition-colors"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-semibold text-white text-sm truncate">{testimonial.name}</h4>
                      <p className="text-xs opacity-90 truncate">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                      ))}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-3">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
