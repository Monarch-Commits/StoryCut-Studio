import { Play } from 'lucide-react';

export function HeroCta() {
  return (
    <div className="w-full max-w-md border text-center md:text-start">
      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
        I share my journey in filmmaking, productivity, and building a life of
        purpose. New videos every week.
      </p>

      <div className="flex flex-col gap-3 md:flex-row">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all">
          <Play className="h-4 w-4 fill-current" />
          WATCH LATEST VIDEO
        </button>
        <button className="border-border text-foreground hover:bg-secondary inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors">
          EXPLORE CHANNEL
        </button>
      </div>
    </div>
  );
}
