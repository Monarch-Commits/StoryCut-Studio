'use client';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Image from 'next/image';

const featuredVideos = [
  {
    id: 1,
    title: 'Street Photography Masterclass',
    thumbnail:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop',
    duration: '14:10',
  },
  {
    id: 2,
    title: 'Unlock Your Potential',
    thumbnail:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    duration: '18:25',
  },
  {
    id: 3,
    title: 'Camera Gear Setup',
    thumbnail:
      'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=1600&auto=format&fit=crop',
    duration: '22:50',
  },
  {
    id: 4,
    title: 'Creative Storytelling',
    thumbnail:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
    duration: '12:40',
  },
];

export default function FeaturedVideos() {
  return (
    <section className="relative w-full border-t bg-black py-24 text-white md:py-32 lg:py-40">
      <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
      <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
      <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:gap-30 lg:px-12">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-5xl">
            Featured <span className="text-primary">Videos</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400">Creator Content</p>
        </div>

        {/* 2 x 2 Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden border border-white/10 bg-zinc-900 transition-transform duration-200 ease-out hover:scale-[1.01]"
            >
              {/* Image */}
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute right-3 bottom-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold md:text-xl">
                  {video.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Watch cinematic content
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button className="relative border border-white/20 bg-white/5 px-8 py-3 text-sm text-white backdrop-blur-md transition-all duration-100 hover:bg-white/10">
            <Plus className="absolute -top-2 -left-2 h-4 w-4 text-white" />
            <Plus className="absolute -top-2 -right-2 h-4 w-4 text-white" />
            <Plus className="absolute -bottom-2 -left-2 h-4 w-4 text-white" />
            <Plus className="absolute -right-2 -bottom-2 h-4 w-4 text-white" />
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
}
