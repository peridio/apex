import { useState, useRef } from 'react'
import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { Link } from '@tanstack/react-router'
import {
  ChevronDown,
  Handshake,
  Users,
  Zap,
  Factory,
  Truck,
  Home,
  MonitorSmartphone,
  Watch,
  BookOpen,
  MessageSquare,
  Play,
  ArrowRight,
} from 'lucide-react'
import { AvocadoOsLogo } from '@/components/svg/avocado-os-logo'
import { LtsIcon } from '@/components/svg/lts-icon'
import { PeridioLogo } from '@/components/svg/peridio-logo'
import { PeridioLogoFull } from '@/components/svg/peridio-logo-full'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

// Animated Hamburger Icon Component
function AnimatedHamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex h-8 w-8 flex-col items-center justify-center">
      <span
        className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-1.5 rotate-45' : ''
        }`}
      />
      <span
        className={`my-1 block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? '-translate-y-1.5 -rotate-45' : ''
        }`}
      />
    </div>
  )
}

type NavContent = 'platform' | 'company' | 'industries' | 'resources' | null

export default function Header() {
  const [activeNav, setActiveNav] = useState<NavContent>(null)
  const [isPopoverHovered, setIsPopoverHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastInteractionWasTouch = useRef(false)

  const showPopover = activeNav !== null || isPopoverHovered

  const handleNavPointerEnter = (nav: NavContent, e: React.PointerEvent) => {
    // Only respond to hover on mouse/pen devices, not touch
    if (e.pointerType === 'touch') {
      lastInteractionWasTouch.current = true
      return
    }

    lastInteractionWasTouch.current = false

    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveNav(nav)
  }

  const handleNavPointerLeave = (e: React.PointerEvent) => {
    // Only respond to hover changes on mouse/pen devices
    if (e.pointerType === 'touch' || lastInteractionWasTouch.current) {
      return
    }

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    // Small delay to allow moving to popover
    timeoutRef.current = setTimeout(() => {
      if (!isPopoverHovered) {
        setActiveNav(null)
      }
      timeoutRef.current = null
    }, 50)
  }

  const handleNavClick = (nav: NavContent, e: React.MouseEvent) => {
    // Prevent default to avoid any navigation
    e.preventDefault()

    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    // Toggle: if clicking the active nav, close it; otherwise open the new one
    setActiveNav(activeNav === nav ? null : nav)
  }

  const handlePopoverEnter = () => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsPopoverHovered(true)
  }

  const handlePopoverLeave = () => {
    setIsPopoverHovered(false)
    setActiveNav(null)
  }

  const closePopover = () => {
    setActiveNav(null)
    setIsPopoverHovered(false)
  }

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 w-full"
      style={{
        background: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, #000000 100%)',
      }}
    >
      <div className="relative mx-auto w-[95%] md:w-[830px] lg:w-[900px]">
        <div className="flex h-[104px] items-center justify-between sm:px-6 md:px-0">
          <PeridioLogoLink />

          <nav className="hidden items-center gap-5 md:flex">
            <NavItem
              label="Platform"
              isActive={activeNav === 'platform'}
              onPointerEnter={(e) => handleNavPointerEnter('platform', e)}
              onPointerLeave={handleNavPointerLeave}
              onClick={(e) => handleNavClick('platform', e)}
            />

            <NavItem
              label="Company"
              isActive={activeNav === 'company'}
              onPointerEnter={(e) => handleNavPointerEnter('company', e)}
              onPointerLeave={handleNavPointerLeave}
              onClick={(e) => handleNavClick('company', e)}
            />

            <NavItem
              label="Industries"
              isActive={activeNav === 'industries'}
              onPointerEnter={(e) => handleNavPointerEnter('industries', e)}
              onPointerLeave={handleNavPointerLeave}
              onClick={(e) => handleNavClick('industries', e)}
            />

            <NavItem
              label="Resources"
              isActive={activeNav === 'resources'}
              onPointerEnter={(e) => handleNavPointerEnter('resources', e)}
              onPointerLeave={handleNavPointerLeave}
              onClick={(e) => handleNavClick('resources', e)}
            />

            <a
              href="https://docs.peridio.com/"
              className="font-space-grotesk text-light-gray text-[16px] transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline-transparent-secondary"
              className="hidden w-[92px] !text-[16px] md:flex"
            >
              <a href="https://console.peridio.com/" target="_blank" rel="noopener noreferrer">
                Log in
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="hidden w-[90px] !text-[16px] text-black sm:block"
            >
              <Link to="/contact">Contact</Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="hover:bg-charcoal ml-3 rounded p-2 text-white transition-colors md:hidden">
                  <AnimatedHamburgerIcon isOpen={isMobileMenuOpen} />
                  <span className="sr-only">Toggle menu</span>
                </button>
              </SheetTrigger>
              <CustomSheetContent
                side="right"
                className="top-[104px] !z-40 h-[calc(100vh-104px)] w-full overflow-y-auto border-none bg-white text-black"
              >
                <MobileNav onNavigate={() => setIsMobileMenuOpen(false)} />
              </CustomSheetContent>
            </Sheet>
          </div>
        </div>

        {showPopover && (
          <div
            className="border-dark-gray absolute top-[72px] left-1/2 z-50 w-[700px] -translate-x-1/2 overflow-hidden rounded-lg border shadow-xl"
            style={{
              background: 'rgb(18, 20, 33)',
            }}
            onMouseEnter={handlePopoverEnter}
            onMouseLeave={handlePopoverLeave}
          >
            {activeNav === 'platform' && <PlatformPopover onNavigate={closePopover} />}
            {activeNav === 'company' && <CompanyPopover onNavigate={closePopover} />}
            {activeNav === 'industries' && <IndustriesPopover onNavigate={closePopover} />}
            {activeNav === 'resources' && <ResourcesPopover onNavigate={closePopover} />}
          </div>
        )}
      </div>
    </header>
  )
}

function PeridioLogoLink() {
  return (
    <Link to="/">
      <PeridioLogoFull className="block text-white md:hidden lg:block" />
      <PeridioLogo className="hidden text-white md:block lg:hidden" />
    </Link>
  )
}

interface NavItemProps {
  label: string
  isActive: boolean
  onPointerEnter: (e: React.PointerEvent) => void
  onPointerLeave: (e: React.PointerEvent) => void
  onClick: (e: React.MouseEvent) => void
}

function NavItem({ label, isActive, onPointerEnter, onPointerLeave, onClick }: NavItemProps) {
  return (
    <button
      type="button"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
      className="font-space-grotesk text-light-gray flex items-center gap-1 text-[16px] transition-colors hover:text-white"
    >
      {label}
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-500 ${isActive ? '-rotate-180' : ''}`}
      />
    </button>
  )
}

