import React from 'react';
//import './App.css'
import Card from './Card'; 

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </Card>
      ))}
    </div>
  );
};


export default CardList;
