import { Play } from "lucide-react"

export function FloatingVideoCards() {
  return (
    <div className="hidden xl:block absolute inset-0 pointer-events-none z-10">
      {/* Left floating card - "The Film That Changed Everything" */}
      <div className="absolute left-6 2xl:left-12 top-40 w-44 2xl:w-52 rounded-lg overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm shadow-2xl">
        <div className="relative aspect-video bg-secondary/80">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-current" />
            </div>
          </div>
        </div>
        <div className="p-2.5 bg-card/80">
          <p className="text-xs font-semibold text-foreground">The Film<br />That Changed<br />Everything</p>
          <p className="text-[10px] text-muted-foreground mt-1">12:45</p>
        </div>
      </div>

      {/* Right top floating card - "DISCIPLINE BEATS MOTIVATION" */}
      <div className="absolute right-6 2xl:right-12 top-36 w-40 2xl:w-48 rounded-lg overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm shadow-2xl">
        <div className="relative aspect-video bg-secondary/80">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
              <p className="text-[10px] font-bold text-foreground/90 text-center leading-tight">
                DISCIPLINE<br />BEATS<br />MOTIVATION
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 bg-card/80">
          <p className="text-[10px] text-muted-foreground">10:23</p>
        </div>
      </div>

      {/* Right bottom floating card - "How I Plan My 90 Days" */}
      <div className="absolute right-6 2xl:right-12 bottom-36 w-36 2xl:w-44 rounded-lg overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm shadow-2xl opacity-80">
        <div className="relative aspect-video bg-secondary/80">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Play className="w-3 h-3 text-white fill-current" />
            </div>
          </div>
        </div>
        <div className="p-2 bg-card/80">
          <p className="text-[10px] font-medium text-foreground">How I Plan<br />My 90 Days</p>
        </div>
      </div>
    </div>
  )
}
