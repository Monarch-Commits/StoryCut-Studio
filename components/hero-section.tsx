import { HeroHeadline } from './hero/hero-headline';
import { HeroPortrait } from './hero/hero-portrait';
import { HeroCta } from './hero/hero-cta';
import { StatsGrid } from './hero/stats-row';
import { LatestVideoCard } from './hero/latest-video-card';

export function HeroSection() {
  return (
    <section className="bg-background items-between relative mx-auto flex h-auto w-full flex-col justify-center gap-16 px-4 py-24 sm:px-8 md:py-32 lg:gap-30 lg:px-12 lg:py-40">
      <HeroHeadline />
      <HeroPortrait />

      <div className="z-50 mx-auto flex w-full flex-col items-center justify-start gap-8 xl:items-start">
        <HeroCta />
        <div className="relative flex w-full flex-col items-center justify-center gap-4 pb-0 md:pb-20 xl:flex-row xl:justify-between">
          <StatsGrid />
          <LatestVideoCard />
        </div>
      </div>
    </section>
  );
}
