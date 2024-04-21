import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  
  padding: 2rem;
  margin: 0 auto;
  background-color: blue;
  height: 90vh;
  color: #f0f0f0
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;