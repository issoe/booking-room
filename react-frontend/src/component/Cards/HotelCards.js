import React, { useEffect, useState } from 'react';
import { HotelsData } from '../Data';
import "./HotelCards.css";
import HotelCard from "../Card/HotelCard";
import axios from "axios"


function HotelCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/hotels')
      .then((response) => {
        setCards(response);
        console.log(cards);
      })
      .catch((error) => console.log(error))
  }, []);


  return (
    <div className="HotelCards">
      {HotelsData.map((card) => {
        return (
          <div className="parentContainer" >
            <HotelCard
              title={card.title}
              png={card.png}
              discr={card.discription}
              price={card.price}
              hid={card.id}
            />
            {console.log(card)}
          </div>
        );
      })}
    </div>
  );
}

export default HotelCards;