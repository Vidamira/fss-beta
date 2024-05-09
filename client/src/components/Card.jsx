import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #212121;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 33%;
  margin: 0.5rem;

  
  @media (max-width: 767px) { 
    width: 100%;
  }
`;

const StyledTag = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 0.5rem;
  background-color: #47474B; 
  border-radius: 32px; 
  margin-left: auto;
`;

const StyledTagCircle = styled.div`
  width: 30px;
  height: 30px;
  background-image: linear-gradient(to left, #F80404, #E79800);
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const StyledTagText = styled.p`
  font-size: 0.8rem;
  color: #ccc;
`;

const StyledHeading = styled.h2`
  margin: 0; 
  font-size: 2.5rem; 
  font-weight: bolder; 
  background: #C2BFBF;
  background: linear-gradient(to bottom right, #C2BFBF 0%, #0F0F0F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  
`;

const StyledParagraph = styled.p`
  font-size: 0.9rem; 
  line-height: 1.5; 
`;

const Card = ({ children, title, content, ...props }) => {
  return (
    <StyledCard>
      <StyledHeading>{title}</StyledHeading>
      <StyledParagraph>{content}</StyledParagraph>
      {props.tagText && (
        <StyledTag>
          <StyledTagCircle />
          <StyledTagText>{props.tagText}</StyledTagText>
        </StyledTag>
      )}
    </StyledCard>
  );
};

export default Card;
