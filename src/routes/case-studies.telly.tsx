import { createFileRoute, Link } from '@tanstack/react-router'
import { Building2, MapPin, Package, Calendar } from 'lucide-react'
import {
  TwoColumnSection,
  RelatedCaseStudiesSection,
  type CaseStudy,
} from '@/components/case-studies'
import { TellyLogo } from '@/components/svg/telly-logo'

export const Route = createFileRoute('/case-studies/telly')({
  component: Page,
})

function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <KeyStatsSection />
      <BackgroundSection />
      <KeyChallengesAndSolutionsSection />
      <HowTellyUsesPeridioSection />
      <ResultsSection />
      <AdviceForTeamsStartingOutSection />
      <LookingAheadSection />
      <TestimonialSection />
      <TellyRelatedCaseStudiesSection />
    </div>
  )
}

function HeaderSection() {
  return (
    <div className="relative flex min-h-[750px] items-center justify-center overflow-hidden py-16">
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

      {/* Content Card */}
      <div
        className="relative z-10 mx-auto w-[620px] rounded-2xl px-10 py-8 lg:w-[950px]"
        style={{
          background:
            'radial-gradient(circle at 100% 0%, rgba(95,81,255,0.1) 0%, #FFFFFF 41.317160087719294%, #F7F7F7 100%)',
        }}
      >
        <div className="flex gap-6">
          {/* Left Column */}
          <div className="flex flex-1 flex-col">
            {/* Breadcrumbs */}
            <div className="font-space-grotesk mb-4 flex items-center gap-2 text-[14px] text-[#6E6E6E]">
              <Link to="/case-studies" className="text-sm hover:text-black">
                Case Studies
              </Link>
              <span>&gt;</span>
              <span className="text-black">Telly</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-montserrat mb-6 text-[26px] leading-[1.2] font-bold tracking-[-0.05em] text-[#1a1a4d]">
              How Telly Masters Rapid Software Delivery to Power the Next Generation of Consumer
              Electronics
            </h1>

            {/* Challenge Subheading */}
            <h2 className="font-space-grotesk mb-6 text-[16px] font-bold tracking-wide text-[#5F51FF] uppercase">
              Challenge: Managing Complex Software Updates at Scale
            </h2>

            {/* Description */}
            <p className="font-space-grotesk mb-0 text-[16px] leading-[1.6] text-[#6E6E6E]">
              Telly has established a high-velocity development environment where dozens of software
              engineers work across multiple release trains, shipping updates to a massive fleet of
              devices. By implementing Peridio's platform, they've achieved what would typically
              require a dedicated team of engineers with just 1.5 engineers supporting the
              integration, allowing them to focus resources on product innovation rather than
              infrastructure maintenance.
            </p>

            {/* Logo at bottom */}
            <div className="mt-auto">
              <TellyLogo width={98} height={45} className="text-red-500" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-[300px] flex-col">
            {/* Device Image */}
            <div className="mb-2">
              <img
                src="/img/telly-tv.png"
                alt="Telly Dual-Screen Smart TV"
                className="h-auto w-full rounded-lg"
              />
            </div>

            {/* Factoids */}
            <div className="space-y-4 rounded-lg bg-[#ffffffcc] p-4">
              <FactoidItem icon={Building2} label="Industry" value="Consumer Electronics" />
              <FactoidItem icon={MapPin} label="Region" value="North America" />
              <FactoidItem icon={Package} label="Use Case" value="Peridio Fleet" />
              <FactoidItem icon={Calendar} label="Customer Since" value="2023" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FactoidItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-5 w-5 text-[#6E6E6E]" />
      <div>
        <div className="font-space-grotesk text-[12px] text-[#6E6E6E]">{label}</div>
        <div className="font-space-grotesk text-[14px] font-semibold text-black">{value}</div>
      </div>
    </div>
  )
}

function KeyStatsSection() {
  const stats = [
    {
      headline: '100K+',
      description: 'Device Fleet: 100,000+ TVs in production with rapid growth',
    },
    {
      headline: '95%',
      description: 'Update Success: 95% completion rate within 7 days',
    },
    {
      headline: '1x Daily',
      description: 'Update Velocity: Multiple updates shipped internally daily',
    },
    {
      headline: '1x',
      description: 'Production Cadence: Monthly updates to customer devices',
    },
  ]

  return (
    <div className="bg-black py-16">
      <div className="mx-auto px-4 md:max-w-[620px] lg:max-w-[950px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} headline={stat.headline} description={stat.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

function StatCard({ headline, description }: { headline: string; description: string }) {
  return (
    <div
      className="font-space-grotesk flex h-[200px] w-full flex-col justify-center rounded-lg bg-white px-5 py-5 text-center lg:w-[205px]"
      style={{
        boxShadow: '0px 0.783px 3.131px 0px #00000099',
      }}
    >
      <h3 className="mb-2 text-[36px] leading-none font-bold text-[#5F51FF]">{headline}</h3>
      <p className="text-[14px] leading-[1.3] tracking-[-0.05em] text-black">{description}</p>
    </div>
  )
}

function BackgroundSection() {
  const content = (
    <>
      <p className="mb-4">
        Telly, a flagship Peridio customer, has revolutionized the TV experience with their
        innovative dual-screen design that provides more than just entertainment. Their platform
        offers:
      </p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>The primary top screen delivers sports, entertainment, and movies</li>
        <li>
          The secondary bottom screen (the smart screen) brings all new experiences to the living
          room like video calling, news, weather and sports updates, video games, and a fitness
          studio without interrupting the primary content.
        </li>
      </ol>
      <p className="my-4">
        According to <strong>Eric Loes, Head of Software Engineering at Telly</strong>: "You're only
        as successful as getting your software out to your hardware." This philosophy shaped their
        entire approach to product development.
      </p>
      <p>
        Telly recognized early on that their success would be determined by their ability to ship
        exceptional software to their hardware fleet quickly and reliably. With ambitious plans to
        scale their device fleet into the hundreds of thousands, building a world-class software
        delivery system wasn't a nice-to-have—it was a fundamental requirement.
      </p>
    </>
  )

  return <TwoColumnSection title="Background" content={content} />
}

function KeyChallengesAndSolutionsSection() {
  const content = (
    <>
      {/* Build vs. Buy Decision */}
      <div>
        <h3 className="mb-2 font-bold">Build vs. Buy Decision</h3>
        <p className="mb-4">
          One of Telly's earliest strategic decisions was whether to build their firmware management
          system in-house or partner with a specialized platform. According to Eric: "It's hard to
          sell to finance or your CEO why you need to invest engineering and resourcing into a
          reliable system to deploy. Firmware update infrastructure is more or less a separate
          product line that needs maintaining."
        </p>
        <p>
          While a basic AWS IoT implementation might have seemed sufficient initially, Telly
          recognized that production-ready features at scale would require substantial ongoing
          investment. Eric's prior experience at Vizio, where similar systems occupied many
          engineers—particularly for a software app store—convinced him a better approach was
          needed.
        </p>
      </div>

      {/* Managing High-Volume Software Development */}
      <div>
        <h3 className="mb-2 font-bold">Managing High-Volume Software Development</h3>
        <p className="mb-4">
          With dozens of software engineers working on multiple release trains across 20+ unique
          applications, Telly required a sophisticated system that could:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Enable high-velocity development and testing workflows</li>
          <li>Safely deploy updates to customer devices on a regular cadence</li>
          <li>Track update success rates across their growing device fleet</li>
          <li>Optimize bandwidth usage with targeted component updates</li>
        </ul>
        <p className="mt-4">
          Peridio's platform provided the comprehensive solution they needed, allowing their
          engineering and test teams to ship updates internally multiple times daily while
          maintaining a cadence of monthly updates to their production fleet.
        </p>
      </div>
    </>
  )

  return <TwoColumnSection title="Key Challenges & Solutions" content={content} />
}

function HowTellyUsesPeridioSection() {
  const content = (
    <>
      <p className="mb-4">
        Telly was one of Peridio's earliest customers, and their feedback has been instrumental in
        shaping the platform's capabilities. Today, they leverage advanced features to support their
        unique business model and development velocity.
      </p>

      {/* Cohort-Based Release Management */}
      <div>
        <h3 className="mb-2 font-bold">Cohort-Based Release Management</h3>
        <p className="mb-4">
          Telly has implemented a sophisticated five-tier cohort system that enables controlled
          rollouts and comprehensive testing:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Nightly Debug Cohort:</strong> Daily builds for engineering testing
          </li>
          <li>
            <strong>Nightly User Cohort:</strong> Production-like testing without debug features
          </li>
          <li>
            <strong>Release User Debug Cohort:</strong> Release candidate validation
          </li>
          <li>
            <strong>Public Beta Release User Cohort:</strong> Early adopter feedback collection
          </li>
          <li>
            <strong>Partner Release Debug Cohort:</strong> Third-party vendor integration testing
          </li>
        </ul>
        <p className="mt-4">
          This system allows Telly to create temporary release cohorts for specific feature testing
          or run parallel release trains, ensuring maximum development velocity without compromising
          stability.
        </p>
      </div>

      {/* Advanced Release Management */}
      <div>
        <h3 className="mb-2 font-bold">Advanced Release Management</h3>
        <p className="mb-4">
          Telly leverages key aspects of the Peridio platform for their operations:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Phased, Scheduled Releases:</strong> Controlled deployment to specific user
            segments
          </li>
          <li>
            <strong>Device Cohorts with Tag-Based Rollout:</strong> Precise targeting of updates
          </li>
          <li>
            <strong>Component-Based Updates:</strong> Optimized bandwidth usage and reduced package
            sizes
          </li>
          <li>
            <strong>Visualization and Analytics:</strong> Real-time insights into fleet performance
          </li>
          <li>
            <strong>Differential Updates:</strong> Managing 20+ unique applications across their TV
            ecosystem
          </li>
        </ul>
        <p className="mt-4">
          As Eric explains: "When you scale out to 100,000, 200,000, 300,000+ devices, the need for
          differential updates and component updates becomes critical. The ability to update
          individual components rather than entire firmware—showing exactly what changed, why it
          changed, and what data transfer is happening—drives cost savings at scale."
        </p>
      </div>

      {/* Customer Support Integration */}
      <div>
        <h3 className="mb-2 font-bold">Customer Support Integration</h3>
        <p className="mb-4">
          The integration capabilities of Peridio's platform have been particularly valuable in
          bridging Telly's engineering and customer support teams. According to Eric: "For a
          hardware/software product like ours, you absolutely need your support team and your
          engineering team working hand-in-hand. I've seen this problem before—when those teams
          don't communicate effectively, it's a disaster."
        </p>
        <p>
          Peridio's APIs and webhooks enable Telly to provide their support team with direct access
          to device information and update status, creating a seamless connection between what
          customers experience and what engineers are working on.
        </p>
      </div>
    </>
  )

  return <TwoColumnSection title="How Telly Uses Peridio" content={content} />
}

function ResultsSection() {
  const results = [
    {
      title: 'Update Success Rate',
      description:
        'An industry-leading 95% of devices complete updates within just 7 days of release (with plans to push this to 98%)',
    },
    {
      title: 'Monthly Production Updates',
      description: 'Consistent delivery to their entire device fleet',
    },
    {
      title: 'Multiple Daily Internal Builds',
      description: 'Supporting rapid development cycles',
    },
    {
      title: 'Streamlined Engineering',
      description: 'Managed with just 1.5 dedicated engineers',
    },
  ]

  return (
    <div className="bg-white py-16">
      <div
        className="mx-auto rounded-2xl px-4 py-16 md:max-w-[620px] lg:max-w-[820px]"
        style={{
          background:
            'linear-gradient(315deg, #3F36AA 0%, #000000 100%, #000000 44.627192982456144%)',
        }}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left Column - Title */}
          <div className="lg:w-[150px]">
            <h2 className="font-space-grotesk text-[20px] font-bold text-white">Results</h2>
          </div>

          {/* Right Column - Content */}
          <div className="font-space-grotesk flex-1 text-[16px] leading-[1.6] text-white">
            <p className="mb-6">
              The implementation of Peridio has delivered impressive results for Telly:
            </p>

            {/* Result Cards */}
            <div className="mb-6 space-y-4">
              {results.map((result, index) => (
                <ResultCard key={index} title={result.title} description={result.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResultCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="font-space-grotesk rounded-lg bg-white px-6 py-4">
      <h3 className="mb-1 text-[16px] font-bold text-[#5F51FF]">{title}</h3>
      <p className="text-[16px] leading-[1.6] text-black">{description}</p>
    </div>
  )
}

function AdviceForTeamsStartingOutSection() {
  const content = (
    <>
      <p className="mb-4">
        Based on their experience, Telly offers valuable advice for teams implementing cohort-based
        deployment strategies:
      </p>
      <ul className="list-disc space-y-3 pl-6">
        <li>
          <strong>Establish a Flexible Foundation:</strong> Implement a versatile cohort and tagging
          system early to support future growth
        </li>
        <li>
          <strong>Start Small and Controlled:</strong> Begin with limited rollouts before expanding
          to your full device fleet
        </li>
        <li>
          <strong>Optimize Update Delivery:</strong> Break down large firmware packages into
          components for efficient distribution
        </li>
        <li>
          <strong>Automate from Day One:</strong> Build automation into your processes from the
          beginning
        </li>
        <li>
          <strong>Prioritize Monitoring:</strong> Focus particularly on update success rates to
          catch issues early
        </li>
      </ul>
      <p className="mt-6">
        As Eric recommends: "You want to ensure your own success. The easiest success is bundle
        everything together and get that going, make sure that you're seeing updates within your KPI
        metrics, and then once you get that reliability, you can start enhancing it."
      </p>
    </>
  )

  return <TwoColumnSection title="Advice for Teams Starting Out" content={content} />
}

function LookingAheadSection() {
  const content = (
    <>
      <p className="mb-4">
        Telly continues to push the boundaries of what's possible with their firmware management
        approach. Their upcoming plans include silent updates, enhanced release note automation, and
        expanded testing capabilities.
      </p>
      <p>
        Through their ongoing collaboration with Peridio, they've transformed firmware updates from
        a necessary maintenance task into a strategic advantage. With 95% of their device fleet
        successfully updating within a week of release, they can confidently deliver new features
        and improvements that enhance the user experience with each update cycle.
      </p>
    </>
  )

  return <TwoColumnSection title="Looking Ahead" content={content} />
}

function TestimonialSection() {
  return (
    <div className="bg-white py-16">
      <div
        className="mx-auto rounded-2xl px-8 py-12 md:max-w-[620px] lg:max-w-[950px] lg:px-16 lg:py-16"
        style={{
          backgroundColor: 'rgba(247,247,247, 1)',
        }}
      >
        <blockquote className="font-space-grotesk text-[18px] leading-[1.6] text-black lg:text-[22px]">
          <p className="mb-6 font-bold">
            "It's hard to sell to finance or your CEO why you need to invest engineering and
            resourcing into a reliable system to deploy… Firmware update infrastructure is more or
            less a separate product line that needs maintaining."
          </p>
          <footer className="text-[16px] text-[#5F51FF]">
            <span className="font-bold">Eric Loes</span>
            <span className="text-black"> | Head of Software Engineering</span>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

const tellyCaseStudies: CaseStudy[] = [
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
    image: '/img/sun-automation-machine.png',
    industry: 'Industrial IoT',
    company: 'SUN Automation',
    description:
      'Discover how SUN Automation securely manages AI-enabled manufacturing equipment while meeting strict Tier 1 security standards',
    link: '/case-studies/sun-automation',
  },
]

function TellyRelatedCaseStudiesSection() {
  return <RelatedCaseStudiesSection caseStudies={tellyCaseStudies} />
}
