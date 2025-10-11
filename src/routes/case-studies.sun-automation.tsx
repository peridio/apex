import { createFileRoute, Link } from '@tanstack/react-router'
import { Building2, MapPin, Package, Calendar } from 'lucide-react'
import {
  TwoColumnSection,
  RelatedCaseStudiesSection,
  type CaseStudy,
} from '@/components/case-studies'
import { SunAutomationLogo } from '@/components/svg/sun-automation-logo'

export const Route = createFileRoute('/case-studies/sun-automation')({
  component: Page,
})

function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <KeyBenefitsSection />
      <ChallengeSection />
      <SolutionSection />
      <ImplementationApproachSection />
      <ResultsSection />
      <FutureInnovationSection />
      <LongTermValueSection />
      <SunAutomationRelatedCaseStudies />
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
        className="relative z-10 mx-auto w-[620px] rounded-2xl px-10 py-10 lg:w-[950px]"
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
              <span className="text-black">Sun Automation</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-montserrat mb-6 text-[26px] leading-[1.2] font-bold tracking-[-0.05em] text-[#1a1a4d]">
              How SUN Automation Group Securely Manages AI-Enabled Manufacturing Equipment at Scale
            </h1>

            {/* Challenge Subheading */}
            <h2 className="font-space-grotesk mb-6 text-[16px] font-bold tracking-wide text-[#5F51FF] uppercase">
              Challenge: Managing and Updating AI-Enabled Manufacturing Equipment
            </h2>

            {/* Description */}
            <p className="font-space-grotesk mb-2 text-[14px] leading-[1.6] text-[#6E6E6E]">
              SUN Automation, a global leader in corrugated manufacturing equipment, is redefining
              the industry with its AI-enabled machines. But delivering advanced capabilities at
              scale comes with challenges—especially when managing secure, remote updates across
              hundreds of systems in diverse customer environments. Discover how SUN Automation
              partnered with Peridio to implement a comprehensive fleet management solution that
              keeps their cutting-edge machines running smoothly, securely, and efficiently.
            </p>

            {/* Logo at bottom */}
            <div className="mt-auto">
              <SunAutomationLogo width={100} height={45} className="text-[#6E6E6E]" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-[300px] flex-col">
            {/* Device Image */}
            <div className="z-10">
              <img
                src="/img/sun-automation-machine.png"
                alt="SUN Automation CoreStream Machine"
                className="mb-[-12px] h-auto w-full rounded-lg"
              />
            </div>

            {/* Factoids */}
            <div className="z-40 space-y-4 rounded-lg bg-[rgba(255,255,255,0.8)] p-4">
              <FactoidItem icon={Building2} label="Industry" value="Industrial IoT" />
              <FactoidItem icon={MapPin} label="Region" value="North America" />
              <FactoidItem icon={Package} label="Use Case" value="Optimization" />
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

function KeyBenefitsSection() {
  const benefits = [
    {
      title: 'Faster Deployments',
      description: 'Significantly reduced deployment time for AI-enabled manufacturing systems',
    },
    {
      title: 'Seamless Updates',
      description: 'Secure, reliable delivery of OTA updates across diverse fleet environments',
    },
    {
      title: 'Higher Uptime',
      description: 'Improved system availability with rapid, secure remote troubleshooting',
    },
    {
      title: 'Robust Security',
      description: 'Compliance with Tier 1 manufacturing security standards',
    },
  ]

  return (
    <div className="bg-black py-16">
      <div className="mx-auto px-4 md:max-w-[620px] lg:max-w-[950px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="font-space-grotesk flex h-[140px] w-full flex-col justify-start rounded-lg bg-white px-5 py-4 text-[14px] leading-[1.3] tracking-[-0.05em] text-black lg:w-[205px]"
      style={{
        boxShadow: '0px 0.783px 3.131px 0px #00000099',
      }}
    >
      <h3 className="mb-2 font-bold">{title}</h3>
      <p className="">{description}</p>
    </div>
  )
}

function ChallengeSection() {
  const content = (
    <>
      <p>
        <strong>Managing Advanced Industrial Systems at Scale</strong> SUN Automation Group, a
        global leader in corrugated manufacturing equipment, faced a complex challenge as they
        transformed their product line with embedded AI capabilities. Their new generation of
        machines required frequent updates to multiple components - from AI models to system
        software - while maintaining the strict security standards demanded by Tier 1 manufacturers.
        With hundreds of systems deployed across varying customer environments, they needed a robust
        solution for remote management and updates that wouldn't compromise operational security.
      </p>
    </>
  )

  return <TwoColumnSection title="Challenge" content={content} />
}

function SolutionSection() {
  const content = (
    <>
      <p className="mb-4">
        <strong>Comprehensive Fleet Management Platform</strong> Partnering with Peridio, SUN
        Automation implemented a secure fleet management solution that addressed their key
        requirements:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Multi-Component OTA Updates:</strong> Coordinated updates for Linux systems, AI
          models, and application software
        </li>
        <li>
          <strong>Secure Remote Access:</strong> Enterprise-grade remote access for troubleshooting
          and network configuration
        </li>
        <li>
          <strong>Fleet-Wide Management:</strong> Centralized control and monitoring of machines
          across different versions and environments
        </li>
        <li>
          <strong>Security Controls:</strong> Implementation of security measures meeting Tier 1
          manufacturing requirements
        </li>
        <li>
          <strong>Flexible Deployment:</strong> Support for various customer network configurations
          and security policies
        </li>
      </ul>
    </>
  )

  return <TwoColumnSection title="Solution" content={content} />
}

function ImplementationApproachSection() {
  const content = (
    <>
      <p className="mb-4">
        The solution was deployed with a focus on security and operational reliability:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Staged Rollouts:</strong> Systematic approach to deploying updates across the
          fleet
        </li>
        <li>
          <strong>Access Controls:</strong> Granular permissions and audit trails for remote access
        </li>
        <li>
          <strong>Version Management:</strong> Tracking and managing multiple product versions
          across the fleet
        </li>
        <li>
          <strong>Security Validation:</strong> Comprehensive testing process ensuring updates meet
          security requirements
        </li>
        <li>
          <strong>Customer Integration:</strong> Seamless integration with existing manufacturing
          environments
        </li>
      </ul>
    </>
  )

  return <TwoColumnSection title="Implementation Approach" content={content} />
}

function ResultsSection() {
  const results = [
    {
      title: 'Update Reliability',
      description: 'Consistent, secure delivery of system and AI model updates',
    },
    {
      title: 'Reduced Downtime',
      description: 'Faster troubleshooting through secure remote access',
    },
    {
      title: 'Resource Optimization',
      description: 'Efficient management of hundreds of deployed systems',
    },
    {
      title: 'Security Compliance',
      description: 'Maintained strict security standards required by Tier 1 manufacturers',
    },
    {
      title: 'Scalable Management',
      description: 'Successfully handles multiple product versions and deployment scenarios',
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
              <strong>Enhanced Operational Efficiency</strong> The implementation delivered
              significant improvements:
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

function FutureInnovationSection() {
  const content = (
    <>
      <p className="mb-4">
        SUN Automation continues to expand their capabilities with Peridio, focusing on:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Enhanced monitoring and reporting capabilities</li>
        <li>Advanced update orchestration features</li>
        <li>Extended security certifications for new market requirements</li>
      </ul>
    </>
  )

  return <TwoColumnSection title="Future Innovation" content={content} />
}

function LongTermValueSection() {
  const content = (
    <>
      <p>
        SUN Automation's implementation demonstrates how manufacturers can successfully manage
        AI-enabled industrial equipment at scale while maintaining strict security standards. Their
        success in enabling secure updates and remote access while ensuring operational reliability
        provides a blueprint for manufacturers looking to deploy and manage advanced industrial
        systems.
      </p>
    </>
  )

  return <TwoColumnSection title="Long-term Value" content={content} />
}

const caseStudies: CaseStudy[] = [
  {
    image: '/img/case-studies-granite.png',
    industry: 'Telecommunications',
    company: 'Granite',
    description:
      "Here's how Granite launched their EdgeBoot hardware line, enabling seamless remote diagnostics and unified customer management",
    link: '/case-studies/granite',
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
    image: '/img/case-studies-fellowes.png',
    industry: 'Consumer Electronics',
    company: 'Fellowes',
    description:
      "Discover how Fellowes leveraged Peridio's device infrastructure platform to streamline firmware delivery, enhancing product reliability and customer satisfaction.",
    link: '/case-studies/fellowes',
  },
]

function SunAutomationRelatedCaseStudies() {
  return <RelatedCaseStudiesSection caseStudies={caseStudies} />
}
