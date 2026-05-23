'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HeroPortrait() {
  const { scrollY } = useScroll();

  // PARALLAX SPEED
  const y = useTransform(scrollY, [0, 1000], [0, 180]);

  return (
    <motion.div
      style={{ y }}
      className="relative flex w-full items-end justify-center will-change-transform lg:absolute lg:bottom-0 lg:z-50"
    >
      <Image
        src="/Human.png"
        alt="Alex Rivera"
        width={1400}
        height={1400}
        priority
        className="z-20 h-auto w-full max-w-2xl object-contain"
      />

      <div className="pointer-events-none absolute inset-0 z-30 bg-linear-to-t from-black from-0% to-transparent to-20%" />
    </motion.div>
  );
}
