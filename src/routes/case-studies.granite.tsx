import { createFileRoute, Link } from '@tanstack/react-router'
import { Building2, MapPin, Package, Calendar } from 'lucide-react'
import { TwoColumnSection } from '@/components/case-studies'
import { GraniteLogo } from '@/components/svg/granite-logo'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/case-studies/granite')({
  component: Page,
})

function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSection />
      <KeyBenefitsSection />
      <ChallengesAndSolutionsSection />
      <HowGraniteUsesPeridioSection />
      <ResultsSection />
      <LookingAheadSection />
      <TestimonialSection />
      <RelatedCaseStudiesSection />
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
          <span className="text-black">Granite</span>
        </div>

        <div className="flex gap-6">
          {/* Left Column */}
          <div className="flex flex-1 flex-col">
            {/* Main Heading */}
            <h1 className="font-montserrat mb-6 text-[26px] leading-[1.2] font-bold tracking-[-0.05em] text-[#1a1a4d]">
              How Granite Telecommunications Revolutionizes Device Management with OTA Updates and
              Remote Access
            </h1>

            {/* Challenge Subheading */}
            <h2 className="font-space-grotesk mb-6 text-[16px] font-bold tracking-wide text-[#5F51FF] uppercase">
              Challenge: Enabling Secure, Scalable OTA Updates and Remote Access
            </h2>

            {/* Description */}
            <p className="font-space-grotesk mb-10 text-[14px] leading-[1.6] text-[#6E6E6E]">
              Granite Telecommunications, a $2 billion telecommunications company with nearly 2,000
              employees, has been a leader in providing voice, internet, and network management
              services to businesses across the United States. When COVID-related supply chain
              constraints made traditional Cisco routers difficult to source, Granite realized they
              could better serve their customers through the development of their own hardware
              solution.
            </p>

            {/* Logo at bottom */}
            <div className="mt-auto">
              <GraniteLogo width={98} height={45} className="text-[#6E6E6E]" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-[300px] flex-col">
            {/* Device Image */}
            <div className="mb-8">
              <img
                src="/img/granite-device.png"
                alt="Granite Edgeboost Device"
                className="h-auto w-full"
              />
            </div>

            {/* Factoids */}
            <div className="space-y-4 rounded-lg bg-[#ffffffcc] p-4">
              <FactoidItem icon={Building2} label="Industry" value="Telecommunications" />
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
      title: 'Device Managed at Scale',
      description: 'Thousands of edgeboot devices deployed and growing rapidly',
    },
    {
      title: 'Accelerated Development',
      description: 'Independent teams deploy updates without bottlenecks, speeding time-to-market',
    },
    {
      title: 'Empowered Teams',
      description:
        'Product and non-technical staff fully operate the platform for updates and troubleshooting',
    },
    {
      title: 'Remote Diagnostics',
      description:
        'Secure command-line access enables fast, on-demand troubleshooting without returns',
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

function ChallengesAndSolutionsSection() {
  const content = (
    <>
      {/* Device Management and OTA Updates */}
      <div>
        <h3 className="mb-2 font-bold">Device Management and OTA Updates</h3>
        <p className="mb-4">
          When building their original product,{' '}
          <a
            href="https://www.granitenet.com/"
            target="_self"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            Granite
          </a>{' '}
          knew that device management and software updates would be critical requirements they
          didn't want to develop in-house. Peridio provided a comprehensive solution that enabled
          secure updates across their fleet of{' '}
          <a
            href="https://www.granitenet.com/solutions/granite-labs/edgeboot/"
            target="_self"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            edgebootPro devices
          </a>
          .
        </p>
        <p>
          "One of our primary requirements was a robust device management platform that could scale
          with our growing business," explains{' '}
          <a
            href="https://www.linkedin.com/in/jessicalaurenshapiro/"
            target="_self"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            Jess Shapiro
          </a>
          , Manager of Technology Products, PMO at Granite. "We needed a solution that would allow
          us to manage updates efficiently while maintaining the flexibility to support our diverse
          customer base."
        </p>
      </div>

      {/* Secure Remote Access */}
      <div>
        <h3 className="mb-2 font-bold">Secure Remote Access</h3>
        <p className="mb-4">
          The ability to manage secure remote access for customers was essential, as diagnosing and
          troubleshooting local network configurations was one of the most requested features for
          their products.
        </p>
        <p>
          Peridio's platform provides Granite with direct command-line access to devices in the
          field, enabling rapid troubleshooting without physical access. This capability has become
          a cornerstone of their support operations, allowing them to diagnose and resolve issues
          quickly without requiring device returns.
        </p>
      </div>

      {/* Team Collaboration */}
      <div>
        <h3 className="mb-2 font-bold">Team Collaboration</h3>
        <p>
          Granite needed a{' '}
          <a
            href="https://www.peridio.com/peridio-fleet"
            target="_self"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            firmware management platform
          </a>{' '}
          accessible to their entire technology team, not just senior engineers. Peridio's
          user-friendly interface provided a solution that both technical and non-technical team
          members could effectively utilize.
        </p>
      </div>
    </>
  )

  return <TwoColumnSection title="Key Challenges and Solutions" content={content} />
}

function HowGraniteUsesPeridioSection() {
  const content = (
    <>
      <p className="mb-4">
        Granite leverages several key features of the Peridio platform to manage their edgebootPro
        device fleet:
      </p>

      {/* OTA Updates and Component-Level Management */}
      <div>
        <h3 className="mb-2 font-bold">OTA Updates and Component-Level Management</h3>
        <p>
          Peridio's cloud composability features allow Granite to update different components of
          their system independently, enabling their various development teams to work at their own
          pace without waiting for integration cycles. By implementing a solution that allows for
          component-level updates, Granite has avoided having development teams bottlenecked by each
          other's release schedules.
        </p>
      </div>

      {/* Remote Access and Troubleshooting */}
      <div>
        <h3 className="mb-2 font-bold">Remote Access and Troubleshooting</h3>
        <p>
          The Peridio platform provides Granite with direct command-line access to devices in the
          field, enabling rapid troubleshooting without physical access. The team can check status
          information, monitor LTE signal strength, restart network services, or stop specific
          processes as needed – significantly faster than going through their customer-facing
          portal.
        </p>
      </div>

      {/* Integration with Customer-Facing Platform */}
      <div>
        <h3 className="mb-2 font-bold">Integration with Customer-Facing Platform</h3>
        <p>
          Granite has seamlessly integrated Peridio with their own customer-facing management
          platform, creating a unified experience for customers while leveraging Peridio's powerful
          backend capabilities. Their web interface incorporates Peridio's functionality, allowing
          customers to access console sessions, view device status, and{' '}
          <a
            href="https://blog.peridio.com/build-vs.-buy-the-strategic-impact-of-firmware-update-infrastructure-on-product-success"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#5F51FF] underline"
          >
            manage firmware updates
          </a>
          .
        </p>
      </div>

      {/* Fleet Management and Reporting */}
      <div>
        <h3 className="mb-2 font-bold">Fleet Management and Reporting</h3>
        <p>
          Granite utilizes Peridio's APIs to extract vital information about their device fleet,
          enabling them to track firmware versions, connection status, and other critical metrics
          for proactive management of their entire deployment.
        </p>
      </div>
    </>
  )

  return <TwoColumnSection title="How Granite Uses Peridio" content={content} />
}

function ResultsSection() {
  const results = [
    {
      title: 'Accelerated Development',
      description: 'Independent teams deploy updates faster with no bottlenecks',
    },
    {
      title: 'Enhanced Team Efficiency',
      description: 'Easy-to-use platform frees engineers to focus on innovation',
    },
    {
      title: 'Improved Customer Support',
      description: 'Remote access enables quick troubleshooting without returns or visits',
    },
    {
      title: 'Scalable Architecture',
      description: 'Supports rapid growth with thousands of devices deployed monthly',
    },
    {
      title: 'Streamlined Updates',
      description: 'CI/CD integration ensures reliable, tested firmware deployments',
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
              The implementation of Peridio has enabled Granite to rapidly scale their edgebootPro
              product line while maintaining control over their firmware and device management
              processes. Key results include:
            </p>

            {/* Result Cards */}
            <div className="mb-6 space-y-4">
              {results.map((result, index) => (
                <ResultCard key={index} title={result.title} description={result.description} />
              ))}
            </div>

            <p>
              As Granite continues to grow their edgebootPro product line, the Peridio platform
              provides the foundation for managing this expanding ecosystem of devices while
              maintaining high quality and reliability standards.
            </p>
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

function LookingAheadSection() {
  const content = (
    <>
      <p className="mb-4">
        Granite is continuously exploring Peridio's advanced capabilities to further enhance their
        device management:
      </p>

      {/* Cohort Management */}
      <div>
        <h3 className="mb-2 font-bold">Cohort Management</h3>
        <p>
          Through leveraging Peridio's cohort-based deployment system, Granite can isolate and
          target devices specific to the account or SLAs they have in place for a given customer.
          This ensures firmwares are accurately tested in development/QA dedicated cohorts before
          deployment, creating a smooth, error-free update experience for all customers.
        </p>
      </div>

      {/* Permissions and Attribute-Based Access Control */}
      <div>
        <h3 className="mb-2 font-bold">Permissions and Attribute-Based Access Control</h3>
        <p>
          Peridio's permission controls give Granite's entire team access to a unified platform
          while ensuring operators are granted "permissions of least privilege." This principle
          means giving user accounts only those privileges essential to perform their intended
          functions. For example, support team members have rights to access diagnostics without the
          ability to push firmware updates, protecting both operations and customers from potential
          service disruptions.
        </p>
      </div>

      {/* Differential Updates */}
      <div>
        <h3 className="mb-2 font-bold">Differential Updates</h3>
        <p>
          With Peridio's differential update capabilities, Granite can dramatically reduce firmware
          package sizes by only sending changed portions of code. This makes updates more reliable
          over LTE connections and reduces bandwidth costs as their device fleet continues to grow.
        </p>
      </div>

      {/* Expanded Workflow Capabilities */}
      <div>
        <h3 className="mb-2 font-bold">Expanded Workflow Capabilities</h3>
        <p>
          Peridio's enhanced workflows can integrate with peridio to add/remove tags to devices or
          move them to different cohorts, giving granite the ability to automate the progression of
          devices from manufacturing, provisioning and association to a given customer account.
        </p>
      </div>

      <p className="mt-4">
        Peridio's platform and collaborative partnership enabled Granite Telecommunications to
        successfully launch and scale its new edgebootPro hardware line amidst supply chain
        challenges.
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
          <p className="mb-6">
            "The most important factor in any technology partnership is having a vendor who takes
            our business as seriously as we do ourselves. Technology will inevitably encounter
            problems, but what matters most is having a partner willing to pull out all the stops to
            make it better."
          </p>
          <footer className="text-[16px] text-[#5F51FF]">
            <a
              href="https://www.linkedin.com/in/jessicalaurenshapiro/"
              target="_blank"
              rel="noreferrer noopener"
              className="font-bold hover:underline"
            >
              Jess Shapiro
            </a>
            <span className="text-black"> | Manager of Technology Products, PMO</span>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

function RelatedCaseStudiesSection() {
  const caseStudies = [
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
      company: 'Sun Automation',
      description:
        'Discover how SUN Automation securely manages AI-enabled manufacturing equipment while meeting strict Tier 1 security standards',
      link: '/case-studies/sun-automation',
    },
  ]

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap lg:gap-8">
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

        <div className="flex justify-center">
          <Button asChild variant="outline-transparent-primary" size="lg" className="w-[230px]">
            <Link to="/case-studies">View all Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>
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
      className="group block h-[365px] w-[300px] overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-[180px] w-full overflow-hidden">
        <img
          src={image}
          alt={company}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Industry Tag - Positioned in bottom-left corner */}
        <div className="absolute bottom-3 left-3">
          <span className="font-space-grotesk inline-block rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-gray-700">
            {industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-[185px] flex-col p-6">
        {/* Company Name */}
        <h3 className="font-montserrat mb-3 text-[24px] font-bold text-black">{company}</h3>

        {/* Description */}
        <p className="font-space-grotesk text-[14px] leading-[1.5] text-gray-600">{description}</p>
      </div>
    </Link>
  )
}
