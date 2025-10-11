interface WhySectionProps {
  title: string
  paragraphs: string[]
  boldText?: string[]
  listItems: string[]
  concludingStatement: string
  height?: string
}

export default function WhySection({
  title,
  paragraphs,
  boldText = [],
  listItems,
  concludingStatement,
  height = 'h-[470px]',
}: WhySectionProps) {
  return (
    <section
      className={`flex ${height} pt-10`}
      style={{
        background: 'linear-gradient(360deg, #003832 0%, #000000 44.627192982456144%)',
      }}
    >
      <div className="mx-auto max-w-[440px] px-6 sm:px-0 md:max-w-[700px] lg:max-w-[900px]">
        <div>
          <h2 className="font-montserrat mb-6 text-[22px] font-[700] text-white">{title}</h2>

          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`font-space-grotesk mb-${index === 0 ? '5' : '8'} text-[16px] leading-[1.6] text-white`}
            >
              {index < boldText.length && boldText[index] ? (
                <>
                  {paragraph.split(boldText[index])[0]}
                  <strong>{boldText[index]}</strong>
                  {paragraph.split(boldText[index])[1]}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}

          <ul className="mb-8 list-disc space-y-1 pl-6">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="font-space-grotesk mb-1 text-[16px] leading-[1.6] text-white"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="font-space-grotesk text-[16px] font-bold text-white">
            {concludingStatement}
          </p>
        </div>
      </div>
    </section>
  )
}
