import React from "react";
import "./RoomCard.css";
import { useParams, useNavigate } from "react-router-dom";

function RoomCard(props) {
    const navigate = useNavigate();
    return (
<<<<<<< HEAD
        <div 
        className="CompactRoomCard" 
        layoutId="expandableCard" 
        onClick={e => navigate('/creatbooking/' + props.price)}>
=======
        <div
            className="CompactRoomCard"
            layoutId="expandableCard"
            onClick={() => navigate('/creatbooking')}>
>>>>>>> origin/main
            <div className="infor">
                <img src="/static/media/room3.dbc73418bb6f3f06e3c5.jpg" className='rounded' />
                <div >
                    <h5>Room number: {props.roomNumber}</h5>
                    <span>Room number: {props.status}</span>
                    <br></br>
                    <span>Room number: {props.price}</span>
                    <br></br>
                    <span>Room number: {props.description}</span>
                </div>
            </div>
        </div>
    );
}

export default RoomCard;