function VerticalSeparator({ heightPercentage = 50 }: { heightPercentage?: number }) {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-dark-gray w-px" style={{ height: `${heightPercentage}%` }} />
    </div>
  )
}

function PlatformPopover({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex">
      {/* Left Column */}
      <div className="w-[260px] p-4">
        <h3 className="text-off-white mb-2 text-lg font-bold">Platform</h3>
        <p className="font-space-grotesk text-light-gray text-sm leading-[19.5px] font-[14px]">
          Peridio simplifies embedded development — from OS to device management — so your team can
          build, ship, and scale with confidence.
        </p>

        <Link to="/ai-ready" onClick={onNavigate}>
          <div
            className="font-space-grotesk mt-6 h-[80px] w-[220px] rounded-lg px-5 py-3"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #FFFFFF 50.7092927631579%, #CAC5FF 100%, #5F51FF 90.26864035087719%, #000000 100%)',
            }}
          >
            <h4 className="text-peridio-purple text-sm font-bold">Ai Ready</h4>
            <p className="mb-2 text-xs text-black">
              AI model delivery for edge devices.{' '}
              <span className="inline-flex items-center gap-1 font-bold">
                Learn more <ArrowRight className="h-3 w-3" />
              </span>
            </p>
          </div>
        </Link>
      </div>

      {/* Vertical Separator */}
      <VerticalSeparator heightPercentage={85} />

      {/* Right Column */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          <NavLinkCard
            to="/peridio-core"
            icon={<PeridioLogo width={32} className="text-white" />}
            title="Peridio Core"
            description="Streamlines device management, so you can scale with confidence."
            onNavigate={onNavigate}
          />

          <NavLinkCard
            to="/avocado-os"
            icon={<AvocadoOsLogo width={32} className="text-white" />}
            title="Avocado OS"
            description="Delivers a smooth dev experience with built-in security and reliability."
            onNavigate={onNavigate}
          />

          <NavLinkCard
            to="/long-term-support"
            icon={<LtsIcon width={32} className="text-white" />}
            title="Long Term Support (LTS)"
            description="Ongoing security patching, maintenance, and expert assistance."
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </div>
  )
}

