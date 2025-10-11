export default function WorkflowSection() {
  return (
    <div className="w-full bg-black">
      <div className="relative mx-auto flex max-w-[350px] flex-col md:max-w-[700px] lg:max-w-[900px] lg:gap-20">
        <DevelopSection />
        <DeploySection />
        <ScaleSection />
      </div>
    </div>
  )
}

function DevelopSection() {
  return (
    <div className="relative min-h-[560px] lg:min-h-[600px]">
      {/* Vertical line - separate SVG for positioning control */}
      <svg
        className="absolute top-0 left-5 w-full lg:left-0"
        viewBox="0 0 900 650"
        preserveAspectRatio="xMidYMin meet"
      >
        <path d="M 105 55 L 105 520" stroke="#00FF88" strokeWidth="4" fill="none" />
      </svg>

      {/* Horizontal line - separate SVG for positioning control */}
      <svg
        className="absolute top-34 left-0 w-full md:top-16 lg:top-0"
        viewBox="0 0 900 650"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y1="265"
            x1="155"
            y2="265"
            x2="710"
            id="horizontal-green-gradient"
          >
            <stop stopColor="#00FF66" offset="0.49"></stop>
            <stop stopOpacity="0" stopColor="#00FF66" offset="1"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 150 265 L 710 265"
          stroke="url(#horizontal-green-gradient)"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* Bottom curved corner - separate SVG for breakpoint visibility control */}
      <svg
        className="absolute top-0 left-0 hidden lg:block"
        width="900"
        height="650"
        viewBox="0 0 900 650"
        preserveAspectRatio="meet"
        style={{ zIndex: 10 }}
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="620"
            x2="105"
            y1="580"
            x1="105"
            id="green-gradient"
          >
            <stop stopColor="#00FF88"></stop>
            <stop stopOpacity="0" stopColor="#00FF88" offset="1"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 105 520 v 30 c 0 16.569 13.431 30 30 30 h 680 c 16.569 0 30 13.431 30 30 v 20"
          stroke="url(#green-gradient)"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* DEVELOP Badge */}
      <div className="absolute top-0 z-20 md:left-[50px]">
        <div className="rounded-full border-2 border-[#00ff66] bg-black px-6 py-2">
          <span className="font-space-grotesk text-sm font-bold tracking-wider text-white uppercase">
            DEVELOP
          </span>
        </div>
      </div>

      {/* Glowing icon - positioned on the left */}
      <div className="absolute top-[180px] z-30 md:left-[20px]">
        <img
          src="/img/avocado-icon.png"
          alt="Avocado OS"
          className="w-[120px] object-contain transition-transform duration-300 hover:[animation:pulse-scale_2s_ease-in-out_infinite] md:w-[170px]"
        />
      </div>

      {/* Main content area */}
      <div className="lg-24 relative z-10 pt-18 md:pt-14">
        {/* Heading */}
        <h2 className="font-montserrat mb-2 ml-26 text-[28px] leading-[1.1] font-bold text-[#00FF66] md:ml-52 md:text-[42px] lg:ml-64">
          Build on Yocto,
          <br />
          Lightning Fast
        </h2>

        {/* Subheading */}
        <p className="font-space-grotesk mb-8 ml-26 text-[15px] leading-relaxed text-gray-300 md:ml-52 md:text-[25px] lg:ml-64">
          Featuring Avocado OS
        </p>

        {/* Developers label and avatars - positioned on the right */}
        <div className="absolute top-[190px] right-0 z-20 ml-26 flex flex-col items-end md:top-[205px] md:ml-52 lg:ml-64">
          <span className="font-space-grotesk mb-3 text-sm text-gray-400">Developers</span>
          <img
            src="/img/developer-avatars.png"
            alt="Developer team"
            className="h-auto w-[100px] md:w-[142px]"
          />
        </div>

        {/* Body text */}
        <p className="font-space-grotesk max-w-auto text-light-gray w-full pt-30 text-center md:ml-52 md:max-w-[520px] md:text-left md:text-[18px] lg:ml-64 lg:text-[18px]">
          Avocado OS, built on Yocto, delivers secure, deterministic builds in minutes—not hours.
          Edge AI-ready and team-friendly, it slashes build times so your developers can focus on
          code, not configs.
        </p>
      </div>
    </div>
  )
}

