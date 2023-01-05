import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"

import '../css/AdminHotelPage.css';

export default function OwnerHotelPage() {
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8082/hotels')
            .then((response) => { setCards(response.data); })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className='background' >
            <h2 className='text-center display-2'>Hotels - Owner page</h2>
            <div className="HotelCards">
                {cards.map((card, index) => {
                    return (
                        <div key={index} className="parentContainer">
                            <div className="CompactHotelCard"
                                onClick={e => { navigate('/AdminRoomPage/' + card.id) }}>
                                {/* <img src="./img/img.jpg" className='rounded' /> */}
                                <img src="http://bob.codegym.vn/assets/images/Codegym-bob-RIGHTxWH200.png" className='rounded'></img>
                                <div className="detail">
                                    <h5>{card.name}</h5>
                                    <p>Tel: {card.phone}</p>
                                    <p>Email: {card.email}</p>
                                    <p>Address: {card.address}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}