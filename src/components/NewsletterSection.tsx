export default function NewsletterSection() {
  return (
    <section
      className="min-h-[300px] py-12"
      style={{ backgroundColor: "rgb(240, 245, 255)" }}
    >
      <div className="max-w-[900px] mx-auto px-4">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-[30px] font-bold font-space-grotesk mb-6 text-black">
              Maintain your edge
            </h2>
            <p className="text-[15px] leading-[1.4] font-space-grotesk text-gray-600">
              Subscribe and be the first to receive our latest insights, best
              practices, and success stories on software distribution and device
              management for connected products.
            </p>
          </div>

          {/* Right Column - Form Placeholder */}
          <div>
            <div className="bg-gray-300 h-[200px] rounded flex items-center justify-center text-gray-500">
              [Form Iframe Placeholder]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
