'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FloatingVideoCards } from './floating-video-cards';

export function HeroPortrait() {
  const easeOutCubic = [0.215, 0.61, 0.355, 1] as const;

  return (
    <div className="relative flex w-full items-center justify-center xl:absolute xl:bottom-0 xl:left-1/2 xl:z-50 xl:-translate-x-1/2">
      {/* Glow na may Ambient Breathing/Pulse Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: [0.5, 0.8, 0.5], // Continuous pulse mula sa opacity 0.5 hanggang 0.8 pababa
            scale: [0.95, 1.05, 0.95], // Bahagyang lumalaki at liliit nang napakabagal
          }}
          transition={{
            duration: 5, // 5 segundo ang tagal ng isang buong paghinga
            repeat: Infinity, // Paulit-ulit habangbuhay
            ease: 'easeInOut',
          }}
          viewport={{ once: true }}
          className="h-[80px] w-[80px] rounded-full bg-red-500/25 blur-2xl sm:h-[160px] sm:w-[160px] md:h-[220px] md:w-55 lg:h-[300px] lg:w-[300px]"
        />
      </div>

      {/* Floating Cards Component */}
      <FloatingVideoCards />

      {/* Image na may Cinematic Scale and Fade-in Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: easeOutCubic }}
        viewport={{ once: true }}
        className="relative z-20 w-full max-w-4xl"
      >
        <Image
          src="/Human.png"
          alt="Alex Rivera"
          width={1400}
          height={1400}
          priority
          className="w-full object-contain"
        />
      </motion.div>

      {/* Fade Overlays */}
      <div className="pointer-events-none absolute inset-0 z-30 w-full bg-linear-to-t from-black via-black/20 to-transparent" />
    </div>
  );
}
