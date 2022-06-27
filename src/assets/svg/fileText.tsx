import { SVGProps } from 'react'

const FileTextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14 2.975H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-12l-6-6Z"
      stroke="#DDD"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2.975v6h6M16 13.975H8M16 17.975H8M10 9.975H8"
      stroke="#DDD"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default FileTextIcon
