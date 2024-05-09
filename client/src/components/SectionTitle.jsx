import styled from 'styled-components';

const StyledSectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  margin-top: 8rem;
  position: relative;

  @media (max-width: 768px) { 
    flex-direction: column-reverse; 
    align-items: flex-start; 
  }
`;

//abstract gradient 
const GradientBar = styled.div`
  position: absolute;
  top: -5px;
  right: 0; 
  width: 50px;
  height: 5px;
  background: linear-gradient(to right, #F80404, #E79800);
  border-radius: 1px;

  @media (max-width: 768px) {
    left: 0; 
  }
`;

const TitleText = styled.p`
  font-weight: lighter;
  margin: 0;
  max-width: 40%;

  @media (max-width: 768px) {
    max-width: 100%; 
  }
`;

const TitleH1 = styled.h1`
  margin: 0;
`;

const SectionTitle = ({ title, subtitle, isReversed }) => {
  return (
    <StyledSectionTitle isReversed={isReversed}>
      <GradientBar />
      <>
        <TitleText>{subtitle}</TitleText>
        <TitleH1>{title}</TitleH1>
        
      </>
    </StyledSectionTitle>
  );
};

export default SectionTitle;
