import React, { useState, useEffect } from 'react'
import { FellowesLogo } from '@/components/svg/fellowes-logo'
import { GraniteLogo } from '@/components/svg/granite-logo'
import { TellyLogo } from '@/components/svg/telly-logo'
import { VarisciteLogo } from '@/components/svg/variscite-logo'
import { VeryLogo } from '@/components/svg/very-logo'

export interface Testimonial {
  quote: string
  name: string
  title: string
  logo?: string
  company: string
}

interface TestimonialsSectionProps {
  label?: string
  testimonials: Testimonial[]
}

export default function TestimonialsSection({
  label = 'Trusted by industry leaders',
  testimonials,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [intervalTime] = useState(10000) // 10 seconds
  const testimonialCount = testimonials.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [currentIndex, intervalTime, testimonialCount])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialCount) % testimonialCount)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-[440px] px-4 md:max-w-[725px] lg:max-w-[900px]">
        <div className="grid items-start gap-8 lg:grid-cols-[200px_1fr]">
          <div>
            <h2 className="font-montserrat text-[36px] leading-[1.2] font-bold tracking-[-0.05em] text-white lg:text-[28px]">
              {label}
            </h2>
          </div>

          <div
            className="relative h-[345px] rounded-2xl p-6 sm:p-10"
            style={{ backgroundColor: 'rgba(28, 28, 34, 1)' }}
          >
            {/* Navigation Arrows */}
            <div className="absolute top-8 right-8 flex gap-4">
              <button
                onClick={goToPrevious}
                className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-70"
                aria-label="Previous testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path
                    d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="flex h-8 w-8 items-center justify-center text-white transition-opacity hover:opacity-70"
                aria-label="Next testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="mb-6 flex items-center" style={{ width: '145px', height: '40px' }}>
              {TESTIMONIAL_COMPANY_LOGOS[currentTestimonial.company] ? (
                <div className="h-auto w-full text-white">
                  {TESTIMONIAL_COMPANY_LOGOS[currentTestimonial.company]}
                </div>
              ) : (
                <img
                  src={currentTestimonial.logo}
                  alt={currentTestimonial.company}
                  className="h-auto w-full object-contain brightness-0 invert"
                />
              )}
            </div>

            {/* Quote */}
            <p className="font-space-grotesk mb-6 text-[18px] leading-[1.5] text-white">
              “{currentTestimonial.quote}"
            </p>

            {/* Person Info */}
            <div>
              <p className="font-space-grotesk mb-1 text-[18px] font-bold text-white">
                {currentTestimonial.name}
              </p>
              <p className="font-space-grotesk text-[16px]" style={{ color: '#A9A9A9' }}>
                {currentTestimonial.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TESTIMONIAL_COMPANY_LOGOS: Record<string, React.ReactNode> = {
  Granite: <GraniteLogo className="h-[40px] w-[145px] text-white" />,
  Fellowes: <FellowesLogo className="h-[40px] w-[145px] text-white" />,
  Variscite: <VarisciteLogo className="h-[40px] w-[145px] text-white" />,
  Very: <VeryLogo className="h-[40px] w-[145px] text-white" />,
  Telly: <TellyLogo className="h-[40px] w-[145px] -translate-x-[20px] text-white" />,
}
