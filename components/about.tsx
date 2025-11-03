export default function About() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl   font-bold text-foreground">About Our Design Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in modular kitchens, wardrobes, living room designs, and complete home interiors. With years
              of experience and a passion for design, we deliver interiors that combine style and function.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of expert designers works closely with clients to understand their vision and create spaces that
              reflect their unique personality and lifestyle. Every project is a masterpiece.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
            <img
              src="/luxury-interior-design-showroom-modern-minimalist-.jpg"
              alt="Interior Design Showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
