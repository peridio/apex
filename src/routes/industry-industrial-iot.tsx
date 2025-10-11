import { createFileRoute } from '@tanstack/react-router'
import FAQSection, { type FAQItem } from '@/components/faq-section'
import ArchitecturalFreedomSection from '@/components/industries/architectural-freedom-section'
import IndustryCTASection from '@/components/industries/industry-cta-section'
import IndustryHeroSection from '@/components/industries/industry-hero-section'
import IndustryStayInChargeSection from '@/components/industries/industry-stay-in-charge-section'
import IndustryTopHeroSection from '@/components/industries/industry-top-hero-section'
import TestimonialsSection, { type Testimonial } from '@/components/testimonials-section'
import TrustedPartnerSection from '@/components/trusted-partner-section'

export const Route = createFileRoute('/industry-industrial-iot')({
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
        smallHeader="INDUSTRIAL IOT"
        headline="Transform Critical Infrastructure Operations"
        description="Peridio empowers industrial manufacturers to operationalize firmware management across connected sensors, machines, and operational technology."
        heroImage="/img/industries/industrial-iot-hero.png"
        heroImageAlt="Industrial IoT illustration"
        heroImageClassName="md:mt-[8%] w-[395px] md:w-[612px] lg:w-[525px]"
      />
      <TrustedPartnerSection />
      <IndustryHeroSection
        smallHeader="BEYOND MANUAL PROCESSES"
        headline="When uptime is everything—you can't risk manual deployments"
        leftColumnText="Industrial IoT manufacturers can't afford deployment uncertainty or system disruption. What starts as a simple update mechanism quickly becomes your operational bottleneck."
        rightColumnText="As your industrial fleet grows—from test environments to production—spreadsheets and manual processes create unnecessary risk and slow your path to market."
        pills={[
          { text: 'DEPLOY DAY ONE' },
          { text: 'MANAGE EFFCIENTLY' },
          { text: 'UNITE YOUR TEAMS' },
        ]}
      />
      <IndustryStayInChargeSection
        title="With Peridio, production never stops"
        description="Our platform is designed to address the unique challenges faced by those developing critical edge products, transforming complex deployments into controlled, repeatable processes that protect operational continuity."
        cards={[
          {
            icon: '/img/industries/seamless-integrations-icon.png',
            title: 'Democratize OTA',
            description:
              'Give every team the power to safely manage deployments. Transform tribal knowledge into systematic processes that anyone can execute—no more update bottlenecks through engineering.',
          },
          {
            icon: '/img/industries/enhanced-operations-icon.png',
            title: 'Release with Precision',
            description:
              "Deploy updates with intelligent phasing, canary testing, and percentage-based rollouts. Monitor every device's firmware, connectivity, and update progression in real-time.",
          },
          {
            icon: '/img/industries/win-together-icon.png',
            title: 'Unite Your Teams',
            description:
              'Replace spreadsheets with automated workflows. Give engineering, operations, and maintenance teams the visibility and tools they need to manage updates confidently.',
          },
        ]}
      />
      <ArchitecturalFreedomSection />
      <FAQWrapper />
      <TestimonialsWrapper />
      <IndustryCTASection
        backgroundImage="/img/industries/industrial-iot-background.png"
        backgroundImageClass="-translate-x-1/2 -translate-y-1/16 w-[645px] h-[333px]"
      />
    </div>
  )
}

function FAQWrapper() {
  return (
    <section
      className="bg-black py-4"
      style={{
        background:
          'radial-gradient(circle at 19.103190104166668% 0%, #201B55 0%, 17.4%, rgba(32, 27, 85, 0) 30%), radial-gradient(circle at 83.974609375% 1.0807291666666667%, #342B43 0%, 17.4%, rgba(52, 43, 67, 0) 30%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, #000000 100%)',
      }}
    >
      <FAQSection faqItems={faqItems} accentColor="#5f51ff" variant="card" />
    </section>
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
      <TestimonialsSection testimonials={testimonials} />
    </div>
  )
}
