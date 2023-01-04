import React from 'react';
import RoomCards from './Cards/RoomCards';
import { useNavigate, useParams } from 'react-router-dom';

function HotelsRoom() {
    return (
        <div className='background' >
            <h2 className='text-center display-2'>Rooms:</h2>
            <RoomCards />
        </div>
    );
}

export default HotelsRoom;