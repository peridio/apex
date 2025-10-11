import { Button } from '@/components/ui/button'

export default function CallToActionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Circuit Pattern Background Image */}
      <img
        src="/img/circuit-pattern.png"
        alt="connection"
        className="absolute bottom-0 left-1/2 z-0 h-[509px] w-[554px] translate-x-[-50%] translate-y-[35%] object-cover"
      />

      <div className="relative z-10 mx-auto max-w-[450px] px-4 text-center md:max-w-[750px] lg:max-w-[900px]">
        <h2 className="font-montserrat mb-6 text-[24px] leading-[1.2] font-bold text-black md:text-[42px] lg:tracking-[-2.5px]">
          Transform Your Embedded
          <br />
          Product Journey
        </h2>

        <p className="font-space-grotesk mb-8 text-[14px] leading-[1.4] text-black lg:text-[17px]">
          Stop treating your firmware as a liability. Build for the future with Peridio.
        </p>

        <Button variant="primary" className="w-full !text-sm md:w-[170px]">
          Book a Demo
        </Button>
      </div>
    </section>
  )
}
