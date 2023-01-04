import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import "./HotelCards.css";
import HotelCard from "../Card/HotelCard";
import axios from "axios"

function HotelCards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/hotels')
            .then((response) => { setCards(response.data); })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className="HotelCards">
            {cards.map((card) => {
                return (
                    <div className="parentContainer" >
                        <HotelCard
                            id={card.id}
                            name={card.name}
                            phone={card.phone}
                            address={card.address}
                            email={card.email}
                        />
                    </div>
                );
            })}
        </div>
    );
=======
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
>>>>>>> 9cf6f17ddfdfce955810f98d9d9bf3a85866b9f6
}

export default HotelCards;