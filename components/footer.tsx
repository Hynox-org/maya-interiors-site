import { Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-foreground text-primary py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">About Livinza</h4>
            <p className="text-sm opacity-75 leading-relaxed">
              Livinza is an interior design company based in Chennai, India, specializing in modular kitchen and home interior design services with 15+ years of experience.
            </p>
          </div>
          <div>
            <h4 className="  font-bold text-lg mb-4">Services</h4>
            <ul className="text-sm space-y-2 opacity-75">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Modular Kitchen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Wardrobe Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Living Room
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="  font-bold text-lg mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2 opacity-75">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="  font-bold text-lg mb-4">Follow</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>Copyright © {currentYear} Livinza. All rights reserved.</p>
          <p>Designed & Developed with ❤️ <span><Link href={"https://www.hynox.in"}>HYNOX</Link></span></p>
        </div>
      </div>
    </footer>
  )
}
