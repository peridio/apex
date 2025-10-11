import { PeridioLogoFull } from "@/components/svg/peridio-logo-full";
import { Button } from "@/components/ui/button";

interface FeatureCardData {
  icon: string;
  title: string;
  description: string;
}

interface ArchitecturalFreedomSectionProps {
  title?: string;
  description?: string;
  features?: FeatureCardData[];
}

export default function ArchitecturalFreedomSection({
  title = "Transform your operations while preserving architectural freedom",
  description = "One of the most critical decisions in your edge architecture is how devices will communicate and be managed. Peridio's flexible integration approach ensures you're never locked into a single strategy.",
  features = [
    {
      icon: "📐",
      title: "A Highly Portable Architecture",
      description:
        "Peridio seamlessly integrates with existing infrastructure, keeping you in control of your embedded and cloud architectures.",
    },
    {
      icon: "⚡",
      title: "Increased Speed-to-Market",
      description:
        "Effortlessly ship new features and security updates with streamlined workflows, Peridio enables teams to complete releases in minutes rather than weeks.",
    },
    {
      icon: "⚙️",
      title: "Enhanced Reliability and Customer Satisfaction",
      description:
        "With Peridio, every single device has a tested and clear update strategy, ensuring that your customers have a positive experience starting with the first boot.",
    },
    {
      icon: "📊",
      title: "Proven Scalability for Growing Fleets",
      description:
        "Proven flexibility that allows teams to confidently expand their device ecosystems without compromising performance or security.",
    },
  ],
}: ArchitecturalFreedomSectionProps) {
  return (
    <section className="py-8 relative overflow-hidden bg-black">
      <div className="mx-auto px-4 flex justify-center">
        <div className="rounded-lg w-[990px] pt-[40px] pb-[40px] pl-[46px] pr-[46px]">
          {/* Top Row - Title/Description and Button */}
          <div className="flex flex-col lg:flex-row gap-8 mb-8 ">
            {/* Left Column - Title and Description */}
            <div className="w-[640px]">
              <h2 className="text-[32px] leading-[1.2] font-montserrat text-white mb-4">
                <span className="font-bold">{title}</span>
              </h2>

              <p className="text-[18px] leading-[1.6] font-normal font-space-grotesk text-gray-300">
                {description}
              </p>
            </div>

            {/* Right Column - Button */}
            <div className="grow flex justify-end">
              <Button asChild variant="primary" className="!text-sm w-[150px]">
                <a href="/contact">Book a demo</a>
              </Button>
            </div>
          </div>

          {/* Bottom Row - 2x2 Grid and Info Card */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - 2x2 Grid of Feature Cards */}
            <div className="flex-1">
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                style={{ height: "420px" }}
              >
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Info Card */}
            <div className="flex items-start" style={{ width: "300px" }}>
              <div
                className="rounded-lg p-8 flex flex-col justify-center text-left"
                style={{
                  width: "300px",
                  height: "495px",
                  background:
                    "linear-gradient(315deg, #CAC5FF 0%, #FFFFFF 53.54303728070175%)",
                }}
              >
                <p className="text-[12px] font-bold font-space-grotesk text-[#5f51ff] uppercase mb-4 tracking-wider">
                  THE BETTER WAY
                </p>

                <div className="mb-6">
                  <PeridioLogoFull
                    className="text-black"
                    iconHeight={34}
                    iconWidth={34}
                    wordmarkHeight={26}
                    wordmarkWidth={114}
                  />
                </div>

                <p className="text-[14px] leading-[1.6] font-space-grotesk text-gray-700">
                  Peridio specializes in flexible and scalable software update
                  solutions for IoT and embedded systems, enabling businesses to
                  streamline operations with secure, efficient, and automated
                  updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="bg-[rgba(28,28,34)] rounded-lg p-6"
      style={{ width: "280px", height: "240px" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-[28px]">{icon}</div>
        <h3 className="text-[14px] font-bold font-space-grotesk text-white">
          {title}
        </h3>
      </div>
      <p className="text-[14px] leading-[1.5] font-space-grotesk text-gray-300">
        {description}
      </p>
    </div>
  );
}
