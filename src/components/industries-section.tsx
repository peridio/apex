import { useState, useEffect } from "react";

interface Industry {
  title: string;
  description: string;
  image: string;
  link: string;
}

const industries: Industry[] = [
  {
    title: "Energy & Renewables",
    description:
      "Accelerate and derisk the deployment of energy applications. Provide a foundation for secure development and ongoing management of next-generation critical infrastructure.",
    image: "/img/home-carousel/energy-renewables.jpg",
    link: "https://www.peridio.com/industry-energy-and-renewables",
  },
  {
    title: "Industrial IoT",
    description:
      "Transform critical infrastructure operations. Empower industrial manufacturers to operationalize firmware management across connected sensors, machines, and operational technology.",
    image: "/img/home-carousel/industrial-iot.jpg",
    link: "https://www.peridio.com/industry-industrial-iot",
  },
  {
    title: "Consumer Electronics",
    description:
      "Streamline firmware operations with enterprise-grade fleet management capabilities that accelerate time-to-market while reducing operational overhead.",
    image: "/img/home-carousel/consumer-electronics.jpg",
    link: "https://www.peridio.com/industry-consumer-electronics",
  },
  {
    title: "Telematics",
    description:
      "Fleet configuration and firmware management for scale. Streamline telematics operations with seamless fleet-wide software rollouts and operational visibility.",
    image: "/img/home-carousel/telematics.jpg",
    link: "https://www.peridio.com/industry-telematics",
  },
  {
    title: "Smart Homes & Buildings",
    description:
      "Operationalize firmware management for HVAC, smart lighting, and energy systems.",
    image: "/img/home-carousel/smart-homes.jpg",
    link: "https://www.peridio.com/industry-smarthomes",
  },
  {
    title: "Health & Wearables",
    description:
      "Confidently accelerate feature delivery while protecting your production fleet with unprecedented control over their software deployment pipeline.",
    image: "/img/home-carousel/health-wearables.png",
    link: "https://www.peridio.com/industry-health-and-wearables",
  },
];

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="industry-card group relative w-[274px] h-[400px] flex-shrink-0 overflow-hidden rounded-lg">
      <img
        src={industry.image}
        alt={industry.title}
        className="w-full h-full object-cover"
      />
      <div className="industry-overlay absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
        <div>
          <h4 className="text-white text-[20px] font-bold mb-4 font-montserrat">
            {industry.title}
          </h4>
          <p className="text-white text-[14px] leading-relaxed font-arial">
            {industry.description}
          </p>
        </div>
        <a
          href={industry.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[14px] font-semibold underline hover:text-gray-300 transition-colors font-arial"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  const [currentIndex, setCurrentIndex] = useState(industries.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const itemWidth = 274 + 16; // card width + gap

  // Create infinite loop by tripling the array
  const infiniteIndustries = [...industries, ...industries, ...industries];

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    // Reset to middle section when reaching boundaries
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(industries.length);
      }, 0);
    } else if (currentIndex >= industries.length * 2) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(industries.length);
      }, 0);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      // Re-enable transitions after the position reset
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const translateX = -(currentIndex * itemWidth);

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-[900px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[38px] font-bold mb-4 font-montserrat tracking-[-0.05em] leading-[1.2] text-black">
            Powering Innovation Across
            <br />
            Industries
          </h2>
          <p
            className="text-[16px] max-w-[700px] mx-auto font-space-grotesk"
            style={{ color: "#6E6E6E" }}
          >
            Peridio delivers industry-specific solutions that simplify complex
            embedded systems challenges while accelerating time-to-market.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 transition-all flex items-center justify-center"
            aria-label="Previous"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 transition-all flex items-center justify-center"
            aria-label="Next"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className={`flex gap-[16px] ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{ transform: `translateX(${translateX}px)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {infiniteIndustries.map((industry, index) => (
                <IndustryCard key={index} industry={industry} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
