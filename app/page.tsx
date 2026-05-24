import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import FeaturedVideos from '@/components/FeaturedVideos';
import EfferdBoxes from '@/components/Box';

export default function Home() {
  return (
    <main className="bg-background mx-auto w-full max-w-7xl border">
      <Navigation />
      <HeroSection />
      <FeaturedVideos />
      <EfferdBoxes />
    </main>
  );
}
