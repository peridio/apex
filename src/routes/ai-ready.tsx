import { createFileRoute } from "@tanstack/react-router";
import { AvocadoOsLogo } from "@/components/svg/avocado-os-logo";
import TrustedPartnerSection from "@/components/trusted-partner-section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/ai-ready")({
  component: Page,
});

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
  );
}

function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden h-[600px]">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/img/ai-ready/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <p className="text-[15px] font-space-grotesk font-bold text-[#b8b8ff] uppercase mt-16">
            AI-READY FIRMWARE DELIVERY
          </p>

          <h1 className="text-[52px] font-bold font-montserrat text-white mb-4 tracking-[-0.05em] leading-[1]">
            Accelerate Edge AI with Embedded Linux
          </h1>

          <p className="text-[14px] leading-[1.6] font-normal font-space-grotesk text-white mb-4 max-w-[700px] mx-auto">
            Peridio powers seamless AI model delivery for edge devices with NPU
            acceleration support. Bridge the gap between ML teams and embedded
            engineers while deploying models with confidence—optimized for
            embedded Linux. Focus on innovation while we handle the complexity.
          </p>

          <div className="flex gap-4 justify-center">
            <Button
              asChild
              variant="secondary"
              className="w-[180px] !text-sm"
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
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

            <Button asChild variant="primary" className="w-[180px] !text-sm">
              <a href="/contact">Talk to an Expert</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamEvolvingSection() {
  return (
    <section className="pb-12 bg-black">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="bg-white rounded-lg px-[60px] py-12 text-center w-[860px] mx-auto">
          <h2 className="text-[36px] leading-[1.2] font-bold font-montserrat text-black mb-6 tracking-[-1px]">
            Your team is evolving — our platform bridges the expertise gap.
          </h2>

          <p className="text-[16px] leading-[1.6] font-space-grotesk text-gray-600 max-w-[750px] mx-auto">
            Peridio eliminates the integration friction between AI teams and
            embedded engineers. Our flexible architecture supports modern edge
            AI acceleration, including NPUs and specialized hardware across NXP,
            NVIDIA, TI, and Raspberry Pi platforms. Independently manage AI
            models, configurations, and application code at scale. Stop treating
            firmware updates as a liability. Start shipping intelligence to the
            edge with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChoosePeridioSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-start md:w-[230px] flex-shrink-0">
            <h2 className="text-[28px] leading-[1.2] font-bold font-montserrat text-black mb-8">
              Why AI Companies Choose Peridio
            </h2>

            <Button asChild variant="primary" className="w-[200px] !text-sm">
              <a href="/docs">Check out the Docs →</a>
            </Button>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
  );
}

function BenefitCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-2 bg-white">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-[16px] font-bold font-space-grotesk text-black mb-2">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.5] font-space-grotesk text-gray-600">
        {description}
      </p>
    </div>
  );
}

