import Image from 'next/image';

const featuredVideos = [
  {
    id: 1,
    title: 'MASTERING STREET PHOTOGRAPHY | Cinematic Tips',
    thumbnail:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
    duration: '14:10',
  },
  {
    id: 2,
    title: 'UNLOCKING YOUR POTENTIAL: The 3 Keys to Growth',
    thumbnail:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    duration: '18:25',
  },
  {
    id: 3,
    title: 'MY 2024 CAMERA GEAR REVEALED | Essential Vlog Setup',
    thumbnail:
      'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=1200&auto=format&fit=crop',
    duration: '22:50',
  },
];

export default function FeaturedVideos() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28 lg:py-36">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.3em] text-red-500 uppercase">
              Creator Content
            </p>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Featured Videos
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
            Watch cinematic tutorials, creator insights, gear breakdowns, and
            storytelling techniques designed to level up your content.
          </p>
        </div>
        {/* Videos Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Hover Dark Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {/* Play Button */}
                  <div className="flex h-16 w-16 scale-90 items-center justify-center rounded-full bg-red-600 shadow-2xl transition-all duration-500 group-hover:scale-100">
                    <svg
                      className="ml-1 h-7 w-7 fill-current text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute right-4 bottom-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-md">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="mt-5 space-y-3">
                <h3 className="line-clamp-2 text-lg leading-snug font-semibold transition-colors duration-300 group-hover:text-zinc-300 md:text-xl">
                  {video.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  YouTube Creator Series
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-500 hover:border-red-500/40 hover:bg-red-500/10 hover:shadow-[0_0_40px_rgba(239,68,68,0.25)]">
            {/* Animated Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-white/10 to-red-500/20 blur-2xl" />
            </div>

            {/* Shine Effect */}
            <div className="absolute top-0 -left-full h-full w-1/2 skew-x-12 bg-white/10 transition-all duration-700 group-hover:left-[150%]" />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3 text-sm font-semibold tracking-[0.25em] text-white uppercase">
              View All Videos
              {/* Arrow */}
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:translate-x-1 group-hover:border-red-400/40 group-hover:bg-red-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
