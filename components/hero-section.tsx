import { HeroHeadline } from './hero/hero-headline';
import { HeroPortrait } from './hero/hero-portrait';
import { HeroCta } from './hero/hero-cta';
import { StatsGrid } from './hero/stats-row';
import { LatestVideoCard } from './hero/latest-video-card';
import { FloatingVideoCards } from './hero/floating-video-cards';

export function HeroSection() {
  return (
    <section className="bg-background relative flex min-h-dvh w-full flex-col items-center justify-start gap-16 overflow-hidden py-16 md:justify-start md:py-28 lg:gap-30 lg:py-32 xl:gap-40">
      <HeroHeadline />

      <FloatingVideoCards />
      <div className="z-50 flex w-full flex-col items-center justify-start gap-8 lg:items-start">
        <HeroCta />
        <div className="relative flex w-full flex-col items-center justify-center gap-4 pb-20 md:justify-between lg:flex-row">
          <StatsGrid />
          <HeroPortrait />
          <LatestVideoCard />
        </div>
      </div>
    </section>
  );
}
