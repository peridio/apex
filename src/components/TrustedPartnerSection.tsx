import { LogoSlider } from "./LogoSlider";

export default function TrustedPartnerSection() {
  return (
    <section className="w-full py-8 bg-black">
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
    </section>
  );
}
