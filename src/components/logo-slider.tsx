import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Logo {
  slug: string
  src: string
  alt: string
  href: string
}

const logos: Logo[] = [
  {
    slug: 'cypherbridge',
    src: '/img/logos/cypherbridge.png',
    alt: 'Cypherbridge',
    href: 'https://www.cypherbridge.com/',
  },
  {
    slug: 'netfoundry',
    src: '/img/logos/netfoundry.png',
    alt: 'NetFoundry',
    href: 'https://netfoundry.io/',
  },
  {
    slug: 'keyfactor',
    src: '/img/logos/keyfactor.png',
    alt: 'Keyfactor',
    href: 'https://www.keyfactor.com/',
  },
  {
    slug: 'github',
    src: '/img/logos/github.png',
    alt: 'Github',
    href: 'https://github.com/',
  },
  {
    slug: 'linux',
    src: '/img/logos/linux-foundation.png',
    alt: 'Linux Foundation',
    href: 'https://www.linuxfoundation.org/',
  },
  {
    slug: 'trellis',
    src: '/img/logos/trellis-logic.png',
    alt: 'Trellis Logic',
    href: 'https://trellis-logic.com/',
  },
  {
    slug: 'very',
    src: '/img/logos/very-technology.png',
    alt: 'Very Technology',
    href: 'https://www.verytechnology.com/',
  },
  {
    slug: 'onlogic',
    src: '/img/logos/onlogic.png',
    alt: 'OnLogic',
    href: 'https://www.onlogic.com/',
  },
  {
    slug: 'avocado',
    src: '/img/logos/avocado-os.png',
    alt: 'Avocado OS',
    href: 'https://github.com/peridio/meta-avocado?tab=readme-ov-file',
  },
  {
    slug: 'variscite',
    src: '/img/logos/variscite.png',
    alt: 'Variscite',
    href: 'https://www.variscite.com/',
  },
  {
    slug: 'galaxy',
    src: '/img/logos/galaxy-interactive.png',
    alt: 'Galaxy Interactive',
    href: 'https://interactive.galaxy.com/',
  },
]

export function StaticLogoCard({ className, slugs }: { className: string; slugs: string[] }) {
  return (
    <div
      className={cn(
        'flex h-[100px] w-[990px] items-center rounded-lg bg-white pr-8 pl-16 shadow-lg',
        className,
      )}
      style={{
        backgroundImage: 'linear-gradient(315deg, #F0F0F0 1.2712445175438596%, #FFFFFF 100%)',
      }}
    >
      <div className="flex items-center gap-8">
        <div className="flex-shrink-0">
          <h3 className="font-space-grotesk text-[14px] whitespace-nowrap text-gray-500">
            Trusted By
          </h3>
        </div>

        <div className="flex flex-1 items-center justify-between">
          {logos
            .filter(({ slug }) => slugs.includes(slug))
            .map((logo) => (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain grayscale transition-all duration-200 hover:grayscale-0"
                />
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}

export function LogoSlider() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos]

  return (
    <div className="flex w-full items-center justify-center overflow-hidden bg-black">
      <div
        className="relative w-full overflow-hidden"
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left gradient overlay */}
        <div
          className="pointer-events-none absolute top-1/2 left-0 z-10 h-[100px] w-[100px]"
          style={{
            background: 'linear-gradient(to right, #000000 0%, rgba(0, 0, 0, 0) 100%)',
            transform: 'translateY(-50%)',
          }}
        />

        {/* Right gradient overlay */}
        <div
          className="pointer-events-none absolute top-1/2 right-0 z-10 h-[100px] w-[100px]"
          style={{
            background: 'linear-gradient(to right, #000000 0%, rgba(0, 0, 0, 0) 100%)',
            transform: 'translateY(-50%) rotateZ(180deg)',
          }}
        />

        {/* Scrolling track */}
        <div
          className="flex items-center"
          style={{
            animation: 'logo-scroll 30s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'calc(150px * 22)',
          }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex items-center justify-center p-3"
              style={{
                height: '100px',
                width: '150px',
              }}
            >
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full items-center justify-center no-underline transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                  style={{
                    filter: 'invert(1) brightness(100%)',
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
