import { createFileRoute, Link } from '@tanstack/react-router'
import { Building2, MapPin, Package, Calendar } from 'lucide-react'
import {
  TwoColumnSection,
  RelatedCaseStudiesSection,
  type CaseStudy,
} from '@/components/case-studies'
import { FellowesLogo } from '@/components/svg/fellowes-logo'

export const Route = createFileRoute('/case-studies/fellowes')({
  component: Page,
})

function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <KeyBenefitsSection />
      <BackgroundSection />
      <ChallengesAndSolutionsSection />
      <HowFellowesUsesPeridioSection />
      <ResultsSection />
      <PartnershipSection />
      <FutureInnovationSection />
      <TestimonialSection />
      <CTASection />
      <FellowesRelatedCaseStudies />
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
        {/* Breadcrumbs */}
        <div className="font-space-grotesk mb-4 flex items-center gap-2 text-[14px] text-[#6E6E6E]">
          <Link to="/case-studies" className="text-sm hover:text-black">
            Case Studies
          </Link>
          <span>&gt;</span>
          <span className="text-black">Fellowes</span>
        </div>

        <div className="relative flex gap-6">
          {/* Left Column */}
          <div className="flex flex-1 flex-col">
            {/* Main Heading */}
            <h1 className="font-montserrat mb-6 text-[26px] leading-[1.2] font-bold tracking-[-0.05em] text-[#1a1a4d]">
              Fellowes Accelerates Product Innovation with Seamless OTA Updates and Fleet Management
            </h1>

            {/* Challenge Subheading */}
            <h2 className="font-space-grotesk mb-6 text-[16px] font-bold tracking-wide text-[#5F51FF] uppercase">
              Challenge: Managing Diverse Product Portfolio + Remote Debugging
            </h2>

            {/* Description */}
            <p className="font-space-grotesk mb-10 text-[14px] leading-[1.6] text-[#6E6E6E]">
              Fellowes, an established manufacturer delivering innovative connected air purification
              solutions spanning consumer and commercial markets, has been working with Peridio to
              manage their connected air purification products, which include a diverse lineup
              ranging from air purifiers to monitoring devices and display units from a single
              unified platform.
            </p>

            {/* Logo at bottom */}
            <div className="mt-auto">
              <FellowesLogo width={98} height={45} className="text-[#6E6E6E]" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-[300px] flex-col">
            {/* Device Image */}
            <div className="mb-8">
              <img
                src="/img/fellowes-air-purifier.png"
                alt="Fellowes Air Purifier"
                className="absolute top-[-50px] right-[-40px] -z-10 h-auto w-[300px]"
              />
            </div>

            {/* Factoids */}
            <div className="z-50 mt-34 space-y-4 rounded-lg bg-[#ffffffcc] p-4">
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

