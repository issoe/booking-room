import React from 'react';
import { cardsData } from '../Data';
import "./Cards.css";
import Card from "../Card/Card";

function Cards() {
    return ( 
        <div className="Cards">
        {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              png={card.png}
              discr={card.discription}
              id={card.id}
            />
          </div>
        );
        })}
        </div>
     );
}

export default Cards;