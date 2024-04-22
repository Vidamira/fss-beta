import styled from 'styled-components';
import swirl from '/swirl.png'

const StyledHero = styled.section`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  padding: 10rem 0rem;
  //background-color: #0f0f0f; 
  background-color: #000000;
  color: #f0f0f0; 
`;

const StyledHeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: 500;
  text-transform: uppercase; 
  margin: 0; 
`;

const StyledHeroImageContainer = styled.div`
  flex: 0 0 50%; 
  max-width: 50%; 
  height: auto;
`;



const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroTitle>what are we building today?</StyledHeroTitle>
      <StyledHeroImageContainer>
        <img src={swirl}/>
      </StyledHeroImageContainer>
    </StyledHero>
  );
};

export default Hero;
