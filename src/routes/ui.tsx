import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { AvocadoOsLogo } from '@/components/svg/avocado-os-logo'
import { AvocadoOsLogoFull } from '@/components/svg/avocado-os-logo-full'
import { DockerLogo } from '@/components/svg/docker-logo'
import { FellowesLogo } from '@/components/svg/fellowes-logo'
import { GithubLogo } from '@/components/svg/github-logo'
import { GraniteLogo } from '@/components/svg/granite-logo'
import { KeyfactorLogo } from '@/components/svg/keyfactor-logo'
import { LinuxFoundationLogo } from '@/components/svg/linux-foundation-logo'
import { NetFoundryLogo } from '@/components/svg/net-foundry-logo'
import { PeridioLogo } from '@/components/svg/peridio-logo'
import { PeridioLogoFull } from '@/components/svg/peridio-logo-full'
import { PodcastLogo } from '@/components/svg/podcast-logo'
import { TellyLogo } from '@/components/svg/telly-logo'
import { VarisciteLogo } from '@/components/svg/variscite-logo'
import { VeryLogo } from '@/components/svg/very-logo'
import { YoctoLogo } from '@/components/svg/yocto-logo'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/ui')({
  component: UIShowcase,
})

function UIShowcase() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`min-h-screen p-8 pt-30 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Button Component Showcase
          </h1>
          <Button variant="outline-transparent-primary" onClick={() => setIsDark(!isDark)}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>

        {/* Button Variants */}
        <section className="mb-12">
          <h2 className={`mb-6 text-2xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
            Button Variants
          </h2>
          <div className="space-y-8">
            {/* Primary Variant */}
            <div>
              <h3 className={`mb-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Primary Variant
              </h3>
              <div className="flex flex-wrap items-end gap-4">
                <Button variant="primary" size="xs">
                  Primary XS
                </Button>
                <Button variant="primary" size="sm">
                  Primary Small
                </Button>
                <Button variant="primary" size="default">
                  Primary Default
                </Button>
                <Button variant="primary" size="lg">
                  Primary Large
                </Button>
                <Button variant="primary" size="xl">
                  Primary XL
                </Button>
                <Button variant="primary" disabled>
                  Primary Disabled
                </Button>
              </div>
            </div>

            {/* Secondary Variant */}
            <div>
              <h3 className={`mb-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Secondary Variant
              </h3>
              <div className="flex flex-wrap items-end gap-4">
                <Button variant="secondary" size="xs">
                  Secondary XS
                </Button>
                <Button variant="secondary" size="sm">
                  Secondary Small
                </Button>
                <Button variant="secondary" size="default">
                  Secondary Default
                </Button>
                <Button variant="secondary" size="lg">
                  Secondary Large
                </Button>
                <Button variant="secondary" size="xl">
                  Secondary XL
                </Button>
                <Button variant="secondary" disabled>
                  Secondary Disabled
                </Button>
              </div>
            </div>

            {/* Secondary Dark Variant */}
            <div>
              <h3 className={`mb-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Secondary Dark Variant
              </h3>
              <div className="flex flex-wrap items-end gap-4">
                <Button variant="secondary-dark" size="xs">
                  Secondary Dark XS
                </Button>
                <Button variant="secondary-dark" size="sm">
                  Secondary Dark Small
                </Button>
                <Button variant="secondary-dark" size="default">
                  Secondary Dark Default
                </Button>
                <Button variant="secondary-dark" size="lg">
                  Secondary Dark Large
                </Button>
                <Button variant="secondary-dark" size="xl">
                  Secondary Dark XL
                </Button>
                <Button variant="secondary-dark" disabled>
                  Secondary Dark Disabled
                </Button>
              </div>
            </div>

            {/* Outline Transparent Primary Variant */}
            <div>
              <h3 className={`mb-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Outline Transparent Primary Variant
              </h3>
              <div className="flex flex-wrap items-end gap-4">
                <Button variant="outline-transparent-primary" size="xs">
                  Outline Trans Primary XS
                </Button>
                <Button variant="outline-transparent-primary" size="sm">
                  Outline Trans Primary Small
                </Button>
                <Button variant="outline-transparent-primary" size="default">
                  Outline Trans Primary Default
                </Button>
                <Button variant="outline-transparent-primary" size="lg">
                  Outline Trans Primary Large
                </Button>
                <Button variant="outline-transparent-primary" size="xl">
                  Outline Trans Primary XL
                </Button>
                <Button variant="outline-transparent-primary" disabled>
                  Outline Trans Primary Disabled
                </Button>
              </div>
            </div>

            {/* Outline Transparent Secondary Variant */}
            <div>
              <h3 className={`mb-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Outline Transparent Secondary Variant
              </h3>
              <div className="flex flex-wrap items-end gap-4">
                <Button variant="outline-transparent-secondary" size="xs">
                  Outline Trans Secondary XS
                </Button>
                <Button variant="outline-transparent-secondary" size="sm">
                  Outline Trans Secondary Small
                </Button>
                <Button variant="outline-transparent-secondary" size="default">
                  Outline Trans Secondary Default
                </Button>
                <Button variant="outline-transparent-secondary" size="lg">
                  Outline Trans Secondary Large
                </Button>
                <Button variant="outline-transparent-secondary" size="xl">
                  Outline Trans Secondary XL
                </Button>
                <Button variant="outline-transparent-secondary" disabled>
                  Outline Trans Secondary Disabled
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SVG Logos */}
        <section className="mb-12">
          <h2 className={`mb-6 text-2xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
            SVG Logos
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <AvocadoOsLogoFull
                width={60}
                height={60}
                className={isDark ? 'text-white' : 'text-black'}
              />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <AvocadoOsLogo
                width={60}
                height={60}
                className={isDark ? 'text-white' : 'text-black'}
              />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <DockerLogo width={60} height={60} className={isDark ? 'text-white' : 'text-black'} />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <FellowesLogo
                width={60}
                height={60}
                className={isDark ? 'text-white' : 'text-black'}
              />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <GithubLogo width={60} height={60} className={isDark ? 'text-white' : 'text-black'} />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <GraniteLogo
                width={60}
                height={60}
                className={isDark ? 'text-white' : 'text-black'}
              />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <KeyfactorLogo
                width={60}
                height={60}
                className={isDark ? 'text-white' : 'text-black'}
              />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <LinuxFoundationLogo
                width={60}
                height={60}
                className={isDark ? 'text-white' : 'text-black'}
              />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <NetFoundryLogo
                width={60}
                height={60}
                className={isDark ? 'text-white' : 'text-black'}
              />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <PeridioLogo
                width={60}
                height={60}
                className={isDark ? 'text-white' : 'text-black'}
              />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <PeridioLogoFull
                iconHeight={60}
                wordmarkHeight={40}
                className={isDark ? 'text-white' : 'text-black'}
              />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <PodcastLogo
                width={60}
                height={60}
                className={isDark ? 'text-white' : 'text-black'}
              />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <TellyLogo width={60} height={60} className={isDark ? 'text-white' : 'text-black'} />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <VarisciteLogo
                width={60}
                height={60}
                className={isDark ? 'text-white' : 'text-black'}
              />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <VeryLogo width={60} height={60} className={isDark ? 'text-white' : 'text-black'} />
            </div>
            <div
              className={`rounded-lg border p-4 ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex h-24 items-center justify-center`}
            >
              <YoctoLogo width={60} height={60} className={isDark ? 'text-white' : 'text-black'} />
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section>
          <h2 className={`mb-6 text-2xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
            Interactive Examples
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className={`mb-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                With onClick
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" onClick={() => alert('Primary clicked!')}>
                  Click Me (Primary)
                </Button>
                <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
                  Click Me (Secondary)
                </Button>
                <Button variant="secondary-dark" onClick={() => alert('Secondary Dark clicked!')}>
                  Click Me (Secondary Dark)
                </Button>
                <Button
                  variant="outline-transparent-primary"
                  onClick={() => alert('Outline Transparent Primary clicked!')}
                >
                  Click Me (Outline Transparent Primary)
                </Button>
                <Button
                  variant="outline-transparent-secondary"
                  onClick={() => alert('Outline Transparent Secondary clicked!')}
                >
                  Click Me (Outline Transparent Secondary)
                </Button>
              </div>
            </div>

            <div>
              <h3 className={`mb-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                As Link (with asChild)
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" asChild>
                  <a href="/">Go to Home (Primary)</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/company">Go to Company (Secondary)</a>
                </Button>
                <Button variant="secondary-dark" asChild>
                  <a href="/avocado-os">Go to Avocado OS (Secondary Dark)</a>
                </Button>
                <Button variant="outline-transparent-primary" asChild>
                  <a href="/partners">Go to Partners (Outline Transparent Primary)</a>
                </Button>
                <Button variant="outline-transparent-secondary" asChild>
                  <a href="/podcast-beyond-the-bench">
                    Go to Podcast (Outline Transparent Secondary)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
