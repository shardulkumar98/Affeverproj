import { SVGProps } from 'react'

const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={23} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9 21.974s8-4 8-10v-7l-8-3-8 3v7c0 6 8 10 8 10Z"
      stroke="#DDD"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ShieldIcon