function DeploySection() {
  return (
    <div className="relative min-h-[580px] lg:min-h-[600px]">
      {/* Vertical line - separate SVG for positioning control */}
      <svg
        className="absolute top-0 -left-2 w-full md:left-5 lg:left-0"
        viewBox="0 0 900 650"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y1="55"
            x1="845"
            y2="800"
            x2="845"
            id="vertical-cyan-gradient"
          >
            <stop stopColor="#00F0FF" offset="0.49" />
            <stop stopOpacity="0" stopColor="#00F0FF" offset="1" />
          </linearGradient>
        </defs>
        <path
          d="M 845 40 L 845 475"
          stroke="url(#vertical-cyan-gradient)"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* Horizontal line from circle area to left side - separate SVG for positioning control */}
      <svg
        className="absolute top-35 left-24 w-full md:top-15 lg:top-0 lg:left-0"
        viewBox="0 0 900 650"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="265"
            x2="190"
            y1="265"
            x1="800"
            id="cyan-horizontal-base"
          >
            <stop stopColor="#00F0FF" offset="0.49"></stop>
            <stop stopOpacity="0" stopColor="#427CFF" offset="1"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="250"
            x2="530"
            y1="250"
            x1="190"
            id="cyan-upper-curve"
          >
            <stop stopOpacity="0" stopColor="#00F0FF"></stop>
            <stop stopColor="#00F0FF" offset=".635"></stop>
            <stop stopOpacity="0" stopColor="#00F0FF" offset=".83"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="280"
            x2="530"
            y1="280"
            x1="190"
            id="cyan-lower-curve"
          >
            <stop stopOpacity="0" stopColor="#00F0FF"></stop>
            <stop stopColor="#00F0FF" offset=".635"></stop>
            <stop stopOpacity="0" stopColor="#00F0FF" offset=".83"></stop>
          </linearGradient>
        </defs>
        {/* Horizontal base cyan line */}
        <path strokeWidth="4" stroke="url(#cyan-horizontal-base)" d="M800 265H190" fill="none" />
        {/* Upper curve (mirrored to fit placement, adapted) */}
        <path
          strokeWidth="4"
          stroke="url(#cyan-upper-curve)"
          d="M190 230 h142.5c5.5 0 10 4.5 10 10v15c0 5.5 4.5 10 10 10H530"
          fill="none"
        />
        {/* Lower curve (mirrored to fit placement, adapted) */}
        <path
          strokeWidth="4"
          stroke="url(#cyan-lower-curve)"
          d="M190 300 h142.5c5.5 0 10-4.5 10-10v-15c0-5.5 4.5-10 10-10H530"
          fill="none"
        />
      </svg>

      {/* Bottom curved corner - separate SVG for breakpoint visibility control */}
      <svg
        className="absolute top-0 left-0 hidden lg:block"
        width="900"
        height="650"
        viewBox="0 0 900 650"
        preserveAspectRatio="meet"
        style={{ zIndex: 10 }}
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="620"
            x2="845"
            y1="580"
            x1="845"
            id="cyan-gradient"
          >
            <stop stopColor="#00F0FF"></stop>
            <stop stopOpacity="0" stopColor="#00F0FF" offset="1"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 845 400 v 130 c 0 16.568 -13.431 30 -30 30 H 455 c -16.569 0 -30 13.431 -30 30 v 90"
          stroke="url(#cyan-gradient)"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* DEPLOY Badge */}
      <div className="absolute top-0 -right-[20px] z-20 md:-right-[30px] lg:-right-0">
        <div className="rounded-full border-2 border-[#00F0FF] bg-black px-6 py-2">
          <span className="font-space-grotesk text-sm font-bold tracking-wider text-white uppercase">
            DEPLOY
          </span>
        </div>
      </div>

      {/* Glowing icon - positioned on the right */}
      <div className="absolute top-[180px] -right-8 z-30 md:-right-16 lg:-right-8">
        <img
          src="/img/building-blocks-icon.png"
          alt="Building Blocks"
          className="w-[120px] object-contain transition-transform duration-300 hover:[animation:pulse-scale_2s_ease-in-out_infinite] md:w-[170px]"
        />
      </div>

      {/* Main content area */}
      <div className="relative z-10 ml-8 pt-14 md:ml-20 md:pt-0 lg:ml-64">
        {/* Heading */}
        <h2 className="font-montserrat mb-2 text-[26px] leading-[1.1] font-bold text-[#00F0FF] md:text-[42px]">
          Keep Your Linux,
          <br />
          Lose the Headaches
        </h2>

        {/* Subheading */}
        <p className="font-space-grotesk mb-8 text-[15px] leading-relaxed text-gray-300 md:text-[25px]">
          Yocto-based distribution maintenance
        </p>

        {/* Roles section - labels + avatar stack */}
        <div className="absolute top-[205px] -left-10 z-20 flex items-center gap-4 lg:-left-50">
          {/* Labels column */}
          <div className="font-space-grotesk flex h-[70px] flex-col justify-between text-right text-[12px] text-gray-400 md:h-[90px] md:text-[18px]">
            <span>Data Scientists</span>
            <span>Application Engineers</span>
            <span>Embedded Developers</span>
          </div>

          {/* Avatar stack image */}
          <img
            src="/img/roles-avatars.png"
            alt="Team roles"
            className="w-[33px] object-cover md:w-[50px]"
          />
        </div>

        {/* Body text */}
        <p className="font-space-grotesk text-light-gray max-w-[520px] pt-36 text-[14px] md:pt-46 md:text-[18px]">
          Keep the advantages of Yocto and embedded Linux without the overhead of a specialized team
          – freeing your engineers to build what matters in an environment they already know.
        </p>
      </div>
    </div>
  )
}

