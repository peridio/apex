import { createFileRoute } from '@tanstack/react-router'
import { useHubspotForm } from '@/lib/hubspot-forms'

export const Route = createFileRoute('/provisioning-guide-updates')({
  component: Page,
})

const HS_FORM_ID = 'provisioning-guide-updates-form'

function Page() {
  useHubspotForm('75637fce-c376-46a7-9807-24dfd0a44316', HS_FORM_ID)

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
        <div className="relative z-10 mx-auto max-w-[900px] px-4 pt-28 pb-16 lg:pt-40 lg:pb-20">
          <div className="text-center">
            <h1 className="font-montserrat mx-auto mb-6 max-w-[350px] text-[34px] leading-10 font-[700] tracking-[-1.4px] md:text-[40px] lg:max-w-[900px] lg:text-[52px] lg:leading-[52px]">
              Provisioning Guide Updates
            </h1>
            <p className="font-montserrat mx-auto max-w-[350px] text-[18px] font-normal text-white lg:max-w-[500px]">
              Enter your email and device name to be the first to know when documentation is
              available.
            </p>
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
              className="mx-auto h-[640px] w-[400px] rounded-2xl bg-white p-8 shadow-lg md:h-[550px] md:w-[630px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
