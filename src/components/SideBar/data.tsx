import LayoutIcon from 'assets/svg/layout'
import SmileIcon from 'assets/svg/smile'
import ClipboardIcon from 'assets/svg/clipboard'
import ShieldIcon from 'assets/svg/shield'
import CalanderIcon from 'assets/svg/calander'
import AwardIcon from 'assets/svg/award'
import FileIcon from 'assets/svg/fileText'
import IssuanceIcon from 'assets/svg/issuance'

interface IData {
  id: number
  icon: any
  title: string
  path?: string
}

const data: IData[] = [
  {
    id: 0,
    icon: <LayoutIcon />,
    title: 'Dashboard',
  },
  {
    id: 1,
    icon: <SmileIcon />,
    title: 'Connections',
    path: '/connections',
  },
  {
    id: 2,
    icon: <CalanderIcon />,
    title: 'Schema',
  },
  {
    id: 3,
    icon: <IssuanceIcon />,
    title: 'Issuance',
  },
  {
    id: 4,
    icon: <ShieldIcon />,
    title: 'Verifications',
  },
  {
    id: 5,
    icon: <ClipboardIcon />,
    title: 'Workflow',
  },
  {
    id: 6,
    icon: <AwardIcon />,
    title: 'Value added services',
  },
  {
    id: 7,
    icon: <FileIcon />,
    title: 'Wallet',
  },
]

export default data
