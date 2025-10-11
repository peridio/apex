export function TwoColumnSection({
  title,
  content,
}: {
  title: string
  content: React.ReactNode
}) {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto px-4 md:max-w-[620px] lg:max-w-[820px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left Column - Title */}
          <div className="lg:w-[150px]">
            <h2 className="font-space-grotesk text-[20px] font-bold text-[#5F51FF]">{title}</h2>
          </div>

          {/* Right Column - Content */}
          <div className="font-space-grotesk flex-1 space-y-4 text-[16px] leading-[1.6] text-black">
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}
