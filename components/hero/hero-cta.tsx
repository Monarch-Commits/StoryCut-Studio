import { Play } from 'lucide-react';

export function HeroCta() {
  return (
    <div className="w-full max-w-sm lg:max-w-md lg:text-start">
      <p className="text-muted-foreground mb-6 text-center text-sm leading-relaxed xl:text-start">
        I share my journey in filmmaking, productivity, and building a life of
        purpose. New videos every week.
      </p>

      <div className="z-10 flex w-full max-w-md flex-col justify-center gap-3 lg:flex-row xl:justify-start">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all">
          {/* Tama ang paggamit mo dito sa Play icon mula sa lucide-react */}
          <Play className="h-4 w-4 fill-current" />
          WATCH LATEST VIDEO
        </button>

        {/* Inayos mula sa <Explore CHANNEL /> tungo sa tamang text format */}
        <button className="border-border text-foreground hover:bg-secondary inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold transition-colors">
          EXPLORE CHANNEL
        </button>
      </div>
    </div>
  );
}
