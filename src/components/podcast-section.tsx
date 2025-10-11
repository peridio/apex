import { Button } from "@/components/ui/button";

export default function PodcastSection() {
  return (
    <section
      className="py-16 bg-white"
      // style={{ backgroundColor: "rgb(240, 245, 255)" }}
    >
      <div className="max-w-[900px] mx-auto px-4">
        <div
          className="relative rounded-[16px]"
          style={{
            border: "1px solid rgba(202, 197, 255, 1)",
            width: "860px",
            height: "300px",
            paddingLeft: "50px",
            paddingTop: "50px",
          }}
        >
          {/* Left Column - Text and CTA */}
          <div className="relative z-10 w-[415px]">
            <h2 className="text-[43px] leading-[1.4em] font-bold font-montserrat mb-4 text-black tracking-[-2.15px]">
              Beyond The Bench
            </h2>
            <p
              className="text-[14px] font-space-grotesk mb-6"
              style={{ color: "#6E6E6E" }}
            >
              Featuring essential insights from leaders successfully scaling
              innovative embedded hardware and edge AI.
            </p>

            {/* Button and Platform Icons in one row */}
            <div className="flex items-center gap-6">
              <Button asChild variant="primary" className="w-[170px] !text-sm">
                <a href="/podcast-beyond-the-bench">Explore the Podcast</a>
              </Button>

              {/* Platform Icons */}
              <div className="flex items-center gap-3">
                <span
                  className="text-[14px] font-space-grotesk"
                  style={{ color: "#6E6E6E" }}
                >
                  Available on
                </span>
                <div className="flex gap-2">
                  <SpotifyIcon />
                  <ApplePodcastsIcon />
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Cover Art with Waveforms (Absolutely Positioned) */}
          <div
            className="absolute"
            style={{
              top: "50px",
              right: "80px",
            }}
          >
            <div className="relative flex items-center justify-center">
              {/* Left Waveform GIF */}
              <img
                src="https://static.wixstatic.com/media/2d56fb_b7caa88d27c648dd96713e98419bfe43~mv2.gif"
                alt="Audio Waveform Left"
                className="absolute"
                style={{
                  // width: "100px",
                  height: "133px",
                  objectFit: "cover",
                  left: "-50px",
                }}
              />

              {/* Podcast Cover */}
              <img
                src="/img/beyond-the-bench-cover.png"
                alt="Beyond The Bench Podcast"
                className="relative w-[200px] h-[200px] rounded-lg shadow-lg z-10"
              />

              {/* Right Waveform GIF */}
              <img
                src="https://static.wixstatic.com/media/2d56fb_b7caa88d27c648dd96713e98419bfe43~mv2.gif"
                alt="Audio Waveform Right"
                className="absolute"
                style={{
                  // width: "100px",
                  height: "133px",
                  objectFit: "cover",
                  right: "-35px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpotifyIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2.5 2 20 20"
      height="24"
      width="25"
      role="presentation"
      aria-hidden="true"
    >
      <path
        fill="#A9A9A9"
        d="M18.4 10.9C15.2 9 9.85 8.8 6.8 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85M12.5 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20"
      />
    </svg>
  );
}

function ApplePodcastsIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2.748 2.25 19.505 19.5"
      height="24"
      width="25"
      role="presentation"
      aria-hidden="true"
    >
      <path
        fill="#A9A9A9"
        d="M15.481 14.233a1.84 1.84 0 0 1 .336 1.599l-1.142 4.5a1.89 1.89 0 0 1-1.841 1.418h-.668a1.89 1.89 0 0 1-1.84-1.418l-1.143-4.5a1.84 1.84 0 0 1 .336-1.599 1.9 1.9 0 0 1 1.5-.733h2.953a1.89 1.89 0 0 1 1.51.733m-.356-3.358a2.625 2.625 0 1 0-5.25 0 2.625 2.625 0 0 0 5.25 0m2.438 2.531a.75.75 0 1 0 1.444.402 6.75 6.75 0 1 0-13.007 0 .75.75 0 0 0 1.438-.402 5.25 5.25 0 1 1 10.125 0M12.5 2.25a9.75 9.75 0 0 0-5.42 17.856.75.75 0 1 0 .834-1.247 8.25 8.25 0 1 1 9.172 0 .75.75 0 0 0 .835 1.247A9.75 9.75 0 0 0 12.5 2.25"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2.5 5 20 14"
      height="24"
      width="25"
      role="presentation"
      aria-hidden="true"
    >
      <path
        fill="#A9A9A9"
        d="m10.5 15 5.19-3-5.19-3zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09l.06.84c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12.5 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2.5 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12.5 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73"
      />
    </svg>
  );
}
