import { Button } from '@/components/ui/button'

export default function AboutAvocadoSection() {
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
