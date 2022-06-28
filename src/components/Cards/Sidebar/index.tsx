import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MyPlanSection, PlanTextSection, Icon, IconSection } from 'styles/components/Cards/Sidebar'

export interface ICardProps {
  title?: string
  image?: string
  path?: string
  showModal: (value: boolean) => void
}

const SidebarCard: React.FC<ICardProps> = ({ image, title, path, showModal }) => {
  const navigate = useNavigate()
  const location = useLocation()
  let active = false

  if (location.pathname === path) {
    active = true
  }

  return (
    <MyPlanSection
      onClick={() => {
        if (path) {
          navigate(`${path}`)
        } else {
          showModal(true)
        }
      }}
    >
      <IconSection active={active}>
        {
          <Icon active={active} className="sideIcon">
            {image}
          </Icon>
        }
      </IconSection>
      <PlanTextSection active={active}>{title}</PlanTextSection>
    </MyPlanSection>
  )
}

export default SidebarCard
