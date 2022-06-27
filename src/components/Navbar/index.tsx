import LogoImage from "assets/images/affverse-logo2.png";
import MenuIcon from "assets/images/menu.png";
import UserAvatar from "assets/images/user-image.png";
import {
  MainContainer,
  NavSubContainer,
  Menu,
  Logo,
  UserSubContainer,
  UserDetails,
  NameText,
  UserDesignation,
  UserImage,
} from "styles/components/Navbar";

const Navbar = () => {
  return (
    <MainContainer>
      <NavSubContainer>
        <Menu src={MenuIcon} />
        <Logo src={LogoImage} />
      </NavSubContainer>
      <UserSubContainer>
        <UserDetails>
          <NameText>John Doe</NameText>
          <UserDesignation>Admin</UserDesignation>
        </UserDetails>
        <UserImage src={UserAvatar} />
      </UserSubContainer>
    </MainContainer>
  );
};

export default Navbar;
