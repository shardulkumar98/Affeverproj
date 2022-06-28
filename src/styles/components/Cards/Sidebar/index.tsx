import styled from 'styled-components'

interface IActive {
  active?: boolean
}
export const MyPlanSection = styled.div<IActive>`
  display: flex;
  gap: 10px;
  margin: 30px 22px;
  cursor: pointer;
  align-items: center;
`
export const PlanImageSection = styled.img`
  height: 22px;
`

export const PlanTextSection = styled.div<IActive>`
  font-family: 'PoppinsMedium';
  letter-spacing: 0.3px;
  font-size: 14px;
  line-height: 21px;
  color: ${({ active }) => (active ? '#6970C9' : '#DDDDDD')};
`
export const Icon = styled.div<IActive>`
  /* border: ${({ active }) => (active ? '1px solid rgba(255, 255, 255, 0.3)' : 'none')}; */
  /* background: ${({ active }) => (active ? '#fff' : '#000')}; */
  /* border: ${({ active }) => (active ? '2px solid #ffffff' : 'none')}; */
  /* box-shadow: ${({ active }) => (active ? '0px 24px 48px rgba(22, 29, 36, 0.22)' : 'none')}; */
  /* padding: 5px;
  padding-bottom: 2px;

  border-radius: 15px;
  box-sizing: border-box; */
  /* box-shadow: 0px 24px 48px rgba(22, 29, 36, 0.22); */
  /* backdrop-filter: blur(158px); */
  .sideIcon {
    /* fill: ${({ active }) => (active ? '#fff' : '#737B7D')}; */
    /* background: ${({ active }) => (active ? ' linear-gradient(180deg, #4472F5 0%, #1B49CC 100%)' : 'none')}; */
  }
`
export const IconSection = styled.div<IActive>`
  /* background: ${({ active }) => (active ? '#fff' : 'none')}; */
  /* border: ${({ active }) => (active ? ' 2px solid #FFFFFF;' : 'none')}; */
  /* border-radius: 18px; */
  /* box-shadow: 0px 24px 48px rgba(22, 29, 36, 0.22); */
`
