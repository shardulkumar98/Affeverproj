import { SVGProps } from 'react'

const CalanderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19 4.975H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2ZM16 2.975v4M8 2.975v4M3 10.975h18"
      stroke="#DDD"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CalanderIcon
