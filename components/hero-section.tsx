import { HeroHeadline } from './hero/hero-headline';
import { HeroPortrait } from './hero/hero-portrait';
import { HeroCta } from './hero/hero-cta';
import { StatsGrid } from './hero/stats-row';
import { LatestVideoCard } from './hero/latest-video-card';

export function HeroSection() {
  return (
    <section className="bg-background relative flex h-full w-full flex-col items-center justify-start gap-16 border pt-30 md:justify-start md:gap-20">
      <HeroHeadline />

      <div className="z-100 flex w-full flex-col items-center justify-start gap-8 border px-8 lg:items-start">
        <HeroCta />
        <div className="relative flex w-full flex-col items-center justify-center gap-4 border pb-20 md:justify-between lg:flex-row">
          <StatsGrid />
          <HeroPortrait />
          <LatestVideoCard />
        </div>
      </div>
    </section>
  );
}
