import React from 'react';
import { HotelsData } from '../Data';
import "./HotelCards.css";
import HotelCard from "../Card/HotelCard";

function HotelCards() {
    return ( 
        <div className="HotelCards">
        {HotelsData.map((card, id) => {
        return (
          <div className="parentContainer" >
            <HotelCard
              title={card.title}
              png={card.png}
              discr={card.discription}
              price={card.price}
              hid={card.id}
            />
          </div>
        );
        })}
        </div>
     );
}

export default HotelCards;