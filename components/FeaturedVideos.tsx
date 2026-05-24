import Image from 'next/image';

const featuredVideos = [
  {
    id: 1,
    title: 'Street Photography Masterclass',
    thumbnail:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop',
    duration: '14:10',
  },
  {
    id: 2,
    title: 'Unlock Your Potential',
    thumbnail:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    duration: '18:25',
  },
  {
    id: 3,
    title: 'Camera Gear Setup',
    thumbnail:
      'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=1600&auto=format&fit=crop',
    duration: '22:50',
  },
  {
    id: 4,
    title: 'Creative Storytelling',
    thumbnail:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
    duration: '12:40',
  },
];

export default function FeaturedVideos() {
  return (
    <section className="bg-black py-24 text-white md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:gap-30 lg:px-12">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-5xl">
            Featured <span className="text-primary">Videos</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400">Creator Content</p>
        </div>

        {/* 2 x 2 Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              className="group overflow-hidden border border-white/10 bg-zinc-900"
            >
              {/* Image */}
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute right-3 bottom-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold md:text-xl">
                  {video.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Watch cinematic content
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
