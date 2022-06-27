import { SVGProps } from 'react'

const AwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)" stroke="#DDD" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15.975a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
      <path d="M8.21 14.865 7 23.975l5-3 5 3-1.21-9.12" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .975)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default AwardIcon
