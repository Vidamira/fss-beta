import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  
  padding: 4rem;
  margin: 0 auto;
  background-color: #000000;
  height: auto;
  color: #f0f0f0
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
