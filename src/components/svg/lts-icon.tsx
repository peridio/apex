interface LtsIconProps {
  width?: number
  height?: number
  className?: string
}

export function LtsIcon({ width = 24, height = 24, className = 'text-white' }: LtsIconProps) {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 24"
      height={height}
      width={width}
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <g>
        <g clipPath="url(#lts-icon-clip)">
          <path
            fill="currentColor"
            d="M17 13V3h-7v17.766a22 22 0 0 0 3.328-2.141Q17 15.749 17 13m3-12v12q0 1.344-.523 2.664a10 10 0 0 1-1.297 2.344A14.5 14.5 0 0 1 16.336 20a22 22 0 0 1-1.977 1.61 25 25 0 0 1-1.89 1.21 27 27 0 0 1-1.399.774q-.414.203-.664.312A.9.9 0 0 1 10 24a.9.9 0 0 1-.406-.094 18 18 0 0 1-.664-.312 27 27 0 0 1-1.399-.774 25 25 0 0 1-1.89-1.21A22 22 0 0 1 3.664 20a14.5 14.5 0 0 1-1.844-1.992 10 10 0 0 1-1.297-2.344A7.2 7.2 0 0 1 0 13V1Q0 .594.297.297A.96.96 0 0 1 1 0h18q.406 0 .703.297A.96.96 0 0 1 20 1"
          />
        </g>
        <defs>
          <clipPath id="lts-icon-clip">
            <path fill="currentColor" d="M20 0v24H0V0z" />
          </clipPath>
        </defs>
      </g>
    </svg>
  )
}
