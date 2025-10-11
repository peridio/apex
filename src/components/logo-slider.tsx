import { useState } from "react";
import { cn } from "@/lib/utils";

interface Logo {
  slug: string;
  src: string;
  alt: string;
  href: string;
}

const logos: Logo[] = [
  {
    slug: "cypherbridge",
    src: "/img/logos/cypherbridge.png",
    alt: "Cypherbridge",
    href: "https://www.cypherbridge.com/",
  },
  {
    slug: "netfoundry",
    src: "/img/logos/netfoundry.png",
    alt: "NetFoundry",
    href: "https://netfoundry.io/",
  },
  {
    slug: "keyfactor",
    src: "/img/logos/keyfactor.png",
    alt: "Keyfactor",
    href: "https://www.keyfactor.com/",
  },
  {
    slug: "github",
    src: "/img/logos/github.png",
    alt: "Github",
    href: "https://github.com/",
  },
  {
    slug: "linux",
    src: "/img/logos/linux-foundation.png",
    alt: "Linux Foundation",
    href: "https://www.linuxfoundation.org/",
  },
  {
    slug: "trellis",
    src: "/img/logos/trellis-logic.png",
    alt: "Trellis Logic",
    href: "https://trellis-logic.com/",
  },
  {
    slug: "very",
    src: "/img/logos/very-technology.png",
    alt: "Very Technology",
    href: "https://www.verytechnology.com/",
  },
  {
    slug: "onlogic",
    src: "/img/logos/onlogic.png",
    alt: "OnLogic",
    href: "https://www.onlogic.com/",
  },
  {
    slug: "avocado",
    src: "/img/logos/avocado-os.png",
    alt: "Avocado OS",
    href: "https://github.com/peridio/meta-avocado?tab=readme-ov-file",
  },
  {
    slug: "variscite",
    src: "/img/logos/variscite.png",
    alt: "Variscite",
    href: "https://www.variscite.com/",
  },
  {
    slug: "galaxy",
    src: "/img/logos/galaxy-interactive.png",
    alt: "Galaxy Interactive",
    href: "https://interactive.galaxy.com/",
  },
];

export function StaticLogoCard({
  className,
  slugs,
}: {
  className: string;
  slugs: string[];
}) {
  return (
    <div
      className={cn(
        "w-[990px] h-[100px] pl-16 pr-8 flex items-center bg-white rounded-lg shadow-lg",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(315deg, #F0F0F0 1.2712445175438596%, #FFFFFF 100%)",
      }}
    >
      <div className="flex items-center gap-8">
        <div className="flex-shrink-0">
          <h3 className="text-[14px] font-space-grotesk text-gray-500 whitespace-nowrap">
            Trusted By
          </h3>
        </div>

        <div className="flex-1 flex items-center justify-between">
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
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-200"
                />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export function LogoSlider() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <div className="w-full flex items-center justify-center bg-black overflow-hidden">
      <div
        className="relative w-full overflow-hidden"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left gradient overlay */}
        <div
          className="absolute left-0 top-1/2 z-10 pointer-events-none h-[100px] w-[100px]"
          style={{
            background:
              "linear-gradient(to right, #000000 0%, rgba(0, 0, 0, 0) 100%)",
            transform: "translateY(-50%)",
          }}
        />

        {/* Right gradient overlay */}
        <div
          className="absolute right-0 top-1/2 z-10 pointer-events-none h-[100px] w-[100px]"
          style={{
            background:
              "linear-gradient(to right, #000000 0%, rgba(0, 0, 0, 0) 100%)",
            transform: "translateY(-50%) rotateZ(180deg)",
          }}
        />

        {/* Scrolling track */}
        <div
          className="flex items-center"
          style={{
            animation: "logo-scroll 30s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
            width: "calc(150px * 22)",
          }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex items-center justify-center p-3"
              style={{
                height: "100px",
                width: "150px",
              }}
            >
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full no-underline transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                  style={{
                    filter: "invert(1) brightness(100%)",
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
