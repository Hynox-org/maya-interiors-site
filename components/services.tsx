import { Card, CardContent } from "@/components/ui/card"
import { UtensilsCrossed, HardDrive as Wardrobe, Sofa, Tv2, Building2, Home } from "lucide-react"

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
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Expert Interior Design Services by Livinza</h2>
          <p className="text-lg text-muted-foreground">Discover our comprehensive range of luxury interior design solutions for residential and commercial properties.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-block p-4 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
