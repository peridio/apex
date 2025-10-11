import { GalaxyLogo } from './svg/galaxy-logo'
import { VeryLogo } from './svg/very-logo'

interface InvestorCardProps {
  logo: React.ReactNode
  description: string
}

function InvestorCard({ logo, description }: InvestorCardProps) {
  return (
    <div
      className="border-fill-base-shade-3 flex flex-col gap-10 rounded-2xl border px-8 py-12 md:flex-row lg:flex-col lg:gap-0"
      style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
    >
      <div className="flex items-center justify-center lg:mb-12">{logo}</div>
      <p className="font-space-grotesk text-light-gray text-[13px] leading-[1.6]">{description}</p>
    </div>
  )
}

export default function InvestorsSection() {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[990px]">
        {/* Backed by the best Pill */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-white px-6 py-2">
            <span className="font-space-grotesk text-[14px] text-white">Backed by the best</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-montserrat mb-6 text-center text-[42px] leading-[1.2] font-bold tracking-[-1px] text-white">
          Our investors
        </h2>

        {/* Description */}
        <p className="font-space-grotesk text-medium-gray mb-12 text-center text-[17px] leading-[1.4]">
          Proudly supported by the best in business to change the game
        </p>

        {/* Investor Cards Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <InvestorCard
            logo={<GalaxyLogo className="h-[54px] w-[187px] text-white" />}
            description="Galaxy Interactive invests in pioneering content, technology, and social commerce companies that enable and amplify our agency and self-expression through integration of our digital and physical lives."
          />
          <InvestorCard
            logo={<VeryLogo className="h-[70px] w-[179px] text-white" />}
            description="Very's mission is to drive digital transformation and create cutting-edge products that enhance efficiency, productivity, and customer satisfaction. With a team of highly skilled professionals, we are committed to delivering excellence and pushing the boundaries of what's possible in the tech world."
          />
        </div>
      </div>
    </section>
  )
}
