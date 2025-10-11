import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
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
} from "lucide-react";
import { PeridioLogoFull } from "@/components/svg/peridio-logo-full";
import { Button } from "@/components/ui/button";

function PeridioLogo() {
  return (
    <Link to="/">
      <PeridioLogoFull />
    </Link>
  );
}

interface NavItemProps {
  label: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function NavItem({
  label,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: NavItemProps) {
  return (
    <button
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex items-center gap-1 text-[rgb(194,194,194)] hover:text-white transition-colors text-[16px] font-space-grotesk"
    >
      {label}
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-500 ${isActive ? "-rotate-180" : ""}`}
      />
    </button>
  );
}

// Platform Popover Content
function PlatformPopover() {
  return (
    <div className="flex">
      {/* Left Column */}
      <div className="w-[280px] bg-[#1e2028] p-6 border-r border-[#333333]">
        <h3 className="text-white text-lg font-bold mb-2">Platform</h3>
        <p className="text-[#9ca3af] text-sm leading-relaxed">
          Peridio simplifies embedded development—from OS to device management—
          so your team can build, ship, and scale with confidence.
        </p>

        <div className="mt-6 bg-[#e5e7f7] rounded-lg p-4">
          <h4 className="text-[#5f51ff] text-sm font-bold mb-1">AI Ready</h4>
          <p className="text-black text-xs mb-2">
            AI model delivery for edge devices.
          </p>
          <Link
            to="/ai-ready"
            className="text-[#5f51ff] text-xs font-medium inline-flex items-center gap-1"
          >
            Learn more <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 p-6">
        <div className="space-y-4">
          <Link
            to="/peridio-core"
            className="flex items-start gap-4 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-white text-base font-bold mb-1">
                Peridio Core
              </h4>
              <p className="text-[#9ca3af] text-sm">
                Streamlines device management, so you can scale with confidence.
              </p>
            </div>
          </Link>

          <Link
            to="/avocado-os"
            className="flex items-start gap-4 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="3" fill="#1e2028" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-white text-base font-bold mb-1">
                Avocado OS
              </h4>
              <p className="text-[#9ca3af] text-sm">
                Delivers a smooth dev experience with built-in security and
                reliability.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Company Popover Content
function CompanyPopover() {
  return (
    <div className="flex">
      {/* Left Column */}
      <div className="w-[280px] bg-[#1e2028] p-6 border-r border-[#333333]">
        <h3 className="text-white text-lg font-bold mb-2">Company</h3>
        <p className="text-[#9ca3af] text-sm leading-relaxed">
          Operationalize firmware management with enterprise-grade controls and
          automation, giving you the confidence to scale from prototype to
          production.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex-1 p-6">
        <div className="space-y-4">
          <Link
            to="/partners"
            className="flex items-start gap-4 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
          >
            <Handshake className="w-6 h-6 text-white mt-1" />
            <div className="flex-1">
              <h4 className="text-white text-base font-bold mb-1">Partners</h4>
              <p className="text-[#9ca3af] text-sm">
                Join industry leaders transforming the future of connected
                hardware.
              </p>
            </div>
          </Link>

          <Link
            to="/company"
            className="flex items-start gap-4 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
          >
            <Users className="w-6 h-6 text-white mt-1" />
            <div className="flex-1">
              <h4 className="text-white text-base font-bold mb-1">About Us</h4>
              <p className="text-[#9ca3af] text-sm">
                Meet the team empowering companies to build and scale connected
                devices without compromise
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Industries Popover Content
function IndustriesPopover() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-white text-lg font-bold mb-2">Industries</h3>
        <p className="text-[#9ca3af] text-sm">
          We're de-mystifying software distribution and device management for
          connected products across a variety of industries.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link
          to="/industry-energy-and-renewables"
          className="flex items-start gap-3 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
        >
          <Zap className="w-5 h-5 text-white mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h4 className="text-white text-sm font-bold mb-1">
              Energy & Renewables
            </h4>
            <p className="text-[#9ca3af] text-xs">
              Deploy energy applications with speed and confidence
            </p>
          </div>
        </Link>

        <Link
          to="/industry-industrial-iot"
          className="flex items-start gap-3 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
        >
          <Factory className="w-5 h-5 text-white mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h4 className="text-white text-sm font-bold mb-1">
              Industrial IoT
            </h4>
            <p className="text-[#9ca3af] text-xs">
              Optimize industrial operations with seamless software updates
            </p>
          </div>
        </Link>

        <Link
          to="/industry-telematics"
          className="flex items-start gap-3 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
        >
          <Truck className="w-5 h-5 text-white mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h4 className="text-white text-sm font-bold mb-1">Telematics</h4>
            <p className="text-[#9ca3af] text-xs">
              Turn fleet updates into your competitive edge
            </p>
          </div>
        </Link>

        <Link
          to="/industry-smarthomes"
          className="flex items-start gap-3 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
        >
          <Home className="w-5 h-5 text-white mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h4 className="text-white text-sm font-bold mb-1">Smart Homes</h4>
            <p className="text-[#9ca3af] text-xs">
              Enhance connected living with secure and reliable updates
            </p>
          </div>
        </Link>

        <Link
          to="/industry-consumer-electronics"
          className="flex items-start gap-3 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
        >
          <MonitorSmartphone className="w-5 h-5 text-white mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h4 className="text-white text-sm font-bold mb-1">
              Consumer Electronics
            </h4>
            <p className="text-[#9ca3af] text-xs">
              Deliver features faster while protecting your device fleet
            </p>
          </div>
        </Link>

        <Link
          to="/industry-health-and-wearables"
          className="flex items-start gap-3 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
        >
          <Watch className="w-5 h-5 text-white mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h4 className="text-white text-sm font-bold mb-1">
              Health & Wearables
            </h4>
            <p className="text-[#9ca3af] text-xs">
              Power next-gen health devices with fast and secure updates
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

// Resources Popover Content
function ResourcesPopover() {
  return (
    <div className="flex">
      {/* Left Column */}
      <div className="w-[280px] bg-[#1e2028] p-6 border-r border-[#333333]">
        <h3 className="text-white text-lg font-bold mb-2">Resources</h3>
        <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">
          Essential tools and insights to build, deploy, and scale your edge
          devices effectively.
        </p>

        <div className="bg-[#e5e7f7] rounded-lg p-4">
          <h4 className="text-[#5f51ff] text-sm font-bold mb-1">
            Beyond the Bench Podcast
          </h4>
          <p className="text-black text-xs mb-2">
            Conversations with leaders who've scaled innovative hardware and
            edge AI.
          </p>
          <Link
            to="/podcast-beyond-the-bench"
            className="text-[#5f51ff] text-xs font-medium inline-flex items-center gap-1"
          >
            Learn more <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 p-6">
        <div className="space-y-4">
          <a
            href="https://blog.peridio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
          >
            <BookOpen className="w-6 h-6 text-white mt-1" />
            <div className="flex-1">
              <h4 className="text-white text-base font-bold mb-1">Blog</h4>
              <p className="text-[#9ca3af] text-sm">
                Latest edge technology trends and technical insights for
                embedded development.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="flex items-start gap-4 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
          >
            <MessageSquare className="w-6 h-6 text-white mt-1" />
            <div className="flex-1">
              <h4 className="text-white text-base font-bold mb-1">
                Join our next Webinar
              </h4>
              <p className="text-[#9ca3af] text-sm">
                Industry experts sharing strategies for scaling next-generation
                connected devices.
              </p>
            </div>
          </a>

          <a
            href="https://blog.peridio.com/tag/webinars"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 hover:bg-[#262626] p-3 rounded-lg transition-colors -m-3"
          >
            <Play className="w-6 h-6 text-white mt-1" />
            <div className="flex-1">
              <h4 className="text-white text-base font-bold mb-1">
                Watch Previous Webinars
              </h4>
              <p className="text-[#9ca3af] text-sm">
                Watch past webinars with industry leaders on scaling
                next-generation connected devices.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

type NavContent = "platform" | "company" | "industries" | "resources" | null;

export default function Header() {
  const [activeNav, setActiveNav] = useState<NavContent>(null);
  const [isPopoverHovered, setIsPopoverHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showPopover = activeNav !== null || isPopoverHovered;

  const handleNavEnter = (nav: NavContent) => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveNav(nav);
  };

  const handleNavLeave = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Small delay to allow moving to popover
    timeoutRef.current = setTimeout(() => {
      if (!isPopoverHovered) {
        setActiveNav(null);
      }
      timeoutRef.current = null;
    }, 50);
  };

  const handlePopoverEnter = () => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsPopoverHovered(true);
  };

  const handlePopoverLeave = () => {
    setIsPopoverHovered(false);
    setActiveNav(null);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        background: "linear-gradient(0deg, rgba(0,0,0,0) 0%, #000000 100%)",
      }}
    >
      <div className="max-w-[900px] mx-auto relative">
        <div className="flex items-center justify-between h-[104px]">
          <PeridioLogo />

          <nav className="hidden md:flex items-center gap-5">
            <NavItem
              label="Platform"
              isActive={activeNav === "platform"}
              onMouseEnter={() => handleNavEnter("platform")}
              onMouseLeave={handleNavLeave}
            />

            <NavItem
              label="Company"
              isActive={activeNav === "company"}
              onMouseEnter={() => handleNavEnter("company")}
              onMouseLeave={handleNavLeave}
            />

            <NavItem
              label="Industries"
              isActive={activeNav === "industries"}
              onMouseEnter={() => handleNavEnter("industries")}
              onMouseLeave={handleNavLeave}
            />

            <NavItem
              label="Resources"
              isActive={activeNav === "resources"}
              onMouseEnter={() => handleNavEnter("resources")}
              onMouseLeave={handleNavLeave}
            />

            <a
              href="https://docs.peridio.com/"
              className="text-[rgb(194,194,194)] hover:text-white transition-colors text-[16px] font-space-grotesk"
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
              className="w-[90px] !text-[16px]"
            >
              <a
                href="https://console.peridio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="w-[92px] text-black !text-[16px]"
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>

        {showPopover && (
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[64px] w-[700px] bg-[#1e2028] border border-[#333333] rounded-lg overflow-hidden z-50 shadow-xl"
            onMouseEnter={handlePopoverEnter}
            onMouseLeave={handlePopoverLeave}
          >
            {activeNav === "platform" && <PlatformPopover />}
            {activeNav === "company" && <CompanyPopover />}
            {activeNav === "industries" && <IndustriesPopover />}
            {activeNav === "resources" && <ResourcesPopover />}
          </div>
        )}
      </div>
    </header>
  );
}
