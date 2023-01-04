// import RoomCards from '../Cards/RoomCards';
import React, { useEffect, useState } from 'react';
import '../css/RoomCards.css';
import '../css/AdminPage.css';

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"

export default function HotelsRoom() {
    const navigate = useNavigate();
    const [rooms, setRoom] = useState([]);
    const { hotelID } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8082/rooms', { params: { "id": hotelID } })
            .then((response) => {
                setRoom(response.data);
            })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className='background' >
            <h2 className='text-center display-2'>Rooms:</h2>
            <div className="RoomCards">
                {rooms.map((room, index) => {
                    return (
                        <div key={index} className="roomContainer" >
                            <div
                                className="CompactRoomCard"
                                layoutId="expandableCard"
                                onClick={() => navigate('/creatbooking')}>
                                <div className="infor">
                                    <img src="../img/img.jpg" className='rounded' />
                                    <div >
                                        <h5>Room number: {room.roomNumber}</h5>
                                        <span>Status: {room.status}</span>
                                        <br></br>
                                        <span>Price: {room.price}</span>
                                        <br></br>
                                        <span>Description: {room.description}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}