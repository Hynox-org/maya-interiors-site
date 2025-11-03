import { Card, CardContent } from "@/components/ui/card"
import { UtensilsCrossed, HardDrive as Wardrobe, Sofa, Tv2, Building2, Home } from "lucide-react"

const services = [
  {
    icon: UtensilsCrossed,
    title: "Modular Kitchen",
    description: "Custom-designed kitchens with premium materials",
  },
  {
    icon: Wardrobe,
    title: "Wardrobe Design",
    description: "Functional and stylish storage solutions",
  },
  {
    icon: Sofa,
    title: "Living Room Setup",
    description: "Create your perfect gathering space",
  },
  {
    icon: Tv2,
    title: "TV Units & False Ceiling",
    description: "Modern entertainment and ceiling solutions",
  },
  {
    icon: Building2,
    title: "Commercial Interiors",
    description: "Office and retail space design",
  },
  {
    icon: Home,
    title: "Turnkey Projects",
    description: "Complete home transformation solutions",
  },
]

export default function Services() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl   font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">Comprehensive design solutions for every space</p>
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
