import { createFileRoute, Link } from "@tanstack/react-router";
import FAQSection, { type FAQItem } from "@/components/faq-section";
import { StaticLogoCard } from "@/components/logo-slider";
import { PeridioLogo } from "@/components/svg/peridio-logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/peridio-core")({
  component: Page,
});

const faqItems: FAQItem[] = [
  {
    question:
      "How does Peridio's device management platform integrate with my existing IoT infrastructure?",
    answer:
      "Peridio offers multiple integration options to suit your specific needs, including direct device management, cloud-to-cloud integration, and hybrid approaches. Our team will work closely with you to determine the best integration strategy that aligns with your technical architecture and business requirements.",
  },
  {
    question:
      "Can Peridio help me address cybersecurity concerns in my IoT deployments?",
    answer:
      "Absolutely. Peridio's platform is designed with robust security features, including secure communication channels, encrypted data storage, and advanced access controls. We also offer automated vulnerability detection and patching to ensure your devices are protected against the latest threats.",
  },
  {
    question:
      "How does Peridio's platform help improve operational efficiency?",
    answer:
      "By automating firmware updates, configuration management, and device diagnostics, Peridio frees up your engineering resources, allowing them to focus on core product development and innovation. Our platform also provides granular visibility and control over your IoT deployments, streamlining workflows and enhancing the overall efficiency of your operations.",
  },
  {
    question: "What makes Peridio's software delivery approach unique?",
    answer:
      "We focus exclusively on being the best software delivery mechanism for edge environments. Our platform provides granular control over deployments, cohort-based testing, and instant rollback capabilities—all while maintaining complete visibility of your software across your entire fleet.",
  },
  {
    question: "How does Peridio help accelerate our development process?",
    answer:
      "By providing robust software delivery infrastructure, your engineering team can focus on core product development rather than maintaining custom update scripts and deployment tools. Our platform streamlines the entire software delivery lifecycle.",
  },
];

