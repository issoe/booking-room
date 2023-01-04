import React, { useEffect, useState } from 'react';
import HotelCards from './Cards/HotelCards';
import './AdminPage.css';
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

function AdminPage() {
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8082/hotels')
            .then((response) => { setCards(response.data); })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className='background' >
            <h2 className='text-center display-2'>Hotels:</h2>

            <div className="HotelCards">
                {cards.map((card, index) => {
                    return (
                        <div key={index} className="parentContainer">
                            <div className="CompactHotelCard" onClick={e => { navigate('/HotelsRoom/' + card.id) }}>
                                {/* <img src="img2.jpg" className='rounded' /> */}
                                <div>
                                    <h5>{card.name}</h5>
                                    <span>Tel: {card.phone}</span>
                                    <br></br>
                                    <span>Email: {card.email}</span>
                                    <br></br>
                                    <span>Address: {card.address}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AdminPage;