import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqItems: FAQItem[]
  accentColor?: string
  variant?: 'card' | 'default'
}

export default function FAQSection({
  faqItems,
  accentColor = '#5f51ff',
  variant = 'default',
}: FAQSectionProps) {
  const content = (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Left Column - FAQ Label */}
      <div className={variant === 'card' ? 'flex-1' : 'flex-1 px-[46px]'}>
        <h2 className="font-montserrat text-center text-[38px] font-[700] text-black lg:text-left">
          FAQ
        </h2>
      </div>

      {/* Right Column - FAQ Content */}
      <div
        className={variant === 'card' ? 'flex-shrink-0 lg:w-[580px]' : 'flex-shrink-0 lg:w-[575px]'}
      >
        <style>
          {`
            .faq-accordion-${accentColor.replace('#', '')} button[data-state] svg {
              color: ${accentColor};
            }
          `}
        </style>
        <Accordion
          type="single"
          collapsible
          className={`w-full faq-accordion-${accentColor.replace('#', '')}`}
        >
          {faqItems.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 last:border-b-0"
            >
              <AccordionTrigger className="py-6 text-left font-sans text-[18px] font-bold text-black hover:no-underline [&>svg]:ml-8 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[3]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-arial pb-6 text-[16px] text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )

  if (variant === 'card') {
    return (
      <div className="mx-auto min-h-[600px] w-[440px] overflow-y-auto rounded-lg bg-white p-12 shadow-sm md:w-[725px] lg:w-[900px]">
        {content}
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[440px] px-4 md:max-w-[725px] lg:max-w-[980px]">{content}</div>
  )
}

export function TestimonialsFAQWrapper({ faqItems }: { faqItems: FAQItem[] }) {
  return (
    <section
      className="hidden bg-black py-4 sm:block"
      style={{
        background:
          'radial-gradient(circle at 19.103190104166668% 0%, #201B55 0%, 17.4%, rgba(32, 27, 85, 0) 30%), radial-gradient(circle at 83.974609375% 1.0807291666666667%, #342B43 0%, 17.4%, rgba(52, 43, 67, 0) 30%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, #000000 100%)',
      }}
    >
      <FAQSection faqItems={faqItems} accentColor="#5f51ff" variant="card" />
    </section>
  )
}
