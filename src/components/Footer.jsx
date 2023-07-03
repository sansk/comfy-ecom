import { Wrapper as FooterContainer } from "../styled-components/Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>Comfy Sloth | </span>
      </h5>
      <h5> All rights reserved.</h5>
    </FooterContainer>
  );
};

export default Footer;
