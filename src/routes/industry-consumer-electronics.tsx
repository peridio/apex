import { createFileRoute } from "@tanstack/react-router";
import FAQSection, { type FAQItem } from "@/components/faq-section";
import ArchitecturalFreedomSection from "@/components/industries/architectural-freedom-section";
import IndustryCTASection from "@/components/industries/industry-cta-section";
import IndustryHeroSection from "@/components/industries/industry-hero-section";
import IndustryStayInChargeSection from "@/components/industries/industry-stay-in-charge-section";
import IndustryTopHeroSection from "@/components/industries/industry-top-hero-section";
import { TellyLogo } from "@/components/svg/telly-logo";
import { VarisciteLogo } from "@/components/svg/variscite-logo";
import { VeryLogo } from "@/components/svg/very-logo";
import TestimonialsSection, {
  type Testimonial,
} from "@/components/testimonials-section";
import TrustedPartnerSection from "@/components/trusted-partner-section";

export const Route = createFileRoute("/industry-consumer-electronics")({
  component: Page,
});

const faqItems: FAQItem[] = [
  {
    question:
      "How does Peridio's device management platform integrate with my existing IoT infrastructure?",
    answer:
      "Peridio offers multiple integration options to suit your specific needs, including direct device management, cloud-to-cloud integration, and hybrid approaches. Our team will work closely with you to determine the best integration strategy that aligns with your technical architecture and business requirements.",
  },
  {
    question:
      "Can Peridio help me address cybersecurity concerns in my IoT deployments?",
    answer:
      "Absolutely. Peridio's platform is designed with robust security features, including secure communication channels, encrypted data storage, and advanced access controls. We also offer automated vulnerability detection and patching to ensure your devices are protected against the latest threats.",
  },
  {
    question:
      "How does Peridio's platform help improve operational efficiency?",
    answer:
      "By automating firmware updates, configuration management, and device diagnostics, Peridio frees up your engineering resources, allowing them to focus on core product development and innovation. Our platform also provides granular visibility and control over your IoT deployments, streamlining workflows and enhancing the overall efficiency of your operations.",
  },
  {
    question: "What makes Peridio's software delivery approach unique?",
    answer:
      "We focus exclusively on being the best software delivery mechanism for edge environments. Our platform provides granular control over deployments, cohort-based testing, and instant rollback capabilities—all while maintaining complete visibility of your software across your entire fleet.",
  },
  {
    question: "How does Peridio help accelerate our development process?",
    answer:
      "By providing robust software delivery infrastructure, your engineering team can focus on core product development rather than maintaining custom update scripts and deployment tools. Our platform streamlines the entire software delivery lifecycle.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Peridio's platform, workflows, and expertise vastly reduce time-to-market for launching ambitious AIoT applications on Variscite's i.MX product lines.",
    name: "Tal Semo",
    title: "Managing Director of Sales and Marketing, Americas @ Variscite",
    logoComponent: () => <VarisciteLogo height={40} color="#ffffff" />,
    company: "Variscite",
  },
  {
    quote:
      "Peridio's reference architectures and remote access capabilities greatly accelerate product development and significantly derisk every launch.",
    name: "Jeff McGehee",
    title: "VP of Product Engineering at Very",
    logoComponent: () => <VeryLogo height={40} color="#ffffff" />,
    company: "Very",
  },
  {
    quote:
      "The Peridio platform enables us to thoughtfully control firmware rollouts to our entire fleet. The granular permissions and flexible bundling features help us deliver updates efficiently at scale.",
    name: "Eric Loes",
    title: "Head of Software Engineering at Telly",
    logoComponent: TellyLogo,
    company: "Telly",
  },
];

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <IndustryTopHeroSection
        smallHeader="CONSUMER ELECTRONICS"
        headline="Ship Quickly with Complete Control"
        description="Peridio gives consumer electronics companies unprecedented control over their software deployment pipeline. Our platform combines sophisticated targeting, automated workflows, and ironclad safeguards - letting you confidently accelerate feature delivery while protecting your production fleet."
        heroImage="/img/industries/consumer-electronics-hero.png"
        heroImageAlt="Consumer electronics illustration"
        imageStyles={{
          // marginRight: "-37%",
          marginTop: "8%",
        }}
        imageWidth="518px"
      />
      <TrustedPartnerSection />
      <IndustryHeroSection
        smallHeader="ACCELERATE INNOVATION"
        headline="Software Updates Can Be Your Competitive Advantage"
        leftColumnText="Consumer electronics companies can no longer treat software updates as an operational burden."
        rightColumnText="What was once a liability - pushing updates to thousands of devices - can become your strategic advantage in today's connected world."
        pills={[
          { text: "ACCELERATE INNOVATION" },
          { text: "REDUCE RISK" },
          { text: "IMPROVE USER EXPERIENCE" },
        ]}
      />
      <IndustryStayInChargeSection
        title="With Peridio, you can hit factory reset on your update strategy"
        description="Most consumer electronics companies are living with update processes that evolved organically over time—creating a patchwork of manual steps, unclear visibility, and unnecessary risk. It's time for a fresh start."
        cards={[
          {
            icon: "/img/industries/seamless-integrations-icon.png",
            title: "Leverage Cohorts",
            description:
              "Organize devices and updates into logical stages, have clear separation between development, QA and production environments. Leverage robust tagging and filtering mechanisms for group management.",
          },
          {
            icon: "/img/industries/enhanced-operations-icon.png",
            title: "Empower QA",
            description:
              "Peridio is built to support rigorous quality assurance processes that enforce thorough testing and validation of updates before they reach end-users.",
          },
          {
            icon: "/img/industries/win-together-icon.png",
            title: "Streamline Releases",
            description:
              "Advanced features that streamline and enhance release management capabilities.",
          },
        ]}
      />
      <ArchitecturalFreedomSection
        title="Accelerate software development and firmware distribution to drive growth"
        description="In the fast-paced world of consumer electronics, where innovation and speed-to-market are paramount, Peridio affords you the ability to focus on your customers rather than your infrastructure."
      />
      <FAQWrapper />
      <TestimonialsWrapper />
      <IndustryCTASection
        backgroundImage="/img/industries/consumer-electronics-background.png"
        backgroundImageClass="-translate-x-1/9 -translate-y-1/5 w-[590px] h-[347px] bg-cover"
      />
    </div>
  );
}

function FAQWrapper() {
  return (
    <section
      className="py-4 bg-black"
      style={{
        background:
          "radial-gradient(circle at 19.103190104166668% 0%, #201B55 0%, 17.4%, rgba(32, 27, 85, 0) 30%), radial-gradient(circle at 83.974609375% 1.0807291666666667%, #342B43 0%, 17.4%, rgba(52, 43, 67, 0) 30%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, #000000 100%)",
      }}
    >
      <FAQSection faqItems={faqItems} accentColor="#5f51ff" variant="card" />
    </section>
  );
}

function TestimonialsWrapper() {
  return (
    <div
      className="w-full h-[535px] bg-black relative flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(360deg, #FFFFFF 0%, #5F51FF 25.64418859649123%, #000000 60.97519188596491%)",
      }}
    >
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}
