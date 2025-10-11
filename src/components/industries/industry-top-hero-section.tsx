import { DockerLogo } from "@/components/svg/docker-logo";
import { LinuxFoundationLogo } from "@/components/svg/linux-foundation-logo";
import { YoctoLogo } from "@/components/svg/yocto-logo";
import { Button } from "@/components/ui/button";

interface IndustryTopHeroSectionProps {
  smallHeader: string;
  headline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  imageStyles?: React.CSSProperties;
  imageWidth?: string;
  height?: string;
  leftColumnWidth?: string;
}

export default function IndustryTopHeroSection({
  smallHeader,
  headline,
  description,
  heroImage,
  heroImageAlt,
  imageStyles = { marginRight: "-37%", marginTop: "8%" },
  imageWidth = "885px",
  height = "837px",
  leftColumnWidth = "466px",
}: IndustryTopHeroSectionProps) {
  return (
    <section
      className="bg-white relative overflow-hidden flex items-center "
      style={{
        height,
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.95) 62.06483004385965%, rgba(175, 168, 255, 0.9) 80.23917214912281%, rgba(95, 81, 255, 0.85) 90.26864035087719%, rgba(0, 0, 0, 0.8) 100%)",
      }}
    >
      {/* Content Layer */}
      <div className="max-w-[950px] mx-auto px-4 flex z-20 w-full mix-blend-multiply mt-10">
        <div className="flex items-center gap-12">
          {/* Left Column - Content */}
          <div style={{ width: leftColumnWidth }}>
            {/* Small header */}
            <p className="text-[15px] font-space-grotesk font-bold text-[#5f51ff] uppercase tracking-wide mb-6">
              {smallHeader}
            </p>

            {/* Main headline */}
            <h1 className="text-[38px] leading-[1.1] font-montserrat font-bold text-[#1e1346] mb-6">
              {headline}
            </h1>

            {/* Description */}
            <p className="text-[18px] leading-[1.6] font-space-grotesk font-normal text-gray-700 mb-8">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-12">
              <Button
                asChild
                variant="outline-transparent-primary"
                className="py-3 w-[170px]"
              >
                <a href="#features">View features</a>
              </Button>
              <Button asChild variant="primary" className="px-6 py-3">
                <a href="/contact">Talk to an expert</a>
              </Button>
            </div>

            {/* Logos */}
            <div className="flex items-center gap-8">
              <div className="h-5 flex items-center">
                <DockerLogo className="h-5 w-auto text-[#6E6E6E]" />
              </div>
              <div className="h-5 flex items-center">
                <YoctoLogo className="h-5 w-auto text-[#6E6E6E]" />
              </div>
              <div className="h-5 flex items-center">
                <LinuxFoundationLogo className="h-5 w-auto text-[#6E6E6E]" />
              </div>
            </div>
          </div>

          {/* Right Column - Spacer for image */}
          <div className="flex-1" />
        </div>

        <div className="w-[60%] h-full z-5 flex items-start justify-end mix-blend-multiply">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="relative max-w-fit"
            style={{ ...imageStyles, width: imageWidth }}
          />
        </div>
      </div>
    </section>
  );
}
