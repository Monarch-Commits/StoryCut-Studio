'use client';

import { Plus } from 'lucide-react';
import Image from 'next/image';

const gallery = [
  {
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
  },
  {
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop',
  },
  {
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop',
  },
  {
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop',
  },
  {
    image:
      'https://images.unsplash.com/photo-1668623387424-12a9a983b1fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdhbGxlcnklMjBNb21lbnRzJTIwY2FwdHVyZWQlMjBpbiUyMGNpbmVtYXRpYyUyMGRldGFpbHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1561926797-fa9e23386fe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R2FsbGVyeSUyME1vbWVudHMlMjBjYXB0dXJlZCUyMGluJTIwY2luZW1hdGljJTIwZGV0YWlsfGVufDB8fDB8fHww',
  },
];

export default function GalleryShowcase() {
  return (
    <section className="relative border-y bg-black py-24 text-white sm:py-32">
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 max-w-2xl sm:mb-16">
          <p className="] text-xs tracking-[0.3em] uppercase sm:text-sm">
            Gallery
          </p>

          <h2 className="mt-4 text-3xl leading-tight font-light sm:text-5xl">
            Moments captured in
            <span className="text-primary block font-medium">
              cinematic detail
            </span>
          </h2>

          <p className="mt-6 text-sm text-white/60 sm:text-base">
            A collection of visuals that reflect storytelling, emotion, and
            creative direction.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
          {gallery.map((item, i) => (
            <div
              key={i}
              className="relative break-inside-avoid overflow-hidden border border-white/10 bg-[#111] transition-transform duration-100 ease-out hover:scale-[1.02]"
            >
              <div className="relative w-full">
                <Image
                  src={item.image}
                  alt={`gallery-${i}`}
                  width={1000}
                  height={1000}
                  className="h-auto w-full object-cover"
                />

                {/* Soft cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
