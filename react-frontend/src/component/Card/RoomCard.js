import React from "react";
import "./RoomCard.css";
import { useParams, useNavigate} from "react-router-dom";

function RoomCard(props) {
    const navigate = useNavigate();
    return (
        <div 
        className="CompactRoomCard" 
        layoutId="expandableCard" 
        onClick={e => navigate('/creatbooking/' + props.price)}>
            <div className="infor">
                <img src={props.png} className = 'rounded'/>
                <div >
                    <h5>{props.discr}</h5>
                    <h5>Room Amount:</h5>
                    <span>{props.amount}</span>
                    <h5>Price:</h5>
                    <span>{props.price} VND</span>
                </div>
            </div>
        </div>
    );
}

export default RoomCard;
