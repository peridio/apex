import React from 'react'

export interface Card {
  icon: string
  title: string
  description: string
  items?: string[]
}

interface IndustryStayInChargeSectionProps {
  title: React.ReactNode
  description: string
  cards: Card[]
  renderCard?: (card: Card, index: number) => React.ReactNode
}

export default function IndustryStayInChargeSection({
  title,
  description,
  cards,
  renderCard,
}: IndustryStayInChargeSectionProps) {
  return (
    <section className="relative overflow-hidden bg-black py-4">
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[725px] md:px-4 lg:max-w-[980px]">
        <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(180deg,#000000_39.23%,#201B55_100%)] md:p-12">
          {/* Top Row - Title and Description */}
          <div className="mb-4 flex flex-col gap-4 text-center md:mb-10 md:flex-row md:gap-8 md:text-left">
            <div className="w-full flex-shrink-0 md:w-[275px]">
              <h2 className="font-montserrat px-6 text-[30px] leading-[1.3] font-bold text-white sm:px-0 sm:text-[24px] md:text-[30px]">
                {title}
              </h2>
            </div>

            <div className="flex-1">
              <p className="font-space-grotesk px-5 text-[14px] leading-[1.7] text-white md:px-0 md:text-[18px]">
                {description}
              </p>
            </div>
          </div>

          {/* Bottom Row - Three Feature Cards */}
          <div className="grid grid-cols-1 gap-2 pb-8 md:grid-cols-3 md:gap-6 md:pb-0">
            {cards.map((card, index) =>
              renderCard ? (
                <div key={index}>{renderCard(card, index)}</div>
              ) : (
                <StayInChargeCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function StayInChargeCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col p-2 text-center md:text-left">
      <div className="mb-3 flex justify-center md:mb-6 md:justify-start">
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-white/10">
          <img src={icon} alt={title} className="h-[50px] w-[50px]" />
        </div>
      </div>
      <div>
        <h3 className="font-space-grotesk mb-2 text-[15px] font-bold text-white">{title}</h3>
        <p className="font-space-grotesk px-6 text-[14px] leading-[1.6] text-gray-300 md:px-0">
          {description}
        </p>
      </div>
    </div>
  )
}
