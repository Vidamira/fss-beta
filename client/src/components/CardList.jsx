import styled from 'styled-components';
import React from 'react';
import Card from './Card';

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  
  @media (max-width: 767px) { 
    width: 100%; 
    flex-wrap: wrap;
  }
`;

const CardList = ({ cards }) => {
  return (
    <StyledCardList>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </StyledCardList>
  );
};

export default CardList;
