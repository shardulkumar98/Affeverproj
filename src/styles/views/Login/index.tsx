import styled from 'styled-components'

export const Maincontainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`

export const LeftWrapper = styled.div`
  display: flex;
  max-width: 45%;
  width: 100%;
`

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 372px;
  width: 100%;
  gap: 54px;
`

export const RightWrapper = styled.div`
  max-width: 55%;
  width: 100%;
`
export const Logo = styled.img`
  height: 126px;
  width: 109px;
`
export const LoginDeatails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .ant-input {
    max-width: 322px;
    width: 100%;
    border: 1px solid #dadbf1;
    border-radius: 24px;
    padding: 10px 24px;
    outline: none;
    ::placeholder {
      font-family: 'PoppinsMedium';
      font-size: 16px;
      line-height: 24px;
      color: #999999;
    }
  }
`
export const HeadingText = styled.div`
  font-family: 'PoppinsBold';
  font-size: 36px;
  line-height: 54px;
  padding: 10px 0;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ForgotText = styled.div`
  text-align: right;
  font-family: 'PoppinsMedium';
  font-size: 14px;
  line-height: 124%;
  letter-spacing: 0.005em;
  color: #a8a8df;
  cursor: pointer;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100vh;
`
