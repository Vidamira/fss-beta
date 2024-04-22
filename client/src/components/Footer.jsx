import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '/fs-logo.png';

const StyledFooter = styled.footer`
  display: flex; 
  justify-content: space-between; 
  align-items: flex-start; 
  padding: 4rem 2rem;
  background-color: #000000; 
  color: #f0f0f0; 
`;

const StyledLogoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StyledLogo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
`;

const StyledFooterLink = styled(Link)`
  color: inherit; 
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #E79800; 
  }
`;

const StyledFooterLinkContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogoInfo>
        <StyledLogo src={logo} alt="Company Logo" />
        <p>© 2024 Faltstein Solutions</p>
      </StyledLogoInfo>
      <div style={{ display: 'flex' }}> 
        <div>
          <h4>About Us</h4>
          <StyledFooterLinkContainer>
            <li>
              <StyledFooterLink to="/about">About Us</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/agency">Agency</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/projects">Projects</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/blog">Blog</StyledFooterLink>
            </li>
          </StyledFooterLinkContainer>
        </div>
        <div>
          <h4>Legal</h4>
          <StyledFooterLinkContainer>
            <li>
              <StyledFooterLink to="/cookie-policy">Cookie Policy</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/privacy-policy">Privacy Policy</StyledFooterLink>
            </li>
            <li>
              <StyledFooterLink to="/terms-of-service">Terms of Service</StyledFooterLink>
            </li>
          </StyledFooterLinkContainer>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;


