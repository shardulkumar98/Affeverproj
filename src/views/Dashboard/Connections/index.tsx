import { Input } from 'antd'
import React from 'react'
import { MainContainer, Wrapper, Headcontainer, TableWrapper, HeadText } from 'styles/views/Dashboard/Connections'
// import Table from 'components/Tabel'
import { Table } from 'antd'
import { data, columns } from 'views/Dashboard/Connections/data'

const Connections = () => {
  const { Search } = Input

  const onSearch = (value: string) => console.log(value)

  return (
    <MainContainer>
      <Wrapper>
        <Headcontainer>
          <HeadText>Connections</HeadText>
          <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </Headcontainer>

        <TableWrapper>
          {/* <Table dataSource={data} columns={columns} /> */}
          <Table dataSource={data} columns={columns} />;
        </TableWrapper>
      </Wrapper>
    </MainContainer>
  )
}

export default Connections
