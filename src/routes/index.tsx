import { createFileRoute, Link } from "@tanstack/react-router";
import Typewriter from "typewriter-effect";
import CallToActionSection from "@/components/call-to-action-section";
import IndustriesSection from "@/components/industries-section";
import NewsletterSection from "@/components/newsletter-section";
import PodcastSection from "@/components/podcast-section";
import { FellowesLogo } from "@/components/svg/fellowes-logo";
import { GraniteLogo } from "@/components/svg/granite-logo";
import { TellyLogo } from "@/components/svg/telly-logo";
import { VarisciteLogo } from "@/components/svg/variscite-logo";
import { VeryLogo } from "@/components/svg/very-logo";
import TestimonialsSection, {
  type Testimonial,
} from "@/components/testimonials-section";
import TrustedPartnerSection from "@/components/trusted-partner-section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <TrustedPartnerSection />
      <ProductsSection />
      <ProductionReadySection />
      <AiReadyIllustrationSection />
      <AiReadySection />
      <TestimonialsWrapper />
      <PodcastSection />
      <IndustriesSection />
      <CallToActionSection />
      <NewsletterSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Screen Door Texture */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/img/screen-door-texture.png')",
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "center center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 w-[860px] text-left pt-18">
        <h1 className="text-white mb-6">
          <span className="text-[46px] font-space-grotesk leading-[1.3]">
            The platform for
          </span>
          <br />
          <span className="text-[46px] font-montserrat font-bold leading-[1.3]">
            {/* Innovation on the Edge_ */}
            <Typewriter
              options={{
                strings: [
                  "Embedded Linux Development",
                  "Edge AI",
                  "Device Ops & OTA",
                  "Innovation on the Edge",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>

        <p className="text-[16px] font-space-grotesk font-normal text-[#CAC5FF] mb-6">
          Build, ship, and scale embedded products without compromise.
        </p>

        <div className="flex gap-4">
          <Button variant="primary" size="lg" className="w-[175px]">
            Get Started
          </Button>

          <Link to="/book-a-meeting">
            <Button
              variant="outline-transparent-secondary"
              size="lg"
              className="w-[175px] border-white !border-[0.75px]"
            >
              Book a Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center py-[25px] px-[40px] bg-transparent border border-[rgb(39,39,42)] rounded-2xl w-[280px] h-[340px]">
      <div className="mb-4">
        <img src={image} alt={title} className="w-20 h-20 object-contain" />
      </div>

      <h3 className="text-[16px] font-bold mb-4 uppercase tracking-wider text-white font-montserrat">
        {title}
      </h3>

      <p className="text-[14px] text-text-tertiary text-center mb-8 flex-grow font-arial">
        {description}
      </p>

      <Button variant="primary" className="w-[235px]">
        Learn More
      </Button>
    </div>
  );
}

function ProductsSection() {
  return (
    <div className="max-w-[900px] mx-auto py-16">
      <h2 className="text-[38px] text-center mb-12 font-bold font-montserrat tracking-[-0.05em] leading-[1.2] ">
        Build and maintain advanced
        <br />
        embedded products
      </h2>

      <div className="flex flex-wrap justify-center gap-[30px]">
        <ProductCard
          image="/img/home-peridio-core.png"
          title="Peridio Core"
          description="Peridio Core provides device management and OTA for connected device manufacturers."
        />

        <ProductCard
          image="/img/home-avocado-os.png"
          title="Avocado OS"
          description="Production-ready embedded Linux distribution, built on Yocto, for rapid development and deployment."
        />

        <ProductCard
          image="/img/home-managed-linux.png"
          title="Managed Linux"
          description="Enterprise-grade Linux capabilities without the overhead of an extensive specialized team."
        />
      </div>
    </div>
  );
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We needed a solution that would allow us to manage updates efficiently while maintaining the flexibility to support our diverse customer base.",
    name: "Jess Shapiro",
    title: "Manager of Technology Products, PMO at Granite",
    logoComponent: GraniteLogo,
    company: "Granite",
  },
  {
    quote:
      "The remote access feature has become a cornerstone of our support toolkit. For our team, Peridio is now our go-to solution for remote debugging.",
    name: "Michael Kelley",
    title: "Electrical Engineering & Compliance Manager at Fellowes",
    logoComponent: FellowesLogo,
    company: "Fellowes",
  },
  {
    quote:
      "Launching with nine different models simultaneously was an ambitious undertaking. What made Peridio invaluable was its ability to bring everything together in one platform.",
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
      "Launching with nine different models simultaneously was an ambitious undertaking. What made Peridio invaluable was its ability to bring everything together in one platform.",
    name: "Ben Hoffman",
    title: "Senior Manager of Product Development at Fellowes",
    logoComponent: FellowesLogo,
    company: "Fellowes",
  },
  {
    quote:
      "Peridio's platform, workflows, and expertise vastly reduce time-to-market for launching ambitious connected applications. What would normally require a large dedicated team, we've achieved with just 1.5 engineers.",
    name: "Eric Loes",
    title: "Head of Software Engineering at Telly",
    logoComponent: TellyLogo,
    company: "Telly",
  },
];

