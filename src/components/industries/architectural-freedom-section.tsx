import { PeridioLogoFull } from '@/components/svg/peridio-logo-full'
import { Button } from '@/components/ui/button'

interface FeatureCardData {
  icon: string
  title: string
  description: string
}

interface ArchitecturalFreedomSectionProps {
  title?: string
  description?: string
  features?: FeatureCardData[]
}

export default function ArchitecturalFreedomSection({
  title = 'Transform your operations while preserving architectural freedom',
  description = "One of the most critical decisions in your edge architecture is how devices will communicate and be managed. Peridio's flexible integration approach ensures you're never locked into a single strategy.",
  features = [
    {
      icon: '📐',
      title: 'A Highly Portable Architecture',
      description:
        'Peridio seamlessly integrates with existing infrastructure, keeping you in control of your embedded and cloud architectures.',
    },
    {
      icon: '⚡',
      title: 'Increased Speed-to-Market',
      description:
        'Effortlessly ship new features and security updates with streamlined workflows, Peridio enables teams to complete releases in minutes rather than weeks.',
    },
    {
      icon: '⚙️',
      title: 'Enhanced Reliability and Customer Satisfaction',
      description:
        'With Peridio, every single device has a tested and clear update strategy, ensuring that your customers have a positive experience starting with the first boot.',
    },
    {
      icon: '📊',
      title: 'Proven Scalability for Growing Fleets',
      description:
        'Proven flexibility that allows teams to confidently expand their device ecosystems without compromising performance or security.',
    },
  ],
}: ArchitecturalFreedomSectionProps) {
  return (
    <section className="relative overflow-hidden bg-black py-8">
      <div className="mx-auto flex justify-center px-4">
        <div className="max-w-[440px] rounded-lg pt-[40px] pb-[40px] md:max-w-[725px] lg:max-w-[980px] lg:px-[46px]">
          {/* Top Row - Title/Description and Button */}
          <div className="mb-8 flex flex-col gap-8 lg:flex-row">
            {/* Left Column - Title and Description */}
            <div className="text-center lg:w-[640px] lg:text-left">
              <h2 className="font-montserrat mb-4 text-[23px] leading-[1.2] font-bold text-white md:text-[36px] lg:text-[32px]">
                {title}
              </h2>

              <p className="font-space-grotesk px-4 text-[14px] leading-[1.6] font-normal text-gray-300 md:px-0 md:text-[16px] lg:text-[18px]">
                {description}
              </p>
            </div>

            {/* Right Column - Button */}
            <div className="flex grow justify-center lg:justify-end">
              <Button
                asChild
                variant="primary"
                className="w-full !text-sm md:w-[200px] lg:w-[150px]"
              >
                <a href="/contact">Book a demo</a>
              </Button>
            </div>
          </div>

          {/* Bottom Row - 2x2 Grid and Info Card */}
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left Column - 2x2 Grid of Feature Cards */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-4 md:h-[420px] md:grid-cols-2">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Info Card */}
            <div className="flex w-full items-start lg:w-[300px]">
              <div
                className="flex flex-col justify-center rounded-lg px-8 py-16 text-left md:py-8 lg:h-[495px] lg:py-0"
                style={{
                  background: 'linear-gradient(315deg, #CAC5FF 0%, #FFFFFF 53.54303728070175%)',
                }}
              >
                <p className="font-space-grotesk text-peridio-purple mb-4 text-center text-[12px] font-bold tracking-wider uppercase md:text-left">
                  THE BETTER WAY
                </p>

                <div className="mb-6 flex justify-center md:justify-start">
                  <PeridioLogoFull
                    className="text-black"
                    iconHeight={34}
                    iconWidth={34}
                    wordmarkHeight={26}
                    wordmarkWidth={114}
                  />
                </div>

                <p className="font-space-grotesk text-[15px] leading-[1.6] text-black">
                  Peridio specializes in flexible and scalable software update solutions for IoT and
                  embedded systems, enabling businesses to streamline operations with secure,
                  efficient, and automated updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="w-full rounded-lg bg-[rgba(28,28,34,1)] p-6 lg:h-[240px] lg:w-[280px]">
      <div className="mb-3 flex items-center gap-3">
        <div className="text-[28px]">{icon}</div>
        <h3 className="font-space-grotesk text-[14px] font-bold text-white">{title}</h3>
      </div>
      <p className="font-space-grotesk text-[14px] leading-[1.5] text-gray-300">{description}</p>
    </div>
  )
}
