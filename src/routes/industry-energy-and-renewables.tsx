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

export const Route = createFileRoute("/industry-energy-and-renewables")({
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
        smallHeader="ENERGY & RENEWABLES"
        headline="Accelerate & Derisk the Deployment of Energy Applications"
        description="Peridio provides a foundation for secure development and ongoing management of next generation critical infrastructure."
        heroImage="/img/industries/windmill-wireframe.png"
        heroImageAlt="Windmill wireframe illustration"
        imageStyles={{ marginRight: "-37%", marginTop: "8%" }}
        imageWidth="885px"
      />
      <TrustedPartnerSection />
      <IndustryHeroSection
        smallHeader="ACCELERATE NEW PRODUCT INTRODUCTION"
        headline="We're transforming how energy companies secure and scale firmware management for critical grid infrastructure"
        leftColumnText="The energy industry is undergoing a rapid transition toward domestically-produced, cyber-secure technologies. Secure firmware management plays a pivotal role in protecting grid assets, ensuring compliance, and enabling grid modernization initiatives."
        rightColumnText="Peridio's deep understanding of secure firmware development and distribution, combined with our best-in-class device management capabilities, makes us the ideal partner to help you accelerate your secure grid technology journey."
        pills={[
          { text: "RAPIDLY SCALE" },
          { text: "MITIGATE RISK" },
          { text: "MANAGE EFFICIENTLY" },
        ]}
      />
      <IndustryStayInChargeSection
        title={
          <>
            With Peridio, you stay in{" "}
            <span className="text-[#7c70ff]">charge</span>
          </>
        }
        description="Our platform is designed to address the unique challenges faced by those developing critical edge products, enabling you to unlock the full potential of your deployments and remain in the drivers seat of your integrations and infrastructure."
        cards={[
          {
            icon: "/img/industries/seamless-integrations-icon.png",
            title: "Seamless Integrations",
            description:
              "Flexible integration strategies that seamlessly fit within your existing stack. Leverage our containerized management server for air-gapped deployments.",
          },
          {
            icon: "/img/industries/enhanced-operations-icon.png",
            title: "Enhanced Operations",
            description:
              "Efficiency manage your edge infrastructure, give your operations teams the ability to automate previously manual and complex deployments.",
          },
          {
            icon: "/img/industries/win-together-icon.png",
            title: "Win Together",
            description:
              "We're more than a platform, we're a partner committed to your long-term success.",
          },
        ]}
      />
      <ArchitecturalFreedomSection />
      <FAQWrapper />
      <TestimonialsWrapper />
      <IndustryCTASection
        backgroundImage="/img/industries/windmill-energy-background.png"
        backgroundImageClass="-translate-x-1/2 -translate-y-1/3 w-[932px] h-[480px]"
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
