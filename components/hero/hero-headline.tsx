export function HeroHeadline() {
  return (
    // NAGDAGDAG NG "relative z-10" DITO:
    <div className="relative z-10 text-center">
      <p className="text-muted-foreground mb-3 text-xs tracking-[0.2em] sm:text-sm lg:mb-4">
        WELCOME TO MY WORLD <span className="inline-block">👋</span>
      </p>

      <h1 className="text-foreground font-[family-name:var(--font-oswald)] text-3xl leading-[1.05] font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        I CREATE VIDEOS THAT
        <br />
        <span className="text-primary relative inline-block">
          INSPIRE
          <svg
            className="absolute -bottom-1 left-0 h-2 w-full sm:-bottom-2 sm:h-3"
            viewBox="0 0 200 12"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M2 8C50 2 100 2 198 8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-primary"
            />
          </svg>
        </span>
        <span className="text-foreground"> AND IMPACT.</span>
      </h1>
    </div>
  );
}
