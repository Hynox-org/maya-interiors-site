import { Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import { FaYoutube } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-foreground text-primary py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center align-center text-center gap-5 text-sm opacity-75">
          <p>Copyright © {currentYear} Livinza. All rights reserved.</p>
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
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          <p>Designed & Developed with ❤️ <span><Link href={"https://www.hynox.in"}>HYNOX</Link></span></p>
        </div>
      </div>
    </footer>
  )
}
