"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  onServiceClick?: () => void
}

export default function Header({ onServiceClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Services", onClick: onServiceClick, href: "/#services" },
    { label: "Contact", onClick: undefined, href: "/contact" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start cursor-pointer">
          <div className="text-3xl font-bold text-[#8BA186]">
            Livinza
          </div>
          <div className="text-lg font-light text-primary -mt-2">
            interior for you
          </div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.href ? (
              <Link key={item.label} href={item.href} className="font-medium transition-colors text-foreground hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={item.onClick}
                className="font-medium transition-colors text-foreground hover:text-accent"
              >
                {item.label}
              </button>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left font-medium text-foreground hover:text-accent transition-colors py-2"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => {
                    item.onClick?.()
                    setIsMobileMenuOpen(false)
                  }}
                  className="text-left font-medium text-foreground hover:text-accent transition-colors py-2"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
