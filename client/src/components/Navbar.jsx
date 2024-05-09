import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '/fs-logo.png';
import StyledButton from './StyledButton';

const StyledNav = styled.nav`
  width: auto;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #0f0f0f; 
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  z-index: 999;
`;

const StyledNavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 0.8rem 1rem;
  font-weight: bold;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #E79800;
  }
`;

const StyledLogo = styled.img`
  width: 100px;
  height: auto;
  margin-right: 2rem; 
`;

const StyledNavLinksContainer = styled.div`
  display: flex; 
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <StyledLogo src={logo} alt="Company Logo" />
      </Link>
      <StyledNavLinksContainer>

        {/* <StyledNavLink to="/agency">Agency</StyledNavLink> */}
        {/* <StyledNavLink to="/projects">Projects</StyledNavLink> */}
        {/* <StyledNavLink to="/blog">Blog</StyledNavLink> */}
      
      </StyledNavLinksContainer>
      <div>
        <StyledButton as={Link} to={"https://calendly.com/yannick-faltin/30min?month=2024-05&date=2024-05-11"}>Contact</StyledButton>
      </div>
    </StyledNav>
  );
};

export default Navbar;
