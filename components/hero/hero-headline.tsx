'use client';

import { motion } from 'framer-motion';

export function HeroHeadline() {
  return (
    <div className="relative z-20 text-center">
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        viewport={{ once: true }}
        className="text-muted-foreground mb-3 text-xs tracking-[0.2em] sm:text-sm lg:mb-4"
      >
        WELCOME TO MY WORLD{' '}
        <span className="inline-block animate-bounce">👋</span>
      </motion.p>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        viewport={{ once: true }}
        className="text-foreground font-(family-name:--font-oswald) text-3xl leading-[1.05] font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
      >
        I CREATE VIDEOS THAT
        <br />
        <span className="text-primary relative inline-block">
          INSPIRE
          {/* SVG Underline na may simple at modernong draw-in effect */}
          <svg
            className="absolute -bottom-1 left-0 h-2 w-full sm:-bottom-2 sm:h-3"
            viewBox="0 0 200 12"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeInOut' }}
              viewport={{ once: true }}
              d="M2 8C50 2 100 2 198 8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-primary"
            />
          </svg>
        </span>
        <span className="text-foreground"> AND IMPACT.</span>
      </motion.h1>
    </div>
  );
}
