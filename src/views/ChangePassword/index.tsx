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
  BannerImage,
} from 'styles/views/ChangePassword'

const ChangePassword = () => {
  const { control } = useForm()
  return (
    <Maincontainer>
      <LeftWrapper>
        <SubWrapper>
          <Logo src={MainLogo} />
          <LoginDeatails>
            <HeadingText>Change password</HeadingText>
            <Form>
              <TextInput name="newPassword" placeholder="New password" control={control} />
              <TextInput name="confirmPassword" placeholder="Confirm password" control={control} />
              <Button label="Continue" />
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

export default ChangePassword
