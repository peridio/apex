import { createFileRoute } from '@tanstack/react-router'
import { Check } from 'lucide-react'

export const Route = createFileRoute('/book-a-meeting')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-black">
      {/* Hero Section with gradient and screen door effect */}
      <div
        className="relative h-[550px]"
        style={{
          background:
            'radial-gradient(circle at 46.54134114583333% 0%, #5F51FF 0%, 21.599999999999998%, rgba(95,81,255,0) 36%), radial-gradient(circle at 53.45703125% 0%, #00A0AA 0%, 18.599999999999998%, rgba(0,160,170,0) 31%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, rgba(0,0,0,0) 100%)',
        }}
      >
        {/* Screen Door Texture */}
        <div className="absolute inset-0 h-full w-full bg-[url('/img/screen-door-texture.png')] bg-auto bg-center bg-repeat" />
        {/* Header Section */}
        <div className="relative z-10 mx-auto h-[550px] max-w-[440px] px-4 pt-40 text-white md:max-w-[700px] lg:max-w-[900px]">
          <div className="mb-6 text-center">
            <h1 className="font-montserrat mx-auto mb-8 max-w-[615px] text-[32px] leading-[77px] font-[700] tracking-[-1.4px] md:text-[42px] lg:text-[70px]">
              See it for yourself with a free demo
            </h1>
            <p className="font-space-grotesk mx-auto text-[16px] font-normal tracking-[0.8px] text-white">
              Ready to take your release experience to the next level?
              <br />
              Let a member of our team show you how peridio you can improve your workflow.
            </p>
          </div>

          {/* Benefits List */}
          <div className="flex flex-col items-center">
            <div className="space-y-2">
              {[
                'Learn how to increase team productivity',
                'Get pricing information',
                'Explore use cases for your team',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-white" />
                  <span className="font-space-grotesk text-[16px] font-normal text-white">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Widget Section */}
      <div
        className="min-h-[800px] w-full bg-black bg-cover bg-center bg-no-repeat"
        style={{
          background:
            'linear-gradient(360deg, rgba(175, 168, 255, 0.8) 0%, rgba(95, 81, 255, 0.8) 12.263569078947368%, rgba(0, 0, 0, 0.8) 44.627192982456144%)',
        }}
      >
        <div className="mx-auto h-full w-full max-w-[1200px] bg-[url('/img/contact-form-bg.png')] bg-[length:90%_auto] bg-center bg-no-repeat">
          <div className="mx-auto max-w-[900px] py-16">
            <iframe
              src="https://meetings.hubspot.com/bill-brock?embed=true&parentHubspotUtk=0b9be481bce2107c6d8e5a96e135bb21&parentPageUrl=https://www-peridio-com.filesusr.com/html/2d56fb_4eacd05b57a4e662997a60dfa9975820.html"
              width="100%"
              data-hs-ignore="true"
              className="h-[756px] min-h-[615px] min-w-[312px] border-none"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
