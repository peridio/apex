import { createFileRoute, Link } from "@tanstack/react-router";
import FAQSection, { type FAQItem } from "@/components/faq-section";
import TrustedPartnerSection from "@/components/trusted-partner-section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/avocado-os")({
  component: Page,
});

const faqItems: FAQItem[] = [
  {
    question: "What is Avocado OS in a nutshell? 🥑",
    answer:
      "Avocado OS is Peridio's flagship, open-source embedded Linux distribution built using the Yocto Project. It's designed to simplify development and maintenance for highly reliable and secure embedded products, balancing developer agility with production-ready robustness.",
  },
  {
    question: "Is Avocado OS just another Yocto build?",
    answer:
      "While built on Yocto's proven foundation, Avocado OS is more than just a distribution. It's an ecosystem focused on developer experience, composability beyond of Yocto, and integrated security features like simplified Secure Boot and encryption, making it easier to get from development to a secure, production-ready state.",
  },
  {
    question: "Who is Avocado OS intended for?",
    answer:
      "Avocado OS is made by embedded developers for embedded developers. It's ideal for teams building connected devices requiring high reliability, strong security, and the flexibility to manage complex software lifecycles efficiently. It's particularly optimized for Edge AI applications, NPU acceleration, and Asymmetric Multi-Processing.",
  },
  {
    question: 'What makes Avocado OS "Developer Friendly"?',
    answer:
      "It prioritizes the developer experience with tooling for rapid iteration, hardware-in-the-loop development/testing, hot code reloading, easy SDK management for cross-compilation, and intuitive interfaces for complex tasks. The goal is to reduce friction and let developers focus on creating value.",
  },
  {
    question: 'How does Avocado OS ensure systems are "Production Ready"?',
    answer:
      "Avocado OS integrates enterprise-level security features from the start, such as secure boot and full disk encryption, while maintaining a composable architecture for immutable, deterministic systems. Development environments and already security hardened and deployed, smoothing the path to production.",
  },
  {
    question: "Is Avocado OS open source?",
    answer:
      "Yes, Avocado OS is a free and open-source. Peridio proudly supports this initiative, fostering collaboration across the Linux Foundation and Yocto Project ecosystems. We actively welcome community participation.",
  },
  {
    question: "What are some key technical components of Avocado OS?",
    answer:
      "Avocado OS is a platform for composing embedded runtimes. It consists of a repository of core binary packages, systemd system and configuration extensions, and friendly developer tooling for constructing deterministic, immutable embedded runtimes. Pre-built packages and custom extensions can be signed and encrypted with your managed keys, producing comprehensive SBOMs and resulting in trusted, attestable systems.",
  },
  {
    question: "How does Avocado OS fit with Peridio Fleet and Managed Linux?",
    answer:
      "Peridio Managed Linux is a service that handles CVE and security updates, custom board support, and developer SDK management for enterprise companies using Avocado OS or their own custom Yocto distribution.",
  },
];

