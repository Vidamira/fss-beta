import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #212121; 
  color: #fff; 
  padding: 2rem; 
  border-radius: 10px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  align-items: flex-start; 
  width: 33.333%; 
  max-width: 800px; 
  margin: 1rem; 
`;

const StyledH2 = styled.h2`
  margin: 0 0 1rem 0; 
  font-size: 1.5rem; 
`;

const Card = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export default Card;
