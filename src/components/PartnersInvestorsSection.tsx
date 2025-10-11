import { Button } from "@/components/ui/button";

export default function PartnersInvestorsSection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="border border-fill-base-shade-3 rounded-3xl p-16 text-center">
          {/* Our Partners Pill */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-2 border border-white rounded-full">
              <span className="text-white font-space-grotesk text-[14px]">
                Our Partners
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-[42px] leading-[1.2] font-bold font-montserrat mb-6 text-white tracking-[-1px]">
            Want to learn more about
            <br />
            Peridio or looking to invest?
          </h2>

          {/* Description */}
          <p className="text-[17px] leading-[1.4] font-space-grotesk mb-8 text-text-secondary max-w-[700px] mx-auto">
            Together with our partners we are accelerating the adoption of
            remote software management for device fleets around the world.
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
  );
}