function Page() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted Partner Section */}
      <TrustedPartnerSection />

      {/* Developer Agility Section */}
      <DeveloperAgilitySection />

      {/* Why Developers Choose Section */}
      <WhyDevelopersChooseSection />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <FAQSection faqItems={faqItems} accentColor="#005522" />
      </section>

      {/* Join Community Section */}
      <JoinCommunitySection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden flex items-center h-[600px] bg-[url('/img/avocado-os/hero-background.png')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay to dim the background */}
      <div className="absolute inset-0 bg-black opacity-77" />

      <div className="max-w-[900px] mx-auto px-4 text-center relative z-10">
        <p className="text-[14px] font-space-grotesk font-bold text-[rgb(0,255,209)] uppercase mb-6 tracking-[2px]">
          AVOCADO OS
        </p>

        <h1 className="text-[60px] leading-[1.2] font-[700] font-montserrat text-white mb-6 tracking-[-1px]">
          Build Reliable Embedded Systems, Faster.
        </h1>

        <p className="text-[16px] leading-[1.6] font-bold font-space-grotesk text-white mb-4">
          Eliminate the traditional tradeoff between development speed and
          production readiness.
        </p>

        <p className="text-[16px] leading-[1.6] font-normal font-space-grotesk text-white mb-8 max-w-[800px] mx-auto">
          Avocado OS, our open-source Embedded Linux distro, delivers a seamless
          developer experience without compromising on the security and
          reliability your embedded products demand.
        </p>

        <div className="flex gap-4 justify-center">
          <Button
            asChild
            variant="outline-transparent-secondary"
            className="w-[220px] !text-sm border-white"
          >
            <a
              href="https://docs.avocado-os.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avocado OS Overview
            </a>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="w-[200px] !text-sm bg-[rgb(0,255,209)] hover:bg-[rgb(0,230,189)] text-black border-none"
          >
            <Link to="/contact">Talk to an Expert</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function DeveloperAgilitySection() {
  return (
    <section className="py-4 bg-black text-white">
      <div className="max-w-[900px] mx-auto px-4 flex justify-center">
        <div
          className="w-[860px] h-[400px] rounded-lg flex flex-col justify-center items-center text-center"
          style={{
            border: "1px solid rgb(0,58,46)",
          }}
        >
          <h2 className="text-[42px] leading-[1.1] font-[700] font-montserrat text-white mb-6 px-20 tracking-[-2px]">
            Developer Agility Meets Production Readiness
          </h2>

          <p className="text-[14px] leading-[1.8] font-[400] font-space-grotesk text-white mb-6 max-w-[800px] px-16 mx-auto">
            The embedded Linux world often forces a choice: develop quickly or
            build for production. Avocado OS eliminates this compromise. We
            created a distribution that supports fast iteration during
            development while embedding the security and reliability needed for
            the field from day one.
          </p>

          <p className="text-[18px] leading-[1.6] font-[700] font-space-grotesk text-white">
            Focus on innovation, not infrastructure hurdles.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyDevelopersChooseSection() {
  return (
    <section
      className="py-20 text-white relative"
      style={{
        background:
          "linear-gradient(360deg, #FFFFFF 0%, #003A2E 24.527138157894736%, #000000 100%)",
      }}
    >
      <div className="max-w-[810px] mx-auto">
        {/* Header with Logo */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex-1">
            <h2 className="text-[24px] leading-[1.2] font-[700] font-montserrat text-white mb-2">
              Why Developers Choose Avocado OS
            </h2>
            <p className="text-[16px] leading-[1.6] font-normal font-space-grotesk text-gray-300 max-w-[615px]">
              Avocado OS—
              <span className="font-bold">
                our flagship, open-source, Yocto-based distribution
              </span>
              —accelerates your path to market with a flexible, secure, and
              developer-friendly platform.
            </p>
          </div>
          <div className="mr-4">
            <img
              src="/img/avocado-os/avocado-logo.png"
              alt="Avocado OS"
              className="w-[98px] h-[98px]"
            />
          </div>
        </div>

        {/* Three Feature Cards */}
        <div className="flex gap-5">
          <FeatureCard
            title="ACCELERATED DEVELOPMENT CYCLES"
            description="Stop wrestling with your toolchain and start building. Avocado OS provides hot code reloading for hardware development, enabling rapid iteration cycles that keep your team productive and focused on innovation rather than infrastructure."
          />
          <FeatureCard
            title="PRODUCTION SECURITY WITHOUT COMPROMISE"
            description="Built with security in mind from the ground up. Avocado OS simplifies implementation of secure boot, LUKS encryption, and DM-Verity verification while maintaining the flexibility developers need during the development process."
          />
          <FeatureCard
            title="COMPOSABLE BY DESIGN"
            description="Construct your system with pre-built extensions and custom configurations. Avocado's layer repository and extensible architecture provide the perfect balance of standardization and customization, delivering reliable, deterministic results anywhere."
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
    <div className="grow bg-white rounded-lg w-[255px] h-[330px] pt-[35px] px-[30px] ">
      <h3 className="text-[16px] font-[700] font-space-grotesk text-black mb-4">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.6] font-normal font-space-grotesk text-[#6E6E6E]">
        {description}
      </p>
    </div>
  );
}

function JoinCommunitySection() {
  return (
    <section className="pt-20 pb-30 bg-white relative overflow-hidden">
      <div className="max-w-[900px] mx-auto px-4 text-center relative z-10">
        {/* Small header */}
        <h3 className="text-[16px] font-normal font-space-grotesk uppercase text-black mb-3 ">
          READY TO GET STARTED?
        </h3>

        {/* Main heading */}
        <h2 className="text-[42px] font-[700] font-montserrat leading-[1.15] mb-4 text-[rgb(53,55,59)] tracking-[-2px]">
          Join the community
        </h2>

        {/* CTA Button - Green/Teal color */}
        <Button
          asChild
          variant="secondary"
          size="xl"
          className="w-[280px] text-sm bg-[rgb(0,255,209)] hover:bg-[rgb(0,230,189)] text-black border-none"
        >
          <a
            href="https://github.com/peridio/avocado"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get started with Avocado OS
          </a>
        </Button>
      </div>

      {/* Avocado Image - positioned so 33% is visible */}
      <img
        src="/img/avocado-os/avocado-tux.png"
        alt="Avocado Tux"
        className="absolute bottom-0"
        style={{
          left: "50%",
          transform: "translate(-50%, 56%)",
          width: "330px",
          height: "auto",
        }}
      />
    </section>
  );
}
