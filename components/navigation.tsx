'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Play,
  ArrowRight,
  Youtube,
  Instagram,
  Twitter,
  Plus,
} from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Videos', href: '#videos' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down → hide nav
        setHidden(true);
      } else {
        // scrolling up → show nav
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-100 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'} `}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-2">
        <div className="bg-background/60 border-border/50 flex h-16 items-center justify-between border-b px-4 backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-sm">
              <Play className="text-primary-foreground h-3 w-3 fill-current" />
            </div>
            <span className="text-sm font-bold tracking-wide sm:text-base">
              ALEX RIVERA
            </span>
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* CTA */}
            <div className="hidden justify-center md:flex">
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center border border-white/20 bg-white/5 px-8 py-3 text-sm text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
              >
                {/* corner plus icons */}
                <Plus className="pointer-events-none absolute -top-2 -left-2 h-4 w-4 text-white" />
                <Plus className="pointer-events-none absolute -top-2 -right-2 h-4 w-4 text-white" />
                <Plus className="pointer-events-none absolute -bottom-2 -left-2 h-4 w-4 text-white" />
                <Plus className="pointer-events-none absolute -right-2 -bottom-2 h-4 w-4 text-white" />
                Let’s Work Together
              </a>
            </div>

            {/* Mobile */}
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-card/95 border-border absolute top-16 right-4 left-4 mt-2 rounded-xl border p-4 backdrop-blur-lg lg:hidden">
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
