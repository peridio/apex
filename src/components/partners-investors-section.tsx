import { Button } from '@/components/ui/button'

export default function PartnersInvestorsSection() {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[990px]">
        <div
          className="rounded-3xl border p-8 text-center md:p-16"
          style={{ borderColor: 'rgba(53,55,59, 1)' }}
        >
          {/* Our Partners Pill */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-white px-6 py-2">
              <span className="font-space-grotesk text-[14px] text-white">Our Partners</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-montserrat mb-6 text-[26px] leading-[1.2] font-bold tracking-[-1px] text-white md:text-[36px] lg:text-[42px]">
            Want to learn more about
            <br />
            Peridio or looking to invest?
          </h2>

          {/* Description */}
          <p className="font-space-grotesk text-medium-gray mx-auto mb-8 max-w-[700px] text-[14px] leading-[1.4] md:text-[17px]">
            Together with our partners we are accelerating the adoption of remote software
            management for device fleets around the world.
          </p>

          {/* Contact Button */}
          <a
            href="https://meetings.hubspot.com/bill-brock"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="w-[175px]">
              Contact us
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
