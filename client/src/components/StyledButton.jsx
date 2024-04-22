import styled from 'styled-components';

const StyledButton = styled.button`
  background-image: linear-gradient(to right, #F80404, #E79800); 
  
  border: none;
  padding: 1rem 2rem;
  color: #fff; 
  font-weight: bold;
  cursor: pointer;
  transition: background-image 0.3s ease-in-out;

  &:hover {
    background-image: linear-gradient(to left, #F80404, #E79800); 
  }
`;

export default StyledButton;
