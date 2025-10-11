import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IndustryCTASectionProps {
  backgroundImage: string;
  backgroundImageClass?: string;
}

export default function IndustryCTASection({
  backgroundImage,
  backgroundImageClass,
}: IndustryCTASectionProps) {
  return (
    <section className="pt-12 pb-40 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className={cn(
          // bg-contain
          "absolute left-1/2 top-1/2 bg-center bg-no-repeat opacity-66",
          backgroundImageClass,
        )}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      <div className="max-w-[900px] mx-auto px-4 text-center relative z-10">
        <p className="text-[16px] font-space-grotesk font-semibold text-[#5f51ff] uppercase mb-6">
          BOOK A DEMO
        </p>

        <h2 className="text-[58px] leading-[1.2] font-[700] font-montserrat text-[#35373B] mb-8 tracking-[-1px]">
          See it for yourself
          <br />
          with a free demo
        </h2>

        <Button
          asChild
          variant="primary"
          size="xl"
          className="w-[170px] !text-sm"
        >
          <Link to="/contact">Lets talk</Link>
        </Button>
      </div>
    </section>
  );
}
