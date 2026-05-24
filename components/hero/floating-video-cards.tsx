import Image from 'next/image';
import { Play } from 'lucide-react';

interface VideoCard {
  id: string;
  title: string;
  duration: string;
  imageSrc: string;
  positionClass: string;
  imgEffect?: string;
  showCenterPlay?: boolean;
  layoutType: 'standard' | 'overlay' | 'row' | 'minimal';
}

const videoCards: VideoCard[] = [
  {
    id: 'left-film',
    title: 'The Film That Changed Everything',
    duration: '12:45',
    imageSrc:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500&auto=format&fit=crop',
    positionClass: 'left-4 top-[22%] w-44 xl:w-52 xl:hidden block opacity-40',
    showCenterPlay: true,
    layoutType: 'standard',
  },
  {
    id: 'right-discipline',
    title: 'Discipline Beats Motivation',
    duration: '10:23',
    imageSrc:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500&auto=format&fit=crop',
    positionClass: 'right-4 top-[12%] w-44 xl:w-52 opacity-50',
    imgEffect: 'mix-blend-luminosity',
    layoutType: 'overlay',
  },
  {
    id: 'right-plan',
    title: 'How I Plan My 90 Days',
    duration: '7:21',
    imageSrc:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop',
    positionClass: 'right-8 top-[45%] w-40 xl:w-48 opacity-25',
    imgEffect: 'brightness-[0.35]',
    showCenterPlay: true,
    layoutType: 'row',
  },
  {
    id: 'right-day',
    title: 'A Day in the Life of...',
    duration: '',
    imageSrc:
      'https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?q=80&w=500&auto=format&fit=crop',
    positionClass: 'right-2 top-[72%] w-36 xl:w-44 opacity-15',
    imgEffect: 'brightness-[0.25] grayscale',
    layoutType: 'minimal',
  },
];

export function FloatingVideoCards() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 mx-auto hidden h-full w-full max-w-7xl md:block">
      {videoCards.map((card) => (
        <div
          key={card.id}
          className={`absolute overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-md transition-all duration-500 hover:opacity-90 ${card.positionClass}`}
        >
          {/* CARD THUMBNAIL AREA */}
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={card.imageSrc}
              alt={card.title}
              fill
              sizes="(max-width: 1280px) 176px, 208px"
              className={`object-cover brightness-50 contrast-125 ${card.imgEffect ?? ''}`}
              unoptimized
            />

            {/* Central Play Icon */}
            {card.showCenterPlay && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm xl:h-8 xl:w-8">
                  <Play className="h-2.5 w-2.5 translate-x-[1px] fill-current text-white xl:h-3 xl:w-3" />
                </div>
              </div>
            )}

            {/* Standard Duration Badge inside Thumbnail */}
            {card.layoutType === 'standard' && (
              <span className="absolute right-1 bottom-1 rounded bg-black/70 px-1 py-0.5 font-mono text-[9px] text-white/80">
                {card.duration}
              </span>
            )}

            {/* Full Content Overlay Style (Card 2 - Discipline Beats Motivation) */}
            {card.layoutType === 'overlay' && (
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3">
                <p className="mt-auto font-sans text-[11px] leading-tight font-black tracking-wider text-white uppercase">
                  {card.title}
                </p>
                <span className="absolute right-1 bottom-1 rounded bg-black/70 px-1 py-0.5 font-mono text-[9px] text-white/80">
                  {card.duration}
                </span>
              </div>
            )}
          </div>

          {/* CARD FOOTER TEXT AREA */}
          {card.layoutType === 'standard' && (
            <div className="bg-gradient-to-b from-black/20 to-black/80 p-3">
              <p className="text-[11px] leading-snug font-medium tracking-tight whitespace-pre-line text-white/90">
                {card.title
                  .replace(' That', '\nThat')
                  .replace(' Everything', '\nEverything')}
              </p>
            </div>
          )}

          {card.layoutType === 'row' && (
            <div className="flex w-full items-center justify-between bg-black/60 p-2.5 text-[10px] font-medium text-white/70">
              <span className="mr-2 truncate">{card.title}</span>
              <span className="flex-shrink-0 font-mono text-[9px] text-white/40">
                {card.duration}
              </span>
            </div>
          )}

          {card.layoutType === 'minimal' && (
            <div className="truncate bg-black/80 p-2 text-[9px] font-normal text-white/50">
              {card.title}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