function KeyBenefitsSection() {
  const benefits = [
    {
      title: 'Diverse Product Lines',
      description: 'Successfully managing nine different models across multiple product categories',
    },
    {
      title: 'Unified Management',
      description: 'Single platform for OTA updates across all connected devices',
    },
    {
      title: 'Remote Debugging',
      description: 'Direct command-line access for efficient troubleshooting',
    },
    {
      title: 'Streamlined Workflow',
      description: 'Integrated CI/CD pipeline for automated firmware deployment',
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

function BackgroundSection() {
  const content = (
    <>
      <div>
        <h3 className="mb-2 font-bold">Background</h3>
        <p className="mb-4">
          <a
            href="https://www.fellowes.com/ca/en"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            Fellowes
          </a>{' '}
          has been working with Peridio to manage their connected air purification products, which
          include a diverse lineup ranging from air purifiers to monitoring devices and display
          units. The{' '}
          <strong>
            complexity of launching multiple product lines simultaneously required a robust and
            flexible platform
          </strong>{' '}
          to ensure seamless management of updates and fleet monitoring.
        </p>
        <p className="mb-4">
          "When we started this journey, we needed a platform that could do three essential things,"
          explains{' '}
          <a
            href="https://www.linkedin.com/in/mayjaykay/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            Michael Kelley
          </a>
          , Electrical Engineering & Compliance Manager at Fellowes. "First, we needed a secure way
          to manage unique identifiers for each product. Second, we needed reliable firmware
          management across our entire fleet. And finally, we needed robust remote access
          capabilities for troubleshooting. Peridio has delivered on all three fronts."
        </p>
        <p>
          This product range includes seven air purification units and a monitoring device called
          Signal. Their newest product, a relay gateway that enables integration with building
          management systems (BMS) through BACnet IP, demonstrates their continued innovation and
          expanding ecosystem of connected devices.
        </p>
      </div>
    </>
  )

  return <TwoColumnSection title="Background" content={content} />
}

function ChallengesAndSolutionsSection() {
  const content = (
    <>
      {/* Managing Diverse Product Portfolio */}
      <div>
        <h3 className="mb-2 font-bold">Managing Diverse Product Portfolio</h3>
        <p className="mb-4">
          Fellowes faced the challenge of managing{' '}
          <a
            href="https://blog.peridio.com/build-vs.-buy-the-strategic-impact-of-firmware-update-infrastructure-on-product-success"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            firmware updates
          </a>{' '}
          and remote access across nine different models with varying architectures and
          requirements. Peridio's unified platform enabled consistent management workflows across
          their entire ecosystem.
        </p>
        <p>
          "What made Peridio invaluable was its ability to bring everything together in one
          platform. Each product has different requirements, yet Peridio allows us to manage them
          all with the same workflows, same OTA processes, and same deployment strategies," explains{' '}
          <a
            href="https://www.linkedin.com/in/benjaminhoffman2/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            Ben Hoffman
          </a>
          , Senior Manager of Product Development at Fellowes.
        </p>
      </div>

      {/* Streamlined Firmware Deployment */}
      <div>
        <h3 className="mb-2 font-bold">Streamlined Firmware Deployment</h3>
        <p className="mb-4">
          The Fellowes team integrated{' '}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            GitHub
          </a>{' '}
          and{' '}
          <a
            href="https://circleci.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            CircleCI
          </a>{' '}
          with Peridio to create an automated pipeline for firmware deployment. This system
          automatically pushes verified firmware to Peridio while maintaining controlled
          distribution through deployment modules, allowing their team to stage updates and activate
          them precisely when needed.
        </p>
      </div>

      {/* Remote Debugging Capabilities */}
      <div>
        <h3 className="mb-2 font-bold">Remote Debugging Capabilities</h3>
        <p>
          Peridio's remote access capabilities provide Fellowes' development team with command-line
          access to devices in the field, enabling efficient troubleshooting without requiring
          product returns.
        </p>
        <p className="mt-2">
          "It gives our team command-line access that's practically indistinguishable from having
          the device right in front of us. When a device is experiencing issues in the field, we can
          diagnose and resolve problems without ever needing to have the product shipped back,"
          shares Michael.
        </p>
      </div>
    </>
  )

  return <TwoColumnSection title="Key Challenges and Solutions" content={content} />
}

function HowFellowesUsesPeridioSection() {
  const content = (
    <>
      <p className="mb-4">Fellowes leverages several key features of the Peridio platform:</p>

      {/* OTA Updates and Fleet Management */}
      <div>
        <h3 className="mb-2 font-bold">OTA Updates and Fleet Management</h3>
        <p>
          The primary use case for Fellowes is{' '}
          <a
            href="https://www.peridio.com/peridio-fleet"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            OTA updates
          </a>{' '}
          and fleet management. They've integrated this into their formal Engineering Change Order
          (ECO) process to ensure proper approvals before deploying updates to devices in the field.
        </p>
      </div>

      {/* Remote Access for Debugging */}
      <div>
        <h3 className="mb-2 font-bold">Remote Access for Debugging</h3>
        <p>
          The development team uses Peridio's remote access capabilities as their sole method for
          debugging devices remotely, significantly improving their ability to diagnose and resolve
          issues.
        </p>
      </div>

      {/* Integration with Development Workflow */}
      <div>
        <h3 className="mb-2 font-bold">Integration with Development Workflow</h3>
        <p>
          Fellowes has integrated Peridio into their development workflow, with automated processes
          pushing firmware updates from their CI/CD pipeline directly into the platform, creating a
          seamless connection between development and deployment.
        </p>
      </div>

      {/* Observability and Monitoring */}
      <div>
        <h3 className="mb-2 font-bold">Observability and Monitoring</h3>
        <p>
          While Fellowes currently uses{' '}
          <a
            href="https://grafana.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            Grafana
          </a>{' '}
          alongside Peridio for monitoring their fleet's firmware versions, they're exploring
          Peridio's{' '}
          <a
            href="https://blog.peridio.com/introducing-fleet-view"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            FleetView
          </a>{' '}
          that would provide these capabilities directly within the platform, further consolidating
          their tooling and improving visibility.
        </p>
      </div>
    </>
  )

  return <TwoColumnSection title="How Fellowes Uses Peridio" content={content} />
}

function ResultsSection() {
  const results = [
    {
      title: 'Simplified Management',
      description:
        'All devices with different requirements can be managed through a unified interface',
    },
    {
      title: 'Efficient Troubleshooting',
      description:
        'Remote access capabilities reduce the need for on-site visits or product returns',
    },
    {
      title: 'Streamlined Updates',
      description: 'Integrated CI/CD workflow ensures reliable and efficient firmware deployment',
    },
    {
      title: 'Scalable Architecture',
      description:
        'The platform easily accommodates new product lines as Fellowes continues to innovate',
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
              The implementation of Peridio has enabled Fellowes to successfully manage their
              diverse portfolio of connected products through a single platform, providing several
              key benefits:
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

function PartnershipSection() {
  const content = (
    <>
      <p className="mb-4">
        Through a strong partnership focused on responsive support and deep technical expertise,
        Peridio empowered Fellowes to successfully launch and manage a diverse portfolio of nine
        connected air purification products simultaneously on a single, unified platform.
      </p>
      <p className="mb-4">
        "The Peridio team has consistently been there when we needed them," Ben emphasizes. "Their
        responsiveness and technical expertise has been a huge competitive advantage for us. In the
        connected product space, having a partner who deeply understands both the hardware and
        software challenges is invaluable."
      </p>
      <p className="mb-4">
        Michael adds: "What stands out about Peridio is how seamlessly it fits into our development
        processes. It doesn't just solve our technical challenges—it does so in a way that enhances
        our workflow rather than disrupting it."
      </p>
      <p>
        Peridio's solution{' '}
        <strong>
          streamlined firmware updates and significantly reduced support complexity with robust
          remote debugging capabilities
        </strong>
        , enhancing Fellowes' support workflows and providing a competitive advantage. This
        collaborative approach provides Fellowes with the tools and confidence needed to ensure
        reliable operation while continuing to innovate.
      </p>
    </>
  )

  return <TwoColumnSection title="What Sets This Partnership Apart" content={content} />
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
            "The Peridio team has consistently been there when we needed them. Their responsiveness
            and technical expertise has been a huge competitive advantage for us. In the connected
            product space, having a partner who deeply understands both the hardware and software
            challenges is invaluable."
          </p>
          <footer className="text-[16px] text-[#5F51FF]">
            <a
              href="https://www.linkedin.com/in/benjaminhoffman2/"
              target="_blank"
              rel="noreferrer noopener"
              className="font-bold hover:underline"
            >
              Ben Hoffman
            </a>
            <span className="text-black"> | Senior Manager of Product Development</span>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

function FutureInnovationSection() {
  const content = (
    <>
      <p>
        Fellowes is looking forward to upgrading to newer versions of Peridio that provide enhanced
        features such as{' '}
        <a
          href="https://blog.peridio.com/introducing-fleet-view"
          target="_blank"
          rel="noreferrer noopener"
          className="text-[#5F51FF] underline"
        >
          fleet-wide visibility of firmware versions
        </a>{' '}
        and improved release distribution tracking. These capabilities will provide even greater
        insight into their device fleet and simplify management as they continue to scale.
      </p>
    </>
  )

  return <TwoColumnSection title="Future Innovation" content={content} />
}

function CTASection() {
  const content = (
    <>
      <p>
        We've helped Fellowes successfully manage multiple product lines through a unified platform.
        Whether you're launching your first connected product or managing a diverse portfolio of
        devices, we'd love to show you how Peridio can streamline your operations.{' '}
        <a
          href="https://www.peridio.com/contact"
          target="_self"
          className="text-[#5F51FF] underline"
        >
          Let's talk
        </a>{' '}
        about your needs and explore how we can help you achieve similar success.
      </p>
    </>
  )

  return <TwoColumnSection title="Ready to Deploy with Confidence?" content={content} />
}

function FellowesRelatedCaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      image: '/img/case-studies-granite.png',
      industry: 'Industrial IoT',
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
      image: '/img/case-studies-sun-automation.png',
      industry: 'Industrial IoT',
      company: 'Sun Automation',
      description:
        'Discover how SUN Automation securely manages AI-enabled manufacturing equipment while meeting strict Tier 1 security standards',
      link: '/case-studies/sun-automation',
    },
  ]

  return <RelatedCaseStudiesSection caseStudies={caseStudies} />
}
