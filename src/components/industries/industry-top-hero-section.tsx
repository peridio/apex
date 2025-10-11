import { DockerLogo } from '@/components/svg/docker-logo'
import { LinuxFoundationLogo } from '@/components/svg/linux-foundation-logo'
import { YoctoLogo } from '@/components/svg/yocto-logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'

interface IndustryTopHeroSectionProps {
  smallHeader: string
  headline: string
  description: string
  heroImage: string
  heroImageAlt: string
  heroImageClassName?: string
  height?: string
  // TODO: remove this
  leftColumnWidth?: string
}

export default function IndustryTopHeroSection({
  smallHeader,
  headline,
  description,
  heroImage,
  heroImageAlt,
  heroImageClassName = '',
}: IndustryTopHeroSectionProps) {
  return (
    <section
      className="relative flex h-[750px] items-center overflow-hidden bg-white md:h-[718px] lg:h-[837px]"
      style={{
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 62.06483004385965%, rgba(175, 168, 255, 0.9) 80.23917214912281%, rgba(95, 81, 255, 0.85) 90.26864035087719%, rgba(0, 0, 0, 0.8) 100%)',
      }}
    >
      {/* Content Layer */}
      <div className="z-20 mx-auto flex w-full max-w-[440px] flex-col mix-blend-multiply md:max-w-[725px] md:flex-row lg:max-w-[950px]">
        {/* Left Column - Content */}
        <div className="flex w-full flex-col pt-30 text-center md:flex-[1_0_56%] md:text-left lg:flex-[1_0_466px]">
          {/* Small header */}
          <p className="font-space-grotesk text-peridio-purple order-2 mb-6 text-[15px] font-bold tracking-wide uppercase md:order-1">
            {smallHeader}
          </p>

          {/* Main headline */}
          <h1 className="font-montserrat order-1 mb-6 px-5 text-[32px] leading-[1.1] font-bold tracking-[-0.05em] text-[#1e1346] md:order-2 md:px-0 md:text-[36px] lg:text-[38px]">
            {headline}
          </h1>

          {/* Description */}
          <p className="font-space-grotesk order-3 mb-4 px-12 text-[14px] leading-[1.6] font-normal text-gray-700 md:mb-8 md:px-0 md:text-[18px] lg:text-[16px]">
            {description}
          </p>

          {/* Buttons */}
          <div className="order-4 mb-6 flex justify-center gap-4 md:mb-12 md:justify-start">
            <Button asChild variant="outline-transparent-primary" className="w-[170px] py-3">
              <Link to="/peridio-core">View features</Link>
            </Button>
            <Button asChild variant="primary" className="px-6 py-3">
              <a href="/contact">Talk to an expert</a>
            </Button>
          </div>

          {/* Logos */}
          <div className="order-5 ml-4 flex items-center justify-center gap-8 md:justify-start">
            <div className="flex h-5 items-center">
              <DockerLogo className="text-medium-gray h-6 w-auto" />
            </div>
            <div className="flex h-6 items-center">
              <YoctoLogo className="text-medium-gray h-6 w-auto" />
            </div>
            <div className="flex h-6 items-center">
              <LinuxFoundationLogo className="text-medium-gray h-6 w-auto" />
            </div>
          </div>
        </div>

        {/* Right Column - Spacer for image */}
        <div className="z-5 flex h-full items-start justify-center mix-blend-multiply md:justify-end">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className={cn('relative max-w-fit', heroImageClassName)}
          />
        </div>
      </div>
    </section>
  )
}
