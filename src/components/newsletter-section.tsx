import { useHubspotForm } from '@/lib/hubspot-forms'

const HS_FORM_ID = 'newsletter-section-form'

export default function NewsletterSection() {
  useHubspotForm('ccfd8cfc-b698-45de-82b5-a218e8c363e6', HS_FORM_ID)

  return (
    <section className="min-h-[300px] py-12" style={{ backgroundColor: 'rgb(240, 245, 255)' }}>
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[990px]">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-space-grotesk mb-2 text-[30px] font-bold text-black">
              Maintain your edge
            </h2>
            <p className="font-space-grotesk text-[15px] leading-[1.4] text-gray-600">
              Subscribe and be the first to receive our latest insights, best practices, and success
              stories on software distribution and device management for connected products.
            </p>
          </div>

          <div>
            <div id={HS_FORM_ID} className="flex h-[200px] items-center justify-center rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}
