import { Link } from '@tanstack/react-router'
import { PeridioLogoFull } from './svg/peridio-logo-full'

export default function Footer() {
  return (
    <footer className="font-space-grotesk bg-white py-12 text-black">
      <div className="mx-auto w-[450px] px-6 sm:px-0 md:w-[650px] lg:w-[900px]">
        {/* Footer Columns */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Logo Column */}
          <div className="lg:col-start-unset col-span-2 md:col-span-1 lg:col-span-1">
            <PeridioLogoFull className="text-black" />
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-space-grotesk mb-4 text-[16px] leading-[1.4em] font-normal text-black md:text-[20px]">
              Sitemap
            </h4>
            <nav className="flex flex-col gap-2">
              <FooterLink
                href="https://www.peridio.com/peridio-core"
                external
                fontSize="text-[16px]"
                underline={false}
              >
                Peridio Core
              </FooterLink>
              <FooterLink href="/company" fontSize="text-[16px]" underline={false}>
                Company
              </FooterLink>
              <FooterLink
                href="https://blog.peridio.com/"
                external
                fontSize="text-[16px]"
                underline={false}
              >
                Blog
              </FooterLink>
              <FooterLink
                href="https://docs.peridio.com/"
                external
                fontSize="text-[16px]"
                underline={false}
              >
                Docs
              </FooterLink>
            </nav>
          </div>

          {/* Engineers */}
          <div>
            <h4
              className="font-space-grotesk mb-4 text-[16px] leading-[1.4em] font-normal md:text-[20px]"
              style={{ color: '#000' }}
            >
              Engineers
            </h4>
            <nav className="flex flex-col gap-2">
              <FooterLink href="https://docs.peridio.com/overview" external>
                How Peridio Works
              </FooterLink>
              <FooterLink href="https://docs.peridio.com/" external>
                Documentation
              </FooterLink>
              <FooterLink
                href="https://docs.peridio.com/platform/guides/introduction-to-binary-management"
                external
              >
                Quickstart
              </FooterLink>
              <FooterLink href="https://github.com/peridio" external>
                Github
              </FooterLink>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-start-unset md:col-span-1 md:col-start-2 lg:col-span-1">
            <h4
              className="font-space-grotesk mb-4 text-[16px] leading-[1.4em] font-normal md:text-[20px]"
              style={{ color: '#000' }}
            >
              Contact
            </h4>
            <nav className="flex flex-col gap-2">
              <FooterLink href="https://www.peridio.com/contact" external>
                Contact Us
              </FooterLink>
              <FooterLink href="https://meetings.hubspot.com/bill-brock" external>
                Schedule a Demo
              </FooterLink>
              <a
                href="mailto:support@peridio.com?subject=Request for Assistance"
                className="text-[17px] underline transition-opacity hover:opacity-70"
                style={{ color: 'rgba(110, 110, 110, 1)' }}
              >
                Support
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4
              className="font-space-grotesk mb-4 text-[16px] leading-[1.4em] font-normal md:text-[20px]"
              style={{ color: '#000' }}
            >
              Social
            </h4>
            <nav className="flex flex-col gap-2">
              <FooterLink href="/podcast-beyond-the-bench">BTB Podcast</FooterLink>
              <FooterLink href="https://www.linkedin.com/company/91100454" external>
                LinkedIn
              </FooterLink>
              <FooterLink href="https://twitter.com/Peridio" external>
                X (Twitter)
              </FooterLink>
              <FooterLink href="https://www.youtube.com/@PeridioPlatform" external>
                Youtube
              </FooterLink>
            </nav>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="my-6 border-t border-gray-300"></div>

        {/* Bottom Row */}
        <div className="flex items-center justify-center gap-3 text-[12px] sm:justify-end sm:gap-6 sm:text-[17px]">
          <a
            href="https://console.peridio.com/policy/privacy"
            target="_blank"
            rel="noreferrer noopener"
            className="underline transition-opacity hover:opacity-70"
            style={{ color: 'rgba(110, 110, 110, 1)' }}
          >
            Privacy Policy
          </a>
          <a
            href="https://console.peridio.com/policy/tos"
            target="_blank"
            rel="noreferrer noopener"
            className="underline transition-opacity hover:opacity-70"
            style={{ color: 'rgba(110, 110, 110, 1)' }}
          >
            Terms & Conditions
          </a>
          <span className="lg:ml-auto" style={{ color: 'rgba(110, 110, 110, 1)' }}>
            &copy; {new Date().getFullYear()} Peridio
          </span>
        </div>
      </div>
    </footer>
  )
}

interface FooterLinkProps {
  href: string
  children: React.ReactNode
  external?: boolean
  fontSize?: string
  underline?: boolean
}

function FooterLink({
  href,
  children,
  external = false,
  fontSize = 'text-[17px]',
  underline = true,
}: FooterLinkProps) {
  const linkClass = `${fontSize} ${underline ? 'underline' : ''} hover:opacity-70 transition-opacity leading-[1.2]`
  const linkStyle = { color: 'rgba(110, 110, 110, 1)' }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={linkClass}
        style={linkStyle}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={linkClass} style={linkStyle}>
      {children}
    </Link>
  )
}
