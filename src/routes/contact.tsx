import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className=""
      style={{
        background:
          "radial-gradient(circle at 46.54134114583333% 0%, #5F51FF 0%, 21.599999999999998%, rgba(95, 81, 255, 0) 36%), radial-gradient(circle at 53.45703125% 0%, #00A0AA 0%, 18.599999999999998%, rgba(0, 160, 170, 0) 31%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      {/* Header Section */}
      <div className="max-w-[900px] mx-auto px-4 pt-20 text-white">
        <div className="text-center mb-6">
          <h1 className="font-montserrat text-[70px] font-[700] w-[615px] mx-auto mb-6 leading-[77px] tracking-[-1.4px]">
            See it for yourself with a free demo
          </h1>
          <p className="font-montserrat text-[16px] font-normal text-white max-w-2xl mx-auto">
            Let a member of our team show you how Peridio you can improve your
            device management strategies and development toolchain.
          </p>
        </div>

        {/* Benefits List */}
        <div className="flex flex-col items-center">
          <div className="space-y-2">
            {[
              "Increase development productivity",
              "Centralize device management",
              "Schedule and phase software releases",
              "Directly access devices in the field",
              "Launch with confidence",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-6 h-6 text-white" />
                <span className="font-space-grotesk text-[16px] font-normal text-white">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="w-full min-h-[800px] bg-black bg-cover bg-center bg-no-repeat"
        style={{
          background:
            "linear-gradient(360deg, rgba(175, 168, 255, 0.8) 0%, rgba(95, 81, 255, 0.8) 12.263569078947368%, rgba(0, 0, 0, 0.8) 44.627192982456144%)",
        }}
      >
        <div
          className="w-full h-full max-w-[1200px] mx-auto"
          style={{
            backgroundImage: "url('/img/contact-form-bg.png')",
            backgroundSize: "90% auto",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[900px] mx-auto py-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg w-[630px] h-[750px] mx-auto">
              <iframe
                className=""
                title="Contact Form"
                name="contact-form-iframe"
                width="100%"
                height="100%"
                allow="fullscreen"
                data-src=""
                src="https://www-peridio-com.filesusr.com/html/2d56fb_fa05b1b9422ba7e4b162339d2ef432d7.html"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
