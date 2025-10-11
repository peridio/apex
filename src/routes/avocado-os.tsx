import { createFileRoute, Link } from '@tanstack/react-router'
import FAQSection, { type FAQItem } from '@/components/faq-section'
import TrustedPartnerSection from '@/components/trusted-partner-section'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/avocado-os')({
  component: Page,
})

const faqItems: FAQItem[] = [
  {
    question: 'What is Avocado OS in a nutshell? 🥑',
    answer:
      "Avocado OS is Peridio's flagship, open-source embedded Linux distribution built using the Yocto Project. It's designed to simplify development and maintenance for highly reliable and secure embedded products, balancing developer agility with production-ready robustness.",
  },
  {
    question: 'Is Avocado OS just another Yocto build?',
    answer:
      "While built on Yocto's proven foundation, Avocado OS is more than just a distribution. It's an ecosystem focused on developer experience, composability beyond of Yocto, and integrated security features like simplified Secure Boot and encryption, making it easier to get from development to a secure, production-ready state.",
  },
  {
    question: 'Who is Avocado OS intended for?',
    answer:
      "Avocado OS is made by embedded developers for embedded developers. It's ideal for teams building connected devices requiring high reliability, strong security, and the flexibility to manage complex software lifecycles efficiently. It's particularly optimized for Edge AI applications, NPU acceleration, and Asymmetric Multi-Processing.",
  },
  {
    question: 'What makes Avocado OS "Developer Friendly"?',
    answer:
      'It prioritizes the developer experience with tooling for rapid iteration, hardware-in-the-loop development/testing, hot code reloading, easy SDK management for cross-compilation, and intuitive interfaces for complex tasks. The goal is to reduce friction and let developers focus on creating value.',
  },
  {
    question: 'How does Avocado OS ensure systems are "Production Ready"?',
    answer:
      'Avocado OS integrates enterprise-level security features from the start, such as secure boot and full disk encryption, while maintaining a composable architecture for immutable, deterministic systems. Development environments and already security hardened and deployed, smoothing the path to production.',
  },
  {
    question: 'Is Avocado OS open source?',
    answer:
      'Yes, Avocado OS is a free and open-source. Peridio proudly supports this initiative, fostering collaboration across the Linux Foundation and Yocto Project ecosystems. We actively welcome community participation.',
  },
  {
    question: 'What are some key technical components of Avocado OS?',
    answer:
      'Avocado OS is a platform for composing embedded runtimes. It consists of a repository of core binary packages, systemd system and configuration extensions, and friendly developer tooling for constructing deterministic, immutable embedded runtimes. Pre-built packages and custom extensions can be signed and encrypted with your managed keys, producing comprehensive SBOMs and resulting in trusted, attestable systems.',
  },
  {
    question: 'How does Avocado OS fit with Peridio Fleet and Managed Linux?',
    answer:
      'Peridio Managed Linux is a service that handles CVE and security updates, custom board support, and developer SDK management for enterprise companies using Avocado OS or their own custom Yocto distribution.',
  },
]

