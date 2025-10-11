import { createFileRoute } from '@tanstack/react-router'
import FAQSection, { type FAQItem } from '@/components/faq-section'
import ArchitecturalFreedomSection from '@/components/industries/architectural-freedom-section'
import IndustryCTASection from '@/components/industries/industry-cta-section'
import IndustryHeroSection from '@/components/industries/industry-hero-section'
import IndustryStayInChargeSection from '@/components/industries/industry-stay-in-charge-section'
import IndustryTopHeroSection from '@/components/industries/industry-top-hero-section'
import TestimonialsSection, { type Testimonial } from '@/components/testimonials-section'
import TrustedPartnerSection from '@/components/trusted-partner-section'

export const Route = createFileRoute('/industry-smarthomes')({
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
        smallHeader="SMART HOME & BUILDING AUTOMATION"
        headline="Smart Device Management at Scale"
        description="Peridio empowers manufacturers to operationalize firmware management for HVAC, smart lighting, and energy systems.."
        heroImage="/img/industries/smarthomes-hero.png"
        heroImageAlt="Smart homes illustration"
        // heroImageClassName="mt-[12%] w-[514px]"
        heroImageClassName="mt-14 md:mt-[16%] w-[325px] md:w-[450px] lg:w-[525px]"
      />
      <TrustedPartnerSection />
      <IndustryHeroSection
        smallHeader="SECURE BY DESIGN"
        headline="One Platform for Your Entire Smart Portfolio"
        leftColumnText="As your product lines expand—from smart thermostats to AI-powered security systems—firmware management becomes increasingly complex."
        rightColumnText="Most teams end up with different update processes for each product category, creating operational bottlenecks that slow innovation and increase risk across your entire portfolio."
        pills={[
          { text: 'SHIP CONFIDENTLY' },
          { text: 'VALIDATE PRODUCTS' },
          { text: 'UNITE YOUR TEAMS' },
        ]}
      />
      <IndustryStayInChargeSection
        title="With Peridio, you hold all the keys"
        description="Managing updates across smart thermostats, lighting systems, security cameras, and home automation hubs shouldn't require separate tools and processes. It's time for a unified approach."
        cards={[
          {
            icon: '/img/industries/seamless-integrations-icon.png',
            title: 'Smart Portfolio Management',
            description:
              'Organize updates by product line, release stage, or customer segment. Our cohort-based controls enable sophisticated deployment strategies while preventing accidental updates to critical systems.',
          },
          {
            icon: '/img/industries/enhanced-operations-icon.png',
            title: 'Energy-Efficient Operations',
            description:
              'Deploy efficiency improvements instantly across your HVAC and lighting systems. Real-time monitoring ensures successful updates while automated rollback capabilities protect device performance.',
          },
          {
            icon: '/img/industries/win-together-icon.png',
            title: 'Security-First Design',
            description:
              'Push critical security patches to your cameras, doorbells, and automation hubs in minutes, not weeks. Sophisticated validation ensures every device maintains the latest protection.',
          },
        ]}
      />
      <ArchitecturalFreedomSection />
      <FAQWrapper />
      <TestimonialsWrapper />
      <IndustryCTASection
        backgroundImage="/img/industries/smarthomes-background.png"
        backgroundImageClass="-translate-x-1/2 w-[423px] h-[280px] bg-cover"
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
