import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  border-bottom: 1px solid #dadbf1;
  box-shadow: 0px 1px 0px #dadbf1;
`
export const NavSubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`
export const Menu = styled.img`
  cursor: pointer;
`
export const Logo = styled.img``
export const UserSubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`
export const UserDetails = styled.div``
export const NameText = styled.div`
  font-family: 'PoppinsSemiBold';
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  color: #373e97;
`
export const UserDesignation = styled(NameText)`
  font-family: 'PoppinsRegular';
  color: #666666;
`
export const UserImage = styled.img`
  border-radius: 20px;
`
