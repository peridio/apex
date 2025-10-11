import { createFileRoute, Link } from '@tanstack/react-router'
import TrustedPartnerSection from '@/components/trusted-partner-section'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/long-term-support')({
  component: Page,
})

function Page() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <TrustedPartnerSection />
      <Maintenance />
      <AvailableTiers />
      <BookDemoSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden bg-black">
      <div className="absolute inset-0 h-full w-full">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="/img/long-term-support/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-[440px] px-6 text-center sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
          <p className="font-space-grotesk text-light-purple-accent mx-auto mt-16 mb-6 text-[15px] font-bold uppercase">
            Long Term Support (LTS)
          </p>

          <h1 className="font-montserrat mx-auto mb-4 max-w-[680px] text-[24px] leading-[1] font-bold tracking-[-0.05em] text-white md:text-[52px]">
            Enterprise-grade support for the entire stack
          </h1>

          <p className="font-space-grotesk mx-auto mb-4 max-w-[600px] text-[14px] leading-[1.6] font-normal text-white">
            We provide ongoing security patching, maintenance, and expert assistance, guaranteeing
            the stability and security of your fleet for the long haul.
          </p>

          <div className="flex justify-center gap-4">
            <Button
              asChild
              variant="secondary"
              className="w-[165px] !text-sm md:w-[180px]"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid white',
              }}
            >
              <Link to="/contact">Get Started</Link>
            </Button>

            <Button asChild variant="primary" className="w-[165px] !text-sm md:w-[180px]">
              <Link to="/book-a-meeting">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Maintenance() {
  return (
    <div className="mx-auto py-16 md:max-w-[650px] lg:max-w-[900px]">
      <h2 className="font-montserrat mb-12 text-center text-[36px] leading-[1.2] font-bold tracking-[-0.05em] lg:text-[38px]">
        OS Maintenance Without
        <br />
        embedded products
      </h2>

      <div className="flex flex-col justify-center gap-[30px] px-6 md:px-0 lg:flex-row">
        <ProductCard
          image="/img/long-term-support/maintained-base-os.png"
          title="Maintained Base OS + Package Feeds"
          description="Continuous delivery of security patches, CVE fixes, and dependency updates."
        />

        <ProductCard
          image="/img/home-peridio-core.png"
          title="Peridio Core"
          description="Access Peridio Core for device management and monitoring with visibility, control, and reliability at scale."
        />

        <ProductCard
          image="/img/long-term-support/validated-compatibility.png"
          title="Validated Compatibility"
          description="Hardware-in-the-loop CI/CD ensures every release is tested against specific SoCs and supported integrations."
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
    <div className="flex flex-col items-center rounded-2xl border border-[#27272a] bg-transparent px-[40px] py-[25px] sm:flex-row sm:items-start lg:w-[280px] lg:flex-col lg:items-center">
      <div className="mb-4 block sm:hidden lg:block">
        <img src={image} alt={title} className="h-20 w-20 object-contain" />
      </div>

      <h3 className="font-montserrat mb-4 text-center text-[14px] font-bold tracking-wider text-white uppercase sm:w-[300px] lg:w-auto">
        {title}
      </h3>

      <div className="flex flex-grow flex-col">
        <div className="text-light-gray font-arial text-center text-[14px] sm:text-left lg:text-center">
          {description}
        </div>
      </div>
    </div>
  )
}

function AvailableTiers() {
  return (
    <section className="relative min-h-[435px] overflow-hidden bg-black py-16">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(360deg, #FFFFFF 0%, #5F51FF 25.64418859649123%, #000000 60.97519188596491%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <h2 className="font-montserrat mb-12 text-center text-[36px] leading-[1.2] font-bold tracking-[-0.05em] text-white lg:text-[42px]">
          Available Tiers
        </h2>

        <div className="flex flex-col gap-6 md:flex-row md:justify-center">
          <TierCard
            title="STANDARD LTS"
            duration="4 YEARS"
            description="Aligned with Yocto LTS. Includes ongoing patching, maintenance, and support."
          />

          <TierCard
            title="EXTENDED LTS"
            duration="5 YEARS"
            description="Adds hardware validation and critical CVE patching for extended product lifecycles."
          />

          <TierCard
            title="PREMIUM LTS"
            duration="10 YEARS"
            description="Roadmap-aligned support with proactive validation and upgrade guidance for mission-critical deployments."
          />
        </div>
      </div>
    </section>
  )
}

function TierCard({
  title,
  duration,
  description,
}: {
  title: string
  duration: string
  description: string
}) {
  return (
    <div
      className="flex flex-col rounded-2xl p-8 text-center sm:mx-auto sm:w-[375px] md:text-left lg:w-[255px]"
      style={{ background: 'linear-gradient(135deg, #FFFFFF 50.7092927631579%, #CAC5FF 100%)' }}
    >
      <h3 className="font-space-grotesk text-peridio-purple mb-2 text-[16px] font-bold tracking-wide uppercase">
        {title}: <span className="font-normal">{duration}</span>
      </h3>

      <p className="font-space-grotesk text-medium-gray text-[14px] leading-relaxed">
        {description}
      </p>
    </div>
  )
}

function BookDemoSection() {
  return (
    <section className="relative min-h-[500px] overflow-hidden bg-white py-20">
      {/* Circuit Pattern Background Image */}
      <img
        src="/img/circuit-pattern.png"
        alt="Circuit pattern background"
        className="absolute bottom-0 left-1/2"
        style={{
          width: '554px',
          height: '509px',
          objectFit: 'cover',
          zIndex: 0,
          transform: 'translate(-50%, 35%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-4 text-center">
        {/* Main heading */}
        <h2 className="font-montserrat mb-6 text-[24px] leading-[1.15] font-[700] tracking-[-2px] text-black md:text-[36px] lg:text-[42px]">
          Guaranteed stability and security—
          <br />
          without the maintenance burden
        </h2>

        <p className="font-space-grotesk text-medium-gray mb-10 text-[14px] leading-relaxed">
          Choose the level of support that matches your product lifecycle
        </p>

        {/* CTA Button */}
        <Button asChild variant="primary" size="xl" className="w-[220px] md:w-[170px]">
          <Link to="/book-a-meeting">Talk to Us About LTS</Link>
        </Button>
      </div>
    </section>
  )
}
