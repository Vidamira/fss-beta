import styled from 'styled-components';

const StyledSectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  position: relative; 
`;

const GradientBar = styled.div`
  position: absolute; 
  top: -5px;
  left: ${({ isReversed }) => (isReversed ? 'auto' : '0')};
  right: ${({ isReversed }) => (isReversed ? '0' : 'auto')};
  width: 50px; 
  height: 5px; 
  background: linear-gradient(to right, #F80404, #E79800); 
  border-radius: 1px; 
`;

const TitleText = styled.p`
  font-weight: lighter;
  margin: 0; 
  max-width: 40%;
`;

const TitleH1 = styled.h1`
  margin: 0; 
`;

const AlternateSectionTitle = ({ title, subtitle, isReversed }) => {
  return (
    <StyledSectionTitle>
      <GradientBar isReversed={isReversed} /> 
      {isReversed ? <TitleText>{subtitle}</TitleText> : <TitleH1>{title}</TitleH1>}
      {isReversed ? <TitleH1>{title}</TitleH1> : <TitleText>{subtitle}</TitleText>}
    </StyledSectionTitle>
  );
};

export default AlternateSectionTitle;