function ScaleSection() {
  return (
    <div className="relative">
      {/* Vertical line from badge down - separate SVG for positioning control */}
      <svg
        className="h-auto w-full"
        viewBox="0 0 900 300"
        preserveAspectRatio="xMidYMin meet"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y1="50"
            x1="450"
            y2="300"
            x2="450"
            id="scale-vertical-gradient"
          >
            <stop stopColor="#7B68FF"></stop>
            <stop stopColor="#7B68FF" offset="0.85"></stop>
            <stop stopOpacity="0" stopColor="#7B68FF" offset="1"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 425 40 L 425 350"
          stroke="url(#scale-vertical-gradient)"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* Horizontal lines - Purple/blue symmetric pattern */}
      <svg
        className="absolute top-0 w-full"
        viewBox="0 0 900 300"
        preserveAspectRatio="xMidYMin meet"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y1="30"
            x1="450"
            y2="30"
            x2="80"
            id="scale-left-badge-gradient"
          >
            <stop stopColor="#7B68FF" offset="0"></stop>
            <stop stopOpacity="0" stopColor="#7B68FF" offset="1"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y1="30"
            x1="450"
            y2="30"
            x2="820"
            id="scale-right-badge-gradient"
          >
            <stop stopColor="#7B68FF" offset="0"></stop>
            <stop stopOpacity="0" stopColor="#7B68FF" offset="1"></stop>
          </linearGradient>
        </defs>

        {/* Left horizontal line from center to Release Managers */}
        <path
          d="M 450 30 L 80 30"
          stroke="url(#scale-left-badge-gradient)"
          strokeWidth="4"
          fill="none"
        />

        {/* Right horizontal line from center to Product Managers */}
        <path
          d="M 450 30 L 820 30"
          stroke="url(#scale-right-badge-gradient)"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* Bottom curved SVG pattern */}
      <svg
        preserveAspectRatio="xMidYMid meet"
        className="absolute top-34 left-1/2 w-full -translate-x-[52%] md:w-[80%]"
        data-bbox="2 2 720 201"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 724 203"
        // height="203"
        // width="558"
        data-type="ugc"
        role="presentation"
        aria-hidden="true"
        aria-label=""
      >
        <g>
          <path
            stroke-width="4"
            stroke="url(#fdfdeb02-2a5f-438e-9c4a-dcbf57b78501_comp-m8t1nd6f)"
            d="M2 203V32C2 15.432 15.432 2 32 2h330"
            fill="none"
          ></path>
          <path
            stroke-width="4"
            stroke="url(#1944b45a-57ef-473a-86bb-788ccb5379c3_comp-m8t1nd6f)"
            d="M722 203V32c0-16.568-13.431-30-30-30H362"
            fill="none"
          ></path>
          <defs fill="none">
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="203"
              x2="2"
              y1="-141.5"
              x1="2"
              id="fdfdeb02-2a5f-438e-9c4a-dcbf57b78501_comp-m8t1nd6f"
            >
              <stop stop-color="#6E83FF"></stop>
              <stop stop-color="#6E83FF" offset=".435"></stop>
              <stop stop-opacity="0" stop-color="#6E83FF" offset="1"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="203"
              x2="722"
              y1="-141.5"
              x1="722"
              id="1944b45a-57ef-473a-86bb-788ccb5379c3_comp-m8t1nd6f"
            >
              <stop stop-color="#6E83FF"></stop>
              <stop stop-color="#6E83FF" offset=".435"></stop>
              <stop stop-opacity="0" stop-color="#6E83FF" offset="1"></stop>
            </linearGradient>
          </defs>
        </g>
      </svg>

      {/* SCALE Badge - centered */}
      <div className="absolute top-[4px] left-1/2 z-20 -translate-x-[45px] md:-translate-x-[62px] lg:-translate-x-[80px]">
        <div className="flex h-[30px] w-[90px] items-center justify-center rounded-full border-2 border-[#7B68FF] bg-black lg:h-[42px] lg:w-[112px]">
          <span className="font-space-grotesk text-[12px] tracking-wider text-white uppercase md:text-sm">
            SCALE
          </span>
        </div>
      </div>

      {/* Central glowing icon - positioned in center of bottom curved pattern */}
      <div className="absolute top-18 left-1/2 z-30 -translate-x-[72px] md:top-10 md:-translate-x-[112px] lg:-translate-x-[120px]">
        <img
          src="/img/scale-icon.png"
          alt="Scale"
          className="h-[130px] w-[130px] object-contain transition-transform duration-300 hover:[animation:pulse-scale_2s_ease-in-out_infinite] md:h-[190px] md:w-[190px]"
        />
      </div>

      {/* Release Managers - left side */}
      <div className="absolute -top-8 left-8 z-20 flex flex-col items-start gap-3">
        <span className="font-space-grotesk text-sm text-gray-400">Release Managers</span>
        <img
          src="/img/release-managers-avatars.png"
          alt="Release Managers"
          className="h-auto w-[68px] md:w-[86px]"
        />
      </div>

      {/* Product Managers - right side */}
      <div className="absolute -top-8 right-8 z-20 flex flex-col items-end gap-3">
        <span className="font-space-grotesk text-sm text-gray-400">Product Managers</span>
        <img
          src="/img/product-managers-avatars.png"
          alt="Product Managers"
          className="h-auto w-[68px] md:w-[86px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto mt-24 max-w-[800px] md:mt-0">
        {/* Heading */}
        <h2 className="font-montserrat text-peridio-purple-lighter mb-1 text-center text-[38px] leading-[1.1] font-bold md:text-[42px]">
          Scale with confidence
        </h2>

        {/* Subheading */}
        <p className="font-space-grotesk mb-4 text-center text-[14px] leading-relaxed text-gray-300 md:mb-10 md:text-[24px]">
          Maintain velocity even after your launch
        </p>

        {/* Bullet points */}
        <div className="mx-auto max-w-[625px] space-y-6">
          <div className="flex items-start gap-4">
            <svg
              className="mt-1 h-6 w-6 flex-shrink-0 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-space-grotesk text-light-gray text-[14px] leading-relaxed md:text-[16px]">
              Accelerate software releases with enterprise-grade device management and update
              capabilities.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <svg
              className="mt-1 h-6 w-6 flex-shrink-0 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-space-grotesk text-light-gray text-[14px] leading-relaxed md:text-[16px]">
              Deploy updates 3.4x faster without compromising security or control, leveraging
              cohort-based phased releases.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <svg
              className="mt-1 h-6 w-6 flex-shrink-0 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-space-grotesk text-light-gray text-[14px] leading-relaxed md:text-[16px]">
              Unify workflows with a central source of truth for engineering, product, and customer
              success teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
