import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useHubspotForm } from '@/lib/hubspot-forms'

export const Route = createFileRoute('/avocado-linux-whitepaper')({
  component: Page,
})

function Page() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <WhyDownloadSection />
      <AboutAvocadoSection />
    </div>
  )
}

const HS_FORM_ID = 'avocado-linux-whitepaper-form'

function HeroSection() {
  useHubspotForm('5f443d18-b929-4e6c-b7d9-a7f086040154', HS_FORM_ID)

  return (
    <section className="relative h-[625px] overflow-hidden bg-[url('/img/avocado-os/hero-background.png')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay to dim the background */}
      <div className="absolute inset-0 bg-black opacity-77" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
          <div className="flex flex-col gap-8 pt-10 lg:flex-row">
            {/* Left Column - Content */}
            <div className="flex w-[460px] flex-col justify-center">
              <p className="font-space-grotesk text-avocado-teal mb-3 text-[13px] font-bold tracking-[2px] uppercase">
                AVOCADO OS WHITEPAPER
              </p>

              <h1 className="font-montserrat mb-4 text-[35px] leading-[1.2] font-[700] tracking-[-2px] text-white">
                Not Just Another OS — A Build System for the AI Era
              </h1>

              <p className="font-space-grotesk mb-4 text-[15px] leading-[1.6] font-[700] text-white">
                Make your OS part of your product. Build better embedded devices faster, with
                security and reliability baked in.
              </p>

              {/* What's Inside Section */}
              <div className="space-y-4">
                <h3 className="font-space-grotesk text-[16px] font-[700] text-white">
                  📖 What's Inside:
                </h3>

                <ul className="list-disc space-y-3 pl-6">
                  <li className="font-space-grotesk mb-1 text-[12px] leading-[1.6] font-normal text-white">
                    How Avocado OS rethinks embedded Linux development for the AI era
                  </li>
                  <li className="font-space-grotesk mb-1 text-[12px] leading-[1.6] font-normal text-white">
                    Why the OS must be an extension of your product — not just a generic
                    distribution
                  </li>
                  <li className="font-space-grotesk mb-1 text-[12px] leading-[1.6] font-normal text-white">
                    Real-world benefits: faster time-to-market, lower costs, higher-quality devices
                  </li>
                  <li className="font-space-grotesk mb-1 text-[12px] leading-[1.6] font-normal text-white">
                    Insights from the Linux Foundation collaboration and Yocto-based design
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Empty Form Card */}
            <div className="flex w-[420px] flex-col justify-center">
              <div className="mx-auto w-full max-w-md">
                <div
                  className="min-h-[400px] rounded-lg border p-8 backdrop-blur-sm"
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(49,49,49,0.38) 0%, rgba(0,0,0,0.38) 100%, rgba(0,0,0,0.38) 44.627192982456144%)',
                    borderColor: 'rgba(0, 255, 209, 0.25)',
                  }}
                >
                  <div id={HS_FORM_ID} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyDownloadSection() {
  return (
    <section
      className="flex h-[470px] pt-10"
      style={{
        background: 'linear-gradient(360deg, #003832 0%, #000000 44.627192982456144%)',
      }}
    >
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
        <div>
          <h2 className="font-montserrat mb-6 text-[22px] font-[700] text-white">
            Why download this whitepaper?
          </h2>

          <p className="font-space-grotesk mb-5 text-[16px] leading-[1.6] text-white">
            Embedded teams have long faced a frustrating choice:{' '}
            <strong>Speed up development or guarantee production readiness.</strong>
          </p>

          <p className="font-space-grotesk mb-8 text-[16px] leading-[1.6] text-white">
            Avocado OS breaks this false dichotomy by merging rapid prototyping with rock-solid,
            production-grade features — all in one consistent framework.
          </p>

          <ul className="mb-8 list-disc space-y-1 pl-6">
            <li className="font-space-grotesk mb-1 text-[16px] leading-[1.6] text-white">
              Immutable, deterministic runtimes for fault-tolerant, secure devices
            </li>
            <li className="font-space-grotesk mb-1 text-[16px] leading-[1.6] text-white">
              Built-in secure boot, full disk encryption, and recovery kernels
            </li>
            <li className="font-space-grotesk mb-1 text-[16px] leading-[1.6] text-white">
              Manufacturing modes and end-of-line unit tests for production confidence
            </li>
            <li className="font-space-grotesk mb-1 text-[16px] leading-[1.6] text-white">
              Seamless transition from development to deployment without costly tradeoffs
            </li>
          </ul>

          <p className="font-space-grotesk text-[16px] font-bold text-white">
            Focus on innovation, not infrastructure hurdles.
          </p>
        </div>
      </div>
    </section>
  )
}

function AboutAvocadoSection() {
  return (
    <section
      className="flex items-center pt-12 lg:h-[490px] lg:pt-0"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF 90.28577302631578%, #F0F0F0 100%, #000000 100%)',
      }}
    >
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Left Column - Content */}
          <div className="lg:w-2/3">
            <h2 className="font-montserrat mb-6 text-[22px] font-bold text-[#003832] uppercase">
              ABOUT AVOCADO OS
            </h2>

            <p className="font-space-grotesk mb-6 text-[16px] leading-[1.6] text-[#333333]">
              Avocado OS is a next-generation embedded Linux distribution that bridges the gap
              between rapid development and production-grade security. Built and maintained by
              Peridio, Avocado OS rethinks how Linux systems are built, deployed, and maintained in
              modern products.
            </p>

            <p className="font-space-grotesk mb-6 text-[16px] leading-[1.6] text-[#333333]">
              Whether you're prototyping on a dev board or deploying to thousands of devices in the
              field, Avocado helps you move fast{' '}
              <strong>without compromising on reliability, security, or maintainability.</strong>
            </p>

            <p className="font-space-grotesk mb-8 text-[16px] leading-[1.6] text-[#333333]">
              Avocado OS is 100% open source. It's built to stand alone — and scales even further
              when paired with Peridio Core.
            </p>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-avocado-teal hover:bg-avocado-teal-hover w-[280px] border-none text-black"
            >
              <a href="https://www.avocadolinux.org/" target="_blank" rel="noopener noreferrer">
                Get started with Avocado OS
              </a>
            </Button>
          </div>

          {/* Right Column - Penguin Image */}
          <div className="flex justify-center lg:w-1/3">
            <img
              src="/img/avocado-os/avocado-tux.png"
              alt="Avocado Tux"
              className="h-auto w-[160px] lg:w-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
