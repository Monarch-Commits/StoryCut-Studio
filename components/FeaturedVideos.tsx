import Image from 'next/image';

const featuredVideos = [
  {
    id: 1,
    title: 'MASTERING STREET PHOTOGRAPHY | Cinematic Tips',
    // Direct link ng litrato (nagtatapos sa image parameters, hindi HTML page)
    thumbnail:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop',
    duration: '14:10',
  },
  {
    id: 2,
    title: 'UNLOCKING YOUR POTENTIAL: The 3 Keys to Growth',
    thumbnail:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
    duration: '18:25',
  },
  {
    id: 3,
    title: 'MY 2024 CAMERA GEAR REVEALED | Essential Vlog Setup',
    thumbnail:
      'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=600&auto=format&fit=crop',
    duration: '22:50',
  },
];

export default function FeaturedVideos() {
  return (
    <section className="py-16 text-white md:py-28 lg:py-32">
      <div className="mx-auto w-full">
        {/* Section Header */}
        <h2 className="mb-10 text-left text-2xl font-bold tracking-wider uppercase md:text-3xl">
          Featured Videos
        </h2>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              className="group flex cursor-pointer flex-col gap-4"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden border border-zinc-800 bg-zinc-900">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {/* Play Button Icon */}
                  <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="ml-1 h-6 w-6 fill-current text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration Tag */}
                <span className="absolute right-3 bottom-3 rounded bg-black/80 px-2 py-0.5 font-mono text-xs">
                  {video.duration}
                </span>
              </div>

              {/* Video Title */}
              <h3 className="line-clamp-2 text-base leading-snug font-semibold transition-colors group-hover:text-zinc-300 md:text-lg">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        {/* View All Videos Button */}
        <div className="mt-12 flex justify-center">
          <button className="group hover:border-primary hover:shadow-primary hover:bg-primary/90 flex items-center gap-2 rounded-full border border-red-600/50 bg-transparent px-8 py-3 font-medium tracking-wide text-white transition-all duration-300">
            VIEW ALL VIDEOS
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
