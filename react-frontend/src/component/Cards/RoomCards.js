import React, { useEffect, useState } from 'react';
import './RoomCards.css';
import RoomCard from '../Card/RoomCard';
import axios from "axios"

function RoomCards(hotelObject) {
    const [rooms, setRoom] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/rooms', { params: { "id": 1} })
            .then((response) => { 
                setRoom(response.data);
            })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className="RoomCards">
            {rooms.map((room) => { 
                return (
                    <div className="roomContainer" >
                        <RoomCard
                            id={room.id}
                            roomNumber={room.roomNumber}
                            status={room.status}
                            price={room.price}
                            description={room.description}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default RoomCards;