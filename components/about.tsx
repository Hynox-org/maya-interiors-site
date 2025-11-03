import Image from "next/image"

export default function About() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Philosophy: Crafting Bespoke Interior Experiences</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Livinza, based in Chennai, India, excels in creating luxurious and functional spaces. With over 15 years of industry experience, we specialize in bespoke modular kitchens, elegant wardrobes, sophisticated living room designs, Pooja units, and comprehensive home interior solutions. Our extensive experience and unwavering passion for design ensure every project seamlessly blends style with practicality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experienced interior designers and engineers collaborates intimately with each client, transforming their unique vision into a tangible reality. We pride ourselves on crafting spaces that not only reflect individual personalities and lifestyles but also stand as true masterpieces of design, striving to exceed customer expectations.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/luxury-interior-design-showroom-modern-minimalist-.jpg"
              alt="Luxury Interior Design Showroom - Modern Minimalist"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
