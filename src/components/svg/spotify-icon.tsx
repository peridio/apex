export function SpotifyIcon({ className = 'h-6 w-6 text-icon-gray' }: { className?: string }) {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2.5 2 20 20"
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="currentColor"
        d="M18.4 10.9C15.2 9 9.85 8.8 6.8 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85M12.5 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20"
      />
    </svg>
  )
}
