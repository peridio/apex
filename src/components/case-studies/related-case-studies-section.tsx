import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export interface CaseStudy {
  image: string
  industry: string
  company: string
  description: string
  link: string
}

interface RelatedCaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export function RelatedCaseStudiesSection({ caseStudies }: RelatedCaseStudiesSectionProps) {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap lg:gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              image={study.image}
              industry={study.industry}
              company={study.company}
              description={study.description}
              link={study.link}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline-transparent-primary" size="lg" className="w-[230px]">
            <Link to="/case-studies">View all Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function CaseStudyCard({ image, industry, company, description, link }: CaseStudy) {
  return (
    <Link
      to={link}
      className="group block h-[365px] w-[300px] overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-[180px] w-full overflow-hidden">
        <img
          src={image}
          alt={company}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Industry Tag - Positioned in bottom-left corner */}
        <div className="absolute bottom-3 left-3">
          <span className="font-space-grotesk inline-block rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-gray-700">
            {industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex h-[185px] flex-col p-6">
        {/* Company Name */}
        <h3 className="font-montserrat mb-3 text-[24px] font-bold text-black">{company}</h3>

        {/* Description */}
        <p className="font-space-grotesk text-[14px] leading-[1.5] text-gray-600">{description}</p>
      </div>
    </Link>
  )
}
