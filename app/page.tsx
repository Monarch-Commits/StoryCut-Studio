import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import FeaturedVideos from '@/components/FeaturedVideos';
import CreatorStory from '@/components/about';
import WhatICreate from '@/components/WhatICreate';
import GalleryShowcase from '@/components/galleryShowcase';
import Testimonials from '@/components/testimonials';
import Services from '@/components/services';
import ContactCTA from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background mx-auto w-full max-w-7xl border px-2 xl:px-0">
      <Navigation />
      <HeroSection />
      <FeaturedVideos />
      <CreatorStory />
      <WhatICreate />
      <GalleryShowcase />
      <Testimonials />
      <Services />
      <ContactCTA />
      <Footer />
    </main>
  );
}
