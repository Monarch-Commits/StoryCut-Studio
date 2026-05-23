import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import FeaturedVideos from '@/components/FeaturedVideos';

export default function Home() {
  return (
    <main className="bg-background mx-auto min-h-screen w-full max-w-7xl border px-4 sm:px-8 lg:px-12">
      <Navigation />
      <HeroSection />
      <FeaturedVideos />
    </main>
  );
}
