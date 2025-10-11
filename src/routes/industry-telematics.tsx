import { createFileRoute } from '@tanstack/react-router'
import { TestimonialsFAQWrapper, type FAQItem } from '@/components/faq-section'
import ArchitecturalFreedomSection from '@/components/industries/architectural-freedom-section'
import IndustryCTASection from '@/components/industries/industry-cta-section'
import IndustryHeroSection from '@/components/industries/industry-hero-section'
import IndustryStayInChargeSection from '@/components/industries/industry-stay-in-charge-section'
import IndustryTopHeroSection from '@/components/industries/industry-top-hero-section'
import TestimonialsSection, { type Testimonial } from '@/components/testimonials-section'
import TrustedPartnerSection from '@/components/trusted-partner-section'

export const Route = createFileRoute('/industry-telematics')({
  component: Page,
})

const faqItems: FAQItem[] = [
  {
    question:
      "How does Peridio's device management platform integrate with my existing IoT infrastructure?",
    answer:
      'Peridio offers multiple integration options to suit your specific needs, including direct device management, cloud-to-cloud integration, and hybrid approaches. Our team will work closely with you to determine the best integration strategy that aligns with your technical architecture and business requirements.',
  },
  {
    question: 'Can Peridio help me address cybersecurity concerns in my IoT deployments?',
    answer:
      "Absolutely. Peridio's platform is designed with robust security features, including secure communication channels, encrypted data storage, and advanced access controls. We also offer automated vulnerability detection and patching to ensure your devices are protected against the latest threats.",
  },
  {
    question: "How does Peridio's platform help improve operational efficiency?",
    answer:
      'By automating firmware updates, configuration management, and device diagnostics, Peridio frees up your engineering resources, allowing them to focus on core product development and innovation. Our platform also provides granular visibility and control over your IoT deployments, streamlining workflows and enhancing the overall efficiency of your operations.',
  },
  {
    question: "What makes Peridio's software delivery approach unique?",
    answer:
      'We focus exclusively on being the best software delivery mechanism for edge environments. Our platform provides granular control over deployments, cohort-based testing, and instant rollback capabilities—all while maintaining complete visibility of your software across your entire fleet.',
  },
  {
    question: 'How does Peridio help accelerate our development process?',
    answer:
      'By providing robust software delivery infrastructure, your engineering team can focus on core product development rather than maintaining custom update scripts and deployment tools. Our platform streamlines the entire software delivery lifecycle.',
  },
]

const testimonials: Testimonial[] = [
  {
    quote:
      "Peridio's platform, workflows, and expertise vastly reduce time-to-market for launching ambitious AIoT applications on Variscite's i.MX product lines.",
    name: 'Tal Semo',
    title: 'Managing Director of Sales and Marketing, Americas @ Variscite',
    company: 'Variscite',
  },
  {
    quote:
      "Peridio's reference architectures and remote access capabilities greatly accelerate product development and significantly derisk every launch.",
    name: 'Jeff McGehee',
    title: 'VP of Product Engineering at Very',
    company: 'Very',
  },
  {
    quote:
      'The Peridio platform enables us to thoughtfully control firmware rollouts to our entire fleet. The granular permissions and flexible bundling features help us deliver updates efficiently at scale.',
    name: 'Eric Loes',
    title: 'Head of Software Engineering at Telly',
    company: 'Telly',
  },
]

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <IndustryTopHeroSection
        smallHeader="TELEMATICS"
        headline="Fleet Configuration and Firmware Management for Scale"
        description="Peridio’s cloud platform streamlines telematics operations by enabling seamless fleet-wide software rollouts, real-time version tracking, and operational visibility—all while maintaining full control over technical infrastructure."
        heroImage="/img/industries/telematics-hero.png"
        heroImageAlt="Telematics illustration"
        heroImageClassName="md:mt-[8%] w-[395px] md:w-[612px] lg:w-[885px]"
      />
      <TrustedPartnerSection />
      <IndustryHeroSection
        smallHeader="MANAGE COMPLEXITY, DRIVE GROWTH"
        headline="Take control of your fleet software lifecycle"
        leftColumnText="Managing software across millions of vehicles creates operational bottlenecks that slow innovation and increase risk. Multi-week deployment cycles, limited visibility, and manual processes make scaling your telematics business increasingly challenging."
        rightColumnText="Peridio eliminates these barriers through automated rollouts, comprehensive monitoring, and seamless integration with your existing infrastructure - transforming update management from an operational burden into a competitive advantage."
        pills={[
          { text: 'ACCELERATE TIME TO MARKET' },
          { text: 'MINIMIZE OPERATIONAL RISKS' },
          { text: 'SCALE WITH CONFIDENCE' },
        ]}
      />
      <IndustryStayInChargeSection
        title="With Peridio, you're in the driver's seat."
        description="Telematics providers require specialized tools to manage software deployment across diverse vehicle fleets, multiple customer segments, and varied geographic regions. Our platform is built just for this."
        cards={[
          {
            icon: '/img/industries/seamless-integrations-icon.png',
            title: 'Stay in Control',
            description: '',
            items: [
              'Cloud-to-cloud integration preserves your existing device relationships',
              'Role-based access for team collaboration',
              'Comprehensive API and webhook support',
            ],
          },
          {
            icon: '/img/industries/enhanced-operations-icon.png',
            title: 'Operational Excellence',
            description: '',
            items: [
              'Automated staged rollouts with granular controls',
              'Real-time deployment monitoring',
              'Full audit trail of all system activities',
            ],
          },
          {
            icon: '/img/industries/win-together-icon.png',
            title: 'Enterprise Ready',
            description: '',
            items: [
              'Purpose-built for fleets of 100k+ devices',
              'Global CDN infrastructure',
              '99.99% platform availability',
            ],
          },
        ]}
        renderCard={(card) => (
          <div className="flex flex-col p-2">
            <div className="mb-4">
              <h3 className="font-space-grotesk text-[18px] font-bold text-white">{card.title}</h3>
            </div>
            <ul className="space-y-3">
              {card.items?.map((item, idx) => (
                <li
                  key={idx}
                  className="font-space-grotesk flex items-start pl-0 text-[15px] leading-[1.6] font-normal text-white"
                >
                  <span className="mr-2 text-white">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      />
      <ArchitecturalFreedomSection
        title="Unlock the full potential of your connected fleets"
        description="In the dynamic world of telematics, success of your business hinges on the reliable performance of your connected devices. Peridio's granular control over deployments and cohort-based testing helps streamline the entire software delivery lifecycle leading to enhanced reliability and customer satisfaction."
      />
      <TestimonialsFAQWrapper faqItems={faqItems} />
      <TestimonialsWrapper />
      <IndustryCTASection
        backgroundImage="/img/industries/telematics-background.png"
        backgroundImageClass="-translate-x-1/2 -translate-y-1/4 w-[932px] h-[480px]"
      />
    </div>
  )
}

function TestimonialsWrapper() {
  return (
    <div
      className="relative flex h-[535px] w-full items-center bg-black"
      style={{
        backgroundImage:
          'linear-gradient(360deg, #FFFFFF 0%, #5F51FF 25.64418859649123%, #000000 60.97519188596491%)',
      }}
    >
      <TestimonialsSection testimonials={testimonials} label="What our clients say about us" />
    </div>
  )
}
