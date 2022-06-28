import { MainContainer, Wrapper } from 'styles/components/Sidebar'
import data from 'components/SideBar/data'
import SidebarCard from 'components/Cards/Sidebar'
import { useState } from 'react'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MainContainer>
      <Wrapper>
        {data?.map((item) => (
          <SidebarCard
            key={item.id}
            image={item?.icon}
            title={item?.title}
            path={item?.path}
            showModal={(value: boolean) => setIsOpen(value)}
          />
        ))}
      </Wrapper>
      {isOpen && (
        <div>
          <div>Comming Soon</div>
        </div>
      )}
    </MainContainer>
  )
}

export default SideBar
