import { createFileRoute } from '@tanstack/react-router'
import AboutAvocadoSection from '@/components/about-avocado-section'
import HeroFormSection from '@/components/lp/hero-form-section'
import WhySection from '@/components/lp/why-section'

export const Route = createFileRoute('/avocado-linux-whitepaper')({
  component: Page,
})

const HS_FORM_ID = 'avocado-linux-whitepaper-form'

function Page() {
  return (
    <div className="bg-black text-white">
      <HeroFormSection
        hubspotFormId="5f443d18-b929-4e6c-b7d9-a7f086040154"
        formElementId={HS_FORM_ID}
        headerText="AVOCADO OS WHITEPAPER"
        title="Not Just Another OS — A Build System for the AI Era"
        description={
          <p className="font-[700]">
            Make your OS part of your product. Build better embedded devices faster, with security
            and reliability baked in.
          </p>
        }
        listTitle="📖 What's Inside:"
        listItems={[
          'How Avocado OS rethinks embedded Linux development for the AI era',
          'Why the OS must be an extension of your product — not just a generic distribution',
          'Real-world benefits: faster time-to-market, lower costs, higher-quality devices',
          'Insights from the Linux Foundation collaboration and Yocto-based design',
        ]}
      />
      <WhySection
        title="Why download this whitepaper?"
        paragraphs={[
          'Embedded teams have long faced a frustrating choice: Speed up development or guarantee production readiness.',
          'Avocado OS breaks this false dichotomy by merging rapid prototyping with rock-solid, production-grade features — all in one consistent framework.',
        ]}
        boldText={['Speed up development or guarantee production readiness.']}
        listItems={[
          'Immutable, deterministic runtimes for fault-tolerant, secure devices',
          'Built-in secure boot, full disk encryption, and recovery kernels',
          'Manufacturing modes and end-of-line unit tests for production confidence',
          'Seamless transition from development to deployment without costly tradeoffs',
        ]}
        concludingStatement="Focus on innovation, not infrastructure hurdles."
      />
      <AboutAvocadoSection />
    </div>
  )
}
