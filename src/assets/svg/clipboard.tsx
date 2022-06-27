import { SVGProps } from 'react'

const ClipboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16 4.975h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h2"
      stroke="#DDD"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 2.975H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
      stroke="#DDD"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ClipboardIcon
