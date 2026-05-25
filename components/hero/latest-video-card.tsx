import Image from 'next/image';
import { Play } from 'lucide-react';

export function LatestVideoCard() {
  return (
    <div className="bg-card/70 border-border hover:border-primary/50 group z-100 w-full max-w-sm overflow-hidden border backdrop-blur-sm transition-colors">
      <div className="flex gap-4 p-3">
        {/* Thumbnail */}
        <div className="bg-secondary relative w-36 flex-shrink-0 overflow-hidden">
          <div className="relative aspect-video">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_qbaarcqbaarcqbaa-DGLa7wPR3YytVD7kThmZBopc7ti9LD.png"
              alt="How I Stay Productive While Traveling"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                <Play className="text-primary-foreground h-5 w-5 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="text-primary mb-1 text-[10px] font-semibold tracking-wider">
            LATEST VIDEO
          </p>
          <h3 className="text-foreground text-sm leading-tight font-semibold">
            How I Stay Productive
            <br />
            While Traveling
          </h3>
          <p className="text-muted-foreground mt-2 text-xs">
            12:45 • March 12, 2024
          </p>
        </div>
      </div>
    </div>
  );
}
