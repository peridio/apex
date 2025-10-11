import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Circuit Pattern Background Image */}
      <img
        src="/img/circuit-pattern.png"
        alt="connection"
        className="absolute bottom-0 left-1/2"
        style={{
          width: "554px",
          height: "509px",
          objectFit: "cover",
          zIndex: 0,
          transform: "translate(-50%, 35%)",
        }}
      />

      <div className="max-w-[900px] mx-auto px-4 text-center relative z-10">
        <h2 className="text-[42px] leading-[1.2] font-bold font-montserrat mb-6 text-black tracking-[-2.5px]">
          Transform Your Embedded
          <br />
          Product Journey
        </h2>

        <p className="text-[17px] leading-[1.4] font-space-grotesk mb-8 text-black">
          Stop treating your firmware as a liability. Build for the future with
          Peridio.
        </p>

        <Button variant="primary" className="w-[170px] !text-sm">
          Book a Demo
        </Button>
      </div>
    </section>
  );
}
