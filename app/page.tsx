import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import Test from '@/components/test';

export default function Home() {
  return (
    <main className="bg-background mx-auto min-h-full w-full max-w-[1300px] border">
      <Navigation />
      <HeroSection />
      <Test />
    </main>
  );
}
