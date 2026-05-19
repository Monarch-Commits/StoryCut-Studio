export function ScrollIndicator() {
  return (
    <div className="py-6 flex flex-col items-center">
      <p className="text-[10px] text-muted-foreground tracking-[0.2em] mb-2">SCROLL DOWN</p>
      <div className="w-5 h-8 border border-border/60 rounded-full flex justify-center pt-1.5">
        <div className="w-0.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce" />
      </div>
    </div>
  )
}
