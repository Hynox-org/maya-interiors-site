"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const portfolio = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    image: "/minimalist-living-room.png",
    alt: "Modern minimalist living room interior design with clean lines and neutral colors"
  },
  {
    id: 2,
    title: "Luxury Kitchen Design",
    image: "/luxury-kitchen-interior-design-modern.jpg",
    alt: "Luxury modern kitchen interior design with high-end appliances and sleek finishes"
  },
  {
    id: 3,
    title: "Contemporary Bedroom",
    image: "/contemporary-bedroom-interior-design-aesthetic.jpg",
    alt: "Contemporary bedroom interior design with aesthetic decor and comfortable furnishings"
  },
  {
    id: 4,
    title: "Open Plan Living Space",
    image: "/open-plan-living-space-modern-interior.jpg",
    alt: "Spacious open plan living space with modern interior design and natural light"
  },
  {
    id: 5,
    title: "Elegant Home Office",
    image: "/elegant-home-office-design-workspace.jpg",
    alt: "Elegant home office design with a functional workspace and sophisticated decor"
  },
  {
    id: 6,
    title: "Luxury Bathroom Suite",
    image: "/luxury-bathroom-interior-design-spa.jpg",
    alt: "Luxurious bathroom suite interior design with spa-like amenities and modern fixtures"
  },
]

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section className="w-full py-20 px-4 bg-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Exquisite Interior Design Portfolio</h2>
          <p className="text-lg text-muted-foreground">Browse Livinza's latest projects, showcasing luxury residential and commercial transformations.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group relative overflow-hidden rounded-lg h-64 cursor-pointer"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.alt || project.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <p className="text-white font-semibold p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedId && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedId(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <Image
              src={portfolio.find((p) => p.id === selectedId)?.image || "/placeholder.svg"}
              alt={portfolio.find((p) => p.id === selectedId)?.alt || "Selected project"}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 font-semibold">
              {portfolio.find((p) => p.id === selectedId)?.title}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
