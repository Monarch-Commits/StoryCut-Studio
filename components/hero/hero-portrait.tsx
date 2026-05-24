'use client';

import Image from 'next/image';

export function HeroPortrait() {
  return (
    <div className="relative flex w-full items-center justify-center lg:absolute lg:bottom-0 lg:left-1/2 lg:z-50 lg:-translate-x-1/2">
      {/* Glow */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[80px] w-[80px] rounded-full bg-red-500/25 blur-2xl sm:h-[160px] sm:w-[160px] md:h-[220px] md:w-[220px] lg:h-[300px] lg:w-[300px]" />
      </div>

      {/* Image */}
      <Image
        src="/Human.png"
        alt="Alex Rivera"
        width={1400}
        height={1400}
        priority
        className="relative z-20 w-full max-w-4xl object-contain"
      />
      {/* Fade */}
      <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </div>
  );
}
