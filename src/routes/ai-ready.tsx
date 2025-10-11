import { createFileRoute, Link } from '@tanstack/react-router'
import { AvocadoOsLogoFull } from '@/components/svg/avocado-os-logo-full'
import TrustedPartnerSection from '@/components/trusted-partner-section'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/ai-ready')({
  component: Page,
})

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TrustedPartnerSection />
      <TeamEvolvingSection />
      <WhyChoosePeridioSection />
      <EdgeAIOrchestrationSection />
      <AvocadoOSSection />
      <DevelopmentToDeploymentSection />
      <AIReadyFeaturesSection />
      <AIReadyCTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden bg-black">
      <div className="absolute inset-0 h-full w-full">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="/img/ai-ready/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-[440px] px-6 text-center sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
          <p className="font-space-grotesk text-light-purple-accent mx-auto mt-16 mb-6 text-[15px] font-bold uppercase">
            AI-READY FIRMWARE DELIVERY
          </p>

          <h1 className="font-montserrat mx-auto mb-4 max-w-[600px] text-[24px] leading-[1] font-bold tracking-[-0.05em] text-white md:text-[52px]">
            Accelerate Edge AI with Embedded Linux
          </h1>

          <p className="font-space-grotesk mx-auto mb-4 max-w-[700px] text-[14px] leading-[1.6] font-normal text-white">
            Peridio powers seamless AI model delivery for edge devices with NPU acceleration
            support. Bridge the gap between ML teams and embedded engineers while deploying models
            with confidence—optimized for embedded Linux. Focus on innovation while we handle the
            complexity.
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
              <a
                href="https://docs.peridio.com/peridio-core/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Platform Overview
              </a>
            </Button>

            <Button asChild variant="primary" className="w-[165px] !text-sm md:w-[180px]">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamEvolvingSection() {
  return (
    <section className="bg-black pb-12">
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
        <div className="mx-auto max-w-[860px] rounded-lg bg-white px-6 py-12 text-center md:px-[60px]">
          <h2 className="font-montserrat mb-6 text-[20px] leading-[1.2] font-bold tracking-[-1px] text-black sm:text-[26px] md:text-[36px] lg:text-[36px]">
            Your team is evolving — our platform bridges the expertise gap.
          </h2>

          <p className="font-space-grotesk mx-auto max-w-[750px] text-[16px] leading-[1.6] text-gray-600">
            Peridio eliminates the integration friction between AI teams and embedded engineers. Our
            flexible architecture supports modern edge AI acceleration, including NPUs and
            specialized hardware across NXP, NVIDIA, TI, and Raspberry Pi platforms. Independently
            manage AI models, configurations, and application code at scale. Stop treating firmware
            updates as a liability. Start shipping intelligence to the edge with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhyChoosePeridioSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
        <div className="flex w-full flex-col gap-12 lg:flex-row">
          {/* Left Column */}
          <div className="flex w-full flex-shrink-0 flex-col justify-between text-center md:flex-row md:text-left lg:w-[230px] lg:flex-col lg:justify-start">
            <div className="lg:max-w-auto mx-auto max-w-[300px] md:mx-0">
              <h2 className="font-montserrat mb-8 text-[28px] leading-[1.2] font-bold text-black">
                Why AI Companies Choose Peridio
              </h2>
            </div>

            <div>
              <Button asChild variant="primary" className="w-full !text-sm md:w-[200px]">
                <a href="/docs">Check out the Docs →</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
            <BenefitCard
              title="Seamless Collaboration"
              description="Bridge the gap between Data Scientists and embedded engineers with unified workflows."
            />
            <BenefitCard
              title="Component-Based Updates"
              description="Ship models independently from firmware for streamlined iteration."
            />
            <BenefitCard
              title="NPU Acceleration Support"
              description="Deploy optimized models for neural processing units and specialized AI accelerators."
            />
            <BenefitCard
              title="Reduced Risk"
              description="Test with controlled cohorts before full deployment, minimizing errors."
            />
            <BenefitCard
              title="Faster Model Deployment"
              description="Reduce AI deployment time from weeks to minutes with Avocado OS."
            />
            <BenefitCard
              title="Enterprise Security"
              description="Protect your intellectual property with Avocado OS's Yocto-optimized security controls."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ title, description }: { title: string; description: string }) {
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

function EdgeAIOrchestrationSection() {
  return (
    <section
      className="relative min-h-[500px] overflow-hidden py-30"
      style={{
        background:
          'linear-gradient(360deg, #000000 39.02480811403509%, #5F51FF 74.35581140350877%, #FFFFFF 100%)',
      }}
    >
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
        <div className="grid grid-cols-1 gap-12 text-center md:text-left lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <p className="font-space-grotesk md:text-light-purple-accent mb-6 text-[15px] font-bold text-black uppercase">
              Edge AI Orchestration
            </p>

            <h1 className="font-montserrat mb-8 text-[28px] leading-[1.2] font-bold tracking-[-1px] text-white">
              Tomorrow's edge devices need more than updates—they need intelligent orchestration.
            </h1>

            <div className="mx-auto md:mx-0">
              <Button asChild variant="secondary" className="z-10 w-[170px] !text-sm">
                <a href="/contact">Talk to an expert</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Features List */}
          <div className="z-5 -mt-[67px] flex flex-col justify-center space-y-6 rounded-xl border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.05)] px-16 py-8 md:border-none md:bg-inherit">
            <FeatureListItem text="Version and validate AI models across heterogeneous computing architectures." />
            <FeatureListItem text="Deploy optimized models for specific NPUs and accelerators." />
            <FeatureListItem text="Roll out updates without disrupting ongoing learning processes." />
            <FeatureListItem text="Quickly revert models if performance issues arise." />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureListItem({ text }: { text: string }) {
  return (
    <p className="font-space-grotesk text-[16px] leading-[1.6] font-semibold text-white">{text}</p>
  )
}

function AvocadoOSSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="mx-auto flex justify-center px-4">
        <div className="mx-auto w-[440px] rounded-lg px-6 pt-[40px] pb-[40px] sm:px-0 md:w-[725px] lg:w-[990px] lg:bg-[linear-gradient(45deg,_#000000_57.61033442982456%,_#003A2E_100%)] lg:pr-[46px] lg:pl-[46px]">
          {/* Top Row - Title/Subtitle and Button */}
          <div className="mb-8 flex flex-col gap-8 text-center lg:flex-row lg:text-left">
            {/* Left Column - Title and Description */}
            <div className="flex-1">
              <h2 className="font-montserrat mb-4 text-[32px] leading-[1.2] text-white">
                <span className="font-normal">Avocado OS:</span>
                <br />
                <span className="font-bold">Yocto Without the Headache</span>
              </h2>

              <p className="font-space-grotesk max-w-[580px] text-[18px] leading-[1.6] font-normal text-[#b8d4d4]">
                Avocado OS—our flagship Yocto-based distribution—accelerates your path to market
                with a flexible, secure, and developer-friendly platform. Remove the complexity of
                Yocto with:
              </p>
            </div>

            {/* Right Column - Button */}
            <div className="mx-auto flex items-start justify-end lg:mx-0">
              <Button
                asChild
                variant="secondary"
                className="!text-xs"
                style={{
                  backgroundColor: '#009881',
                  color: 'white',
                }}
              >
                <a href="http://www.avocadolinux.org" target="_blank" rel="noopener noreferrer">
                  Discover How Avocado OS Simplifies Yocto →
                </a>
              </Button>
            </div>
          </div>

          {/* Bottom Row - 2x2 Grid and White Card */}
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left Column - 2x2 Grid of Feature Cards */}
            <div className="flex-1">
              <div
                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:h-[420px]"
                // style={{ height: "420px" }}
              >
                <AvocadoFeatureCard
                  icon="/img/ai-ready/smile-icon.png"
                  title="Developer-Friendly Experience"
                  description="Enable AI engineers to focus on models, not Linux internals."
                />
                <AvocadoFeatureCard
                  icon="/img/ai-ready/chip-icon.png"
                  title="Hardware Acceleration Ready"
                  description="Pre-configured to leverage NPUs and AI accelerators."
                />
                <AvocadoFeatureCard
                  icon="/img/ai-ready/shield-icon.png"
                  title="Secure by Design"
                  description="Built with secure boot and data encryption from day one."
                />
                <AvocadoFeatureCard
                  icon="/img/ai-ready/layers-icon.png"
                  title="Composable Architecture"
                  description="Layer applications and models with rapid iteration through hot code reloading."
                />
              </div>
            </div>

            {/* Right Column - White Info Card */}
            <div className="flex w-full items-start lg:w-[300px]">
              <div
                className="flex flex-col items-center justify-center rounded-lg p-8 md:flex-row md:gap-8 lg:h-[420px] lg:flex-col lg:gap-0 lg:text-center"
                style={{
                  // width: "300px",
                  // height: "420px",
                  background: 'linear-gradient(315deg, #C1E6E0 0%, #FFFFFF 38.44229714912281%)',
                }}
              >
                <div className="mb-2 md:mb-6">
                  <AvocadoOsLogoFull className="w-[165px] text-black" />
                </div>

                <p className="font-space-grotesk text-[14px] leading-[1.6] text-[#4a4a4a]">
                  Avocado OS is a free and open-source Embedded Linux OS focusing on simplifying the
                  development and maintenance of products requiring high reliability and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AvocadoFeatureCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div
      className="rounded-lg border border-[#003a2e] bg-transparent p-6"
      // style={{ width: "280px", height: "200px" }}
    >
      <div className="mb-3 flex items-center gap-3">
        <img src={icon} alt={title} className="h-[38px] w-[38px]" />
        <h3 className="font-space-grotesk text-[14px] font-bold text-white">{title}</h3>
      </div>
      <p className="font-space-grotesk text-[14px] leading-[1.5] text-[#b8d4d4]">{description}</p>
    </div>
  )
}

function DevelopmentToDeploymentSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="mx-auto mb-12 w-[380px] px-6 text-center sm:px-0 md:w-[725px] lg:w-[900px]">
        <h2 className="font-montserrat mx-auto mb-6 max-w-[500px] text-[24px] leading-[1.2] font-bold tracking-[-1px] text-white md:text-[42px]">
          From Development to Deployment, Simplified
        </h2>

        <p className="font-space-grotesk mx-auto max-w-[700px] text-[14px] leading-[1.6] text-white md:text-[16px]">
          Peridio integrates with your existing ML workflow to streamline edge AI deployment:
        </p>
      </div>

      <div className="mx-auto w-[380px] px-6 sm:px-0 md:w-[725px] lg:w-[900px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <WorkflowCard
            title="CI/CD Pipeline Support"
            description="Trigger deployments from build pipelines."
          />
          <WorkflowCard
            title="Optimized Transfer"
            description="Efficiently manage large model files with delta updates."
          />
          <WorkflowCard
            title="Device Targeting"
            description="With faster releases & streamlined operations"
          />
        </div>
      </div>
    </section>
  )
}

function WorkflowCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg bg-white p-8 text-center">
      <h3 className="font-montserrat mb-4 text-[24px] leading-[1.2] font-bold text-black">
        {title}
      </h3>
      <p className="font-space-grotesk text-medium-gray text-[15px] leading-[1.6]">{description}</p>
    </div>
  )
}

