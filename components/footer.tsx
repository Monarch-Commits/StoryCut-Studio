'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { label: 'Home', href: '#' },
  { label: 'Videos', href: '#videos' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'YouTube', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Email', href: 'mailto:your@email.com' },
];

export default function Footer() {
  return (
    <footer className="relative border-t bg-black text-white">
      {/* subtle top border */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 sm:py-20"
        >
          {/* TOP GRID */}
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="StoryCut Logo"
                  width={50}
                  height={50}
                  className=""
                  priority
                />
                <span className="text-foreground text-lg">Monarch</span>
              </Link>

              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Cinematic creator focused on storytelling, visual emotion, and
                impactful digital content.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-primary text-xs tracking-[0.3em] uppercase">
                Navigation
              </p>

              <ul className="mt-5 space-y-3">
                {links.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <p className="text-primary text-xs tracking-[0.3em] uppercase">
                Connect
              </p>

              <ul className="mt-5 space-y-3">
                {socials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-12 border-t border-white/10" />

          {/* BOTTOM ROW */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>

            <p className="text-xs text-white/40">Built with cinematic intent</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
