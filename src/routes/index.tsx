import { useState, useEffect } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import Typewriter from 'typewriter-effect'
import CallToActionSection from '@/components/call-to-action-section'
import NewsletterSection from '@/components/newsletter-section'
import { ApplePodcastsIcon } from '@/components/svg/apple-podcasts-icon'
import { SpotifyIcon } from '@/components/svg/spotify-icon'
import { YouTubeIcon } from '@/components/svg/youtube-icon'
import TestimonialsSection, { type Testimonial } from '@/components/testimonials-section'
import TrustedPartnerSection from '@/components/trusted-partner-section'
import { Button } from '@/components/ui/button'
import WorkflowSection from '@/components/workflow-section'

export const Route = createFileRoute('/')({
  component: Page,
})

function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <TrustedPartnerSection />
      <ProductsSection />
      <WorkflowSection />
      <ProductionReadySection />
      <AiReadyIllustrationSection />
      <AiReadySection />
      <TestimonialsWrapper />
      <PodcastSection />
      <IndustriesSection />
      <CallToActionSection />
      <NewsletterSection />
    </div>
  )
}

function HeroSection() {
  return (
    <div className="relative flex h-[355px] items-center justify-center overflow-hidden lg:h-[600px]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Screen Door Texture */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: "url('/img/screen-door-texture.png')",
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center center',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-[90%] pt-18 text-left md:w-[450px] lg:w-[860px]">
        <h1 className="mb-6 text-white">
          <span className="font-space-grotesk text-[24px] leading-[1.3] md:text-[30px] lg:text-[46px]">
            The platform for
          </span>
          <br />
          <span className="font-montserrat text-[24px] leading-[1.3] font-bold md:text-[38px] lg:text-[46px]">
            {/* Innovation on the Edge_ */}
            <Typewriter
              options={{
                strings: [
                  'Embedded Linux Development',
                  'Edge AI',
                  'Device Ops & OTA',
                  'Innovation on the Edge',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>

        <p className="font-space-grotesk text-very-light-purple mb-6 text-[16px] font-normal">
          Build, ship, and scale embedded products without compromise.
        </p>

        <div className="flex gap-4">
          <Button variant="primary" size="lg" className="w-[175px]">
            Get Started
          </Button>

          <Button
            asChild
            variant="outline-transparent-secondary"
            size="lg"
            className="w-[175px] !border-[0.75px] border-white"
          >
            <Link to="/book-a-meeting">Book a Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function ProductsSection() {
  return (
    <div className="mx-auto py-16 md:max-w-[650px] lg:max-w-[900px]">
      <h2 className="font-montserrat mb-12 text-center text-[36px] leading-[1.2] font-bold tracking-[-0.05em] lg:text-[38px]">
        Build and maintain advanced
        <br />
        embedded products
      </h2>

      <div className="flex flex-col justify-center gap-[30px] px-6 md:px-0 lg:flex-row">
        <ProductCard
          image="/img/home-peridio-core.png"
          title="Peridio Core"
          description="Peridio Core provides device management and OTA for connected device manufacturers."
        />

        <ProductCard
          image="/img/home-avocado-os.png"
          title="Avocado OS"
          description="Production-ready embedded Linux distribution, built on Yocto, for rapid development and deployment."
        />

        <ProductCard
          image="/img/home-managed-linux.png"
          title="Managed Linux"
          description="Enterprise-grade Linux capabilities without the overhead of an extensive specialized team."
        />
      </div>
    </div>
  )
}

function ProductCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-[#27272a] bg-transparent px-[40px] py-[25px] sm:flex-row sm:items-start lg:h-[340px] lg:w-[280px] lg:flex-col lg:items-center">
      <div className="mb-4 block sm:hidden lg:block">
        <img src={image} alt={title} className="h-20 w-20 object-contain" />
      </div>

      <h3 className="font-montserrat mb-4 text-[16px] font-bold tracking-wider text-white uppercase sm:w-[300px] lg:w-auto">
        {title}
      </h3>

      <div className="mb-8 flex flex-grow flex-col">
        <div className="text-light-gray font-arial mb-4 text-center text-[14px] sm:text-left lg:text-center">
          {description}
        </div>
        <Button variant="primary" className="w-full lg:hidden">
          Learn More
        </Button>
      </div>

      <Button variant="primary" className="hidden w-[235px] lg:block">
        Learn More
      </Button>
    </div>
  )
}

const testimonials: Testimonial[] = [
  {
    quote:
      'We needed a solution that would allow us to manage updates efficiently while maintaining the flexibility to support our diverse customer base.',
    name: 'Jess Shapiro',
    title: 'Manager of Technology Products, PMO at Granite',
    company: 'Granite',
  },
  {
    quote:
      'The remote access feature has become a cornerstone of our support toolkit. For our team, Peridio is now our go-to solution for remote debugging.',
    name: 'Michael Kelley',
    title: 'Electrical Engineering & Compliance Manager at Fellowes',
    company: 'Fellowes',
  },
  {
    quote:
      'Launching with nine different models simultaneously was an ambitious undertaking. What made Peridio invaluable was its ability to bring everything together in one platform.',
    name: 'Tal Semo',
    title: 'Managing Director of Sales and Marketing, Americas @ Variscite',
    company: 'Variscite',
  },
  {
    quote:
      "Peridio's reference architectures and remote access capabilities greatly accelerate product development and significantly derisk every launch.",
    name: 'Jeff McGehee',
    title: 'VP of Product Engineering at Very',
    company: 'Very',
  },
  {
    quote:
      'Launching with nine different models simultaneously was an ambitious undertaking. What made Peridio invaluable was its ability to bring everything together in one platform.',
    name: 'Ben Hoffman',
    title: 'Senior Manager of Product Development at Fellowes',
    company: 'Fellowes',
  },
  {
    quote:
      "Peridio's platform, workflows, and expertise vastly reduce time-to-market for launching ambitious connected applications. What would normally require a large dedicated team, we've achieved with just 1.5 engineers.",
    name: 'Eric Loes',
    title: 'Head of Software Engineering at Telly',
    company: 'Telly',
  },
]

function ProductionReadySection() {
  const stats = [
    {
      title: '10x Faster',
      subtitle: 'Development cycles',
      description: 'With production-ready\nLinux',
    },
    {
      title: '3x Fewer',
      subtitle: 'Engineering resources',
      description: 'Required for ongoing\nmaintenance',
    },
    {
      title: '250% ROI',
      subtitle: 'in year one',
      description: 'With faster releases &\nstreamlined operations',
    },
  ]

  return (
    <div className="w-full bg-black py-20">
      <div className="mx-auto max-w-[90%] md:max-w-[650px] lg:max-w-[900px]">
        {/* Title and Subtitle */}
        <div className="mb-10 text-center">
          <h2 className="font-montserrat mb-3 text-[24px] leading-[1.2] font-bold tracking-[-0.05em] text-white md:text-[36px] lg:text-[42px]">
            Production ready from the start
          </h2>
          <p className="font-space-grotesk text-off-white text-[14px] leading-[1.5] md:text-[16px]">
            Peridio seamlessly bridges your development journey to production,
            <br />
            providing a unified experience from day one.
          </p>
        </div>

        {/* Three Cards */}
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              subtitle={stat.subtitle}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function StatCard({
  title,
  subtitle,
  description,
}: {
  title: string
  subtitle: string
  description: string
}) {
  return (
    <div
      className="flex w-[375px] items-center justify-center rounded-2xl p-4 shadow-lg lg:h-[200px] lg:w-[235px] lg:p-8"
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 50.7092927631579%, #CAC5FF 100%)',
      }}
    >
      <div className="pt-4 text-center">
        <h3 className="font-space-grotesk mb-2 text-[34px] leading-[1.2] font-bold text-black">
          {title}
        </h3>
        <p className="font-space-grotesk mb-3 text-[14px] font-bold text-black">{subtitle}</p>
        <p className="font-space-grotesk text-medium-gray text-[14px] leading-[1.4] font-normal">
          {description}
        </p>
      </div>
    </div>
  )
}

function AiReadyIllustrationSection() {
  return (
    <div className="w-full bg-black">
      <div className="mx-auto max-w-[900px]">
        <img
          src="/img/ai-ready-illustration.png"
          alt="AI Ready Illustration"
          className="h-auto w-[725px]"
        />
      </div>
    </div>
  )
}

function AiReadySection() {
  return (
    <div className="relative w-full bg-black pb-16">
      <div className="relative z-10 mx-auto max-w-[900px]">
        {/* AI READY Tag */}
        <div className="mb-4 text-center">
          <span className="font-space-grotesk text-very-light-purple text-[17px] font-bold uppercase">
            AI READY
          </span>
        </div>

        {/* Main Headline */}
        <div className="mb-6 text-center">
          <h2 className="font-montserrat text-[22px] leading-[1.2] font-bold tracking-[-0.05em] text-white md:text-[36px] lg:text-[42px]">
            Develop and distribute modern
            <br />
            embedded products, faster
          </h2>
        </div>

        {/* Sub-headline */}
        <div className="mb-8 text-center">
          <p className="font-space-grotesk max-w-auto mx-auto max-w-[90%] text-[15px] leading-[1.4] font-normal text-white md:text-[16px] lg:text-[17px]">
            With optimized application development workflows for multi-silicon products
          </p>
        </div>

        {/* White Card */}
        <div className="mx-auto h-auto w-[350px] rounded-2xl bg-white px-[40px] py-[28px] shadow-lg md:h-[200px] md:w-[715px] lg:w-[900px]">
          <div className="grid grid-cols-1 items-start gap-2 text-center lg:grid-cols-[330px_1fr] lg:gap-4 lg:text-left">
            {/* Left Text Block */}
            <div>
              <h3 className="font-space-grotesk mb-3 text-[18px] leading-[1.2] font-bold tracking-[-0.05em] text-black lg:mb-6 lg:text-[24px]">
                The embedded development stack is no longer single firmware, single device
              </h3>
            </div>

            {/* Right Text Block */}
            <div>
              <p className="font-space-grotesk text-medium-gray mb-4 text-[16px] leading-[1.5] font-normal lg:mb-8">
                Peridio enables embedded engineers, data scientists, and software developers to
                integrate and deploy unified code bases to an edge environment.
              </p>

              {/* Learn More Button */}
              <div className="flex justify-center lg:justify-start">
                <Button variant="primary" size="lg" className="w-[250px] !text-sm lg:w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TestimonialsWrapper() {
  return (
    <div
      className="relative flex h-[535px] w-full items-center bg-black"
      style={{
        backgroundImage:
          'linear-gradient(360deg, #FFFFFF 0%, #5F51FF 25.64418859649123%, #000000 60.97519188596491%)',
      }}
    >
      <TestimonialsSection testimonials={testimonials} />
    </div>
  )
}

function PodcastSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[900px] px-4">
        <div
          className="relative mx-auto flex max-w-[450px] flex-col-reverse rounded-[16px] py-12 md:max-w-[700px] lg:h-[300px] lg:w-[860px] lg:max-w-[860px] lg:flex-row lg:py-0 lg:pt-[50px] lg:pl-[50px]"
          style={{
            border: '1px solid rgba(202, 197, 255, 1)',
            backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, rgba(202,197,255,0.25) 100%)',
          }}
        >
          {/* Left Column - Text and CTA */}
          <div className="relative z-10 mt-6 w-full text-center lg:mt-0 lg:w-[415px] lg:text-left">
            <h2 className="font-montserrat mb-4 text-[26px] leading-[1.4em] font-bold tracking-[-2.15px] text-black md:text-[36px] lg:text-[43px]">
              Beyond The Bench
            </h2>
            <p className="lg:max-w-auto font-space-grotesk text-medium-gray mx-auto mb-6 max-w-[300px] text-[14px] md:max-w-[415px]">
              Featuring essential insights from leaders successfully scaling innovative embedded
              hardware and edge AI.
            </p>

            {/* Button and Platform Icons in one row */}
            <div className="flex flex-col items-center gap-6 px-8 md:px-0 lg:flex-row">
              <Button
                asChild
                variant="primary"
                className="w-full !text-sm md:w-[230px] lg:w-[170px]"
              >
                <a href="/podcast-beyond-the-bench">Explore the Podcast</a>
              </Button>

              {/* Platform Icons */}
              <div className="flex items-center gap-3">
                <span className="font-space-grotesk text-[14px]" style={{ color: '#6E6E6E' }}>
                  Available on
                </span>
                <div className="flex gap-2">
                  <SpotifyIcon className="text-icon-gray h-6 w-6" />
                  <ApplePodcastsIcon className="text-icon-gray h-6 w-6" />
                  <YouTubeIcon className="text-icon-gray h-6 w-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Cover Art with Waveforms (Absolutely Positioned) */}
          <div
            className="flex-1"
            // className="absolute top-[50px] right-[80px]"
          >
            <div className="relative flex items-center justify-center">
              {/* Left Waveform GIF */}
              <img
                src="/img/podcast/waveform.gif"
                alt="Audio Waveform Left"
                className="absolute left-[200px] h-[133px] object-cover lg:left-[25px]"
              />

              {/* Podcast Cover */}
              <img
                src="/img/beyond-the-bench-cover.png"
                alt="Beyond The Bench Podcast"
                className="relative z-10 w-[136px] rounded-lg shadow-lg lg:w-[200px]"
              />

              {/* Right Waveform GIF */}
              <img
                src="/img/podcast/waveform.gif"
                alt="Audio Waveform Right"
                className="absolute right-[200px] h-[133px] object-cover lg:right-[25px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface Industry {
  title: string
  description: string
  image: string
  link: string
}

const industries: Industry[] = [
  {
    title: 'Energy & Renewables',
    description:
      'Accelerate and derisk the deployment of energy applications. Provide a foundation for secure development and ongoing management of next-generation critical infrastructure.',
    image: '/img/home-carousel/energy-renewables.jpg',
    link: 'https://www.peridio.com/industry-energy-and-renewables',
  },
  {
    title: 'Industrial IoT',
    description:
      'Transform critical infrastructure operations. Empower industrial manufacturers to operationalize firmware management across connected sensors, machines, and operational technology.',
    image: '/img/home-carousel/industrial-iot.jpg',
    link: 'https://www.peridio.com/industry-industrial-iot',
  },
  {
    title: 'Consumer Electronics',
    description:
      'Streamline firmware operations with enterprise-grade fleet management capabilities that accelerate time-to-market while reducing operational overhead.',
    image: '/img/home-carousel/consumer-electronics.jpg',
    link: 'https://www.peridio.com/industry-consumer-electronics',
  },
  {
    title: 'Telematics',
    description:
      'Fleet configuration and firmware management for scale. Streamline telematics operations with seamless fleet-wide software rollouts and operational visibility.',
    image: '/img/home-carousel/telematics.jpg',
    link: 'https://www.peridio.com/industry-telematics',
  },
  {
    title: 'Smart Homes & Buildings',
    description: 'Operationalize firmware management for HVAC, smart lighting, and energy systems.',
    image: '/img/home-carousel/smart-homes.jpg',
    link: 'https://www.peridio.com/industry-smarthomes',
  },
  {
    title: 'Health & Wearables',
    description:
      'Confidently accelerate feature delivery while protecting your production fleet with unprecedented control over their software deployment pipeline.',
    image: '/img/home-carousel/health-wearables.png',
    link: 'https://www.peridio.com/industry-health-and-wearables',
  },
]

export default function IndustriesSection() {
  const [currentIndex, setCurrentIndex] = useState(industries.length)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const itemWidth = 274 + 16 // card width + gap

  // Create infinite loop by tripling the array
  const infiniteIndustries = [...industries, ...industries, ...industries]

  const handlePrev = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const handleTransitionEnd = () => {
    // Reset to middle section when reaching boundaries
    if (currentIndex <= 0) {
      setIsTransitioning(false)
      setTimeout(() => {
        setCurrentIndex(industries.length)
      }, 0)
    } else if (currentIndex >= industries.length * 2) {
      setIsTransitioning(false)
      setTimeout(() => {
        setCurrentIndex(industries.length)
      }, 0)
    }
  }

  useEffect(() => {
    if (!isTransitioning) {
      // Re-enable transitions after the position reset
      const timer = setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  const translateX = -(currentIndex * itemWidth)

  return (
    <div className="w-full bg-white py-16">
      <div className="mx-auto max-w-[450px] px-4 md:max-w-[750px] lg:max-w-[900px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-montserrat mb-4 text-[38px] leading-[1.2] font-bold tracking-[-0.05em] text-black">
            Powering Innovation Across
            <br />
            Industries
          </h2>
          <p
            className="font-space-grotesk mx-auto max-w-[700px] text-[16px]"
            style={{ color: '#6E6E6E' }}
          >
            Peridio delivers industry-specific solutions that simplify complex embedded systems
            challenges while accelerating time-to-market.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all hover:bg-black/20 md:-translate-x-12 md:bg-black/10"
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
            className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all hover:bg-black/20 md:translate-x-12 md:bg-black/10"
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
              className={`flex gap-[16px] ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
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
  )
}

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="industry-card group relative h-[400px] w-[274px] flex-shrink-0 overflow-hidden rounded-lg">
      <img src={industry.image} alt={industry.title} className="h-full w-full object-cover" />
      <div className="industry-overlay absolute inset-0 flex flex-col justify-between bg-black/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div>
          <h4 className="font-montserrat mb-4 text-[20px] font-bold text-white">
            {industry.title}
          </h4>
          <p className="font-arial text-[14px] leading-relaxed text-white">
            {industry.description}
          </p>
        </div>
        <a
          href={industry.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-arial text-[14px] font-semibold text-white underline transition-colors hover:text-gray-300"
        >
          Learn more
        </a>
      </div>
    </div>
  )
}
