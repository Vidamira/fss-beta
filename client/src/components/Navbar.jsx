import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../public/fs-logo.png';

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledNavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

const StyledLogo = styled.img`
  width: 100px;
  height: auto;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <StyledLogo src={logo} alt="Company Logo" />
      </Link>
      <ul>
        <li>
          <StyledNavLink to="/agency">Agency</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/projects">Projects</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/blog">Blog</StyledNavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
