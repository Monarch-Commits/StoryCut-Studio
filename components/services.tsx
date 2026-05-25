'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const services = [
  {
    title: 'Cinematic Video Editing',
    description:
      'High-quality edits with storytelling, pacing, and cinematic color grading.',
  },
  {
    title: 'Brand Story Videos',
    description:
      'I help brands tell compelling stories that connect emotionally with audiences.',
  },
  {
    title: 'Social Media Content',
    description:
      'Short-form content optimized for engagement and modern platforms.',
  },
  {
    title: 'Creative Direction',
    description:
      'From concept to execution, I guide the visual direction of your project.',
  },
];

export default function Services() {
  return (
    <section className="relative border-y bg-black py-24 text-white sm:py-32">
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 max-w-2xl sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase sm:text-sm">
            Work With Me
          </p>

          <h2 className="mt-4 text-3xl leading-tight font-light sm:text-5xl">
            Services that bring
            <span className="text-primary block font-medium">
              your vision to life
            </span>
          </h2>

          <p className="mt-6 text-sm text-white/60 sm:text-base">
            I collaborate with creators, brands, and businesses to produce
            cinematic and impactful content.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative grid gap-6 border border-white/10 p-4 md:grid-cols-2">
          <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
          <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
          <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
          <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-colors duration-100 hover:bg-white/10 md:text-start"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-12 flex justify-center">
          <button className="relative border border-white/20 bg-white/5 px-8 py-3 text-sm text-white backdrop-blur-md transition-all duration-100 hover:bg-white/10">
            <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
            <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
            <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
            <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
            View Work
          </button>
        </div>
      </div>
    </section>
  );
}
