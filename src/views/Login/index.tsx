import { useForm } from 'react-hook-form'
import MainLogo from 'assets/images/affverse-logo.png'
import TextInput from 'components/FormElements/TextInput'
import Banner from 'assets/images/banner-image.png'
import Button from 'components/Button'
import {
  Maincontainer,
  LeftWrapper,
  SubWrapper,
  RightWrapper,
  Logo,
  LoginDeatails,
  HeadingText,
  Form,
  ForgotText,
  BannerImage,
} from 'styles/views/Login/index'

const LogIn = () => {
  const { control } = useForm()
  return (
    <Maincontainer>
      <LeftWrapper>
        <SubWrapper>
          <Logo src={MainLogo} />
          <LoginDeatails>
            <HeadingText>Log in to Affverse</HeadingText>
            <Form>
              <TextInput name="username" placeholder="Username" control={control} />
              <TextInput name="password" placeholder="Password" control={control} />
              <ForgotText>Forgot password?</ForgotText>
              <Button label="Login" />
            </Form>
          </LoginDeatails>
        </SubWrapper>
      </LeftWrapper>
      <RightWrapper>
        <BannerImage src={Banner} />
      </RightWrapper>
    </Maincontainer>
  )
}

export default LogIn
