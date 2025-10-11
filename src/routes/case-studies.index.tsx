import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/case-studies/')({
  component: Page,
})

const caseStudies = [
  {
    image: '/img/case-studies-granite.png',
    industry: 'Telecommunications',
    company: 'Granite',
    description:
      "Here's how Granite launched their EdgeBoot hardware line, enabling seamless remote diagnostics and unified customer management",
    link: '/case-studies/granite',
  },
  {
    image: '/img/case-studies-fellowes.png',
    industry: 'Consumer Electronics',
    company: 'Fellowes',
    description:
      "Discover how Fellowes leveraged Peridio's device infrastructure platform to streamline firmware delivery, enhancing product reliability and customer satisfaction.",
    link: '/case-studies/fellowes',
  },
  {
    image: '/img/case-studies-telly.png',
    industry: 'Consumer Electronics',
    company: 'Telly',
    description:
      'Learn how Telly transformed firmware updates into a strategic advantage for their revolutionary dual-screen smart TV experience.',
    link: '/case-studies/telly',
  },
  {
    image: '/img/case-studies-sun-automation.png',
    industry: 'Industrial IoT',
    company: 'SUN Automation',
    description:
      'Discover how SUN Automation securely manages AI-enabled manufacturing equipment while meeting strict Tier 1 security standards',
    link: '/case-studies/sun-automation',
  },
]

function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <CaseStudiesGrid />
      <CallToActionSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[535px] overflow-hidden bg-black lg:h-[650px]">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/case-studies-hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-[900px] px-4 text-center">
          <p className="font-space-grotesk text-light-purple-accent mb-2 text-[15px] font-bold uppercase">
            CASE STUDIES
          </p>

          <h1 className="font-montserrat mb-4 text-[34px] leading-[1] font-bold tracking-[-0.05em] text-white md:text-[46px] lg:text-[42px]">
            Built for the Real World:
            <br />
            Customer Success Stories
          </h1>

          <p className="font-space-grotesk mx-auto mb-8 max-w-[690px] text-[17px] leading-[1.6] text-white">
            Discover how engineering teams are transforming their firmware pipelines with Peridio's
            modern approach to OTA updates, secure boot, and fleet observability.
          </p>

          <div className="flex justify-center gap-4">
            <Button
              asChild
              variant="outline-transparent-secondary"
              className="w-[165px] border-white !text-sm lg:w-[180px]"
            >
              <Link to="/peridio-core">View features</Link>
            </Button>

            <Button asChild variant="primary" className="w-[165px] !text-sm lg:w-[180px]">
              <Link to="/partner-program">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseStudiesGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[900px] px-4">
        <div className="mb-12 text-center">
          <h2 className="font-montserrat text-[36px] font-bold text-black">
            Real stories from engineering teams
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              image={study.image}
              industry={study.industry}
              company={study.company}
              description={study.description}
              link={study.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({
  image,
  industry,
  company,
  description,
  link,
}: {
  image: string
  industry: string
  company: string
  description: string
  link: string
}) {
  return (
    <Link
      to={link}
      className="group block h-full overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-[250px] w-full overflow-hidden">
        <img
          src={image}
          alt={company}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Industry Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="font-space-grotesk inline-block rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-gray-700">
            {industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6">
        {/* Company Name */}
        <h3 className="font-montserrat mb-3 text-[24px] font-bold text-black">{company}</h3>

        {/* Description */}
        <p className="font-space-grotesk text-[14px] leading-[1.5] text-gray-600">{description}</p>
      </div>
    </Link>
  )
}

function CallToActionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
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

      <div className="relative z-10 mx-auto max-w-[750px] px-4 text-center">
        {/* Small header */}
        <h3 className="font-space-grotesk text-peridio-purple mb-6 text-[16px] font-bold uppercase">
          BOOK A DEMO
        </h3>

        {/* Main heading */}
        <h2 className="font-montserrat mb-12 text-[32px] leading-[1.15] font-bold tracking-[-2px] text-black lg:text-[58px]">
          Explore how Peridio can help your use case
        </h2>

        {/* CTA Button */}
        <Button asChild variant="primary" size="xl" className="w-[220px] md:w-[170px]">
          <Link to="/book-a-meeting">Let's talk</Link>
        </Button>
      </div>
    </section>
  )
}
