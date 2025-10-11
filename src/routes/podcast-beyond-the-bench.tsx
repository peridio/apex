import { createFileRoute } from "@tanstack/react-router";
import { PodcastLogo } from "@/components/svg/podcast-logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/podcast-beyond-the-bench")({
  component: PodcastBeyondTheBenchComponent,
});

function PodcastBeyondTheBenchComponent() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="relative bg-black overflow-hidden">
        <div className="max-w-[900px] mx-auto px-4 mt-16">
          <div className="flex flex-col md:flex-row gap-8 relative">
            {/* Left Column - Content */}
            <div className="flex-1 z-10">
              <p className="text-[15px] font-space-grotesk text-peridio-purple-lighter uppercase font-bold mb-4">
                PODCAST
              </p>

              <div className="mb-6" style={{ width: "400px", height: "180px" }}>
                <PodcastLogo />
              </div>

              <p className="text-[15px] leading-[1.6] font-space-grotesk text-white mb-8 max-w-[500px]">
                <strong className="font-bold">
                  The Beyond the Bench Podcast
                </strong>{" "}
                brings you conversations with engineering and product leaders
                who've successfully built and deployed embedded products at
                scale.
              </p>

              <Button
                asChild
                variant="primary"
                size="lg"
                className="w-[200px] !text-sm"
              >
                <a href="/podcast-guest-form">Be a Podcast Guest →</a>
              </Button>
            </div>

            {/* Right Column - Hero Image */}
            <div className="absolute right-0 bottom-0 md:relative md:flex-shrink-0">
              <img
                src="/img/podcast/hero-image.png"
                alt="Beyond The Bench"
                className="w-[540px] h-auto"
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <ApplePodcastEmbed />

      <AboutTheShowSection />
      <AvailableOnSection />
      <BePodcastGuestSection />
    </div>
  );
}

function ApplePodcastEmbed() {
  return (
    <section
      className="py-16"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #201B55 29.183799342105267%, #000000 64.49766995614034%)",
      }}
    >
      <div className="w-full max-w-[660px] mx-auto px-4">
        <h2 className="text-[32px] font-bold text-center font-montserrat text-white mb-6">
          🎙️ Listen to the latest episode
        </h2>

        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          height="450"
          style={{
            width: "100%",
            maxWidth: "660px",
            overflow: "hidden",
            borderRadius: "10px",
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.podcasts.apple.com/us/podcast/beyond-the-bench/id1803217994"
        ></iframe>
      </div>
    </section>
  );
}

function AboutTheShowSection() {
  return (
    <section className="py-20 relative bg-black">
      <div className="max-w-[900px] mx-auto px-4">
        <div
          className="rounded-[16px] p-12"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #FFFFFF 50.7092927631579%, #CAC5FF 100%, #5F51FF 90.26864035087719%, #000000 100%)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Text Content */}
            <div className="flex-1 flex flex-col">
              <p className="text-[15px] font-space-grotesk text-[#5f51ff] uppercase mb-4">
                ABOUT THE SHOW
              </p>

              <h2 className="text-[29px] leading-[1.2] font-bold font-montserrat mb-6 text-black tracking-[-1px]">
                Hardware stories that matter.
              </h2>

              <p className="text-[16px] leading-[1.6] font-space-grotesk mb-4 text-black">
                Beyond the Bench with Peridio CEO Bill Brock delivers candid,
                insight-packed conversations with the brightest minds in edge
                technology.
              </p>

              <p className="text-[16px] leading-[1.6] font-space-grotesk mb-6 text-black">
                Each episode features success stories and hard-won wisdom from
                technical leaders in edge AI, robotics, and intelligent
                systems—creating an invaluable knowledge bridge for emerging
                hardware pioneers.
              </p>

              <p className="text-[16px] leading-[1.6] font-space-grotesk font-semibold mb-8 text-black">
                BTB is here to cut through the hype to deliver pressing,
                relevant discussions that matter now.
              </p>

              <Button
                asChild
                variant="primary"
                className="w-full !text-sm font-bold uppercase"
              >
                <a
                  href="https://pod.link/1803217994"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen to the Podcast
                </a>
              </Button>
            </div>

            {/* Right Column - Host Photo */}
            <div className="flex-shrink-0 self-stretch flex items-stretch">
              <img
                src="/img/podcast/bill-brock-host.jpg"
                alt="Bill Brock, Host of Beyond The Bench"
                className="rounded-[16px] shadow-lg w-[320px] h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AvailableOnSection() {
  return (
    <section
      className="py-16 relative"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(30,27,75,1) 50%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div className="max-w-[900px] mx-auto px-4 text-center">
        <h2 className="text-[18px] font-space-grotesk text-white mb-4">
          Available on
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            href="https://open.spotify.com/show/your-show-id"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-[12px] px-6 py-4 transition-transform hover:scale-105 flex items-center justify-center w-[230px] h-[75px]"
          >
            <img
              src="/img/podcast/spotify-badge.png"
              alt="Listen on Spotify Podcasts"
              className="max-w-full max-h-full object-contain"
            />
          </a>

          <a
            href="https://podcasts.apple.com/podcast/your-podcast-id"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-[12px] px-4 py-2 transition-transform hover:scale-105 flex items-center justify-center w-[230px] h-[75px]"
          >
            <img
              src="/img/podcast/apple-badge.png"
              alt="Listen on Apple Podcasts"
              className="max-w-full max-h-full object-contain"
            />
          </a>

          <a
            href="https://www.youtube.com/@your-channel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-[12px] px-6 py-4 transition-transform hover:scale-105 flex items-center justify-center w-[230px] h-[75px]"
          >
            <img
              src="/img/podcast/youtube-badge.png"
              alt="Watch & Listen on YouTube"
              className="max-w-full max-h-full object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function BePodcastGuestSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background pattern - using waveform gif for subtle animation */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/2d56fb_b7caa88d27c648dd96713e98419bfe43~mv2.gif')",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      <div className="max-w-[900px] mx-auto px-4 text-center relative z-10">
        <p className="text-[16px] font-space-grotesk font-semibold text-[#5f51ff] uppercase tracking-[0.2em] mb-6">
          SHARE YOUR EDGE INNOVATION STORY
        </p>

        <h2 className="text-[42px] leading-[1.2] font-bold font-montserrat mb-10 text-black tracking-[-1.5px] max-w-[640px] mx-auto">
          Are you pushing boundaries in edge AI, robotics, or intelligent
          systems?
        </h2>

        <Button
          asChild
          variant="primary"
          size="xl"
          className="w-[200px] !text-sm"
        >
          <a href="/podcast-guest-form">Be a Podcast Guest →</a>
        </Button>
      </div>
    </section>
  );
}
