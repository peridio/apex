import React from "react";

export interface Card {
  icon: string;
  title: string;
  description: string;
  items?: string[];
}

interface IndustryStayInChargeSectionProps {
  title: React.ReactNode;
  description: string;
  cards: Card[];
  renderCard?: (card: Card, index: number) => React.ReactNode;
}

export default function IndustryStayInChargeSection({
  title,
  description,
  cards,
  renderCard,
}: IndustryStayInChargeSectionProps) {
  return (
    <section className="py-4 relative overflow-hidden bg-black">
      <div className="max-w-[980px] mx-auto px-4">
        <div
          className="rounded-xl p-12 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #000000 39.23040021929825%, #201B55 100%)",
          }}
        >
          {/* Top Row - Title and Description */}
          <div className="mb-10 flex gap-8">
            <div className="w-[275px] flex-shrink-0">
              <h2 className="text-[30px] leading-[1.3] font-montserrat text-white font-bold">
                {title}
              </h2>
            </div>

            <div className="flex-1">
              <p className="text-[18px] leading-[1.7] font-space-grotesk text-white">
                {description}
              </p>
            </div>
          </div>

          {/* Bottom Row - Three Feature Cards */}
          <div className="grid grid-cols-3 gap-6">
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
  );
}

function StayInChargeCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-2 flex flex-col">
      <div className="mb-6">
        <div className="w-[50px] h-[50px] rounded-lg bg-white/10 flex items-center justify-center">
          <img src={icon} alt={title} className="w-[50px] h-[50px]" />
        </div>
      </div>
      <div>
        <h3 className="text-[15px] font-bold font-space-grotesk text-white mb-2">
          {title}
        </h3>
        <p className="text-[14px] leading-[1.6] font-space-grotesk text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}
