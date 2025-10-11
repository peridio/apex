import { createFileRoute } from '@tanstack/react-router'
import { useHubspotForm } from '@/lib/hubspot-forms'

export const Route = createFileRoute('/sign-up')({
  component: Page,
})

const HS_FORM_ID = 'sign-up-form'

function Page() {
  useHubspotForm('5c7eebb3-9776-4d8e-9a69-68bbe76a3bd3', HS_FORM_ID)

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#2a2d30] pt-24">
      <div className="text-center">
        <h1 className="mb-6 text-2xl font-semibold text-white">Create your account</h1>
        <div id={HS_FORM_ID} className="mx-auto h-[420px] w-[320px]" />
        <p className="text-light-gray mt-6">
          Already have an account?{' '}
          <a
            href="https://console.peridio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-peridio-purple-lighter hover:text-peridio-purple-light underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
