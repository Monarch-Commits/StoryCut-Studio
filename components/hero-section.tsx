import { HeroHeadline } from './hero/hero-headline';
import { HeroPortrait } from './hero/hero-portrait';
import { HeroCta } from './hero/hero-cta';
import { StatsGrid } from './hero/stats-row';
import { LatestVideoCard } from './hero/latest-video-card';
import { FloatingVideoCards } from './hero/floating-video-cards';

export function HeroSection() {
  return (
    <section className="bg-background items-between relative mx-auto flex h-auto w-full max-w-7xl flex-col justify-center gap-16 overflow-hidden px-4 py-24 sm:px-8 md:py-32 lg:gap-30 lg:px-12 lg:py-40">
      <HeroHeadline />
      <HeroPortrait />
      <FloatingVideoCards />
      <div className="z-50 mx-auto flex w-full flex-col items-center justify-start gap-8 lg:items-start">
        <HeroCta />
        <div className="relative flex w-full flex-col items-center justify-center gap-4 pb-0 md:justify-between md:pb-20 lg:flex-row">
          <StatsGrid />
          <LatestVideoCard />
        </div>
      </div>
    </section>
  );
}
