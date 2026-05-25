'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function HeroCta() {
  const easeOutCubic = [0.215, 0.61, 0.355, 1] as const;

  return (
    <div className="w-full max-w-sm lg:max-w-md lg:text-start">
      {/* Description Text */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: easeOutCubic }}
        viewport={{ once: true }}
        className="text-muted-foreground mb-6 text-center text-sm leading-relaxed xl:text-start"
      >
        I share my journey in filmmaking, productivity, and building a life of
        purpose. New videos every week.
      </motion.p>

      {/* Buttons Container */}
      <div className="z-10 flex w-full max-w-md flex-col justify-center gap-3 lg:flex-row xl:justify-start">
        {/* Watch Latest Video Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: easeOutCubic }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="bg-primary text-primary-foreground hover:bg-primary/90 group inline-flex cursor-pointer items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold transition-all duration-300"
        >
          {/* May kaunting bounce/scale animation ang play icon kapag nire-hover ang button */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Play className="h-4 w-4 fill-current" />
          </motion.div>
          WATCH LATEST VIDEO
        </motion.button>

        {/* Explore Channel Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: easeOutCubic }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
          }}
          whileTap={{ scale: 0.98 }}
          className="border-border text-foreground inline-flex cursor-pointer items-center justify-center bg-white/10 px-5 py-2.5 text-sm font-semibold transition-colors duration-300"
        >
          EXPLORE CHANNEL
        </motion.button>
      </div>
    </div>
  );
}