function AIReadyFeaturesSection() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background:
          'radial-gradient(circle at 45.144856770833336% 100%, #5F51FF 0%, 19.8%, rgba(95,81,255,0) 33%), radial-gradient(circle at 51.350911458333336% 100%, #3F36AA 0%, 34.199999999999996%, rgba(63,54,170,0) 57%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, rgba(0,0,0,0) 100%)',
      }}
    >
      <div className="mx-auto mb-12 max-w-[440px] px-6 text-center sm:px-0 md:max-w-[725px] lg:max-w-[900px]">
        <p className="font-space-grotesk mb-6 text-[15px] font-normal text-[#a9a3ff] uppercase">
          WHY INNOVATORS CHOOSE PERIDIO
        </p>

        <h2 className="font-montserrat text-[24px] leading-[1.2] font-bold tracking-[-1px] text-white md:text-[42px]">
          AI-Ready Features You'll Love
        </h2>
      </div>

      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[725px] lg:max-w-[900px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FeatureCard
            title="Model Version Control"
            description="Track and manage AI model versions with full traceability."
          />
          <FeatureCard
            title="Deployment Targeting"
            description="Deploy to specific device groups using hardware-aware logic."
          />
          <FeatureCard
            title="Security Controls"
            description="Protect your IP with ABAC and encryption at rest."
          />
          <FeatureCard
            title="Integration Support"
            description="Seamlessly connect with your ML workflows and Yocto builds."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-fill-base-shade-4 rounded-lg border border-[#2a2a2a] p-8">
      <h3 className="font-montserrat mb-3 text-[20px] font-bold text-white">{title}</h3>
      <p className="font-space-grotesk text-[15px] leading-[1.6] text-[#b0b0b0]">{description}</p>
    </div>
  )
}

function AIReadyCTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Image */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/5"
        style={{
          width: '400px',
          height: '400px',
          backgroundImage: "url('/img/ai-ready/background.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[440px] px-6 text-center md:max-w-[725px] md:px-0 lg:max-w-[900px]">
        <p className="font-space-grotesk text-peridio-purple mb-6 text-[16px] font-semibold uppercase">
          BOOK A DEMO
        </p>

        <h2 className="font-montserrat text-[24px] leading-[1.2] font-bold tracking-[-2px] text-black md:text-[38px]">
          Eliminate deployment bottlenecks.
        </h2>

        <p className="font-space-grotesk mx-auto mb-8 text-[20px] leading-[1.4] font-normal text-black md:text-[24px] lg:text-[38px]">
          Deploy AI to the edge with Peridio today.
        </p>

        <Button variant="primary" className="w-full !text-sm md:w-[170px]">
          Let's talk
        </Button>
      </div>
    </section>
  )
}
