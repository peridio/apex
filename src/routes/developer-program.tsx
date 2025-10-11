import { createFileRoute } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { useHubspotForm } from '@/lib/hubspot-forms'

export const Route = createFileRoute('/developer-program')({
  component: Page,
})

const HS_FORM_ID = 'developer-program-form'

function Page() {
  useHubspotForm('7f11c1d0-88b9-49ca-863a-80bf89acb5d6', HS_FORM_ID)

  return (
    <div
      className=""
      style={{
        background:
          'radial-gradient(circle at 46.54134114583333% 0%, #5F51FF 0%, 21.599999999999998%, rgba(95,81,255,0) 36%), radial-gradient(circle at 53.45703125% 0%, #00A0AA 0%, 18.599999999999998%, rgba(0,160,170,0) 31%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, rgba(0,0,0,0) 100%)',
      }}
    >
      {/* Header Section */}
      <div className="relative text-white">
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
          <div className="mb-6 text-center">
            <h1 className="font-montserrat mx-auto mb-6 max-w-[350px] text-[34px] leading-10 font-[700] tracking-[-1.4px] md:text-[40px] lg:max-w-[715px] lg:text-[70px] lg:leading-[77px]">
              Peridio Developer Program
            </h1>
            <p className="font-montserrat mx-auto max-w-[350px] text-[16px] font-normal text-white lg:max-w-2xl">
              Free Developer Access for 90 Days
            </p>
          </div>

          {/* Benefits List */}
          <div className="flex flex-col items-center">
            <div className="space-y-2">
              {[
                'Increase development productivity',
                'Centralize device management',
                'Schedule and phase software releases',
                'Directly access devices in the field',
                'Launch with confidence',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-white" />
                  <span className="font-space-grotesk text-[14px] font-normal text-white md:text-[16px]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="min-h-[800px] w-full bg-black bg-cover bg-center bg-no-repeat"
        style={{
          background:
            'linear-gradient(360deg, rgba(175, 168, 255, 0.8) 0%, rgba(95, 81, 255, 0.8) 12.263569078947368%, rgba(0, 0, 0, 0.8) 44.627192982456144%)',
        }}
      >
        <div
          className="mx-auto h-full w-full max-w-[1200px]"
          style={{
            backgroundImage: "url('/img/contact-form-bg.png')",
            backgroundSize: '90% auto',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="mx-auto max-w-[900px] py-16">
            <div
              id={HS_FORM_ID}
              className="mx-auto h-[715px] w-[400px] rounded-2xl bg-white p-8 shadow-lg md:h-[600px] md:w-[630px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
