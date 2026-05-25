'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';

export function LatestVideoCard() {
  const easeOutCubic = [0.215, 0.61, 0.355, 1] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: easeOutCubic }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-card/70 border-border hover:border-primary/50 group z-100 w-full max-w-sm cursor-pointer overflow-hidden border backdrop-blur-sm transition-all duration-300"
    >
      <div className="flex gap-4 p-3">
        {/* Thumbnail Container */}
        <div className="bg-secondary relative w-36 flex-shrink-0 overflow-hidden rounded-xs">
          <div className="relative aspect-video">
            {/* Lalaki nang bahagya ang image at liliwanag kapag hinover ang card */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_qbaarcqbaarcqbaa-DGLa7wPR3YytVD7kThmZBopc7ti9LD.png"
              alt="How I Stay Productive While Traveling"
              fill
              className="object-cover opacity-80 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-10" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Ginamitan natin ng Tailwind transition na sumasagot sa group-hover */}
              <div className="bg-primary group-hover:bg-primary/90 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-transform duration-300 ease-out group-hover:scale-110">
                <Play className="text-primary-foreground h-5 w-5 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="text-primary mb-1 text-[10px] font-semibold tracking-wider">
            LATEST VIDEO
          </p>
          <h3 className="text-foreground group-hover:text-primary text-sm leading-tight font-semibold transition-colors duration-300">
            How I Stay Productive
            <br />
            While Traveling
          </h3>
          <p className="text-muted-foreground mt-2 text-xs">
            12:45 • March 12, 2024
          </p>
        </div>
      </div>
    </motion.div>
  );
}
