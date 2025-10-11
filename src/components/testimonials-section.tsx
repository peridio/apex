import React, { useState, useEffect } from "react";

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  logo?: string;
  logoComponent?: (props?: {
    height?: number;
    color?: string;
  }) => React.JSX.Element;
  company: string;
}

interface TestimonialsSectionProps {
  label?: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  label = "Trusted by industry leaders",
  testimonials,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalTime] = useState(10000); // 10 seconds
  const testimonialCount = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex, intervalTime, testimonialCount]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialCount) % testimonialCount
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full relative">
      <div className="max-w-[900px] mx-auto px-4">
        <div className="grid grid-cols-[200px_1fr] gap-8 items-start">
          {/* Left: Label */}
          <div>
            <h2 className="text-[28px] leading-[1.2] font-bold font-montserrat text-white tracking-[-0.05em]">
              {label}
            </h2>
          </div>

          {/* Right: Testimonial Card */}
          <div
            className="relative rounded-2xl p-10"
            style={{ backgroundColor: "rgba(28, 28, 34, 1)", height: "345px" }}
          >
            {/* Navigation Arrows */}
            <div className="absolute top-8 right-8 flex gap-4">
              <button
                onClick={goToPrevious}
                className="w-8 h-8 flex items-center justify-center text-white hover:opacity-70 transition-opacity"
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
                className="w-8 h-8 flex items-center justify-center text-white hover:opacity-70 transition-opacity"
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
            <div
              className="mb-6 flex items-center"
              style={{ width: "145px", height: "40px" }}
            >
              {currentTestimonial.logoComponent ? (
                <div className="text-white w-full h-auto">
                  <currentTestimonial.logoComponent
                    height={40}
                    color="#ffffff"
                  />
                </div>
              ) : (
                <img
                  src={currentTestimonial.logo}
                  alt={currentTestimonial.company}
                  className="w-full h-auto object-contain brightness-0 invert"
                />
              )}
            </div>

            {/* Quote */}
            <p className="text-[18px] leading-[1.5] font-space-grotesk text-white mb-8">
              “{currentTestimonial.quote}"
            </p>

            {/* Person Info */}
            <div>
              <p className="text-[16px] font-bold font-space-grotesk text-white mb-1">
                {currentTestimonial.name}
              </p>
              <p
                className="text-[14px] font-space-grotesk"
                style={{ color: "#A9A9A9" }}
              >
                {currentTestimonial.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
