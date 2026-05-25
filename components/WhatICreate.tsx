'use client';

import { Plus } from 'lucide-react';
import Image from 'next/image';

const categories = [
  {
    title: 'Filmmaking',
    description: 'Cinematic stories and visual narratives.',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Productivity',
    description: 'Systems, routines, and focused living.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Travel',
    description: 'Capturing moments around the world.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Photography',
    description: 'Emotion, light, and composition.',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Lifestyle',
    description: 'Creative living and intentional growth.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function WhatICreate() {
  return (
    <section className="relative bg-black py-20 text-white sm:py-28">
      <Plus className="absolute -bottom-2 -left-2 z-50 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 z-50 h-4 w-4 text-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase sm:text-sm">
            What I Create
          </p>

          <h2 className="text-3xl leading-tight font-light sm:text-5xl">
            Content that blends
            <span className="text-primary block font-medium">
              creativity and purpose
            </span>
          </h2>
        </div>

        {/* Carousel Wrapper (IMPORTANT FIX) */}
        <div className="relative border">
          {/* Corner Plus Icons (now properly anchored) */}
          <Plus className="pointer-events-none absolute -top-3 -left-3 h-6 w-6 text-white" />
          <Plus className="pointer-events-none absolute -top-3 -right-3 h-6 w-6 text-white" />
          <Plus className="pointer-events-none absolute -bottom-3 -left-3 h-6 w-6 text-white" />
          <Plus className="pointer-events-none absolute -right-3 -bottom-3 h-6 w-6 text-white" />

          {/* Carousel */}
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto py-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 md:py-10 [&::-webkit-scrollbar]:hidden">
            {categories.map((item) => (
              <div
                key={item.title}
                className="relative h-105 min-w-[80%] snap-start overflow-hidden border border-white/10 bg-[#111] sm:h-120 sm:min-w-[55%] md:min-w-[45%] lg:h-[520px] lg:min-w-[380px]"
              >
                {/* Image */}
                <div className="relative h-full w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-5 sm:p-8">
                  <p className="mb-2 text-xs text-white/60 sm:mb-3 sm:text-sm">
                    {item.description}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
