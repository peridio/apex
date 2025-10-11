import { createFileRoute } from '@tanstack/react-router'
import { PodcastLogo } from '@/components/svg/podcast-logo'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/podcast-beyond-the-bench')({
  component: PodcastBeyondTheBenchComponent,
})

function PodcastBeyondTheBenchComponent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ApplePodcastEmbed />
      <AboutTheShowSection />
      <AvailableOnSection />
      <BePodcastGuestSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto mt-26 px-6 sm:max-w-[440px] md:max-w-[700px] md:px-0 lg:mt-34 lg:max-w-[900px]">
        <div className="relative flex flex-col gap-8 md:flex-row">
          {/* Left Column - Content */}
          <div className="z-10 flex-1 text-center md:text-left">
            <p className="font-space-grotesk text-peridio-purple-lighter mb-4 text-[15px] font-bold uppercase">
              PODCAST
            </p>

            <div className="mb-2 flex justify-center md:justify-start lg:mb-6">
              <PodcastLogo className="h-[165px] w-[368px] text-white md:h-[180px] md:w-[400px]" />
            </div>

            <p className="font-space-grotesk mb-4 max-w-[500px] text-[14px] leading-[1.6] text-white lg:mb-8 lg:text-[15px]">
              <strong className="font-bold">The Beyond the Bench Podcast</strong> brings you
              conversations with engineering and product leaders who've successfully built and
              deployed embedded products at scale.
            </p>

            <Button asChild variant="primary" size="lg" className="w-full !text-sm md:w-[200px]">
              <a href="/podcast-guest-form">Be a Podcast Guest →</a>
            </Button>
          </div>

          {/* Right Column - Hero Image */}
          <div className="absolute right-0 bottom-0 md:relative md:flex-shrink-0">
            <div className="relative h-auto w-[440px] md:w-[465px] lg:w-[540px]">
              <img
                src="/img/podcast/hero-image.png"
                alt="Beyond The Bench"
                className="block h-auto w-full"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                }}
              />
              {/* Opacity filter overlay (below text, above image) */}
              <div className="pointer-events-none absolute inset-0 bg-[rgba(0,0,0,0.75)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ApplePodcastEmbed() {
  return (
    <section className="bg-black bg-none px-6 py-16 md:bg-[radial-gradient(circle_at_50%_0%,_#201B55_29.18%,_#000_64.5%)] md:px-0">
      <div className="mx-auto w-full max-w-[660px] rounded-xl bg-[radial-gradient(circle_at_50%_0%,_#201B55_29.18%,_#000_64.5%)] p-6 md:bg-none md:p-0">
        <h2 className="font-montserrat mb-6 text-center text-[24px] font-bold text-white md:text-[32px]">
          🎙️ Listen to the latest episode
        </h2>

        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          height="450"
          style={{
            width: '100%',
            maxWidth: '660px',
            overflow: 'hidden',
            borderRadius: '10px',
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.podcasts.apple.com/us/podcast/beyond-the-bench/id1803217994"
        ></iframe>
      </div>
    </section>
  )
}

function AboutTheShowSection() {
  return (
    <section className="relative bg-black py-20">
      <div className="mx-auto max-w-[450px] px-4 md:max-w-[800px] lg:max-w-[900px]">
        <div
          className="rounded-[16px] p-6 md:p-12"
          style={{
            backgroundImage:
              'linear-gradient(135deg, #FFFFFF 50.7092927631579%, #CAC5FF 100%, #5F51FF 90.26864035087719%, #000000 100%)',
          }}
        >
          <div className="relative flex flex-col gap-8 md:flex-row">
            {/* Left Column - Text Content */}
            <div className="flex flex-1 flex-col">
              <p className="font-space-grotesk text-peridio-purple mb-2 pt-10 text-[15px] uppercase md:pt-0 lg:mb-4">
                ABOUT THE SHOW
              </p>

              <h2 className="font-montserrat mb-3 text-[24px] leading-[1.2] font-bold tracking-[-1px] text-black md:text-[29px] lg:mb-6">
                Hardware stories that matter.
              </h2>

              <p className="font-space-grotesk mb-4 text-[12px] leading-[1.6] text-black md:text-[14px] lg:text-[16px]">
                Beyond the Bench with Peridio CEO Bill Brock delivers candid, insight-packed
                conversations with the brightest minds in edge technology.
              </p>

              <p className="font-space-grotesk mb-6 text-[12px] leading-[1.6] text-black md:text-[14px] lg:text-[16px]">
                Each episode features success stories and hard-won wisdom from technical leaders in
                edge AI, robotics, and intelligent systems—creating an invaluable knowledge bridge
                for emerging hardware pioneers.
              </p>

              <p className="font-space-grotesk mb-4 text-[12px] leading-[1.6] font-semibold text-black md:text-[14px] lg:mb-8 lg:text-[16px]">
                BTB is here to cut through the hype to deliver pressing, relevant discussions that
                matter now.
              </p>

              <Button asChild variant="primary" className="w-full !text-sm font-bold uppercase">
                <a href="https://pod.link/1803217994" target="_blank" rel="noopener noreferrer">
                  Listen to the Podcast
                </a>
              </Button>
            </div>

            {/* Right Column - Host Photo */}
            <div className="absolute -top-[85px] left-0 flex flex-shrink-0 items-stretch self-stretch md:relative md:-top-0">
              <img
                src="/img/podcast/bill-brock-host.jpg"
                alt="Bill Brock, Host of Beyond The Bench"
                className="h-full w-[110px] rounded-[16px] object-cover shadow-lg md:w-[270px] lg:w-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AvailableOnSection() {
  return (
    <section
      className="relative py-16"
      style={{
        background:
          'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(30,27,75,1) 50%, rgba(0,0,0,1) 100%)',
      }}
    >
      <div className="mx-auto max-w-[440px] px-4 text-center md:max-w-[900px]">
        <h2 className="font-space-grotesk mb-4 text-[18px] text-white">Available on</h2>

        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <a
            href="https://open.spotify.com/show/1Pvzefi1TEft0PKVTJLGz2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[75px] w-full items-center justify-center rounded-[12px] bg-white px-6 py-4 transition-transform hover:scale-105 md:w-[230px]"
          >
            <img
              src="/img/podcast/spotify-badge.png"
              alt="Listen on Spotify Podcasts"
              className="max-h-full max-w-full object-contain"
            />
          </a>

          <a
            href="https://podcasts.apple.com/us/podcast/beyond-the-bench/id1803217994"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[75px] w-full items-center justify-center rounded-[12px] bg-white px-4 py-2 transition-transform hover:scale-105 md:w-[230px]"
          >
            <img
              src="/img/podcast/apple-badge.png"
              alt="Listen on Apple Podcasts"
              className="max-h-full max-w-full object-contain"
            />
          </a>

          <a
            href="https://www.youtube.com/@PeridioPlatform/podcasts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[75px] w-full items-center justify-center rounded-[12px] bg-white px-6 py-4 transition-transform hover:scale-105 md:w-[230px]"
          >
            <img
              src="/img/podcast/youtube-badge.png"
              alt="Watch & Listen on YouTube"
              className="max-h-full max-w-full object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

function BePodcastGuestSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* Background pattern - using waveform gif for subtle animation */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/2d56fb_b7caa88d27c648dd96713e98419bfe43~mv2.gif')",
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-4 text-center">
        <p className="font-space-grotesk text-peridio-purple mb-6 text-[16px] font-semibold tracking-[0.2em] uppercase">
          SHARE YOUR EDGE INNOVATION STORY
        </p>

        <h2 className="font-montserrat mx-auto mb-10 max-w-[325px] text-[32px] leading-[1.2] font-bold tracking-[-1.5px] text-black md:max-w-[640px] md:text-[42px]">
          Are you pushing boundaries in edge AI, robotics, or intelligent systems?
        </h2>

        <Button asChild variant="primary" size="xl" className="w-[290px] !text-sm lg:w-[200px]">
          <a href="/podcast-guest-form">Be a Podcast Guest →</a>
        </Button>
      </div>
    </section>
  )
}