function NavLinkCard({
  to,
  icon,
  title,
  description,
  className = '',
  iconClassName = '',
  onNavigate,
}: {
  to: string
  icon: React.ReactNode
  title: string
  description: string
  className?: string
  iconClassName?: string
  onNavigate?: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className={cn(
        'hover:bg-charcoal flex items-center gap-6 rounded-lg p-3 transition-colors',
        className,
      )}
    >
      <div className={cn('flex items-center justify-center', iconClassName)}>{icon}</div>
      <div className="flex-1">
        <h4 className="font-space-grotesk text-[14px] font-[700] text-white">{title}</h4>
        <p className="font-space-grotesk text-light-gray max-w-[300px] text-[12px]">
          {description}
        </p>
      </div>
    </Link>
  )
}

// Company Popover Content
function CompanyPopover({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex">
      {/* Left Column */}
      <div className="w-[260px] p-4">
        <h3 className="text-off-white mb-2 text-lg font-bold">Company</h3>
        <p className="font-space-grotesk text-light-gray text-sm leading-[19.5px] font-[14px]">
          Operationalize firmware management with enterprise-grade controls and automation, giving
          you the confidence to scale from prototype to production.
        </p>
      </div>

      {/* Vertical Separator */}
      <VerticalSeparator heightPercentage={85} />

      {/* Right Column */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          <NavLinkCard
            to="/partners"
            icon={<Handshake className="h-6 w-6 text-white" />}
            title="Partners"
            description="Join industry leaders transforming the future of connected hardware."
            onNavigate={onNavigate}
          />

          <NavLinkCard
            to="/company"
            icon={<Users className="h-6 w-6 text-white" />}
            title="About Us"
            description="Meet the team empowering companies to build and scale connected devices without compromise"
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </div>
  )
}

// Industries Popover Content
function IndustriesPopover({ onNavigate }: { onNavigate: () => void }) {
  const industryLinks = [
    {
      to: '/industry-energy-and-renewables',
      icon: <Zap className="h-5 w-5 text-white" />,
      title: 'Energy & Renewables',
      description: 'Deploy energy applications with speed and confidence',
    },
    {
      to: '/industry-industrial-iot',
      icon: <Factory className="h-5 w-5 text-white" />,
      title: 'Industrial IoT',
      description: 'Optimize industrial operations with seamless software updates',
    },
    {
      to: '/industry-telematics',
      icon: <Truck className="h-5 w-5 text-white" />,
      title: 'Telematics',
      description: 'Turn fleet updates into your competitive edge',
    },
    {
      to: '/industry-smarthomes',
      icon: <Home className="h-5 w-5 text-white" />,
      title: 'Smart Homes',
      description: 'Enhance connected living with secure and reliable updates',
    },
    {
      to: '/industry-consumer-electronics',
      icon: <MonitorSmartphone className="h-5 w-5 text-white" />,
      title: 'Consumer Electronics',
      description: 'Deliver features faster while protecting your device fleet',
    },
    {
      to: '/industry-health-and-wearables',
      icon: <Watch className="h-5 w-5 text-white" />,
      title: 'Health & Wearables',
      description: 'Power next-gen health devices with fast and secure updates',
    },
  ]

  return (
    <div className="p-6">
      <div className="border-dark-gray mb-6 flex items-start gap-4 border-b pb-4">
        <div className="min-w-[110px]">
          <h3 className="text-lg font-bold text-white">Industries</h3>
        </div>
        <p className="font-space-grotesk text-light-gray text-sm text-[14px] font-normal">
          We're de-mystifying software distribution and device management for connected products
          across a variety of industries.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {industryLinks.map((link) => (
          <NavLinkCard
            key={link.to}
            to={link.to}
            icon={link.icon}
            title={link.title}
            description={link.description}
            className="p-2"
            iconClassName="h-full items-start pt-1"
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  )
}

// Resources Popover Content
function ResourcesPopover({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex">
      {/* Left Column */}
      <div className="w-[260px] p-4">
        <h3 className="text-off-white mb-2 text-lg font-bold">Resources</h3>
        <p className="font-space-grotesk text-light-gray mb-6 text-sm leading-[19.5px] font-[14px]">
          Essential tools and insights to build, deploy, and scale your edge devices effectively.
        </p>

        <Link to="/podcast-beyond-the-bench" onClick={onNavigate}>
          <div
            className="font-space-grotesk rounded-lg p-4"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #FFFFFF 50.7092927631579%, #CAC5FF 100%, #5F51FF 90.26864035087719%, #000000 100%)',
            }}
          >
            <h4 className="text-peridio-purple mb-1 text-[13px] font-bold">
              Beyond the Bench Podcast
            </h4>
            <p className="mb-2 text-xs text-black">
              Conversations with leaders who've scaled innovative hardware and edge AI.
              <span className="inline-flex items-center gap-1 font-bold">
                Learn more <ArrowRight className="h-3 w-3" />
              </span>
            </p>
          </div>
        </Link>
      </div>

      {/* Vertical Separator */}
      <VerticalSeparator heightPercentage={85} />

      {/* Right Column */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          <a
            href="https://blog.peridio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-charcoal flex items-center gap-6 rounded-lg p-3 transition-colors"
          >
            <BookOpen className="h-6 w-6 text-white" />
            <div className="flex-1">
              <h4 className="font-space-grotesk text-[14px] font-[700] text-white">Blog</h4>
              <p className="font-space-grotesk text-light-gray max-w-[300px] text-[12px]">
                Latest edge technology trends and technical insights for embedded development.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="hover:bg-charcoal flex items-center gap-6 rounded-lg p-3 transition-colors"
          >
            <MessageSquare className="h-6 w-6 text-white" />
            <div className="flex-1">
              <h4 className="font-space-grotesk text-[14px] font-[700] text-white">
                Join our next Webinar
              </h4>
              <p className="font-space-grotesk text-light-gray max-w-[300px] text-[12px]">
                Industry experts sharing strategies for scaling next-generation connected devices.
              </p>
            </div>
          </a>

          <a
            href="https://blog.peridio.com/tag/webinars"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-charcoal flex items-center gap-6 rounded-lg p-3 transition-colors"
          >
            <Play className="h-6 w-6 text-white" />
            <div className="flex-1">
              <h4 className="font-space-grotesk text-[14px] font-[700] text-white">
                Watch Previous Webinars
              </h4>
              <p className="font-space-grotesk text-light-gray max-w-[300px] text-[12px]">
                Watch past webinars with industry leaders on scaling next-generation connected
                devices.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

// Custom Sheet Content without overlay
const CustomSheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: 'top' | 'right' | 'bottom' | 'left'
  }
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
        side === 'right' &&
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-full border-l',
        className,
      )}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
))
CustomSheetContent.displayName = SheetPrimitive.Content.displayName

