import React from "react";
import "./RoomCard.css";
import { useParams, useNavigate } from "react-router-dom";

function RoomCard(props) {
    const navigate = useNavigate();
    return (
        <div
            className="CompactRoomCard"
            layoutId="expandableCard"
            onClick={() => navigate('/creatbooking')}>
            <div className="infor">
                <img src="./img2.jpg" className='rounded' />
                <div >
                    <h5>Room number: {props.roomNumber}</h5>
                    <span>Status: {props.status}</span>
                    <br></br>
                    <span>Price: {props.price}</span>
                    <br></br>
                    <span>Description: {props.description}</span>
                </div>
            </div>
        </div>
    );
}

export default RoomCard;
