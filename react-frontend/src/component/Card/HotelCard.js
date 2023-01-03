import React from "react";
import "./HotelCard.css";
import { useParams, useNavigate} from "react-router-dom";

function HotelCard(props) {
    const navigate = useNavigate();
    return (
        <div 
        className="CompactHotelCard" 
        layoutId="expandableCard" 
        hotelID={props.hid}
        onClick={e=>{navigate('/HotelsRoom/' + props.hid)}}>
            <div className="detail">
                <img src={props.png} className = 'rounded'/>
                <div>
                    <h5>{props.title}</h5>
                    <span>{props.discr}</span>
                </div>
            </div>
        </div>
    );
}

export default HotelCard;
