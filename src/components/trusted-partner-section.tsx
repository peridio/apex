import { LogoSlider } from '@/components/logo-slider'
import { cn } from '@/lib/utils'

export default function TrustedPartnerSection({ className }: { className?: string }) {
  return (
    <section className={cn('w-full bg-black', className)}>
      <div className="mx-auto max-w-[900px] px-4">
        <div className="flex items-center gap-8">
          <div className="flex-shrink-0">
            <h3 className="font-space-grotesk text-light-gray text-[14px] whitespace-nowrap">
              A trusted partner to
            </h3>
          </div>
          <div className="-mr-4 min-w-0 flex-1">
            <LogoSlider />
          </div>
        </div>
      </div>
    </section>
  )
}
