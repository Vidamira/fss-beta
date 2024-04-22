import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '/fs-logo.png';
import StyledButton from './StyledButton';

const StyledNav = styled.nav`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #000000; 
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
        <StyledNavLink to="/agency">Agency</StyledNavLink>
        <StyledNavLink to="/projects">Projects</StyledNavLink>
        <StyledNavLink to="/blog">Blog</StyledNavLink>
      </StyledNavLinksContainer>
      <div>
        <StyledButton>Contact</StyledButton>
      </div>
    </StyledNav>
  );
};

export default Navbar;