// Mobile Navigation Component
function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const industryLinks = [
    {
      to: '/industry-energy-and-renewables',
      icon: <Zap className="h-5 w-5 text-black" />,
      title: 'Energy & Renewables',
    },
    {
      to: '/industry-industrial-iot',
      icon: <Factory className="h-5 w-5 text-black" />,
      title: 'Industrial IoT',
    },
    {
      to: '/industry-telematics',
      icon: <Truck className="h-5 w-5 text-black" />,
      title: 'Telematics',
    },
    {
      to: '/industry-smarthomes',
      icon: <Home className="h-5 w-5 text-black" />,
      title: 'Smart Homes',
    },
    {
      to: '/industry-consumer-electronics',
      icon: <MonitorSmartphone className="h-5 w-5 text-black" />,
      title: 'Consumer Electronics',
    },
    {
      to: '/industry-health-and-wearables',
      icon: <Watch className="h-5 w-5 text-black" />,
      title: 'Health & Wearables',
    },
  ]

  return (
    <div className="flex h-full flex-col pt-6">
      <Accordion type="single" collapsible className="w-full">
        {/* Platform Section */}
        <AccordionItem value="platform" className="border-gray-200">
          <AccordionTrigger className="font-space-grotesk text-lg text-black hover:no-underline">
            Platform
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              <Link
                to="/ai-ready"
                onClick={onNavigate}
                className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <div className="to-very-light-purple flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-gradient-to-br from-white">
                  <span className="text-peridio-purple text-xs font-bold">AI</span>
                </div>
                <div>
                  <h4 className="font-space-grotesk text-sm font-bold text-black">AI Ready</h4>
                  <p className="text-xs text-gray-600">AI model delivery for edge devices</p>
                </div>
              </Link>

              <Link
                to="/peridio-core"
                onClick={onNavigate}
                className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <PeridioLogo width={32} className="flex-shrink-0 text-black" />
                <div>
                  <h4 className="font-space-grotesk text-sm font-bold text-black">Peridio Core</h4>
                  <p className="text-xs text-gray-600">Streamlines device management</p>
                </div>
              </Link>

              <Link
                to="/avocado-os"
                onClick={onNavigate}
                className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <AvocadoOsLogo width={32} className="flex-shrink-0 text-black" />
                <div>
                  <h4 className="font-space-grotesk text-sm font-bold text-black">Avocado OS</h4>
                  <p className="text-xs text-gray-600">Smooth dev experience with security</p>
                </div>
              </Link>

              <Link
                to="/long-term-support"
                onClick={onNavigate}
                className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <LtsIcon width={32} className="flex-shrink-0 text-black" />
                <div>
                  <h4 className="font-space-grotesk text-sm font-bold text-black">
                    Long Term Support (LTS)
                  </h4>
                  <p className="text-xs text-gray-600">Ongoing security patching and maintenance</p>
                </div>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Company Section */}
        <AccordionItem value="company" className="border-gray-200">
          <AccordionTrigger className="font-space-grotesk text-lg text-black hover:no-underline">
            Company
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              <Link
                to="/partners"
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <Handshake className="h-6 w-6 flex-shrink-0 text-black" />
                <div>
                  <h4 className="font-space-grotesk text-sm font-bold text-black">Partners</h4>
                  <p className="text-xs text-gray-600">Join industry leaders</p>
                </div>
              </Link>

              <Link
                to="/company"
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <Users className="h-6 w-6 flex-shrink-0 text-black" />
                <div>
                  <h4 className="font-space-grotesk text-sm font-bold text-black">About Us</h4>
                  <p className="text-xs text-gray-600">Meet the team</p>
                </div>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Industries Section */}
        <AccordionItem value="industries" className="border-gray-200">
          <AccordionTrigger className="font-space-grotesk text-lg text-black hover:no-underline">
            Industries
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              {industryLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={onNavigate}
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">{link.icon}</div>
                  <h4 className="font-space-grotesk text-sm font-bold text-black">{link.title}</h4>
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Resources Section */}
        <AccordionItem value="resources" className="border-gray-200">
          <AccordionTrigger className="font-space-grotesk text-lg text-black hover:no-underline">
            Resources
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 py-2">
              <Link
                to="/podcast-beyond-the-bench"
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <Play className="h-6 w-6 flex-shrink-0 text-black" />
                <div>
                  <h4 className="font-space-grotesk text-sm font-bold text-black">
                    Beyond the Bench Podcast
                  </h4>
                  <p className="text-xs text-gray-600">Conversations with leaders</p>
                </div>
              </Link>

              <a
                href="https://blog.peridio.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <BookOpen className="h-6 w-6 flex-shrink-0 text-black" />
                <div>
                  <h4 className="font-space-grotesk text-sm font-bold text-black">Blog</h4>
                  <p className="text-xs text-gray-600">Latest edge technology trends</p>
                </div>
              </a>

              <a
                href="#"
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <MessageSquare className="h-6 w-6 flex-shrink-0 text-black" />
                <div>
                  <h4 className="font-space-grotesk text-sm font-bold text-black">
                    Join our next Webinar
                  </h4>
                  <p className="text-xs text-gray-600">Industry experts</p>
                </div>
              </a>

              <a
                href="https://blog.peridio.com/tag/webinars"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-100"
              >
                <Play className="h-6 w-6 flex-shrink-0 text-black" />
                <div>
                  <h4 className="font-space-grotesk text-sm font-bold text-black">
                    Watch Previous Webinars
                  </h4>
                  <p className="text-xs text-gray-600">Watch past webinars</p>
                </div>
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Docs Link */}
      <a
        href="https://docs.peridio.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className="font-space-grotesk flex items-center justify-between border-b border-gray-200 py-4 text-lg font-medium text-black transition-colors hover:bg-gray-100"
      >
        Documentation
      </a>

      {/* Log in Link */}
      <a
        href="https://console.peridio.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className="font-space-grotesk flex items-center justify-between border-b border-gray-200 py-4 text-lg font-medium text-black transition-colors hover:bg-gray-100"
      >
        Log in to Web Console
      </a>
    </div>
  )
}
