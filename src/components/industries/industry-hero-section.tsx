interface IndustryHeroSectionProps {
  smallHeader: string;
  headline: string;
  leftColumnText: string;
  rightColumnText: string;
  pills: Array<{
    text: string;
  }>;
}

export default function IndustryHeroSection({
  smallHeader,
  headline,
  leftColumnText,
  rightColumnText,
  pills,
}: IndustryHeroSectionProps) {
  return (
    <section
      className="py-20 bg-black"
      style={{
        background:
          "radial-gradient(circle at 55% 100%, rgba(63, 54, 170, 0.99) 6.119791666666666%, rgba(0, 0, 0, 0) 54.166666666666664%), #000000",
      }}
    >
      <div className="max-w-[990px] mx-auto px-10">
        {/* Small header */}
        <p className="text-[15px] font-space-grotesk font-bold text-[#7c70ff] uppercase tracking-wide mb-8">
          {smallHeader}
        </p>

        {/* Main headline */}
        <h1 className="text-[31px] leading-[1.2] font-montserrat font-bold text-white mb-12 tracking-[-0.05em]">
          {headline}
        </h1>

        {/* Two column text */}
        <div className="grid grid-cols-2 gap-12 mb-12">
          <p className="text-[16px] leading-[1.6] font-space-grotesk text-white/80">
            {leftColumnText}
          </p>
          <p className="text-[16px] leading-[1.6] font-space-grotesk text-white/80">
            {rightColumnText}
          </p>
        </div>

        {/* Three pill buttons */}
        <div className="flex gap-6 justify-center">
          {pills.map((pill, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 w-content min-w-[240px] px-6 py-3 rounded-full border-2 border-white/30"
            >
              <span className="text-[15px] font-space-grotesk font-bold text-white uppercase tracking-[-0.05em]">
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
  );
}
