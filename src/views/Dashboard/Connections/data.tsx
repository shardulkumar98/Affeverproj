import { ReactElement } from 'react'
import DotsIcon from 'assets/svg/dots'

interface IData {
  id: React.Key
  connectionName: string
  mobileNumber: number
  datecreated: string
  actions: ReactElement
}

const data: IData[] = [
  {
    id: '0',
    connectionName: 'Aafreen',
    mobileNumber: 9008787430,
    datecreated: '22-01-2021',
    actions: <DotsIcon />,
  },
  {
    id: '1',
    connectionName: 'Bharat',
    mobileNumber: 9008787430,
    datecreated: '22-01-2021',
    actions: <DotsIcon />,
  },
  {
    id: '2',
    connectionName: 'Chandresh',
    mobileNumber: 9008787430,
    datecreated: '22-01-2021',
    actions: <DotsIcon />,
  },
  {
    id: '3',
    connectionName: 'Aafreen',
    mobileNumber: 9008787430,
    datecreated: '22-01-2021',
    actions: <DotsIcon />,
  },
  {
    id: '4',
    connectionName: 'Bharat',
    mobileNumber: 9008787430,
    datecreated: '22-01-2021',
    actions: <DotsIcon />,
  },
  {
    id: '5',
    connectionName: 'Chandresh',
    mobileNumber: 9008787430,
    datecreated: '22-01-2021',
    actions: <DotsIcon />,
  },
  {
    id: '6',
    connectionName: 'Aafreen',
    mobileNumber: 9008787430,
    datecreated: '22-01-2021',
    actions: <DotsIcon />,
  },
  {
    id: '7',
    connectionName: 'Bharat',
    mobileNumber: 9008787430,
    datecreated: '22-01-2021',
    actions: <DotsIcon />,
  },
  {
    id: '8',
    connectionName: 'Chandresh',
    mobileNumber: 9008787430,
    datecreated: '22-01-2021',
    actions: <DotsIcon />,
  },
  {
    id: '9',
    connectionName: 'Aafreen',
    mobileNumber: 9008787430,
    datecreated: '22-01-2021',
    actions: <DotsIcon />,
  },
  // {
  //   id: '10',
  //   connectionName: 'Bharat',
  //   mobileNumber: 9008787430,
  //   datecreated: '22-01-2021',
  //   actions: <DotsIcon />,
  // },
]

const columns = [
  {
    title: '#',
    dataIndex: 'id',
  },
  {
    title: 'Connection name',
    dataIndex: 'connectionName',
  },
  {
    title: 'Mobile no.',
    dataIndex: 'mobileNumber',
  },
  {
    title: 'Date created',
    dataIndex: 'dateCreated',
  },
  {
    title: 'Actions',
    dataIndex: 'action',
  },
]

export { data, columns }
