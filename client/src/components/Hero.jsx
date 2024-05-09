import styled from 'styled-components';
import swirl from '/swirl.png';

const StyledHero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 0rem;
  background-color: #0f0f0f;
  color: #f0f0f0;
  

  @media (max-width: 768px) { 
    flex-direction: column; 
  }
`;

const StyledHeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  position: relative; 
  z-index: 1; 

  @media (max-width: 768px) { 
    text-align: center; 
    margin-bottom: 2rem; 
  }
`;

const StyledHeroImageContainer = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  height: auto;

  @media (max-width: 768px) { 
    width: 100%; 
    max-height: 5rem;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroTitle>what are we building today?</StyledHeroTitle>
      <StyledHeroImageContainer>
        <img src={swirl} style={{ width: '100%' }} />
      </StyledHeroImageContainer>
    </StyledHero>
  );
};

export default Hero;