function Page() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <TrustedPartnerSection />
      <DeveloperAgilitySection />
      <WhyDevelopersChooseSection />
      <section className="bg-white py-20">
        <FAQSection faqItems={faqItems} accentColor="#005522" />
      </section>
      <JoinCommunitySection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative flex h-[550px] items-center overflow-hidden bg-[url('/img/avocado-os/hero-background.png')] bg-cover bg-center bg-no-repeat sm:h-[400px] md:h-[355px] lg:h-[600px]">
      {/* Dark overlay to dim the background */}
      <div className="absolute inset-0 bg-black opacity-77" />

      <div className="relative z-10 mx-auto max-w-[440px] px-6 pt-20 text-center sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
        <p className="font-space-grotesk text-avocado-teal mb-3 text-[14px] font-bold tracking-[2px] uppercase lg:mb-6">
          AVOCADO OS
        </p>

        <h1 className="font-montserrat mb-6 text-[26px] leading-[1.2] font-[700] tracking-[-1px] text-white md:text-[28px] lg:text-[60px]">
          Build Reliable Embedded Systems, Faster.
        </h1>

        <p className="font-space-grotesk mb-4 text-[14px] leading-[1.6] font-bold text-white lg:text-[16px]">
          Eliminate the traditional tradeoff between development speed and production readiness.
        </p>

        <p className="font-space-grotext-white mx-auto mb-8 max-w-[800px] text-[14px] leading-[1.6] font-normal lg:text-[16px]">
          Avocado OS, our open-source Embedded Linux distro, delivers a seamless developer
          experience without compromising on the security and reliability your embedded products
          demand.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            asChild
            variant="outline-transparent-secondary"
            className="w-[160px] border-white !text-sm md:w-[220px]"
          >
            <a href="https://docs.avocado-os.org/" target="_blank" rel="noopener noreferrer">
              Avocado OS Overview
            </a>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="bg-avocado-teal hover:bg-avocado-teal-hover w-[165px] border-none !text-sm text-black md:w-[200px]"
          >
            <Link to="/contact">Talk to an Expert</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function DeveloperAgilitySection() {
  return (
    <section className="bg-black py-4 text-white">
      <div className="mx-auto flex max-w-[900px] justify-center px-4">
        <div
          className="mx-auto flex h-auto w-full max-w-[440px] flex-col items-center justify-center rounded-lg p-6 text-center md:max-w-[800px] lg:h-[400px] lg:max-w-[860px]"
          style={{
            border: '1px solid #003a2e',
          }}
        >
          <h2 className="font-montserrat mb-6 max-w-[480px] text-[26px] leading-[1.1] font-[700] tracking-[-2px] text-white md:text-[36px] lg:text-[42px]">
            Developer Agility Meets Production Readiness
          </h2>

          <p className="font-space-grotesk mx-auto mb-6 max-w-[667px] text-[14px] leading-[1.8] font-[400] text-white">
            The embedded Linux world often forces a choice: develop quickly or build for production.
            Avocado OS eliminates this compromise. We created a distribution that supports fast
            iteration during development while embedding the security and reliability needed for the
            field from day one.
          </p>

          <p className="font-space-grotesk text-[18px] leading-[1.6] font-[700] text-white">
            Focus on innovation, not infrastructure hurdles.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhyDevelopersChooseSection() {
  return (
    <section
      className="relative py-20 text-white"
      style={{
        background:
          'linear-gradient(360deg, #FFFFFF 0%, #003A2E 24.527138157894736%, #000000 100%)',
      }}
    >
      <div className="mx-auto max-w-[450px] md:max-w-[810px]">
        {/* Header with Logo */}
        <div className="mb-12 flex items-start justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-montserrat mb-2 text-[23px] leading-[1.2] font-[700] text-white md:text-[36px] lg:text-[24px]">
              Why Developers Choose Avocado OS
            </h2>
            <p className="font-space-grotesk mx-auto max-w-[615px] text-[16px] leading-[1.6] font-normal text-gray-300 lg:mx-0">
              Avocado OS—
              <span className="font-bold">our flagship, open-source, Yocto-based distribution</span>
              —accelerates your path to market with a flexible, secure, and developer-friendly
              platform.
            </p>
          </div>
          <div className="mr-4 hidden lg:block">
            <img
              src="/img/avocado-os/avocado-logo.png"
              alt="Avocado OS"
              className="h-[98px] w-[98px]"
            />
          </div>
        </div>

        {/* Three Feature Cards */}
        <div className="flex flex-col items-center justify-center gap-5 px-4 md:flex-row md:px-0">
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
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="h-autolg:h-[330px] w-full grow rounded-lg bg-white px-8 py-8 md:w-[255px]">
      <h3 className="font-space-grotesk mb-4 text-[16px] font-[700] text-black">{title}</h3>
      <p className="font-space-grotesk text-medium-gray text-[14px] leading-[1.6] font-normal">
        {description}
      </p>
    </div>
  )
}

function JoinCommunitySection() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-30">
      <div className="relative z-10 mx-auto max-w-[900px] px-4 text-center">
        {/* Small header */}
        <h3 className="font-space-grotesk mb-3 text-[16px] font-normal text-black uppercase">
          READY TO GET STARTED?
        </h3>

        {/* Main heading */}
        <h2 className="font-montserrat mb-4 text-[42px] leading-[1.15] font-[700] tracking-[-2px] text-[#35373b]">
          Join the community
        </h2>

        {/* CTA Button - Green/Teal color */}
        <Button
          asChild
          variant="secondary"
          size="xl"
          className="bg-avocado-teal hover:bg-avocado-teal-hover w-[280px] border-none text-sm text-black"
        >
          <a href="https://github.com/peridio/avocado" target="_blank" rel="noopener noreferrer">
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
          left: '50%',
          transform: 'translate(-50%, 56%)',
          width: '330px',
          height: 'auto',
        }}
      />
    </section>
  )
}
