interface IndustryHeroSectionProps {
  smallHeader: string
  headline: string
  leftColumnText: string
  rightColumnText: string
  pills: Array<{
    text: string
  }>
}

export default function IndustryHeroSection({
  smallHeader,
  headline,
  leftColumnText,
  rightColumnText,
  pills,
}: IndustryHeroSectionProps) {
  return (
    <section className="bg-black py-20 md:bg-[radial-gradient(circle_at_55%_100%,rgba(63,54,170,0.99)_6.12%,rgba(0,0,0,0)_54.17%)]">
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[725px] md:px-10 lg:max-w-[950px]">
        {/* Small header */}
        <p className="font-space-grotesk mb-4 text-[15px] font-bold tracking-wide text-[#7c70ff] uppercase md:mb-8">
          {smallHeader}
        </p>

        {/* Main headline */}
        <h1 className="font-montserrat mb-6 text-[21px] leading-[1.2] font-bold tracking-[-0.05em] text-white md:mb-12 md:text-[31px]">
          {headline}
        </h1>

        {/* Two column text */}
        <div className="mb-6 flex flex-col gap-6 px-0 sm:px-6 md:mb-12 md:grid md:grid-cols-2 md:gap-12 md:px-0">
          <p className="font-space-grotesk text-[16px] leading-[1.6] text-white/80">
            {leftColumnText}
          </p>
          <p className="font-space-grotesk text-[16px] leading-[1.6] text-white/80">
            {rightColumnText}
          </p>
        </div>

        {/* Three pill buttons */}
        <div className="flex flex-col justify-center gap-4 px-0 sm:px-6 md:flex-row md:gap-6 md:px-0">
          {pills.map((pill, index) => (
            <div
              key={index}
              className="w-content flex min-w-[240px] items-center justify-between gap-2 rounded-full border-2 border-white/30 px-6 py-3 md:justify-center"
            >
              <span className="font-space-grotesk text-[15px] font-bold tracking-[-0.05em] text-white uppercase">
                {pill.text}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6667 5L7.50004 14.1667L3.33337 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
