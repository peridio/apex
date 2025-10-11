import { createFileRoute } from "@tanstack/react-router";
import InvestorsSection from "@/components/investors-section";
import NewsletterSection from "@/components/newsletter-section";
import PartnersInvestorsSection from "@/components/partners-investors-section";
import TrustedPartnerSection from "@/components/trusted-partner-section";

export const Route = createFileRoute("/company")({
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="max-w-[990px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          {/* Experience Pill */}
          <div className="flex justify-center mb-8">
            <div
              className="px-8 py-2 border-[0.5px] rounded-full"
              style={{ borderColor: "#35373B" }}
            >
              <span className="text-white font-space-grotesk text-[14px]">
                +60 years of combined experience
              </span>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4 font-montserrat">Our Team</h1>
          <p className="text-lg text-white font-space-grotesk">
            Experts in delivering distributed, connected products.
          </p>
        </div>

        {/* Employee Grid */}
        <div className="flex flex-wrap justify-center gap-[15px]">
          {employees.map((employee, idx) => (
            <EmployeeCard key={idx} employee={employee} />
          ))}
        </div>
      </div>

      <InvestorsSection />
      <TrustedPartnerSection />
      <PartnersInvestorsSection />
      <NewsletterSection />
    </div>
  );
}

interface Link {
  type: "linkedin" | "github";
  url: string;
}

interface Employee {
  name: string;
  title: string;
  image: string;
  prior?: string;
  description?: string;
  links: Link[];
}

const employees: Employee[] = [
  {
    name: "Bill Brock",
    title: "CEO",
    image: "/img/company/bill-brock.png",
    prior: "Prior: CTO/COO @ Very",
    description:
      "Transformed Very into a full-service IoT consultancy, and grew team from 20 to 100 over 5 years. Delivered > 50 connected products globally.",
    links: [{ type: "linkedin", url: "https://www.linkedin.com/in/bbrock25/" }],
  },
  {
    name: "Justin Schneck",
    title: "Chief Product Officer",
    image: "/img/company/justin-schneck.png",
    prior:
      "Prior: Engineering Fellow @ Very, Principal @ Letote, Lord & Taylor",
    description:
      "Co-Creator of the Nerves Project\nContributor to the Elixir language",
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/justinschneck/" },
      { type: "github", url: "https://github.com/mobileoverlord" },
    ],
  },
  {
    name: "Daniel Spofford",
    title: "CTO",
    image: "/img/company/daniel-spofford.png",
    prior: "Prior: Head of SW @ Very",
    description:
      "Expertise: Full-Stack, Cloud, Embedded Linux, DevOps Building for Scale",
    links: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/daniel-spofford-2307a655/",
      },
      { type: "github", url: "https://github.com/danielspofford" },
    ],
  },
  {
    name: "Cesar Rengifo",
    title: "Head of Design",
    image: "/img/company/cesar-rengifo.jpg",
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/cesartevisual/" },
    ],
  },
  {
    name: "Kristen Van Laren",
    title: "Head of Marketing",
    image: "/img/company/kristen-van-laren.png",
    links: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/kristenvanlaren/",
      },
    ],
  },
  {
    name: "Jason Wong",
    title: "Lead Software Engineer",
    image: "/img/company/jason-wong.jpg",
    links: [{ type: "github", url: "https://github.com/jasontwong" }],
  },
  {
    name: "Lee Reinhardt",
    title: "Lead Software Engineer",
    image: "/img/company/lee-reinhardt.jpg",
    links: [{ type: "github", url: "https://github.com/lee-reinhardt" }],
  },
  {
    name: "Brian Christu",
    title: "Fractional CFO",
    image: "/img/company/brian-christu.jpg",
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/brianchristu/" },
    ],
  },
  {
    name: "Ben Wald",
    title: "Investor & Board Member",
    image: "/img/company/ben-wald.png",
    links: [{ type: "linkedin", url: "https://www.linkedin.com/in/bwald/" }],
  },
  {
    name: "Ryan Prosser",
    title: "Investor & Board Member",
    image: "/img/company/ryan-prosser.png",
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/ryanprosser/" },
    ],
  },
  {
    name: "Sam Englebart",
    title: "Investor & Board Member",
    image: "/img/company/sam-englebart.jpg",
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/samenglebardt/" },
    ],
  },
  {
    name: "Jeff Brown",
    title: "Investor & Board Member",
    image: "/img/company/jeff-brown.jpg",
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/jeffbrown2k/" },
    ],
  },
];

interface EmployeeCardProps {
  employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div className="flex flex-col px-6 pt-8 pb-6 bg-transparent border border-fill-base-shade-3 rounded-2xl w-[295px]">
      {/* Image, Name, and Title Row */}
      <div className="flex gap-4 mb-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={employee.image}
            alt={employee.name}
            className="w-[50px] h-[50px] rounded-lg object-cover"
          />
        </div>

        {/* Name and Title */}
        <div className="flex flex-col justify-center">
          <h3 className="text-[18px] font-bold text-white font-montserrat mb-1">
            {employee.name}
          </h3>
          <p className="text-[14px] text-white font-space-grotesk">
            {employee.title}
          </p>
        </div>
      </div>

      {/* Prior */}
      {employee.prior && (
        <p className="text-[12px] text-text-tertiary font-space-grotesk mb-2">
          {employee.prior}
        </p>
      )}

      {/* Description */}
      {employee.description && (
        <p className="text-[12px] text-text-tertiary font-space-grotesk mb-4 whitespace-pre-line">
          {employee.description}
        </p>
      )}

      {/* Links */}
      <div className="flex gap-2 mt-auto">
        {employee.links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 px-4 py-2 text-[12px] font-space-grotesk text-white text-center bg-fill-base-shade-4 hover:bg-peridio-purple rounded transition-colors"
          >
            {link.type === "linkedin" ? "Linkedin" : "Github"}
          </a>
        ))}
      </div>
    </div>
  );
}
