const stats = [
  { value: '2.3M+', label: 'SUBSCRIBERS' },
  { value: '180M+', label: 'TOTAL VIEWS' },
  { value: '500+', label: 'VIDEOS' },
  { value: '8+', label: 'YEARS' },
];

export function StatsGrid() {
  return (
    <div className="z-100 grid w-full grid-cols-2 gap-4 p-2 md:max-w-md md:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`flex flex-col items-center justify-center md:items-start ${index !== 0 ? 'md:border-border/50 pl-4 md:border-l' : ''} `}
        >
          <p className="text-foreground text-2xl font-bold">{stat.value}</p>

          <p className="text-muted-foreground mt-0.5 flex items-center gap-1.5 text-[10px] tracking-wider whitespace-nowrap">
            {stat.label}

            <span className="bg-primary h-1 w-1 rounded-full" />
          </p>
        </div>
      ))}
    </div>
  );
}