function EdgeAIOrchestrationSection() {
  return (
    <section
      className="py-30 relative overflow-hidden min-h-[500px]"
      style={{
        background:
          "linear-gradient(360deg, #000000 39.02480811403509%, #5F51FF 74.35581140350877%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-[900px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <p className="text-[15px] font-space-grotesk font-bold text-[#b8b8ff] uppercase mb-6">
              Edge AI Orchestration
            </p>

            <h1 className="text-[28px] leading-[1.2] font-bold font-montserrat text-white mb-8 tracking-[-1px]">
              Tomorrow's edge devices need more than updates—they need
              intelligent orchestration.
            </h1>

            <Button asChild variant="secondary" className="w-[170px] !text-sm">
              <a href="/contact">Talk to an expert</a>
            </Button>
          </div>

          {/* Right Column - Features List */}
          <div className="flex flex-col justify-center space-y-6">
            <FeatureListItem text="Version and validate AI models across heterogeneous computing architectures." />
            <FeatureListItem text="Deploy optimized models for specific NPUs and accelerators." />
            <FeatureListItem text="Roll out updates without disrupting ongoing learning processes." />
            <FeatureListItem text="Quickly revert models if performance issues arise." />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureListItem({ text }: { text: string }) {
  return (
    <p className="text-[16px] font-semibold leading-[1.6] font-space-grotesk text-white">
      {text}
    </p>
  );
}

function AvocadoOSSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      <div className="mx-auto px-4 flex justify-center">
        <div
          className="rounded-lg w-[990px] pt-[40px] pb-[40px] pl-[46px] pr-[46px]"
          style={{
            background:
              "linear-gradient(45deg, #000000 57.61033442982456%, #003A2E 100%)",
          }}
        >
          {/* Top Row - Title/Subtitle and Button */}
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Left Column - Title and Description */}
            <div className="flex-1">
              <h2 className="text-[32px] leading-[1.2] font-montserrat text-white mb-4">
                <span className="font-normal">Avocado OS:</span>
                <br />
                <span className="font-bold">Yocto Without the Headache</span>
              </h2>

              <p className="text-[18px] leading-[1.6] font-normal font-space-grotesk text-[#b8d4d4] max-w-[580px]">
                Avocado OS—our flagship Yocto-based distribution—accelerates
                your path to market with a flexible, secure, and
                developer-friendly platform. Remove the complexity of Yocto
                with:
              </p>
            </div>

            {/* Right Column - Button */}
            <div className="flex items-start justify-end">
              <Button
                asChild
                variant="secondary"
                className="!text-xs"
                style={{
                  backgroundColor: "rgb(0,152,129)",
                  color: "white",
                }}
              >
                <a
                  href="http://www.avocadolinux.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discover How Avocado OS Simplifies Yocto →
                </a>
              </Button>
            </div>
          </div>

          {/* Bottom Row - 2x2 Grid and White Card */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - 2x2 Grid of Feature Cards */}
            <div className="flex-1">
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                style={{ height: "420px" }}
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
            <div className="flex items-start" style={{ width: "300px" }}>
              <div
                className="rounded-lg p-8 flex flex-col items-center justify-center text-center"
                style={{
                  width: "300px",
                  height: "420px",
                  background:
                    "linear-gradient(315deg, #C1E6E0 0%, #FFFFFF 38.44229714912281%)",
                }}
              >
                <div className="mb-6 w-[165px]">
                  <AvocadoOsLogo />
                </div>

                <p className="text-[14px] leading-[1.6] font-space-grotesk text-[#4a4a4a]">
                  Avocado OS is a free and open-source Embedded Linux OS
                  focusing on simplifying the development and maintenance of
                  products requiring high reliability and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AvocadoFeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="bg-transparent border border-[#003a2e] rounded-lg p-6"
      style={{ width: "280px", height: "200px" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <img src={icon} alt={title} className="w-[38px] h-[38px]" />
        <h3 className="text-[14px] font-bold font-space-grotesk text-white">
          {title}
        </h3>
      </div>
      <p className="text-[14px] leading-[1.5] font-space-grotesk text-[#b8d4d4]">
        {description}
      </p>
    </div>
  );
}

function DevelopmentToDeploymentSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-[900px] mx-auto px-4 text-center mb-12">
        <h2 className="text-[42px] leading-[1.2] font-bold font-montserrat text-white mb-6 tracking-[-1px] max-w-[500px] mx-auto">
          From Development to Deployment, Simplified
        </h2>

        <p className="text-[16px] leading-[1.6] font-space-grotesk text-white max-w-[700px] mx-auto">
          Peridio integrates with your existing ML workflow to streamline edge
          AI deployment:
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  );
}

function WorkflowCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-8 text-center">
      <h3 className="text-[24px] font-bold font-montserrat text-black mb-4 leading-[1.2]">
        {title}
      </h3>
      <p className="text-[15px] leading-[1.6] font-space-grotesk text-[#6e6e6e]">
        {description}
      </p>
    </div>
  );
}

function AIReadyFeaturesSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 45.144856770833336% 100%, #5F51FF 0%, 19.8%, rgba(95,81,255,0) 33%), radial-gradient(circle at 51.350911458333336% 100%, #3F36AA 0%, 34.199999999999996%, rgba(63,54,170,0) 57%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, rgba(0,0,0,0) 100%)",
      }}
    >
      <div className="max-w-[900px] mx-auto px-4 text-center mb-12">
        <p className="text-[15px] font-space-grotesk font-normal text-[#a9a3ff] uppercase mb-6">
          WHY INNOVATORS CHOOSE PERIDIO
        </p>

        <h2 className="text-[42px] leading-[1.2] font-bold font-montserrat text-white tracking-[-1px]">
          AI-Ready Features You'll Love
        </h2>
      </div>

      <div className="max-w-[900px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-8 border border-[#2a2a2a]">
      <h3 className="text-[20px] font-bold font-montserrat text-white mb-3">
        {title}
      </h3>
      <p className="text-[15px] leading-[1.6] font-space-grotesk text-[#b0b0b0]">
        {description}
      </p>
    </div>
  );
}

function AIReadyCTASection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/5"
        style={{
          width: "400px",
          height: "400px",
          backgroundImage: "url('/img/ai-ready/background.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
        }}
      />

      <div className="max-w-[900px] mx-auto  text-center relative z-10">
        <p className="text-[16px] font-space-grotesk font-semibold text-[#5f51ff] uppercase mb-6">
          BOOK A DEMO
        </p>

        <h2 className="text-[38px] leading-[1.2] font-bold font-montserrat text-black tracking-[-2px]">
          Eliminate deployment bottlenecks.
        </h2>

        <p className="text-[38px] leading-[1.4] font-normal font-space-grotesk mb-8 text-black mx-auto">
          Deploy AI to the edge with Peridio today.
        </p>

        <Button variant="primary" className="w-[170px] !text-sm">
          Let's talk
        </Button>
      </div>
    </section>
  );
}
