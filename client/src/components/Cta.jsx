import styled from 'styled-components';

const StyledCtaSection = styled.section`
  background-color: #0F0F0F;
  color: #f0f0f0;
  padding: 8rem 0;
  position: relative; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
`;

const StyledCtaSubheading = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0; 
  display: flex;
  align-items: center;
  position: absolute;
  top: 1rem; 
  left: 0rem; 
`;

const StyledCtaHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0 0 1.5rem 0; 
`;

const StyledCtaButton = styled.button`
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

const Cta = () => {
  return (
    <StyledCtaSection>
      <StyledCtaSubheading>Can we help you? →</StyledCtaSubheading>
      <StyledCtaHeading>Book a Free Consultation</StyledCtaHeading>
      <StyledCtaButton>Let's Talk</StyledCtaButton>
    </StyledCtaSection>
  );
};

export default Cta;
