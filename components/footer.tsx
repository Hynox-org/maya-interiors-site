import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-foreground text-primary py-4 px-4 border-t-2 border-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-white/20 flex flex-col md:flex-row justify-between items-center align-center text-center gap-5 text-sm opacity-75">
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/livinza.interior?igsh=aWtvdWIxYzRjNXhv&utm_source=qr"
              className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1DDVKioxtD/"
              className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@Livinza"
              className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/40 transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
          <p>Copyright © {currentYear} Livinza. All rights reserved.</p>
          <p>
            Developed by{" "}
            <span>
              <Link href={"https://www.hynox.in"}>HYNOX</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
