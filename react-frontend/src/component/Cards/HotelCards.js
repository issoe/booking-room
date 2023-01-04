import React, { useEffect, useState } from 'react';
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
}

export default HotelCards;