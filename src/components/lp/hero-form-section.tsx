import React from 'react'
import { useHubspotForm } from '@/lib/hubspot-forms'

interface HeroFormSectionProps {
  hubspotFormId: string
  formElementId: string
  headerText: string
  title: string
  description: React.ReactNode
  listTitle?: string
  listItems?: string[]
}

export default function HeroFormSection({
  hubspotFormId,
  formElementId,
  headerText,
  title,
  description,
  listTitle,
  listItems,
}: HeroFormSectionProps) {
  useHubspotForm(hubspotFormId, formElementId)

  return (
    <section className="relative min-h-[625px] overflow-hidden bg-[url('/img/avocado-os/hero-background.png')] bg-cover bg-center bg-no-repeat pt-20">
      {/* Dark overlay to dim the background */}
      <div className="absolute inset-0 bg-black opacity-77" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
          <div className="flex flex-col gap-8 pt-10 lg:flex-row">
            {/* Left Column - Content */}
            <div className="flex w-[460px] flex-col justify-center">
              <p className="font-space-grotesk text-avocado-teal mb-3 text-[13px] font-bold tracking-[2px] uppercase">
                {headerText}
              </p>

              <h1 className="font-montserrat mb-4 text-[35px] leading-[1.2] font-[700] tracking-[-2px] text-white">
                {title}
              </h1>

              <div className="font-space-grotesk mb-4 text-[14px] leading-[1.6] text-white">
                {description}
              </div>

              {/* List Section (optional) */}
              {listItems && (
                <div className="space-y-4">
                  {listTitle && (
                    <h3 className="font-space-grotesk mb-1 text-[16px] font-[700] text-white">
                      {listTitle}
                    </h3>
                  )}

                  <ul className="list-disc space-y-3 pl-6">
                    {listItems.map((item, index) => (
                      <li
                        key={index}
                        className="font-space-grotesk mb-1 text-[12px] leading-[1.6] font-normal text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column - Form Card */}
            <div className="flex w-[420px] flex-col justify-center">
              <div className="mx-auto w-full max-w-md">
                <div
                  className="min-h-[400px] rounded-lg border p-8 backdrop-blur-sm"
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(49,49,49,0.38) 0%, rgba(0,0,0,0.38) 100%, rgba(0,0,0,0.38) 44.627192982456144%)',
                    borderColor: 'rgba(0, 255, 209, 0.25)',
                  }}
                >
                  <div id={formElementId} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
