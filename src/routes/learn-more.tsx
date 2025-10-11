import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/learn-more')({
  component: Page,
})

function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <GradientSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section
      className="relative"
      style={{
        background:
          'radial-gradient(circle at 46.54134114583333% 0%, #5F51FF 0%, 21.599999999999998%, rgba(95,81,255,0) 36%), radial-gradient(circle at 53.45703125% 0%, #00A0AA 0%, 18.599999999999998%, rgba(0,160,170,0) 31%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, rgba(0,0,0,0) 100%)',
      }}
    >
      {/* Darken Overlay */}
      <div className="absolute inset-0 h-full w-full bg-[rgba(0,0,0,0.4)]" />

      {/* Screen Door Texture */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: "url('/img/screen-door-texture.png')",
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center center',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-4 pt-28 lg:pt-40">
        <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto flex max-w-[450px] flex-col justify-center space-y-4 text-center text-white lg:text-left">
            <p className="font-space-grotesk text-[14px] font-bold text-white">
              Schedule a demo to learn more
            </p>

            <h1 className="font-montserrat text-[34px] leading-10 font-[700] tracking-[-1.4px] md:text-[40px] lg:text-[50px] lg:leading-[60px]">
              Deploy with confidence
            </h1>

            <p className="font-montserrat text-[16px] font-normal">
              Schedule 1:1 time with our founders and learn how to accelerate your AIoT initiatives
              with the Peridio platform and AvocadOS.
            </p>

            <p className="font-montserrat text-[16px] font-normal">
              Accelerate development, deploy with confidence.
            </p>
          </div>

          <div className="flex justify-center">
            <iframe
              className="h-[650px] w-[400px]"
              src="https://meetings.hubspot.com/bill-brock?embed=true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function GradientSection() {
  return (
    <section
      className="py-20"
      style={{
        background:
          'linear-gradient(360deg, #AFA8FF 0%, #5F51FF 12.263569078947368%, #000000 44.627192982456144%)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
          <FeatureCard
            title="Observation"
            description="Monitor your software updates, connectivity, and activity across the fleet. Visualize fleet health."
            imageUrl="https://static.wixstatic.com/media/2d56fb_0fffab4ecfb4471db226cca532d88819~mv2.png/v1/fill/w_494,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d56fb_0fffab4ecfb4471db226cca532d88819~mv2.png"
          />
          <FeatureCard
            title="Remote Access"
            description="Secure and configurable tunnels. First class support for SSH, SCP, and additional custom protocols."
            imageUrl="https://static.wixstatic.com/media/2d56fb_41f9b700b39047209944be1c8f69230c~mv2.gif"
          />
          <FeatureCard
            title="Distribution"
            description="Configurable, multi-file update strategies. Optimize for bandwidth constrained environments."
            imageUrl="https://static.wixstatic.com/media/2d56fb_87f86fb7d6f54eb3afeb76480f566351~mv2.png/v1/fill/w_504,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d56fb_87f86fb7d6f54eb3afeb76480f566351~mv2.png"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  title,
  description,
  imageUrl,
}: {
  title: string
  description: string
  imageUrl: string
}) {
  return (
    <div
      className="flex h-[250px] w-full flex-row rounded-2xl bg-[#18191f80] md:h-[360px] md:w-[280px] md:flex-col"
      style={{ border: '1px solid #43474b' }}
    >
      <div className="order-2 flex w-[280px] items-center justify-center overflow-hidden rounded-lg p-2 md:order-none md:w-full md:py-8">
        <img src={imageUrl} alt={title} className="h-auto w-full object-contain md:w-[250px]" />
      </div>

      <div className="flex flex-1 flex-col justify-center p-6 md:order-none md:flex-none">
        <h3 className="font-montserrat mb-2 text-[18px] font-[700] text-white">{title}</h3>
        <p className="font-space-grotesk text-[14px] leading-[1.6] font-normal text-gray-300">
          {description}
        </p>
      </div>
    </div>
  )
}
