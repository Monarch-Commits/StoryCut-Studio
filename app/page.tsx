import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import FeaturedVideos from '@/components/FeaturedVideos';
import CreatorStory from '@/components/about';

export default function Home() {
  return (
    <main className="bg-background mx-auto w-full max-w-7xl border">
      <Navigation />
      <HeroSection />
      <FeaturedVideos />
      {/* <CreatorStory /> */}
    </main>
  );
}
