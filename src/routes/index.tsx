import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LogoSlider } from "../components/LogoSlider";
import NewsletterSection from "../components/NewsletterSection";
import PodcastSection from "../components/PodcastSection";
import CallToActionSection from "../components/CallToActionSection";
import TestimonialsSection from "../components/TestimonialsSection";
import IndustriesSection from "../components/IndustriesSection";

export const Route = createFileRoute("/")({
  component: App,
});

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

function ProductCard({ image, title, description }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center py-[25px] px-[40px] bg-transparent border border-fill-base-shade-3 rounded-2xl w-[280px] h-[340px]">
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

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            The platform for embedded devices
          </h1>

          <p className="text-xl text-text-secondary mb-8">
            Build, ship, and scale embedded products without compromise.
          </p>

          <div className="flex gap-4 justify-center">
            <Button variant="primary" className="w-[175px]">
              Get Started
            </Button>

            <Button
              variant="outline-transparent-secondary"
              className="w-[175px]"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Trusted Partner Section */}
      <div className="w-full py-8">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <h3 className="text-[14px] font-space-grotesk text-text-tertiary whitespace-nowrap">
                A trusted partner to
              </h3>
            </div>
            <div className="flex-1 min-w-0 -mr-4">
              <LogoSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
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

      <div
        className="w-full h-[535px] bg-black relative flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(360deg, #FFFFFF 0%, #5F51FF 25.64418859649123%, #000000 60.97519188596491%)",
        }}
      >
        <TestimonialsSection />
      </div>

      <PodcastSection />
      <IndustriesSection />
      <CallToActionSection />
      <NewsletterSection />
    </div>
  );
}
