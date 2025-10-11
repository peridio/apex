import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface IndustryCTASectionProps {
  backgroundImage: string
  backgroundImageClass?: string
}

export default function IndustryCTASection({
  backgroundImage,
  backgroundImageClass,
}: IndustryCTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-40">
      {/* Background Image */}
      <div
        className={cn(
          // bg-contain
          'absolute top-1/2 left-1/2 bg-center bg-no-repeat opacity-66',
          backgroundImageClass,
        )}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-4 text-center">
        <p className="font-space-grotesk text-peridio-purple mb-6 text-[16px] font-semibold uppercase">
          BOOK A DEMO
        </p>

        <h2 className="font-montserrat mb-8 text-[32px] leading-[1.2] font-[700] tracking-[-1px] text-[#35373B] md:text-[58px]">
          See it for yourself
          <br />
          with a free demo
        </h2>

        <Button asChild variant="primary" size="xl" className="w-[290px] !text-sm lg:w-[170px]">
          <Link to="/contact">Lets talk</Link>
        </Button>
      </div>
    </section>
  )
}
