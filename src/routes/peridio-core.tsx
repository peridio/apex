import { createFileRoute, Link } from '@tanstack/react-router'
import FAQSection, { type FAQItem } from '@/components/faq-section'
import { StaticLogoCard } from '@/components/logo-slider'
import { PeridioLogo } from '@/components/svg/peridio-logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/peridio-core')({
  component: Page,
})

const faqItems: FAQItem[] = [
  {
    question:
      "How does Peridio's device management platform integrate with my existing IoT infrastructure?",
    answer:
      'Peridio offers multiple integration options to suit your specific needs, including direct device management, cloud-to-cloud integration, and hybrid approaches. Our team will work closely with you to determine the best integration strategy that aligns with your technical architecture and business requirements.',
  },
  {
    question: 'Can Peridio help me address cybersecurity concerns in my IoT deployments?',
    answer:
      "Absolutely. Peridio's platform is designed with robust security features, including secure communication channels, encrypted data storage, and advanced access controls. We also offer automated vulnerability detection and patching to ensure your devices are protected against the latest threats.",
  },
  {
    question: "How does Peridio's platform help improve operational efficiency?",
    answer:
      'By automating firmware updates, configuration management, and device diagnostics, Peridio frees up your engineering resources, allowing them to focus on core product development and innovation. Our platform also provides granular visibility and control over your IoT deployments, streamlining workflows and enhancing the overall efficiency of your operations.',
  },
  {
    question: "What makes Peridio's software delivery approach unique?",
    answer:
      'We focus exclusively on being the best software delivery mechanism for edge environments. Our platform provides granular control over deployments, cohort-based testing, and instant rollback capabilities—all while maintaining complete visibility of your software across your entire fleet.',
  },
  {
    question: 'How does Peridio help accelerate our development process?',
    answer:
      'By providing robust software delivery infrastructure, your engineering team can focus on core product development rather than maintaining custom update scripts and deployment tools. Our platform streamlines the entire software delivery lifecycle.',
  },
]

