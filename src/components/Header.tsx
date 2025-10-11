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
// import { Button } from "./Button";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

function PeridioLogo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      {/* Icon */}
      <svg
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19.932 20"
        height="28"
        width="28"
        className="text-white"
        role="presentation"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M9.966 20c5.504 0 9.966-4.477 9.966-10S15.47 0 9.966 0 0 4.477 0 10c0 3.974 2.31 7.407 5.657 9.02a.776.776 0 0 1 .058-.094c1.082-1.496 1.807-2.95 2.313-4.525-2.092-.717-3.315-2.212-4.01-3.567a9.41 9.41 0 0 1-.89-2.694 9.087 9.087 0 0 1-.037-.267v-.004a.77.77 0 1 1 1.53-.152 6.006 6.006 0 0 0 .133.71c.111.453.304 1.065.63 1.7a6.164 6.164 0 0 0 1.098 1.537 10.22 10.22 0 0 1-.167-1.088 17.392 17.392 0 0 1 .008-3.205v-.007a.77.77 0 1 1 1.528.171v.002l-.021.231a15.869 15.869 0 0 0 .014 2.65c.076.742.224 1.436.472 1.953.056.117.114.22.174.309.202-.916.354-1.884.48-2.933a.77.77 0 1 1 1.525.183 31.816 31.816 0 0 1-.502 3.074c.096-.061.196-.136.3-.227.43-.38.838-.959 1.197-1.61a15.858 15.858 0 0 0 1.12-2.654V8.51a.768.768 0 1 1 1.472.443v.002a17.485 17.485 0 0 1-.326.94 16.19 16.19 0 0 1-.921 2.016 9.957 9.957 0 0 1-.669 1.062 6.026 6.026 0 0 0 1.859-1.075 7.836 7.836 0 0 0 1.553-1.765l.091-.15.001-.002a.767.767 0 0 1 1.042-.305c.373.205.51.673.305 1.047a8.39 8.39 0 0 1-.52.784 9.374 9.374 0 0 1-1.491 1.578c-1.237 1.03-3.08 1.971-5.475 1.664a17.228 17.228 0 0 1-2.4 4.84 9.94 9.94 0 0 0 2.835.41Z"
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </svg>
      {/* Wordmark */}
      <svg
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0.259 0.243 68.256 15.514"
        height="22"
        width="95"
        className="text-white"
        role="presentation"
        aria-hidden="true"
      >
        <g>
          <path
            fill="currentColor"
            d="M5.351 10.667c3.348 0 6.391-1.16 6.391-4.784 0-2.749-2.536-4.276-6.066-4.276H1.395c-.69 0-1.136.122-1.136.652 0 .672 1.055.712 1.055 1.567v9.406c0 .855-1.055.876-1.055 1.568 0 .53.466.651 1.136.651h2.86c.67 0 1.137-.122 1.137-.651 0-.692-1.055-.713-1.055-1.568v-2.565H5.35Zm-.345-7.635h.345c1.806 0 3.084 1.405 3.084 3.36 0 2.137-1.521 2.87-3.144 2.87h-.954V3.867c0-.509.142-.835.67-.835Z"
          />
          <path
            fill="currentColor"
            d="M21.506 12.112c-.203 0-.366.082-.569.286-.73.753-1.38 1.099-2.333 1.099-1.806 0-3.023-1.242-3.287-3.217h5.276c.994 0 1.44-.427 1.44-1.425 0-2.097-1.522-3.848-4.301-3.848-3.145 0-5.275 2.321-5.275 5.518 0 3.135 2.15 5.211 5.437 5.211 2.009 0 3.45-1.099 3.997-2.402.081-.224.122-.428.122-.631 0-.367-.223-.59-.508-.59ZM17.407 6.27c1.36 0 1.846 1.018 1.846 2.342a2.4 2.4 0 0 1-.06.55h-3.937c.082-1.69.934-2.892 2.151-2.892Z"
          />
          <path
            fill="currentColor"
            d="M24.51 15.451h2.861c.63 0 1.055-.122 1.055-.61 0-.632-1.014-.672-1.014-1.487V9.751c0-1.486.507-1.812 1.096-1.812.547 0 .73.163 1.258.163.913 0 1.542-.53 1.542-1.588 0-.896-.508-1.548-1.583-1.548-.873 0-1.928.632-2.475 1.975h-.082v-.936c-.02-.713-.203-1.018-.913-1.018-.933 0-3.002.753-3.002 1.344 0 .427.304.529.852.855.203.142.385.386.365.895v5.273c0 .815-1.014.855-1.014 1.487 0 .488.426.61 1.055.61Z"
          />
          <path
            fill="currentColor"
            d="M34.567 3.847c1.055 0 1.846-.652 1.846-1.69 0-1.038-.79-1.69-1.846-1.69-1.035 0-1.846.652-1.846 1.69 0 1.038.812 1.69 1.846 1.69ZM33.248 15.45h2.861c.63 0 1.055-.122 1.055-.61 0-.632-1.014-.672-1.014-1.487V6.025c-.02-.631-.305-1.038-1.177-1.038-.913 0-2.982.59-2.982 1.242 0 .407.263.468.73.814.304.224.487.489.487 1.1v5.211c0 .815-1.015.855-1.015 1.487 0 .488.426.61 1.055.61Z"
          />
          <path
            fill="currentColor"
            d="M43.04 15.757c1.4 0 2.517-.672 3.146-1.629h.08v.265c0 1.14.143 1.364.833 1.364 1.197 0 3.003-.692 3.003-1.364 0-.387-.264-.51-.73-.693-.346-.122-.508-.366-.508-.834V1.282C48.844.61 48.519.243 47.789.243c-.934 0-3.084.631-3.084 1.242 0 .326.142.428.67.753.364.245.567.53.567 1.202v2.239c-.67-.448-1.46-.713-2.536-.713-3.084 0-5.072 2.28-5.072 5.497s2.049 5.294 4.707 5.294Zm1.015-1.771c-1.643 0-2.718-2.484-2.698-4.724.02-1.934.77-2.931 2.008-2.931 1.38 0 2.557 1.69 2.557 3.827v1.262c0 1.486-.75 2.566-1.867 2.566Z"
          />
          <path
            fill="currentColor"
            d="M53.549 3.847c1.055 0 1.846-.652 1.846-1.69 0-1.038-.791-1.69-1.846-1.69-1.035 0-1.846.652-1.846 1.69 0 1.038.811 1.69 1.846 1.69ZM52.23 15.45h2.86c.63 0 1.056-.122 1.056-.61 0-.632-1.015-.672-1.015-1.487V6.025c-.02-.631-.304-1.038-1.176-1.038-.913 0-2.983.59-2.983 1.242 0 .407.264.468.73.814.305.224.487.489.487 1.1v5.211c0 .815-1.014.855-1.014 1.487 0 .488.426.61 1.055.61Z"
          />
          <path
            fill="currentColor"
            d="M62.834 15.757c3.246 0 5.681-2.26 5.681-5.558s-2.435-5.212-5.498-5.212c-3.145 0-5.702 2.24-5.722 5.558.02 3.176 2.354 5.212 5.539 5.212Zm.548-1.364c-1.948 0-2.942-3.054-2.942-5.294 0-1.69.67-2.768 1.988-2.768 1.948 0 2.942 3.053 2.942 5.252 0 1.73-.71 2.81-1.988 2.81Z"
          />
        </g>
      </svg>
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
    <header className="bg-black border-b border-fill-base-shade-1">
      <div className="max-w-[900px] mx-auto relative">
        <div className="flex items-center justify-between h-[100px]">
          {/* Logo */}
          <PeridioLogo />

          {/* Navigation */}
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

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline-transparent-secondary"
              className="w-[90px]"
            >
              <a
                href="https://console.peridio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in
              </a>
            </Button>
            <Button asChild variant="secondary" className="w-[92px] text-black">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>

        {/* Shared Popover */}
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
