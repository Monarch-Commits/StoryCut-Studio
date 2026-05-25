'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Kim',
    role: 'Brand Manager',
    message:
      'His storytelling completely elevated our brand presence. Every video feels cinematic and intentional.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Daniel Cruz',
    role: 'Startup Founder',
    message:
      'One of the most consistent creators I’ve worked with. The quality and attention to detail is outstanding.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Emma Lopez',
    role: 'Creative Director',
    message:
      'He doesn’t just create content—he builds emotion through visuals. Truly next-level work.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-black py-24 text-white sm:py-32">
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 max-w-2xl sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase sm:text-sm">
            Testimonials
          </p>

          <h2 className="mt-4 text-3xl leading-tight font-light sm:text-5xl">
            What people
            <span className="text-primary block font-medium">
              say about my work
            </span>
          </h2>

          <p className="mt-6 text-sm text-white/60 sm:text-base">
            Feedback from brands and collaborators I’ve worked with.
          </p>
        </div>

        {/* Cards */}
        <div className="relative grid gap-6 border p-4 md:grid-cols-2 lg:grid-cols-3">
          <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
          <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
          <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
          <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              {/* Quote */}
              <p className="leading-relaxed text-white/80">“{item.message}”</p>

              {/* Footer */}
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                {/* Avatar */}
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-white/60">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
