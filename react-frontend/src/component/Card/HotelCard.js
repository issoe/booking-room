import React from "react";
import "./HotelCard.css";
import { useNavigate } from "react-router-dom";
function HotelCard(card) {
    const navigate = useNavigate();

    return (
        <div
            className="CompactHotelCard"
            layoutId="expandableCard"
            // onClick={e => { navigate('/HotelsRoom/' + card.id) }}
            onClick={e => console.log(typeof card.id)}
        >
            <div className="detail">
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
}

export default HotelCard;
