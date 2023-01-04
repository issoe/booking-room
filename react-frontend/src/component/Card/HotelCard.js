import React from "react";
import "./HotelCard.css";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { useParams, useNavigate } from "react-router-dom";
>>>>>>> 9cf6f17ddfdfce955810f98d9d9bf3a85866b9f6

function HotelCard(card) {
    const navigate = useNavigate();

    return (
        <div
            className="CompactHotelCard"
            layoutId="expandableCard"
<<<<<<< HEAD
            // onClick={e => { navigate('/HotelsRoom/' + card.id) }}
            onClick={e => console.log(typeof card.id)}
        >
            <div className="detail">
                {/* <img src="img2.jpg" className='rounded' /> */}
=======
            hotelID={props.hid}
            onClick={e => { navigate('/HotelsRoom/' + props.hid) }}>
            <div className="detail">
                <img src={props.png} className='rounded' />
>>>>>>> 9cf6f17ddfdfce955810f98d9d9bf3a85866b9f6
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
