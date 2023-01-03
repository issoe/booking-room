import React from "react";
import "./Card.css";

function Card(props) {
    
    return (
        <div className="CompactCard" layoutId="expandableCard" onClick={()=>{}}>
            <div className="detail">
                <img src={props.png} className = 'rounded'/>
                <div >
                    <h5>{props.title}</h5>
                    <span>{props.discr}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
