import { SVGProps } from 'react'

const SmileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 22.974c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.523 4.477 10 10 10Z"
      stroke="#6970C9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14.975s1.5 2 4 2 4-2 4-2M9 9.975h.01M15 9.975h.01"
      stroke="#6970C9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SmileIcon
