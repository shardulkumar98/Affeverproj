import React from 'react'
import { Table } from 'antd'
interface ITableProps {
  data: Array<IData>
  columns: Array<IColumns>
}
export interface IStatus {
  title: string
}
interface IData {
  key: React.Key
  connectionName?: string
  mobileNumber?: string
  datecreated?: string
  actions?: string
}
interface IColumns {
  title: string
  dataIndex: string
}

const TableComponent: React.FC<ITableProps> = ({ data, columns }: ITableProps) => (
  <Table columns={columns} dataSource={data} />
)

export default TableComponent