function StatCard({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div
      className="rounded-2xl p-8 shadow-lg w-[235px] h-[200px] flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 50.7092927631579%, #CAC5FF 100%)",
      }}
    >
      <div className="text-center pt-4">
        <h3 className="text-[34px] font-space-grotesk font-bold text-black leading-[1.2] mb-2">
          {title}
        </h3>
        <p className="text-[14px] font-space-grotesk font-bold text-black mb-3">
          {subtitle}
        </p>
        <p className="text-[14px] font-space-grotesk font-normal text-[#6E6E6E] leading-[1.4]">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProductionReadySection() {
  const stats = [
    {
      title: "10x Faster",
      subtitle: "Development cycles",
      description: "With production-ready\nLinux",
    },
    {
      title: "3x Fewer",
      subtitle: "Engineering resources",
      description: "Required for ongoing\nmaintenance",
    },
    {
      title: "250% ROI",
      subtitle: "in year one",
      description: "With faster releases &\nstreamlined operations",
    },
  ];

  return (
    <div className="w-full py-20 bg-black">
      <div className="max-w-[900px] mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-[42px] font-montserrat font-bold text-white leading-[1.2] tracking-[-0.05em] mb-3">
            Production ready from the start
          </h2>
          <p className="text-[16px] font-space-grotesk text-[#F0F0F0] leading-[1.5]">
            Peridio seamlessly bridges your development journey to production,
            <br />
            providing a unified experience from day one.
          </p>
        </div>

        {/* Three Cards */}
        <div className="flex justify-center gap-5">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              subtitle={stat.subtitle}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AiReadyIllustrationSection() {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[900px] mx-auto">
        <img
          src="/img/ai-ready-illustration.png"
          alt="AI Ready Illustration"
          className="w-[725px] h-auto"
        />
      </div>
    </div>
  );
}

function AiReadySection() {
  return (
    <div className="w-full pb-16 bg-black relative">
      <div className="max-w-[900px] mx-auto relative z-10">
        {/* AI READY Tag */}
        <div className="text-center mb-4">
          <span className="text-[17px] font-space-grotesk font-bold text-[#CAC5FF] uppercase">
            AI READY
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-6">
          <h2 className="text-[42px] font-montserrat font-bold text-white leading-[1.2] tracking-[-0.05em]">
            Develop and distribute modern
            <br />
            embedded products, faster
          </h2>
        </div>

        {/* Sub-headline */}
        <div className="text-center mb-8">
          <p className="text-[17px] font-space-grotesk font-normal text-white leading-[1.4]">
            With optimized application development workflows for multi-silicon
            products
          </p>
        </div>

        {/* White Card */}
        <div className="bg-white rounded-2xl px-[40px] py-[28px] shadow-lg w-[900px] h-[200px] mx-auto">
          <div className="grid grid-cols-[330px_1fr] gap-4 items-start">
            {/* Left Text Block */}
            <div>
              <h3 className="text-[24px] font-space-grotesk font-bold text-black leading-[1.2] tracking-[-0.05em] mb-6">
                The embedded development stack is no longer single firmware,
                single device
              </h3>
            </div>

            {/* Right Text Block */}
            <div>
              <p className="text-[16px] font-space-grotesk font-normal text-[#6E6E6E] leading-[1.5] mb-8">
                Peridio enables embedded engineers, data scientists, and
                software developers to integrate and deploy unified code bases
                to an edge environment.
              </p>

              {/* Learn More Button */}
              <Button variant="primary" size="lg" className="w-full !text-sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