function Page() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <div className="relative">
        <StaticLogoCard
          className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 z-20"
          slugs={[
            // telly
            "netfoundry",
            "variscite",
            "keyfactor",
            // fellowes
            "very",
            "github",
            "onlogic",
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
        className="py-20"
        style={{
          background:
            "linear-gradient(0deg, #F7F7F7 23.804139254385966%, #FFFFFF 100%)",
        }}
      >
        <FAQSection faqItems={faqItems} accentColor="#5f51ff" variant="card" />
      </section>
      <BookDemoSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden h-[650px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/peridio-core/hero-background.png')",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <p className="text-[15px] font-space-grotesk font-bold text-[#b8b8ff] uppercase mt-8 mb-2">
            PERIDIO CORE
          </p>

          <h1 className="text-[60px] font-[700] font-montserrat text-white mb-4 tracking-[-0.05em] leading-[1] max-w-[650px] mx-auto">
            Transform Your Firmware Operations
          </h1>

          <p className="text-[14px] leading-[1.6] font-[400] font-space-grotesk text-white mb-4 max-w-[690px] mx-auto">
            Peridio Core empowers you to operationalize device and firmware
            management with enterprise-grade controls and automation, giving you
            the confidence to scale without compromise.
          </p>

          <p className="text-[16px] font-bold font-space-grotesk text-white">
            Stop treating firmware updates as a liability.
          </p>
          <p className="text-[16px] font-bold font-space-grotesk text-white mb-8">
            Master device and firmware management with Peridio.
          </p>

          <div className="flex gap-4 justify-center">
            <Button
              asChild
              variant="outline-transparent-secondary"
              className="w-[180px] !text-sm border-white"
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
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShipWithConfidenceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-start w-[245px] flex-shrink-0">
            <h2 className="text-[28px] leading-[1.2] font-[700] font-montserrat text-black mb-8">
              Everything You Need to Ship with Confidence
            </h2>

            <Button asChild variant="primary" className="w-full">
              <a
                href="https://docs.peridio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out the Docs →
              </a>
            </Button>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
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
              className="p-6 rounded-lg flex items-start gap-6"
              style={{
                background:
                  "linear-gradient(225deg, rgba(255,255,255,0.25) 0%, rgba(240,240,240,0.5) 100%)",
              }}
            >
              <h3 className="text-[20px] font-[700] font-['Space_Grotesk'] text-black flex-shrink-0">
                Take Control
              </h3>
              <p className="text-[15px] font-[400] font-['Space_Grotesk'] text-gray-600 leading-relaxed">
                Accelerate QA and troubleshooting with cohort-based deployment
                strategies based on real-world attributes for targeted
                deployments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShipFeatureCard({
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

function ArchitecturalFreedomSection() {
  return (
    <section
      className="text-white h-[1000px] pt-20"
      style={{
        background:
          "radial-gradient(circle at 0.05859375% 5.182291666666667%, #5F51FF 0%, 13.625000000000002%, rgba(95,81,255,0) 25%), radial-gradient(circle at 99.99186197916666% 0%, #3F36AA 0%, 13.625000000000002%, rgba(63,54,170,0) 25%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, rgba(0,0,0,0) 100%)",
      }}
    >
      <div className="max-w-[900px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-[15px] font-[700] font-['Space_Grotesk'] uppercase mb-2 text-peridio-purple-lighter">
            ARCHITECTURAL FREEDOM
          </h3>
          <h2 className="text-[42px] font-[700] font-montserrat leading-[1.2] mb-4">
            Your Infrastructure, Your Way
          </h2>
          <p className="text-[16px] font-[400] font-['Space_Grotesk'] leading-relaxed mb-4 max-w-[575px] mx-auto">
            Peridio Fleet seamlessly integrates with your existing
            infrastructure, keeping you in control of your embedded and cloud
            architectures.
          </p>
          <p className="text-[18px] font-[700] font-['Space_Grotesk'] mb-12">
            Choose the integration strategy that fits your needs:
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Cloud to Cloud Card */}
          <IntegrationCard
            title="Cloud to Cloud"
            description="Leverage Peridio's powerful deployment capabilities while preserving your existing device management infrastructure. Perfect for teams with established cloud solutions who want to enhance their deployment workflows without disrupting current operations."
            features={[
              "Centralized visibility and control through a powerful web admin and CLI",
              "Utilize simple REST API integration points for update queries",
              "Leverage web-hooks for push based updates and streaming notifications",
              "Functional integration through incorporating 1-2 API endpoints",
            ]}
            icons={
              <>
                <img
                  src="/img/peridio-core/cloud.png"
                  alt="Cloud"
                  className="h-12"
                />
                <div className="flex items-center gap-1 mx-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <img
                  src="/img/peridio-core/peridio-logo.png"
                  alt="Peridio"
                  className="w-14 h-14"
                />
                <div className="flex items-center gap-1 mx-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <img
                  src="/img/peridio-core/cloud.png"
                  alt="Cloud"
                  className="h-12"
                />
              </>
            }
          />

          {/* Direct Device Management Card */}
          <IntegrationCard
            title="Direct Device Management"
            description="Take full advantage of Peridio's comprehensive device management capabilities. Ideal for teams looking to streamline their entire device operations with a single, secure, and scalable solution."
            features={[
              "Complete lifecycle management with just-in-time provisioning",
              "Secure communication with mTLS and remote access capabilities",
              "Flexible integration via embedded Linux, Java APK, or REST API",
              "Choose between push notifications or polling-based updates",
            ]}
            icons={
              <>
                <img
                  src="/img/peridio-core/peridio-logo.png"
                  alt="Peridio"
                  className="w-18 h-18"
                />
                <div className="flex items-center gap-1 mx-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <img
                  src="/img/peridio-core/chip.png"
                  alt="Device"
                  className="w-18 h-18"
                />
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({
  title,
  description,
  features,
  icons,
}: {
  title: string;
  description: string;
  features: string[];
  icons: React.ReactNode;
}) {
  return (
    <div
      className="border border-gray-800 rounded-lg p-8"
      style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
    >
      {/* Icons */}
      <div className="flex items-center justify-center mb-8 h-24">{icons}</div>

      <h3 className="text-[24px] font-[700] font-montserrat mb-4">{title}</h3>
      <p className="text-[14px] font-['Space_Grotesk'] text-gray-300 leading-relaxed mb-6 h-[140px]">
        {description}
      </p>

      {/* Features list */}
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <svg
                className="w-5 h-5 text-[#5f51ff]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-[13px] font-['Space_Grotesk'] text-gray-300 leading-relaxed">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnterpriseSecuritySection() {
  return (
    <section
      className="text-white h-[650px] pt-[54px]"
      style={{
        background:
          "linear-gradient(360deg, #FFFFFF 0%, #5F51FF 25.64418859649123%, #000000 60.97519188596491%)",
      }}
    >
      <div className="max-w-[900px] mx-auto w-full">
        <div className="flex gap-12">
          {/* Left Column */}
          <div className="w-[440px] flex-shrink-0">
            <h3 className="text-[15px] font-[700] font-['Space_Grotesk'] uppercase mb-6 text-peridio-purple-lighter">
              ENTERPRISE SECURITY
            </h3>
            <h2 className="text-[28px] font-[700] font-montserrat leading-[1.2] mb-6">
              Scale from thousands to millions of devices seamlessly
            </h2>
            <p className="text-[16px] font-[400] font-['Space_Grotesk'] leading-relaxed mb-8">
              Proven flexibility that allows teams to confidently expand their
              device ecosystems without compromising performance or security.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Talk to an expert
              </Button>
            </Link>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-8">
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
  );
}

function SecurityFeature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>
      <div>
        <h4 className="text-[18px] font-[700] font-montserrat mb-2">{title}</h4>
        <p className="text-[14px] font-['Space_Grotesk'] leading-relaxed opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex gap-4">
            <FeatureCard
              title="Flexible Distribution & Targeting"
              description="Bundle & distribute by artifact, version, and target. Manage multiple applications and configurations independently while maintaining deployment cohesion across your fleet."
              width="445px"
            />
            <FeatureCard
              title="Cohort-Based Workflows"
              description="Transform complex deployments into controlled, repeatable processes. Move devices seamlessly between development, testing, and production environments with sophisticated targeting capabilities."
              width="445px"
            />
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            <FeatureCard
              title="Release Management"
              description="Fully automated and scalable release processes. Deploy with confidence using phased rollouts, validation gates, and instant rollback capabilities."
              width="335px"
            />

            {/* Video */}
            <div className="w-[200px] h-[200px] flex-shrink-0 relative">
              <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="/img/peridio-core/features-demo.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ width: "105px", height: "105px" }}>
                  <PeridioLogo />
                </div>
              </div>
            </div>

            <FeatureCard
              title="Fleet Observability"
              description="A centralized source of truth for operations teams. Get real-time visibility into deployment status, device health, and update progress across your entire fleet."
              width="335px"
            />
          </div>

          {/* Row 3 */}
          <div className="flex gap-4">
            <FeatureCard
              title="Device Management"
              description="Provision, monitor, and manage devices in the field with enterprise-grade security controls. Access devices remotely through secure tunneling without compromising your security posture."
              width="445px"
            />
            <FeatureCard
              title="Secure Remote Access"
              description="Connect securely to remote devices through our WireGuard-based proxy infrastructure. Access, troubleshoot, and diagnose devices in the field with enterprise-grade security controls and auditing capabilities."
              width="445px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  width,
}: {
  title: string;
  description: string;
  width: string;
}) {
  return (
    <div className="bg-[#F7F7F7] rounded-lg p-8" style={{ width }}>
      <h4 className="text-[#5f51ff] text-[16px] font-[700] font-montserrat mb-4">
        {title}
      </h4>
      <p className="text-[#6E6E6E] text-[14px] font-normal font-['Space_Grotesk'] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function BookDemoSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Circuit Pattern Background Image */}
      <img
        src="/img/circuit-pattern.png"
        alt="Circuit pattern background"
        className="absolute bottom-0 left-1/2"
        style={{
          width: "554px",
          height: "509px",
          objectFit: "cover",
          zIndex: 0,
          transform: "translate(-50%, 35%)",
        }}
      />

      <div className="max-w-[900px] mx-auto px-4 text-center relative z-10">
        {/* Small header */}
        <h3 className="text-[16px] font-[700] font-['Space_Grotesk'] uppercase text-[#5f51ff] mb-6">
          BOOK A DEMO
        </h3>

        {/* Main heading */}
        <h2 className="text-[58px] font-[700] font-montserrat leading-[1.15] mb-12 text-black tracking-[-2px]">
          See it for yourself
          <br />
          with a free demo
        </h2>

        {/* CTA Button */}
        <Button variant="primary" size="xl" className="w-[170px]">
          Let's talk
        </Button>
      </div>
    </section>
  );
}
