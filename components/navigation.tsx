'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Play,
  ArrowRight,
  Youtube,
  Instagram,
  Twitter,
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Videos', href: '#videos' },
  { name: 'About', href: '#about' },
  { name: 'Store', href: '#store' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-background/60 border-border/50 flex h-16 items-center justify-between rounded-b-xl border-b px-4 backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-sm">
              <Play className="text-primary-foreground h-3 w-3 fill-current" />
            </div>
            <span className="text-foreground text-sm font-bold tracking-wide sm:text-base">
              ALEX RIVERA
            </span>
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-primary text-sm font-medium transition-colors ${
                  link.name === 'Home'
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Social + CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social Icons - Hidden on mobile */}
            <div className="hidden items-center gap-3 sm:flex">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="border-border text-foreground hover:bg-secondary group hidden items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors sm:flex"
            >
              WORK WITH ME
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-card/95 border-border absolute top-16 right-4 left-4 mt-2 rounded-xl border p-4 backdrop-blur-lg md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-primary text-sm font-medium transition-colors ${
                    link.name === 'Home'
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-border flex items-center gap-4 border-t pt-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="border-border text-foreground hover:bg-secondary flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors"
              >
                WORK WITH ME
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
