export function DecorativeStar() {
  return (
    <div className="absolute bottom-6 right-6 hidden lg:block">
      <svg 
        className="w-10 h-10 text-foreground/20" 
        viewBox="0 0 50 50" 
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M25 0 L27 23 L50 25 L27 27 L25 50 L23 27 L0 25 L23 23 Z" />
      </svg>
    </div>
  )
}
