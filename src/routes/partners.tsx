import { createFileRoute } from '@tanstack/react-router'
import { GithubLogo } from '@/components/svg/github-logo'
import { KeyfactorLogo } from '@/components/svg/keyfactor-logo'
import { NetFoundryLogo } from '@/components/svg/net-foundry-logo'
import { VarisciteLogo } from '@/components/svg/variscite-logo'
import { VeryLogo } from '@/components/svg/very-logo'
import TrustedPartnerSection from '@/components/trusted-partner-section'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/partners')({
  component: Page,
})

function Page() {
  return (
    <div className="bg-white">
      <HeroSection />
      <TrustedPartnerSection />
      <WhyPartnerSection />
      <SuccessStoriesSection />
      <CallToActionSection />
    </div>
  )
}

// Section Components

function HeroSection() {
  return (
    <section className="relative flex h-[620px] items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/partners-hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[385px] px-6 text-center sm:px-0 md:max-w-[725px]">
        <p className="font-space-grotesk text-peridio-purple-lighter mb-6 text-[15px] font-bold tracking-wider uppercase">
          PARTNERS
        </p>
        <h1 className="font-montserrat mb-6 text-[24px] leading-[1.2] font-bold tracking-[-2px] text-white md:text-[36px] lg:text-[42px]">
          Let's Build the Future of Firmware Management Together
        </h1>
        <p className="font-space-grotesk mx-auto mb-10 max-w-[700px] text-[16px] leading-[1.6] font-normal text-white">
          Transform how hardware companies scale device operations by joining Peridio's partner
          ecosystem, where industry leaders unite to deliver enterprise-grade firmware solutions.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            variant="outline-transparent-secondary"
            size="lg"
            className="border-white text-sm"
            asChild
          >
            <a href="#">View features</a>
          </Button>
          <Button variant="primary" size="lg" className="text-sm" asChild>
            <a href="/partner-program">Become a Partner</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

const partnerBenefits = [
  {
    title: 'Integration Framework',
    description:
      "Build seamless integrations with Peridio's enterprise platform through our simple, yet powerful Integration Framework. Our documented APIs and SDKs enable you to quickly create robust product connections that deliver value to joint customers.",
    icon: <IntegrationFrameworkIcon />,
  },
  {
    title: 'Partnership Support',
    description:
      "Get a dedicated partner success manager who'll help you navigate opportunities, accelerate integration timelines, and maximize the value of our partnership from day one.",
    icon: <PartnershipSupportIcon />,
  },
  {
    title: 'Technical Feedback',
    description:
      'Work directly with our engineering team to shape product direction, receive implementation guidance, and ensure your integration meets enterprise requirements.',
    icon: <TechnicalFeedbackIcon />,
  },
  {
    title: 'Enterprise Customer Access',
    description:
      "Expand your market reach through access to Peridio's growing base of enterprise customers, creating new opportunities for solution adoption and growth.",
    icon: <EnterpriseCustomerAccessIcon />,
  },
  {
    title: 'Marketing Collaboration',
    description:
      'Work directly with our engineering team to shape product direction, receive implementation guidance, and ensure your integration meets enterprise requirements.',
    icon: <MarketingCollaborationIcon />,
  },
  {
    title: 'Early Product Access',
    description:
      "Expand your market reach through access to Peridio's growing base of enterprise customers, creating new opportunities for solution adoption and growth.",
    icon: <EarlyProductAccessIcon />,
  },
]

function WhyPartnerSection() {
  return (
    <section className="bg-[linear-gradient(rgba(255,255,255,0.85),rgba(255,255,255,0.85)),url(/img/partners/background.jpg)] bg-cover bg-center pt-24 pb-24">
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
        <div className="mb-16 text-center lg:text-left">
          <p className="font-space-grotesk text-peridio-purple mb-4 text-[14px] tracking-wider uppercase">
            JOIN OUR PARTNER ECOSYSTEM
          </p>
          <h2 className="font-montserrat mb-4 text-[28px] leading-[1.2] font-normal tracking-[-2px] text-black">
            Why Partner with Peridio?
          </h2>
          <p className="font-space-grotesk text-[14px] leading-[1.5] text-gray-700 lg:text-[18px]">
            Join the industry leaders transforming how modern hardware companies scale. Together,
            we'll solve the most complex firmware challenges while unlocking new revenue
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {partnerBenefits.map((benefit) => (
            <PartnerBenefitCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface PartnerBenefitCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

function PartnerBenefitCard({ title, description, icon }: PartnerBenefitCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <div
        className="flex h-[50px] items-center justify-between pr-10 pl-6 md:h-[120px]"
        style={{
          background: 'linear-gradient(270deg, #5F51FF 0%, #000000 60.97519188596491%)',
        }}
      >
        <h3 className="font-montserrat text-[16px] leading-[1.3] font-bold text-white md:max-w-[60%] md:text-[22px]">
          {title}
        </h3>
        <div className="hidden md:block">{icon}</div>
      </div>

      <div className="p-8">
        <p className="font-space-grotesk text-medium-gray text-[14px] leading-[1.6]">
          {description}
        </p>
      </div>
    </div>
  )
}

function SuccessStoriesSection() {
  return (
    <section
      className="relative pt-16 pb-48"
      style={{
        background:
          'linear-gradient(360deg, #FFFFFF 0%, #5F51FF 25.64418859649123%, #000000 60.97519188596491%)',
      }}
    >
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[725px] lg:max-w-[950px]">
        <div className="mb-12 flex flex-col items-center justify-between text-center lg:flex-row lg:items-start lg:text-left">
          <div>
            <p className="font-space-grotesk text-peridio-purple-lighter mb-4 text-[15px] font-bold tracking-wider uppercase">
              SUCCESS STORIES
            </p>
            <h1 className="font-montserrat mb-4 text-[23px] leading-[1.2] font-bold tracking-[-2px] text-white md:text-[42px]">
              Better together with Peridio
            </h1>
            <p className="font-space-grotesk text-light-gray max-w-[650px] text-[14px] leading-[1.5] md:text-[18px]">
              See how partnerships are accelerating innovation, transforming firmware operations,
              and shaping the future of device management at scale.
            </p>
          </div>
          <div className="flex w-full justify-center lg:justify-start">
            <Button variant="primary" className="mt-8 w-full md:w-[175px]">
              Become a Partner
            </Button>
          </div>
        </div>

        {/* Featured Success Story */}
        <div className="mb-12 overflow-hidden rounded-lg bg-white shadow-lg md:h-[300px]">
          <div className="flex flex-col px-8 py-10 text-center lg:flex-row lg:text-left">
            {/* Left side - Content */}
            <div className="order-2 md:order-1 md:w-[550px]">
              <blockquote className="font-montserrat mb-4 text-[14px] leading-[1.4] font-bold text-gray-800 md:text-[20px] md:font-normal">
                “Peridio's platform, workflows, and expertise vastly reduce time-to-market for
                launching ambitious AIoT applications on i.MX product lines.”
              </blockquote>

              <div className="mb-3 flex justify-center lg:justify-start">
                <VarisciteLogo
                  className="text-medium-gray h-[18px] md:h-[16px]"
                  // height={16}
                  // width={64}
                />
              </div>

              <div className="md:max-w-auto mx-auto mb-4 flex max-w-[70%] items-center">
                <div>
                  <p className="font-space-grotesk text-medium-gray text-[14px] font-normal">
                    <span className="font-bold">Tal Semo</span>, Managing Director of Sales and
                    Marketing for the Americas
                  </p>
                </div>
              </div>

              <Button
                asChild
                variant="outline-transparent-primary"
                size="sm"
                className="w-full md:w-auto"
              >
                <a
                  href="https://blog.peridio.com/announcing-our-partnership-with-variscite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the release
                </a>
              </Button>
            </div>

            {/* Right side - Image */}
            <div className="md:max-w-auto order-1 mx-auto mb-10 flex max-w-[70%] flex-1 items-center justify-center md:order-2 md:mb-0 md:translate-x-1/6 md:rotate-[-10deg]">
              <img
                src="/img/partners/variscite-circuit-board.png"
                alt="Variscite Circuit Board"
                className="h-auto max-h-[300px] max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Partner Stories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <PartnerStoryCard
            partnerType="INTEGRATION PARTNER"
            logo={<VeryLogo height={32} className="text-medium-gray" />}
            title="How Very + Peridio accelerates IoT innovation"
            description="Through Peridio's enterprise platform, Very's engineering teams transform firmware deployment for their clients—reducing time-to-market while maintaining ironclad security across device fleets."
            buttonText="Learn More"
            href="https://www.verytechnology.com/"
          />

          <PartnerStoryCard
            partnerType="SECURITY PARTNER"
            logo={<NetFoundryLogo height={58} className="text-medium-gray" />}
            title="Peridio + NetFoundry: Zero-trust networking for embedded devices"
            description="Through this partnership, Peridio and NetFoundry deliver zero-trust, Secure-by-Design networking for embedded systems—enabling secure, scalable, and policy-driven connectivity across distributed device fleets."
            buttonText="Learn More"
            href="https://netfoundry.io/"
          />

          <PartnerStoryCard
            partnerType="DEVELOPMENT PARTNER"
            logo={<GithubLogo height={28} className="text-medium-gray" />}
            title="GitHub + Peridio: Seamless from code to deployment"
            description="The GitHub integration creates an automated pipeline from development to secure firmware deployment, reducing update cycles from weeks to minutes."
            buttonText="Learn More"
            href="https://github.com/"
          />

          <PartnerStoryCard
            partnerType="SECURITY PARTNER"
            logo={<KeyfactorLogo height={26} className="text-medium-gray" />}
            title="Why Keyfactor chose Peridio for firmware security"
            description="Together, Keyfactor and Peridio enable enterprises to maintain ironclad security while accelerating firmware updates across their entire device ecosystem."
            buttonText="Learn More"
            href="https://www.keyfactor.com/"
          />
        </div>
      </div>
    </section>
  )
}

function CallToActionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-[130px]">
      <style>{`
        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>

      <img
        src="/img/partners/dots-pattern.png"
        alt="Decorative pattern"
        className="pointer-events-none absolute top-1/2 left-1/2"
        style={{
          animation: 'rotate 60s linear infinite',
          width: '506px',
          height: '531px',
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-4 text-center">
        <p className="font-space-grotesk mb-4 text-[16px] font-medium text-[#6366F1]">
          Join the Peridio Partner Ecosystem
        </p>

        <h2 className="font-montserrat mb-8 text-[32px] leading-[1.2] font-bold tracking-[-2.5px] text-black md:text-[42px] lg:text-[48px]">
          Shape the future of enterprise
          <br />
          firmware management
        </h2>

        <Button variant="primary" size="xl" className="w-[300px] text-sm lg:w-[175px]">
          Become a Partner
        </Button>
      </div>
    </section>
  )
}

// Partner Story Card Component

interface PartnerStoryCardProps {
  partnerType: string
  logo: React.ReactNode
  title: string
  description: string
  buttonText: string
  href: string
}

function PartnerStoryCard({
  partnerType,
  logo,
  title,
  description,
  buttonText,
  href,
}: PartnerStoryCardProps) {
  return (
    <div className="flex min-h-[400px] flex-col rounded-lg border border-gray-100 bg-white p-6 shadow-sm lg:w-[440px]">
      {/* Logo container - 100px height with 32px tall logos centered */}
      <div className="mb-4 flex h-[100px] items-center justify-center">
        <div className="h-8 w-auto">{logo}</div>
      </div>

      <p className="font-space-grotesk text-peridio-purple mb-4 text-[12px] tracking-wider uppercase">
        {partnerType}
      </p>

      <h3 className="font-space-grotesk mb-4 text-[20px] leading-[1.3] text-black">{title}</h3>

      <p className="font-space-grotesk mb-6 flex-grow text-[14px] leading-[1.6] text-gray-600">
        {description}
      </p>

      <Button variant="outline-transparent-primary" className="w-full" asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </Button>
    </div>
  )
}

// Icon Components

function IntegrationFrameworkIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 71.044 71.04"
      height={72}
      width={72}
      role="presentation"
      aria-hidden={true}
      aria-label=""
      color="#fff"
    >
      <g>
        <path
          fill="currentColor"
          /* Instead of fill="#3F4245", style is set by [data-color="1"] selector above */
          d="M62.442 0c.944.724.981 1.305.139 2.16-1.076 1.081-2.142 2.174-3.247 3.226a2.5 2.5 0 0 1-1.058.578c-2.526.63-5.062 1.207-7.588 1.834-.37.101-.71.292-.988.556-.957.905-1.819 1.918-2.82 2.766-1.003.848-1.321 1.946-1.633 3.26l4.162-4.17c.164-.165.324-.331.494-.488.442-.41.945-.505 1.45-.166.47.316.608.773.429 1.336a2100 2100 0 0 0-3.83 12.183c1.018.315 1.752.14 2.3-.782 1.1-1.838 2.191-3.692 3.109-5.623.507-1.067 1.127-1.505 2.293-1.569 1.946-.107 3.694-.767 4.925-2.421.417-.556 1.093-.643 1.59-.278.498.364.6 1.04.205 1.605-1.264 1.807-3.08 2.816-5.192 3.129-1.27.188-1.922.695-2.446 1.858-.72 1.59-1.659 3.089-2.615 4.555-1.51 2.312-3.977 2.287-6.091 1.378-.606-.26-.771-.798-.545-1.53.816-2.616 1.643-5.23 2.463-7.844.08-.256.154-.515.232-.775l-12.649 12.65c.088.098.214.254.356.396q2.547 2.552 5.096 5.102c1.016 1.02.788 1.885-.585 2.245-1.563.41-2.363 1.53-2.237 3.108.106 1.282 1.262 2.406 2.565 2.502 1.487.102 2.663-.778 3.019-2.277.124-.522.32-.973.884-1.135s.96.162 1.33.534c1.63 1.638 3.264 3.272 4.942 4.952.184-.17.355-.314.512-.472l5.005-5.004c1.01-1.008 1.882-.772 2.242.601.38 1.446 1.576 2.363 2.919 2.231a2.804 2.804 0 0 0 2.571-2.56c.11-1.518-.759-2.61-2.275-3.02a1.84 1.84 0 0 1-1.028-.785c-.254-.45 0-.915.387-1.29 1.668-1.637 3.31-3.288 4.994-4.964-.208-.221-.372-.406-.546-.58q-3.603-3.606-7.207-7.209c-.612-.613-.681-1.273-.206-1.765s1.177-.44 1.817.19q.222.22.44.444c.331.347.66.695.973 1.034 2.144-1.614 3.168-3.725 3.307-6.28a2.3 2.3 0 0 1 .734-1.646c1.136-1.085 2.224-2.215 3.344-3.325.855-.849 1.427-.811 2.16.14v.833c-1.18 1.2-2.362 2.391-3.531 3.606-.209.218-.418.527-.45.812-.265 2.835-1.366 5.244-3.534 7.13-.103.09-.188.202-.327.352.178.19.343.373.517.546q2.327 2.332 4.655 4.66c.775.778.78 1.288.014 2.061-1.3 1.314-2.613 2.616-3.918 3.924-.162.161-.312.332-.469.5 3.218 2.277 2.88 5.99.947 7.944-1.822 1.845-5.527 2.412-8.043-1.013-.278.325-.53.65-.814.938a689 689 0 0 1-4.17 4.17c-.741.734-1.27.733-2.014-.007-1.488-1.48-2.965-2.971-4.497-4.507-1.112 1.613-2.57 2.502-4.502 2.493a4.9 4.9 0 0 1-3.636-1.576c-2.224-2.328-1.834-5.295 1.067-7.981a2830 2830 0 0 1-4.993-4.99c-.194-.194-.417-.395-.52-.639-.25-.582-.018-1.052.417-1.484q4.032-4.005 8.035-8.044c.315-.326.552-.72.695-1.15.602-1.838 1.131-3.7 1.736-5.537.154-.452.404-.865.734-1.211a122 122 0 0 1 3.974-3.967 3.2 3.2 0 0 1 1.347-.748c2.477-.632 4.972-1.192 7.453-1.807a2.2 2.2 0 0 0 .934-.516c1.17-1.112 2.31-2.254 3.46-3.386z"
        />
        <path
          fill="currentColor"
          d="M23.131 47.955c-3.647 1.296-7.25 2.576-10.853 3.853-.348.124-.695.232-1.045.364-.583.224-1.06.067-1.39-.435s-.223-1.023.197-1.448a352 352 0 0 1 2.694-2.7q1.129-1.128 2.253-2.26a.54.54 0 0 0 .14-.322c-1.381.488-2.92.523-3.97 1.817-.812.999-1.833 1.827-2.714 2.78a2.8 2.8 0 0 0-.653 1.162c-.631 2.502-1.201 5.019-1.824 7.524a2.3 2.3 0 0 1-.549 1c-1.086 1.135-2.209 2.237-3.325 3.343-.607.604-1.279.665-1.764.182-.485-.482-.435-1.156.167-1.763.942-.954 1.913-1.883 2.833-2.857.278-.295.48-.654.586-1.045.618-2.458 1.17-4.932 1.807-7.385a3.4 3.4 0 0 1 .786-1.403c1.137-1.215 2.363-2.343 3.507-3.554.624-.663 1.316-1.131 2.207-1.325.378-.082.74-.23 1.112-.35-1.024-3.18-.288-5.574 2.092-6.876 1.782-.973 4.669-1.091 6.894 1.917.591-.645 1.147-1.285 1.736-1.89.854-.88 1.727-1.741 2.597-2.603.752-.743 1.287-.759 2.02-.03 1.903 1.89 3.79 3.796 5.699 5.685.375.372.665.834.41 1.287a1.92 1.92 0 0 1-1.082.813c-1.52.382-2.435 1.515-2.333 3.058.087 1.32 1.24 2.45 2.593 2.54 1.453.098 2.694-.875 2.964-2.352.093-.516.278-.939.813-1.096s.934.047 1.306.417c2.119 2.133 4.252 4.25 6.37 6.383.676.681.672 1.226-.01 1.913q-2.76 2.779-5.542 5.543c-.965.96-1.856.695-2.2-.64-.363-1.411-1.514-2.326-2.843-2.258-1.4.07-2.492 1.1-2.688 2.53-.184 1.338.748 2.692 2.11 3.005.567.13 1.1.278 1.269.906.168.629-.216 1.036-.624 1.442-1.946 1.939-3.892 3.892-5.838 5.838-.953.95-1.375.955-2.308.02-1.796-1.801-3.589-3.604-5.546-5.568-.293.363-.543.719-.834 1.033-1.648 1.751-3.753 2.545-6.081 2.834a2.1 2.1 0 0 0-1.39.653c-.94.989-1.917 1.946-2.887 2.9-.612.605-1.276.664-1.765.18-.49-.483-.434-1.157.165-1.76 1.124-1.133 2.278-2.237 3.374-3.395a2.36 2.36 0 0 1 1.769-.773c2.444-.086 4.529-1.188 6.166-3.282-.513-.462-1.06-.922-1.568-1.423-.603-.59-.645-1.197-.165-1.704s1.137-.493 1.758.125l7.506 7.506q.258.284.48.596l4.511-4.509c-1.494-1.021-2.383-2.502-2.363-4.42.02-1.425.593-2.64 1.642-3.62 1.866-1.741 5.435-2.172 7.734.992l3.74-3.742-4.461-4.448c-1.097 1.583-2.623 2.502-4.678 2.396a4.9 4.9 0 0 1-3.416-1.612c-1.732-1.837-2.177-5.5 1.04-7.777l-3.886-3.906c-.091.087-.278.25-.444.417a3151 3151 0 0 0-4.365 4.364c-.371.373-.753.695-1.333.527s-.76-.614-.878-1.138c-.323-1.428-1.548-2.373-2.899-2.255a2.865 2.865 0 0 0-2.64 2.672c-.112 1.34.872 2.528 2.273 2.906a1.97 1.97 0 0 1 1.08.82c.278.462-.051.915-.417 1.28-.855.844-1.698 1.702-2.543 2.555-.027.027-.024.08-.057.206l4.199-1.472c1.283-.452 2.562-.913 3.847-1.354.834-.286 1.35-.061 1.652.75.888 2.4.622 4.635-1.799 6.092a94 94 0 0 1-5.143 2.85c-.523.277-.71.582-.784 1.146-.278 2.134-1.03 4.067-2.684 5.546q-.357.33-.774.58a1.093 1.093 0 0 1-1.47-.34c-.322-.517-.305-1.09.174-1.44 1.892-1.39 2.488-3.37 2.601-5.56.04-.807.434-1.209 1.122-1.563a127 127 0 0 0 5.94-3.254c.96-.57 1.13-1.205.89-2.341"
        />
      </g>
    </svg>
  )
}

function PartnershipSupportIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0.433 0.942 71.059 71.039"
      height={72}
      width={72}
      role="presentation"
      aria-hidden={true}
      aria-label=""
      color="#fff"
    >
      <g>
        <path
          fill="currentColor"
          d="M53.023 71.975c-2.051-2.03-4.114-4.048-6.15-6.095-.488-.49-.406-1.095.14-1.66.399-.417.813-.821 1.224-1.227s.823-.805 1.265-1.236c-.148-.18-.253-.324-.376-.449-1.404-1.408-2.802-2.82-4.227-4.207a1.4 1.4 0 0 0-.819-.39 633 633 0 0 0-7.969-.279c-1.326-.039-2.502-.461-3.441-1.398a1615 1615 0 0 1-8.632-8.63c-1.174-1.19-.751-2.937.807-3.534.556-.214 1.13-.4 1.7-.583.544-.173 1.094-.326 1.692-.504-.177-.19-.34-.374-.516-.556-2.419-2.419-4.855-4.82-7.253-7.261-1.985-2.02-1.26-5.3 1.379-6.107.76-.232 1.104-.51 1.332-1.306.64-2.238 3.233-3.197 5.272-2.066.161.089.317.186.477.278 1.426-2.687 4.528-2.93 6.277-1.01.695-.612 1.305-1.367 2.092-1.795 1.437-.78 3.105-.353 4.415.95q4.399 4.38 8.78 8.777c1.373 1.372 2.705 2.791 4.137 4.1.834.757 1.187 1.626 1.322 2.702.212 1.691.52 3.372.806 5.054.034.221.13.429.278.597 1.637 1.661 3.291 3.309 5.057 5.075.503-.532.973-1.055 1.476-1.557.795-.802 1.331-.804 2.113-.026a2405 2405 0 0 1 5.343 5.346c.712.718.593 1.658-.23 1.98-.55.216-.974 0-1.369-.394-1.4-1.41-2.812-2.81-4.21-4.223a4.6 4.6 0 0 1-.432-.587L49.353 65.2c1.509 1.499 3.068 3.043 4.621 4.594.844.843.81 1.407-.107 2.17zm7.35-21.25c-.156-.163-.326-.35-.504-.526-1.585-1.587-3.182-3.162-4.747-4.769a2.06 2.06 0 0 1-.534-1.006c-.278-1.567-.547-3.137-.727-4.718-.139-1.197-.603-2.109-1.485-2.972-4.087-3.99-8.099-8.062-12.14-12.093a3.3 3.3 0 0 0-.633-.532c-.54-.316-1.112-.343-1.63.032a1.32 1.32 0 0 0-.515 1.529c.121.367.323.703.59.983.993 1.035 2.027 2.03 3.031 3.058.535.545.566 1.19.118 1.668-.478.502-1.122.472-1.715-.078-.102-.095-.196-.196-.295-.295-1.864-1.864-3.72-3.735-5.6-5.584a2.2 2.2 0 0 0-.983-.586c-.646-.139-1.174.147-1.498.74-.324.592-.212 1.214.333 1.763 1.924 1.935 3.859 3.859 5.784 5.793q.306.284.521.64c.278.497.167 1.028-.278 1.285-.342.197-.849.176-1.27.139-.204-.021-.39-.302-.569-.481a6655 6655 0 0 1-7.68-7.723c-.804-.81-1.667-.913-2.301-.293-.663.643-.556 1.505.278 2.351q1.053 1.057 2.108 2.11c1.898 1.896 3.812 3.776 5.674 5.706.295.305.547.868.483 1.251-.159.973-1.242 1.135-2.037.342q-3.855-3.848-7.703-7.7a6 6 0 0 0-.613-.556 1.32 1.32 0 0 0-1.497-.114c-.543.288-.844.79-.695 1.377.118.438.347.837.666 1.16q6.722 6.767 13.483 13.5c.823.822.95 1.468.396 2.01-.553.543-1.166.406-2.011-.437-.687-.686-1.39-1.356-2.056-2.064-1.917-2.044-3.78-1.863-6.332-.57.196.168.381.308.544.47 2.455 2.45 4.937 4.874 7.345 7.367.89.924 1.877 1.323 3.13 1.331 2.266.015 4.531.154 6.797.14 1.286-.01 2.287.33 3.153 1.34.973 1.139 2.111 2.137 3.166 3.207.386.392.74.817 1.08 1.194z"
        ></path>
        <path
          fill="currentColor"
          d="M19.305 71.975c-.891-.916-.882-1.343.07-2.29 1.506-1.498 3.015-2.992 4.482-4.447C18.714 60.103 13.625 55.013 8.48 49.87l-3.935 3.947c-.295.295-.579.6-.889.876-.53.474-1.167.474-1.612.024s-.452-1.057.036-1.611c.245-.278.517-.53.779-.791q2.328-2.33 4.66-4.657c.794-.79 1.326-.79 2.114 0 .789.79 1.564 1.563 2.376 2.374 1.628-1.626 3.22-3.196 4.783-4.806.178-.184.245-.538.254-.818.08-2.447.103-4.9.22-7.344.056-.847.22-1.684.486-2.49a1.077 1.077 0 0 1 1.5-.702c.556.231.695.834.594 1.522a36 36 0 0 0-.392 3.833c-.097 2.007-.08 4.02-.195 6.027a2.26 2.26 0 0 1-.623 1.31c-1.631 1.699-3.316 3.348-4.948 4.98l9.365 9.337c.44-.457.94-.99 1.455-1.51 1.14-1.147 2.304-2.272 3.422-3.44.505-.528 1.038-.883 1.79-.91.417-.015.816-.153 1.228-.203a1.14 1.14 0 0 1 1.25.866 1.11 1.11 0 0 1-.747 1.314.8.8 0 0 1-.266.075c-1.184-.043-1.92.68-2.668 1.463-1.278 1.336-2.614 2.617-4 3.994.538.538 1.053 1.05 1.564 1.568.776.784.784 1.283.011 2.06a1637 1637 0 0 1-5.813 5.823z"
        ></path>
        <path
          fill="currentColor"
          d="M.433 18.559c.821-.925 1.342-.94 2.224-.052l4.567 4.61L22.573 7.776c-.127-.139-.269-.306-.418-.461q-2.13-2.136-4.265-4.27c-.616-.618-.695-1.26-.216-1.762.48-.501 1.178-.456 1.807.177q2.679 2.67 5.347 5.346c.695.695.695 1.265 0 1.967-.792.802-1.6 1.587-2.43 2.409 1.669 1.677 3.277 3.3 4.9 4.905.11.111.333.139.508.15 1.152.083 2.306.139 3.458.228.748.056 1.23.54 1.193 1.165-.038.624-.556 1.085-1.298 1.058-1.339-.05-2.682-.092-4.013-.23a2.3 2.3 0 0 1-1.251-.592c-1.554-1.49-3.057-3.019-4.573-4.548-.162-.16-.333-.31-.456-.427l-9.313 9.331c1.415 1.411 2.8 2.94 4.346 4.284 1.147.998 1.596 2.188 1.72 3.614.051.595.186 1.183.278 1.777.102.695-.242 1.25-.851 1.377-.673.148-1.202-.19-1.351-.937-.199-.993-.34-2-.521-2.998a1.07 1.07 0 0 0-.235-.545c-1.653-1.679-3.32-3.343-5.143-5.172-.522.59-.984 1.16-1.496 1.685-.719.735-1.284.721-2.013 0A1796 1796 0 0 1 .99 20.009c-.193-.194-.364-.41-.545-.615z"
        ></path>
        <path
          fill="currentColor"
          d="m48.046 7.714 15.347 15.358 4.473-4.473c.834-.834 1.46-.948 2.003-.38.543.566.426 1.135-.395 1.958l-5.051 5.052c-.825.823-1.347.823-2.166.009-.77-.765-1.529-1.53-2.355-2.354-.973.973-1.833 2.02-2.874 2.836-1.747 1.37-2.574 3.027-2.233 5.253.069.446-.012.924-.075 1.38-.084.612-.48.933-1.09.954-.582.02-1.121-.402-1.111-1.01q.01-2.527.172-5.055c.02-.313.34-.646.59-.9 1.66-1.667 3.337-3.324 4.971-4.943l-9.332-9.333c-.114.106-.278.253-.443.417-1.39 1.39-2.828 2.734-4.152 4.183-.775.846-1.656 1.219-2.76 1.352-1.667.203-3.327.511-4.985.803-.26.055-.498.187-.683.378-.671.695-1.3 1.442-1.961 2.154-.574.615-1.18.68-1.697.208-.517-.471-.491-1.12.039-1.72.78-.885 1.54-1.79 2.374-2.62a2.36 2.36 0 0 1 1.198-.58c1.974-.355 3.959-.648 5.936-.972.201-.025.39-.107.545-.238 1.678-1.652 3.336-3.32 5.16-5.129-.598-.536-1.179-1.023-1.72-1.551-.694-.683-.703-1.218-.023-1.902q2.687-2.707 5.395-5.396c.618-.617 1.262-.67 1.758-.176.496.493.453 1.138-.17 1.764-1.563 1.568-3.137 3.129-4.685 4.673"
        ></path>
      </g>
    </svg>
  )
}

function TechnicalFeedbackIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 34"
      height={72}
      width={72}
      role="presentation"
      aria-hidden={true}
      aria-label=""
      color="#fff"
    >
      <g>
        <path
          fill="currentColor"
          d="M38 30.25c-.21.47-.585.674-1.096.601-1.02-.145-1.878.155-2.648.812-.407.347-.884.617-1.33.921-1.403.957-2.969 1.404-4.672 1.407-2.451.005-4.902-.005-7.353.009-.326 0-.427-.081-.416-.404.031-.9-.085-1.814.418-2.688h-5.076v3.025H.002V18.548H15.79c.006.13.019.248.019.363v4.888q.002.127-.007.253c-.036.436-.382.758-.798.745a.8.8 0 0 1-.546-.238.76.76 0 0 1-.218-.543c-.01-.954 0-1.907 0-2.86v-1.084c-.144-.007-.264-.017-.384-.017H2.045c-.496 0-.497 0-.497.495v11.478c0 .12.01.238.017.378h12.67c0-.577.009-1.151-.008-1.726 0-.08-.112-.172-.193-.232-.866-.654-1.207-1.632-.898-2.6.305-.958 1.201-1.597 2.307-1.624.792-.018 1.585-.005 2.377-.006h.404c-.174-1.109-.113-1.4.467-2.298-1.054-1.33-.621-3.16 1.08-3.788 0-.473-.074-.938.014-1.373.215-1.065 1.134-1.796 2.294-1.8 2.19-.01 4.383-.033 6.57.068 2.034.094 3.998.602 5.904 1.306.288.099.59.154.894.165q.723.045 1.446 0c.521-.035.887.133 1.105.597v.363c-.227.454-.595.614-1.116.58-.629-.035-1.265.005-1.892-.014a2.2 2.2 0 0 1-.716-.136c-2.118-.829-4.316-1.33-6.597-1.379-1.843-.04-3.688-.011-5.531-.008-.502 0-.856.319-.865.754-.009.448.358.782.875.786.516.005 1.014 0 1.521 0 .35 0 .584.174.72.476.244.541-.156 1.082-.827 1.088-.989.007-1.979-.02-2.968-.019-.572 0-.905.312-.893.794.01.468.338.733.902.735.99 0 1.98-.009 2.97.01.56.012.91.355.886.814-.023.459-.372.732-.918.733-1.003 0-2.005-.006-3.008.004-.506.004-.836.328-.832.78.005.454.322.745.85.747 1.002 0 2.004-.004 3.007 0 .54 0 .912.342.9.804-.01.449-.372.767-.893.768h-3.452c-1.547 0-3.094-.005-4.641 0-.521 0-.884.331-.881.778s.372.763.893.772h11.26v1.556h-.432c-.915 0-1.831-.015-2.747.008-.867.02-1.578.798-1.427 1.551h.25q3.045.001 6.088-.004c1.3-.005 2.477-.401 3.543-1.118.469-.315.93-.64 1.397-.957.507-.344.975-.819 1.538-.989.577-.174 1.25-.025 1.88-.062.52-.03.913.114 1.155.58z"
        ></path>
        <path
          fill="currentColor"
          d="M15.79 15.4H0V0h15.79zM14.226 1.53c-.117-.009-.19-.018-.262-.018q-6.036 0-12.07-.007c-.288 0-.35.1-.349.359q.01 5.849.006 11.696c0 .103.018.206.027.298h12.644z"
        ></path>
        <path
          fill="currentColor"
          d="M26.076 7.704h-6.94c-.713 0-1.142-.557-.859-1.11.185-.358.514-.447.9-.446q3.657.008 7.312 0h6.607c.711 0 1.139.557.858 1.11-.183.362-.515.446-.9.446q-3.49-.004-6.978 0"
        ></path>
        <path
          fill="currentColor"
          d="M26.157 2.297h6.976c.677 0 1.083.519.835 1.067-.149.336-.438.467-.807.466h-14.1c-.525-.015-.886-.341-.869-.787s.373-.741.878-.742q3.545-.006 7.087-.004"
        ></path>
        <path
          fill="currentColor"
          d="M24.11 11.557c-1.683 0-3.366.003-5.05 0-.646 0-1.042-.534-.796-1.067.153-.336.438-.465.808-.464 1.064.004 2.129 0 3.194 0h6.868c.578 0 .904.258.929.716.026.49-.312.812-.866.813q-2.303.005-4.604 0z"
        ></path>
        <path
          fill="currentColor"
          d="m6.455 9.972 4.168-4.376c.455-.477.906-.958 1.364-1.431.382-.394.823-.435 1.178-.126s.352.78-.03 1.181q-3.015 3.17-6.037 6.336c-.409.427-.878.427-1.288.004q-1.198-1.234-2.38-2.483c-.364-.381-.372-.852-.042-1.161s.828-.272 1.209.122c.612.632 1.218 1.267 1.86 1.934"
        ></path>
      </g>
    </svg>
  )
}

function EnterpriseCustomerAccessIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.003 0 45.901 46.002"
      height={72}
      width={72}
      role="presentation"
      aria-hidden={true}
      aria-label=""
      color="#fff"
    >
      <g>
        <path
          fill="currentColor"
          d="m11.074 34.118 3.744-3.574c-3.739-4.785-3.858-9.64-.369-14.651l-3.632-3.802c-1.768 1.253-3.692 1.662-5.774 1.132-1.607-.41-2.887-1.33-3.833-2.691-1.902-2.738-1.477-6.468.987-8.758C4.639-.495 8.36-.594 11.004 1.516c2.394 1.91 3.639 6.028.923 9.564 1.191 1.245 2.386 2.492 3.61 3.777 2.146-1.88 4.608-2.897 7.463-2.898 2.855 0 5.324 1.003 7.485 2.901l3.632-3.8c-1.373-1.777-1.862-3.755-1.317-5.932.4-1.592 1.3-2.862 2.65-3.806a6.657 6.657 0 0 1 9.099 9.49c-1.823 2.422-5.777 3.805-9.36 1.297l-3.643 3.81c3.74 4.573 3.081 10.857-.37 14.594l3.779 3.616c1.834-1.407 3.86-1.894 6.1-1.268 1.568.44 2.802 1.366 3.691 2.724a6.611 6.611 0 0 1-9.714 8.742c-2.354-1.922-3.465-5.713-1.113-9.113l-3.83-3.67c-2.072 1.64-4.399 2.531-7.043 2.537s-4.985-.862-7.098-2.54l-3.841 3.666c2.474 3.537 1.197 7.598-1.413 9.494a6.722 6.722 0 0 1-9.128-9.737c2.072-2.509 6.159-3.454 9.508-.846M17.852 31V18.094c0-.739.224-.973.945-.973h8.384c.772 0 .99.212.99.974v12.907c2.979-1.716 5.112-5.8 4.205-9.961-.979-4.492-4.872-7.623-9.425-7.607-4.49.015-8.405 3.23-9.322 7.687-.86 4.217 1.326 8.222 4.223 9.88m2.948 1.297v-2.515c0-.608.256-.864.866-.866h2.67c.64 0 .882.248.885.893v2.526c.4-.125.743-.254 1.098-.339.313-.074.386-.24.386-.553-.012-4.13-.008-8.26-.009-12.39 0-.147-.014-.294-.02-.424h-7.351v11.967c0 1.409.002 1.409 1.475 1.701M42.903 10.34c1.461-1.35 1.865-3.756 1.015-5.66-.871-1.96-3.023-3.24-5.087-3.03-2.328.24-4.086 1.787-4.634 4.035-.448 1.838.441 4.002 1.352 4.578-.13-1.362.38-2.407 1.516-3.114-.689-1.338-.508-2.569.476-3.424.878-.766 2.23-.877 3.138-.148.432.36.772.816.992 1.334.322.753.13 1.528-.293 2.245 1.177.722 1.642 1.775 1.525 3.184M4.631 39.597c-.86-1.54-.256-2.846.533-3.485a2.614 2.614 0 0 1 3.163-.074c1.085.804 1.311 2.022.7 3.442.41.508.885.931 1.141 1.459s.287 1.157.41 1.715c1.625-1.506 2.047-4.813-.116-7.036-2.09-2.145-5.562-2.03-7.563.255-1.962 2.244-1.392 5.47.214 6.852-.11-1.35.348-2.403 1.518-3.128m38.274 3.17c1.428-1.279 1.857-3.698 1.052-5.559-.865-1.997-2.948-3.29-5.029-3.119-2.363.194-4.169 1.754-4.728 4.034-.467 1.901.507 4.082 1.352 4.575-.127-1.358.378-2.405 1.517-3.11-.692-1.334-.511-2.564.475-3.424a2.585 2.585 0 0 1 3.154-.169c.487.33.844.82 1.01 1.385.231.777.092 1.508-.324 2.215 1.166.718 1.634 1.766 1.52 3.172M10.467 10.333c1.846-1.786 2.096-5.147-.118-7.255a5.13 5.13 0 0 0-7.607.541c-1.823 2.308-1.124 5.437.374 6.655-.123-1.368.37-2.42 1.516-3.124-.694-1.367-.502-2.598.507-3.453a2.6 2.6 0 0 1 3.16-.121c.48.341.827.837.984 1.404.214.766.07 1.477-.335 2.169 1.165.724 1.638 1.769 1.52 3.185M6.79 8.274h-.554c-1.042.01-1.647.617-1.654 1.662q-.026.598.013 1.195c.016.154.15.37.283.426a4.8 4.8 0 0 0 3.058.256c1.072-.265 1.026-.266 1.08-1.33.085-1.637-.552-2.339-2.226-2.209m32.446 0h-.554c-1.054.01-1.654.606-1.661 1.653 0 .383.02.768-.008 1.15-.021.301.106.43.374.527.99.358 1.99.461 3.02.198s.992-.263 1.047-1.31c.089-1.704-.613-2.345-2.218-2.218M6.799 40.713h-.554c-1.053.01-1.653.605-1.661 1.654 0 .383.02.768-.008 1.15-.022.302.106.43.37.526.99.358 1.99.462 3.02.198s.99-.262 1.046-1.31c.095-1.703-.606-2.34-2.213-2.218m32.439 0h-.554c-1.049.006-1.662.612-1.668 1.65 0 .399.017.8-.008 1.2-.016.267.093.383.327.467 1.002.37 2.017.484 3.065.216 1.047-.267.994-.261 1.05-1.309.092-1.7-.603-2.354-2.212-2.225M7.893 5.699A1.136 1.136 0 0 0 6.81 4.59c-.569-.012-1.097.495-1.116 1.072-.018.577.515 1.133 1.108 1.129a1.133 1.133 0 0 0 1.09-1.093m31.334 1.095a1.145 1.145 0 0 0 1.103-1.075c.018-.583-.508-1.124-1.097-1.127a1.14 1.14 0 0 0-1.103 1.075c-.02.586.506 1.124 1.096 1.127M7.894 38.118c-.01-.59-.554-1.112-1.137-1.086a1.14 1.14 0 0 0-1.063 1.113c.01.59.554 1.113 1.135 1.088.582-.025 1.074-.55 1.065-1.115m31.35-1.085a1.14 1.14 0 0 0-1.114 1.073c-.019.585.518 1.132 1.108 1.127a1.1 1.1 0 0 0 .006-2.2M23.72 32.559v-2.135h-1.425v2.136z"
        ></path>
        <path fill="currentColor" d="M20.822 20.087h1.42v1.431h-1.42z"></path>
        <path fill="currentColor" d="M23.785 20.086h1.411v1.434h-1.411z"></path>
        <path fill="currentColor" d="M22.256 23.041v1.422h-1.43v-1.422z"></path>
        <path fill="currentColor" d="M23.77 24.467v-1.415h1.426v1.415z"></path>
        <path fill="currentColor" d="M22.236 27.432h-1.401v-1.433h1.401z"></path>
        <path fill="currentColor" d="M25.203 25.992v1.418h-1.426v-1.418z"></path>
      </g>
    </svg>
  )
}

function MarketingCollaborationIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 71.075 71.093"
      height={72}
      width={72}
      role="presentation"
      aria-hidden={true}
      aria-label=""
      color="#fff"
    >
      <g>
        <path
          fill="currentColor"
          d="M10.7.006c.707.198 1.432.348 2.117.606a9.435 9.435 0 0 1-1.829 18.14c-5.034.833-9.9-2.526-10.818-7.461C-.803 6.095 2.5 1.173 7.627.156q.223-.06.435-.15zm2.084 10.35 2.793 2.812c1.862-2.733 1.267-6.875-1.42-9.16a7.167 7.167 0 0 0-9.7.277c-2.457 2.35-2.93 6.52-1.054 8.921.399-.496.76-1.04 1.218-1.487s1.034-.834 1.558-1.237c-1.26-2.161-.438-4.213.859-5.23a3.904 3.904 0 0 1 4.865.036c1.566 1.295 1.862 3.185.875 5.069zm.942 4.803c-.556-2.139-2.16-3.088-4.966-2.94-1.815.096-3.346 1.377-3.568 2.988 2.494 1.932 6.219 1.91 8.529-.048zM7.794 8.275c-.036.859.707 1.66 1.585 1.708.877.049 1.71-.735 1.726-1.635.014-.86-.745-1.647-1.62-1.675-.874-.027-1.656.732-1.691 1.602"
        ></path>
        <path
          fill="currentColor"
          d="M71.065 10.69c-.114.443-.218.89-.343 1.33-1.25 4.35-5.198 7.09-9.869 6.845-4.17-.22-7.815-3.59-8.535-7.894A9.413 9.413 0 0 1 59.998.14a2.5 2.5 0 0 0 .387-.14h2.502q.189.083.388.139c3.55.708 5.965 2.762 7.254 6.134.236.619.367 1.277.546 1.918zm-12.763-.335c-.955-1.779-.711-3.643.718-4.934 1.309-1.184 3.336-1.405 4.726-.345a5.3 5.3 0 0 1 1.537 1.975c.532 1.175.235 2.38-.307 3.307l2.78 2.808c1.92-2.937 1.229-7.08-1.65-9.355a7.185 7.185 0 0 0-9.634.629c-2.545 2.63-2.51 6.656-.95 8.65zm7.608 4.816c-.634-2.17-2.085-3.04-4.865-2.956-1.849.056-3.31 1.222-3.703 2.953 2.296 1.955 6.021 1.968 8.568.003m-2.626-6.869c-.022-.864-.814-1.634-1.668-1.623a1.71 1.71 0 0 0-1.64 1.654c0 .892.826 1.697 1.706 1.66s1.624-.843 1.602-1.69"
        ></path>
        <path
          fill="currentColor"
          d="M48.01 24.46c2.535 2.97 3.855 6.233 4.17 9.947h4.517v2.208h-4.508c-.32 3.721-1.63 7.009-3.992 9.77l2.758 2.75c.475-.436 1.044-.962 1.618-1.48.753-.681 1.287-.681 1.968.043q7.375 7.825 14.734 15.661c.955 1.016.922 2.303-.083 3.268a196 196 0 0 1-4.006 3.739c-1.133 1.03-2.363.958-3.418-.17q-7.305-7.747-14.595-15.505c-.76-.809-.745-1.301.051-2.061.634-.605 1.275-1.199 1.877-1.763l-2.714-2.68c-2.723 2.316-5.977 3.661-9.72 3.978v4.526H34.44v-4.515c-3.721-.328-7.007-1.644-9.87-4.103l-6.07 6.075-1.553-1.53 6.081-6.054c-2.463-2.894-3.823-6.162-4.13-9.906h-4.525v-2.224h4.517c.32-3.737 1.644-6.998 4.082-9.852a8113 8113 0 0 0-6.102-6.01l1.668-1.638 5.977 6.076a17.04 17.04 0 0 1 9.892-4.123v-4.524h2.233v4.513c3.712.319 6.975 1.632 9.766 4.02l6.045-6.06 1.567 1.668zM35.548 49.955c7.937-.022 14.421-6.516 14.419-14.445-.003-7.928-6.518-14.42-14.441-14.42s-14.424 6.518-14.417 14.443 6.537 14.443 14.443 14.422zm28.006 18.847 4.149-3.87L53.49 49.865l-4.134 3.862z"
        ></path>
        <path
          fill="currentColor"
          d="M.016 61.612c0-5.206 4.185-9.44 9.328-9.437 5.351 0 9.548 4.15 9.544 9.431a9.437 9.437 0 0 1-18.872 0zm15.56 3.694c1.867-2.843 1.271-6.9-1.458-9.207-2.78-2.363-6.93-2.271-9.553.196-2.584 2.432-3.093 6.496-1.243 8.992l2.793-2.744c-.948-1.964-.669-3.796.855-5.064a3.916 3.916 0 0 1 4.812-.123c1.628 1.24 1.946 3.028 1.017 5.193zM5.153 67.353c2.563 1.96 6.29 1.936 8.569-.028-.556-2.05-1.946-2.951-4.555-2.942-2.074.009-3.525 1.072-4.014 2.97m5.956-6.821c.023-.854-.738-1.654-1.607-1.69-.869-.034-1.663.711-1.706 1.586-.043.874.747 1.715 1.64 1.726.86.014 1.648-.754 1.673-1.622"
        ></path>
        <path
          fill="currentColor"
          d="M39.98 63.839c0 .6.077 1.216-.026 1.798-.07.406-.294.908-.614 1.126a27 27 0 0 1-3.165 1.849 1.65 1.65 0 0 1-1.287-.007 28 28 0 0 1-3.164-1.854 1.56 1.56 0 0 1-.596-1.06 31 31 0 0 1 0-3.742 1.56 1.56 0 0 1 .61-1.052 28 28 0 0 1 3.166-1.85 1.65 1.65 0 0 1 1.286 0c1.073.53 2.085 1.183 3.124 1.786a1.23 1.23 0 0 1 .67 1.194c-.023.608-.005 1.21-.005 1.812m-6.705-.116c.171.645-.278 1.351.565 1.704.588.245 1.165.904 1.68.843.717-.087 1.401-.636 2.035-1.078.182-.126.202-.572.194-.868-.017-.626.122-1.438-.21-1.828-.472-.556-1.314-1.104-1.988-1.093-.708.013-1.472.61-2.071 1.112-.256.218-.156.854-.205 1.208"
        ></path>
        <path
          fill="currentColor"
          d="M39.98 7.274c0 .532-.028 1.066 0 1.596.043.653-.212 1.095-.782 1.412a83 83 0 0 0-2.873 1.668c-.556.342-1.065.32-1.617-.017a93 93 0 0 0-2.871-1.678c-.512-.289-.765-.68-.752-1.287.026-1.178.02-2.363 0-3.537a1.24 1.24 0 0 1 .666-1.196c1.038-.6 2.047-1.263 3.124-1.786a1.75 1.75 0 0 1 1.346.018c1.035.502 2.002 1.146 3.006 1.711.544.306.787.733.751 1.361-.03.577.001 1.157.001 1.735m-2.15 0c-.072-1.344-.066-1.353-.62-1.668-.556-.316-1.166-.902-1.681-.834-.719.094-1.516.556-2 1.112-.323.365-.181 1.16-.2 1.764-.01.304-.027.77.148.892.652.456 1.379 1.09 2.085 1.1.674.01 1.428-.595 2.009-1.091.26-.215.183-.832.26-1.27z"
        ></path>
        <path
          fill="currentColor"
          d="M7.253 31.086c.602 0 1.217-.078 1.799.026.406.073.902.303 1.122.625.676.99 1.28 2.029 1.807 3.106a1.74 1.74 0 0 1 .01 1.346 25 25 0 0 1-1.806 3.106 1.65 1.65 0 0 1-1.112.638q-1.837.12-3.674 0a1.65 1.65 0 0 1-1.112-.624 25 25 0 0 1-1.817-3.105 1.73 1.73 0 0 1-.01-1.344c.523-1.076 1.183-2.085 1.785-3.123a1.22 1.22 0 0 1 1.2-.658c.605.02 1.206.007 1.808.007m-.02 6.725c.444-.071 1.09.017 1.33-.255.506-.568 1.103-1.33 1.095-2.004-.008-.706-.648-1.429-1.094-2.085-.111-.164-.543-.158-.826-.149-.627.021-1.441-.13-1.833.2-.556.468-1.112 1.31-1.102 1.985.008.706.603 1.472 1.112 2.074.21.253.84.162 1.319.234"
        ></path>
        <path
          fill="currentColor"
          d="M63.883 31.086c.578 0 1.157.02 1.734 0a1.22 1.22 0 0 1 1.206.648c.603 1.037 1.262 2.047 1.786 3.123a1.75 1.75 0 0 1 0 1.346c-.513 1.056-1.163 2.044-1.75 3.066a1.29 1.29 0 0 1-1.244.709 94 94 0 0 0-3.537 0c-.541.008-.933-.184-1.204-.652-.613-1.058-1.276-2.092-1.824-3.182a1.56 1.56 0 0 1 0-1.224 30 30 0 0 1 1.888-3.224c.204-.303.695-.517 1.074-.578.61-.101 1.247-.032 1.871-.032m-.018 6.726c.437-.073 1.08.01 1.32-.262.504-.57 1.102-1.33 1.092-2.006-.01-.706-.546-1.572-1.12-2.046-.41-.34-1.251-.167-1.91-.184-.256 0-.644.01-.75.164-.432.645-1.085 1.351-1.074 2.025.01.708.606 1.472 1.112 2.074.209.256.845.163 1.33.235"
        ></path>
        <path
          fill="currentColor"
          d="M45.313 33.904c-.014.611-.318 1.028-.91 1.146-.59.118-1.039-.162-1.25-.73-.177-.475-.27-.98-.463-1.447-1.173-2.835-3.237-4.656-6.227-5.408a2.7 2.7 0 0 1-.526-.167 1.094 1.094 0 0 1-.57-1.336c.205-.58.64-.884 1.23-.771a11.05 11.05 0 0 1 8.667 8.44q.027.136.049.273"
        ></path>
        <path
          fill="currentColor"
          d="M44.366 39.963a1.111 1.111 0 1 1 1.16-1.02 1.085 1.085 0 0 1-1.16 1.02"
        ></path>
      </g>
    </svg>
  )
}

function EarlyProductAccessIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 71.029 71.043"
      height="72"
      width="72"
      role="presentation"
      aria-hidden={true}
      aria-label=""
      color="#fff"
    >
      <g>
        <path
          fill="currentColor"
          d="M66.73 71.043H4.3c-.05-.04-.095-.103-.153-.121-2.78-.848-4.145-2.678-4.147-5.56V5.282A5.24 5.24 0 0 1 5.243 0h60.552c1.362 0 2.501.492 3.512 1.375.905.788 1.35 1.835 1.722 2.93v62.443c-.091.226-.19.452-.278.682a5.28 5.28 0 0 1-3.344 3.342c-.225.082-.45.18-.677.27m1.928-54.374H2.368v48.758c0 2.027 1.25 3.243 3.323 3.243h59.58c2.19 0 3.392-1.198 3.392-3.383v-39.06z"
        ></path>
        <path
          fill="currentColor"
          d="M33.705 49.695h13.172a2.9 2.9 0 0 1 .882.111c.545.18.813.605.783 1.172a1.08 1.08 0 0 1-.845 1.057 3.2 3.2 0 0 1-.82.091H20.606a3.2 3.2 0 0 1-.82-.091c-.556-.152-.846-.576-.85-1.128 0-.522.256-.946.785-1.105a3.1 3.1 0 0 1 .883-.107q6.55-.006 13.1 0"
        ></path>
        <path
          fill="currentColor"
          d="M58.037 44.967h3.325c2.14.01 3.71 1.483 3.753 3.519.046 1.967-1.487 3.58-3.577 3.63q-3.53.087-7.064 0c-2.17-.053-3.614-1.631-3.565-3.752.044-1.916 1.647-3.378 3.73-3.392 1.136-.012 2.266-.005 3.398-.005"
        ></path>
        <path
          fill="currentColor"
          d="M57.991 63.96c-1.177 0-2.355.012-3.532 0-1.861-.024-3.444-1.474-3.542-3.223-.115-2.048 1.136-3.753 3.13-3.843a83 83 0 0 1 8.02.015c1.808.087 3.116 1.784 3.048 3.585-.071 1.88-1.53 3.399-3.386 3.459-1.244.04-2.493 0-3.738 0z"
        ></path>
        <path
          fill="currentColor"
          d="M33.692 63.96H20.385c-.928 0-1.54-.53-1.452-1.28.074-.61.417-1.036 1.064-1.086.528-.04 1.062-.03 1.593-.03h25.088q.381-.01.762.02c.68.074 1.111.556 1.111 1.187a1.22 1.22 0 0 1-1.134 1.184 6 6 0 0 1-.622.009z"
        ></path>
        <path
          fill="currentColor"
          d="M10.713 55.642c1.112 0 2.224-.007 3.328 0 .914 0 1.354.449 1.355 1.366q.008 3.363 0 6.726c0 .93-.409 1.39-1.333 1.397a352 352 0 0 1-6.863 0c-.834-.008-1.283-.456-1.29-1.306a314 314 0 0 1 0-6.864c.009-.92.466-1.315 1.406-1.32 1.133-.002 2.267.002 3.397 0m-2.381 7.026h4.65V58.07h-4.65z"
        ></path>
        <path
          fill="currentColor"
          d="M10.648 53.282H7.252c-.886 0-1.333-.417-1.343-1.308a353 353 0 0 1 0-6.863c.01-.887.45-1.295 1.357-1.302q3.396-.024 6.793 0c.92 0 1.333.451 1.335 1.39q.009 3.362 0 6.724c0 .929-.432 1.358-1.35 1.364-1.125 0-2.264-.005-3.396-.005m2.317-2.388V46.24H8.368v4.653z"
        ></path>
        <path
          fill="currentColor"
          d="M30.789 59.235H20.46c-.676 0-1.243-.153-1.466-.884a1.16 1.16 0 0 1 .725-1.448q.299-.097.613-.096h20.864c.653 0 1.201.21 1.38.91.209.815-.344 1.492-1.25 1.51-1.202.026-2.403.01-3.605.01z"
        ></path>
        <path
          fill="currentColor"
          d="M30.82 44.967h10.328c.902 0 1.42.416 1.46 1.128.033.642-.327 1.12-.96 1.239q-.378.056-.758.047H20.788a6 6 0 0 1-.76-.028c-.665-.086-1.124-.598-1.113-1.205a1.234 1.234 0 0 1 1.157-1.173c.206-.02.417-.008.623-.008z"
        ></path>
        <path
          fill="currentColor"
          d="M12.287 31.737v5.974a1.347 1.347 0 0 1-1.348 1.348H9.356A1.35 1.35 0 0 1 8 37.71v-5.974a1.347 1.347 0 0 1 1.356-1.356h1.583a1.346 1.346 0 0 1 1.348 1.355m5.86-8.381V37.71a1.35 1.35 0 0 1-1.355 1.348h-1.584a1.356 1.356 0 0 1-1.356-1.348V23.356A1.365 1.365 0 0 1 15.208 22h1.584a1.356 1.356 0 0 1 1.356 1.356M24 27.887v9.824a1.347 1.347 0 0 1-1.347 1.348h-1.584a1.35 1.35 0 0 1-1.355-1.348v-9.824a1.357 1.357 0 0 1 1.355-1.356h1.619A1.356 1.356 0 0 1 24 27.887"
        ></path>
        <path
          fill="currentColor"
          d="M31.287 31.737v5.974a1.347 1.347 0 0 1-1.348 1.348h-1.583A1.35 1.35 0 0 1 27 37.71v-5.974a1.347 1.347 0 0 1 1.356-1.356h1.583a1.346 1.346 0 0 1 1.348 1.355m5.86-8.381V37.71a1.35 1.35 0 0 1-1.355 1.348h-1.584a1.356 1.356 0 0 1-1.356-1.348V23.356A1.365 1.365 0 0 1 34.208 22h1.584a1.356 1.356 0 0 1 1.356 1.356M43 27.887v9.824a1.347 1.347 0 0 1-1.347 1.348h-1.584a1.35 1.35 0 0 1-1.355-1.348v-9.824a1.357 1.357 0 0 1 1.355-1.356h1.619A1.356 1.356 0 0 1 43 27.887"
        ></path>
        <path
          fill="currentColor"
          d="M50.287 31.737v5.974a1.347 1.347 0 0 1-1.348 1.348h-1.583A1.35 1.35 0 0 1 46 37.71v-5.974a1.347 1.347 0 0 1 1.356-1.356h1.583a1.346 1.346 0 0 1 1.347 1.355m5.86-8.381V37.71a1.35 1.35 0 0 1-1.355 1.348h-1.584a1.356 1.356 0 0 1-1.356-1.348V23.356A1.365 1.365 0 0 1 53.208 22h1.584a1.356 1.356 0 0 1 1.356 1.356M62 27.887v9.824a1.347 1.347 0 0 1-1.347 1.348h-1.584a1.35 1.35 0 0 1-1.355-1.348v-9.824a1.357 1.357 0 0 1 1.355-1.356h1.619A1.356 1.356 0 0 1 62 27.887"
        ></path>
      </g>
    </svg>
  )
}
