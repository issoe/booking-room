import React from 'react';
import { RoomsData } from '../Data';
import './RoomCards.css';
import RoomCard from '../Card/RoomCard';

function RoomCards(param) {
    return ( 
        <div className="RoomCards">
        {RoomsData.map((card, id) => { 
            if (card.hotelID === param.hid) { // only show room of the choosen hotel
            return (
            <div className="roomContainer" >
                <RoomCard
                amount={card.roomamount}
                png={card.png}
                discr={card.discription}
                id={card.id}
                hid={card.hotelID}
                price={card.price}
                />
            </div>
            );
            }
        })}
        </div>
     );
}

export default RoomCards;