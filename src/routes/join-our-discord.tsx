import { createFileRoute } from '@tanstack/react-router'
import AboutAvocadoSection from '@/components/about-avocado-section'
import HeroFormSection from '@/components/lp/hero-form-section'
import WhySection from '@/components/lp/why-section'

export const Route = createFileRoute('/join-our-discord')({
  component: Page,
})

const HS_FORM_ID = 'join-discord-form'

function Page() {
  return (
    <div className="bg-black text-white">
      <HeroFormSection
        hubspotFormId="d6aca7b5-d578-48b3-a85d-109ffdf297bb"
        formElementId={HS_FORM_ID}
        headerText="JOIN US AND BUILD TOGETHER"
        title="Avocado OS Discord"
        description={
          <>
            <p className="mb-4 font-[700]">
              Avocado Linux is built for developers who want to ship faster, debug smarter, and run
              embedded Linux applications without compromise.
            </p>
            <p>
              We’re growing a community of builders, contributors, and innovators—and we’d love to
              have you join us.
            </p>
            <p>Sign up to get your invite to the official Avocado Linux Discord, where you can:</p>
          </>
        }
        listItems={[
          'Connect with other developers working on embedded Linux and Edge AI.',
          'Get early access to news, updates, and technical resources.',
          'Share ideas, ask questions, and help shape the future of Avocado Linux.',
        ]}
      />
      <WhySection
        title="Why join the movement?"
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
