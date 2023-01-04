import React from 'react';
import RoomCards from './Cards/RoomCards';
import { useNavigate, useParams } from 'react-router-dom';

function HotelsRoom() {
    const { hotelID } = useParams();
    console.log(hotelID)

    return (
        <div className='background' >
            
            <h2 className='text-center display-2'>Rooms:</h2>
            <RoomCards hotelObject={{ "data": 1 }} />
        </div>
    );
}

export default HotelsRoom;