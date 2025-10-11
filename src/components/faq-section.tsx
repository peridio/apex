import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqItems: FAQItem[];
  accentColor?: string;
  variant?: "card" | "default";
}

export default function FAQSection({
  faqItems,
  accentColor = "#5f51ff",
  variant = "default",
}: FAQSectionProps) {
  const content = (
    <div className="flex gap-8">
      {/* Left Column - FAQ Label */}
      <div className={variant === "card" ? "flex-1" : "flex-1 px-[46px]"}>
        <h2 className="text-[38px] font-[700] font-montserrat text-black">
          FAQ
        </h2>
      </div>

      {/* Right Column - FAQ Content */}
      <div
        className={
          variant === "card"
            ? "w-[580px] flex-shrink-0"
            : "w-[575px] flex-shrink-0"
        }
      >
        <style>
          {`
            .faq-accordion-${accentColor.replace("#", "")} button[data-state] svg {
              color: ${accentColor};
            }
          `}
        </style>
        <Accordion
          type="single"
          collapsible
          className={`w-full faq-accordion-${accentColor.replace("#", "")}`}
        >
          {faqItems.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 last:border-b-0"
            >
              <AccordionTrigger className="text-[18px] font-bold font-sans text-black text-left hover:no-underline py-6 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-[3] [&>svg]:ml-8">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] font-arial text-gray-700 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );

  if (variant === "card") {
    return (
      <div className="max-w-[900px] mx-auto px-4">
        <div className="w-[900px] h-[600px] bg-white rounded-lg shadow-sm p-12 overflow-y-auto">
          {content}
        </div>
      </div>
    );
  }

  return <div className="max-w-[900px] mx-auto px-4">{content}</div>;
}