function Page() {
  return (
    <div className="bg-black text-white">
      <HeroSection />

      <div className="hidden lg:relative">
        <StaticLogoCard
          className="absolute top-[-50px] left-1/2 z-20 -translate-x-1/2 transform"
          slugs={[
            // telly
            'netfoundry',
            'variscite',
            'keyfactor',
            // fellowes
            'very',
            'github',
            'onlogic',
            // "linux",
            // "trellis",
            // "avocado",
            // "galaxy",
          ]}
        />
      </div>
      <ShipWithConfidenceSection />
      <ArchitecturalFreedomSection />
      <EnterpriseSecuritySection />
      <FeaturesSection />
      <section
        className="hidden py-20 md:block"
        style={{
          background: 'linear-gradient(0deg, #F7F7F7 23.804139254385966%, #FFFFFF 100%)',
        }}
      >
        <FAQSection faqItems={faqItems} accentColor="#5f51ff" variant="card" />
      </section>
      <BookDemoSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[535px] overflow-hidden bg-black lg:h-[650px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/peridio-core/hero-background.png')",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-[900px] px-4 text-center">
          <p className="font-space-grotesk text-light-purple-accent mt-8 mb-2 text-[15px] font-bold uppercase">
            PERIDIO CORE
          </p>

          <h1 className="font-montserrat mx-auto mb-4 max-w-[365px] text-[34px] leading-[1] font-[700] tracking-[-0.05em] text-white lg:max-w-[650px] lg:text-[60px]">
            Transform Your Firmware Operations
          </h1>

          <p className="font-space-grotesk mx-auto mb-4 max-w-[690px] text-[17px] leading-[1.6] font-[400] text-white lg:text-[14px]">
            Peridio Core empowers you to operationalize device and firmware management with
            enterprise-grade controls and automation, giving you the confidence to scale without
            compromise.
          </p>

          <p className="font-space-grotesk text-[14px] font-bold text-white md:text-[16px]">
            Stop treating firmware updates as a liability.
          </p>
          <p className="font-space-grotesk mb-8 text-[14px] font-bold text-white md:text-[16px]">
            Master device and firmware management with Peridio.
          </p>

          <div className="flex justify-center gap-4">
            <Button
              asChild
              variant="outline-transparent-secondary"
              className="w-[165px] border-white !text-sm lg:w-[180px]"
            >
              <a
                href="https://docs.peridio.com/peridio-core/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Platform Overview
              </a>
            </Button>

            <Button asChild variant="primary" className="w-[165px] !text-sm lg:w-[180px]">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShipWithConfidenceSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[440px] px-4 md:max-w-[720px] lg:max-w-[900px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-shrink-0 flex-col justify-start md:flex-row md:gap-30 lg:w-[245px] lg:flex-col lg:gap-0">
            <h2 className="font-montserrat mb-8 text-center text-[28px] leading-[1.2] font-[700] text-black md:text-left">
              Everything You Need to Ship with Confidence
            </h2>

            <div>
              <Button asChild variant="primary" className="w-full">
                <a href="https://docs.peridio.com/" target="_blank" rel="noopener noreferrer">
                  Check out the Docs →
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="flex-1">
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <ShipFeatureCard
                title="Democratize OTA"
                description="Transform tribal knowledge into systematic workflows anyone can execute."
              />
              <ShipFeatureCard
                title="Ship Updates 3-4x Faster"
                description="Automated workflows reduce deployment time from weeks to minutes without compromising architecture."
              />
              <ShipFeatureCard
                title="Scale Without Compromise"
                description="Maintain complete control as you grow from thousands to millions of devices with battle-tested infrastructure."
              />
              <ShipFeatureCard
                title="Release with Precision"
                description="Deploy confidently with intelligent phasing, canary updates, and targeted rollouts."
              />
              <ShipFeatureCard
                title="Integrate and Deploy Day 1"
                description="Flexible integration options get your existing fleet up and running within days, not months."
              />
              <ShipFeatureCard
                title="Unite Your Teams"
                description="Give engineering, product, and customer success teams the visibility and tools they need to manage updates confidently."
              />
            </div>

            {/* Take Control Section */}
            <div
              className="flex items-start gap-6 rounded-lg p-6"
              style={{
                background:
                  'linear-gradient(225deg, rgba(255,255,255,0.25) 0%, rgba(240,240,240,0.5) 100%)',
              }}
            >
              <h3 className="flex-shrink-0 font-['Space_Grotesk'] text-[20px] font-[700] text-black">
                Take Control
              </h3>
              <p className="font-['Space_Grotesk'] text-[15px] leading-relaxed font-[400] text-gray-600">
                Accelerate QA and troubleshooting with cohort-based deployment strategies based on
                real-world attributes for targeted deployments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShipFeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-2">
      <div className="mb-3 hidden items-start gap-3 lg:flex">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-300">
          <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h3 className="font-space-grotesk mb-2 text-[16px] font-bold text-black">{title}</h3>
      <p className="font-space-grotesk text-[14px] leading-[1.5] text-gray-600">{description}</p>
    </div>
  )
}

function ArchitecturalFreedomSection() {
  return (
    <section
      className="min-h-[1000px] pt-20 text-white"
      style={{
        background:
          'radial-gradient(circle at 0.05859375% 5.182291666666667%, #5F51FF 0%, 13.625000000000002%, rgba(95,81,255,0) 25%), radial-gradient(circle at 99.99186197916666% 0%, #3F36AA 0%, 13.625000000000002%, rgba(63,54,170,0) 25%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, rgba(0,0,0,0) 100%)',
      }}
    >
      <div className="mx-auto max-w-[440px] px-4 md:max-w-[720px] lg:max-w-[900px]">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h3 className="text-peridio-purple-lighter mb-2 font-['Space_Grotesk'] text-[15px] font-[700] uppercase">
            ARCHITECTURAL FREEDOM
          </h3>
          <h2 className="font-montserrat mb-4 text-[42px] leading-[1.2] font-[700]">
            Your Infrastructure, Your Way
          </h2>
          <p className="mx-auto mb-4 max-w-[575px] font-['Space_Grotesk'] text-[16px] leading-relaxed font-[400]">
            Peridio Fleet seamlessly integrates with your existing infrastructure, keeping you in
            control of your embedded and cloud architectures.
          </p>
          <p className="mb-12 font-['Space_Grotesk'] text-[18px] font-[700]">
            Choose the integration strategy that fits your needs:
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <IntegrationCard
            title="Cloud to Cloud"
            description="Leverage Peridio's powerful deployment capabilities while preserving your existing device management infrastructure. Perfect for teams with established cloud solutions who want to enhance their deployment workflows without disrupting current operations."
            features={[
              'Centralized visibility and control through a powerful web admin and CLI',
              'Utilize simple REST API integration points for update queries',
              'Leverage web-hooks for push based updates and streaming notifications',
              'Functional integration through incorporating 1-2 API endpoints',
            ]}
            icons={
              <>
                <img src="/img/peridio-core/cloud.png" alt="Cloud" className="h-12" />
                <div className="mx-2 flex items-center gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>
                <img src="/img/peridio-core/peridio-logo.png" alt="Peridio" className="h-14 w-14" />
                <div className="mx-2 flex items-center gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>
                <img src="/img/peridio-core/cloud.png" alt="Cloud" className="h-12" />
              </>
            }
          />

          <IntegrationCard
            title="Direct Device Management"
            description="Take full advantage of Peridio's comprehensive device management capabilities. Ideal for teams looking to streamline their entire device operations with a single, secure, and scalable solution."
            features={[
              'Complete lifecycle management with just-in-time provisioning',
              'Secure communication with mTLS and remote access capabilities',
              'Flexible integration via embedded Linux, Java APK, or REST API',
              'Choose between push notifications or polling-based updates',
            ]}
            icons={
              <>
                <img src="/img/peridio-core/peridio-logo.png" alt="Peridio" className="h-18 w-18" />
                <div className="mx-3 flex items-center gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>
                <img src="/img/peridio-core/chip.png" alt="Device" className="h-18 w-18" />
              </>
            }
          />
        </div>
      </div>
    </section>
  )
}

// IntegrationCard: Responsive grid item positioning with swapped title/icons for mobile 2x2 grid
function IntegrationCard({
  title,
  description,
  features,
  icons,
}: {
  title: string
  description: string
  features: string[]
  icons: React.ReactNode
}) {
  /*
    Grid Layout Strategy:
      - Default (mobile/tablet): 2x2 grid (grid-cols-2 grid-rows-2)
      - On large screens (lg): single column flex (lg:grid-cols-1 lg:grid-rows-none)
    Quadrant assignments for mobile/tablet (swapped icons and title):
      [0,0]: Title          (order-1)
      [0,1]: Icons          (order-2)
      [1,0]: Description    (order-3)
      [1,1]: Features       (order-4)
    On lg screens everything stacks (all: order-none)
  */
  return (
    <div
      className="grid grid-cols-1 gap-6 rounded-lg border border-gray-800 p-8 md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-none"
      style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        gridTemplateRows: 'auto 1fr',
      }}
    >
      {/* Title */}
      <h3 className="font-montserrat order-2 text-[32px] font-[700] md:order-1 lg:order-none lg:mb-4 lg:text-[24px]">
        {title}
      </h3>
      {/* Icons */}
      <div className="order-1 flex items-center justify-center md:order-2 lg:order-none lg:mb-8 lg:h-24">
        {icons}
      </div>
      {/* Description */}
      <p className="order-3 col-span-1 row-span-1 mb-6 font-['Space_Grotesk'] text-[16px] leading-relaxed text-gray-300 lg:order-none lg:h-[140px] lg:text-[14px]">
        {description}
      </p>
      {/* Features list */}
      <div className="order-4 col-span-1 row-span-1 space-y-3 lg:order-none">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3">
            <div className="mt-1 flex-shrink-0">
              <svg className="text-peridio-purple h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="font-['Space_Grotesk'] text-[13px] leading-relaxed text-gray-300">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function EnterpriseSecuritySection() {
  return (
    <section
      className="h-[950px] pt-[54px] text-white lg:h-[650px]"
      style={{
        background:
          'linear-gradient(360deg, #FFFFFF 0%, #5F51FF 25.64418859649123%, #000000 60.97519188596491%)',
      }}
    >
      <div className="mx-auto w-full max-w-[420px] px-4 md:max-w-[600px] md:px-0 lg:max-w-[900px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-12">
          {/* Left Column */}
          <div className="mx-auto flex-shrink-0 text-center md:max-w-[570px] lg:max-w-[440px] lg:text-left">
            <h3 className="text-peridio-purple-lighter mb-6 font-['Space_Grotesk'] text-[15px] font-[700] uppercase">
              ENTERPRISE SECURITY
            </h3>
            <h2 className="font-montserrat mb-6 text-[24px] leading-[1.2] font-[700] md:text-[36px] lg:text-[28px]">
              Scale from thousands to millions of devices seamlessly
            </h2>
            <p className="mb-8 font-['Space_Grotesk'] text-[16px] leading-relaxed font-[400]">
              Proven flexibility that allows teams to confidently expand their device ecosystems
              without compromising performance or security.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Talk to an expert
              </Button>
            </Link>
          </div>

          {/* Right Column */}
          {/* <div className="flex-1 space-y-8"> */}
          <div className="lg:max-w-auto z-5 mx-auto -mt-[34px] flex max-w-[480px] flex-col justify-center space-y-6 rounded-xl border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.05)] px-16 py-8 sm:px-8 md:bg-inherit lg:-mt-0 lg:border-none lg:px-0">
            <SecurityFeature
              title="ZERO TRUST ASSET MANAGEMENT"
              description="Every binary is treated as a distinct asset, subject to rigorous security controls throughout its lifecycle."
            />
            <SecurityFeature
              title="SECURE COMMUNICATIONS"
              description="Device interaction are authenticated, encrypted, and authorized, regardless of network connection."
            />
            <SecurityFeature
              title="JIT PROVISIONING"
              description="Ensure that devices are only granted the necessary trust credentials at the moment they need them, minimizing the window of vulnerability."
            />
            <SecurityFeature
              title="LEAST PRIVILEDGE ENFORCEMENT"
              description="Utilize ABAC to ensure users, groups, and devices are only granted the minimum necessary access to perform their designated functions."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function SecurityFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 hidden flex-shrink-0 lg:block">
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>
      <div>
        <h4 className="font-montserrat mb-2 text-[18px] font-[700]">{title}</h4>
        <p className="font-['Space_Grotesk'] text-[14px] leading-relaxed opacity-90">
          {description}
        </p>
      </div>
    </div>
  )
}

function FeaturesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full px-6 sm:max-w-[440px] md:max-w-[740px] md:px-0 lg:max-w-[900px]">
        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex flex-col gap-4 md:flex-row">
            <FeatureCard
              title="Flexible Distribution & Targeting"
              description="Bundle & distribute by artifact, version, and target. Manage multiple applications and configurations independently while maintaining deployment cohesion across your fleet."
              // width="445px"
              className="lg:w-[445px]"
            />
            <FeatureCard
              title="Cohort-Based Workflows"
              description="Transform complex deployments into controlled, repeatable processes. Move devices seamlessly between development, testing, and production environments with sophisticated targeting capabilities."
              // width="445px"
              className="lg:w-[445px]"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col gap-4 md:flex-row">
            <FeatureCard
              title="Release Management"
              description="Fully automated and scalable release processes. Deploy with confidence using phased rollouts, validation gates, and instant rollback capabilities."
              // width="335px"
              className="lg:w-[335px]"
            />

            {/* Video */}
            <div className="relative hidden h-[200px] w-[200px] flex-shrink-0 lg:block">
              <video
                className="h-full w-full rounded-lg object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/img/peridio-core/features-demo.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <PeridioLogo className="text-white" width={105} height={105} />
              </div>
            </div>

            <FeatureCard
              title="Fleet Observability"
              description="A centralized source of truth for operations teams. Get real-time visibility into deployment status, device health, and update progress across your entire fleet."
              // width="335px"
              className="lg:w-[335px]"
            />
          </div>

          {/* Row 3 */}
          <div className="flex flex-col gap-4 md:flex-row">
            <FeatureCard
              title="Device Management"
              description="Provision, monitor, and manage devices in the field with enterprise-grade security controls. Access devices remotely through secure tunneling without compromising your security posture."
              // width="445px"
              className="lg:w-[445px]"
            />
            <FeatureCard
              title="Secure Remote Access"
              description="Connect securely to remote devices through our WireGuard-based proxy infrastructure. Access, troubleshoot, and diagnose devices in the field with enterprise-grade security controls and auditing capabilities."
              // width="445px"
              className="lg:w-[445px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  title,
  description,
  // width,
  className,
}: {
  title: string
  description: string
  // width: string;
  className?: string
}) {
  return (
    <div
      className={cn(
        'h-autolg:h-[330px] w-full rounded-lg bg-[#F7F7F7] p-8 lg:w-[255px]',
        className,
      )}
    >
      <h4 className="font-montserrat text-peridio-purple mb-4 text-[16px] font-[700]">{title}</h4>
      <p className="text-medium-gray font-['Space_Grotesk'] text-[14px] leading-relaxed font-normal">
        {description}
      </p>
    </div>
  )
}

function BookDemoSection() {
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

      <div className="relative z-10 mx-auto max-w-[900px] px-4 text-center">
        {/* Small header */}
        <h3 className="text-peridio-purple mb-6 font-['Space_Grotesk'] text-[16px] font-[700] uppercase">
          BOOK A DEMO
        </h3>

        {/* Main heading */}
        <h2 className="font-montserrat mb-12 text-[32px] leading-[1.15] font-[700] tracking-[-2px] text-black lg:text-[58px]">
          See it for yourself
          <br />
          with a free demo
        </h2>

        {/* CTA Button */}
        <Button variant="primary" size="xl" className="w-[220px] md:w-[170px]">
          Let's talk
        </Button>
      </div>
    </section>
  )
}
