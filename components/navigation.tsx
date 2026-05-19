"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Play, ArrowRight, Youtube, Instagram, Twitter } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Videos", href: "#videos" },
  { name: "About", href: "#about" },
  { name: "Store", href: "#store" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between backdrop-blur-md bg-background/60 rounded-b-xl px-4 border-b border-border/50">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-6 h-6 bg-primary rounded-sm">
              <Play className="w-3 h-3 text-primary-foreground fill-current" />
            </div>
            <span className="font-bold text-foreground tracking-wide text-sm sm:text-base">
              ALEX RIVERA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  link.name === "Home" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Social + CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social Icons - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-full text-foreground hover:bg-secondary transition-colors group"
            >
              WORK WITH ME
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-4 right-4 bg-card/95 backdrop-blur-lg border border-border rounded-xl p-4 mt-2">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    link.name === "Home" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium border border-border rounded-full text-foreground hover:bg-secondary transition-colors"
              >
                WORK WITH ME
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
