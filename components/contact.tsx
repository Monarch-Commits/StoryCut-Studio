'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative bg-black py-28 text-white sm:py-36"
    >
      <Plus className="absolute -bottom-2 -left-2 z-10 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 z-10 h-4 w-4 text-white" />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.35em] uppercase sm:text-sm"
        >
          Let’s Connect
        </motion.p>

        {/* Main message */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl leading-tight font-light sm:text-6xl"
        >
          Let’s create something
          <span className="text-primary block font-medium">
            meaningful together
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-sm leading-relaxed text-white/60 sm:text-base"
        >
          I collaborate with creators, brands, and businesses to craft cinematic
          stories that leave an impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
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
        </motion.div>

        {/* Optional email hint */}
        <p className="mt-8 text-xs text-white/40">
          Or email me directly at your@email.com
        </p>
      </div>
    </section>
  );
}
