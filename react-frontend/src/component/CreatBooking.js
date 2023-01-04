import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CreatBooking.css';

function CreatBooking() {
    const navigate = useNavigate();
    const [destination, setDes] = useState('');
    const [check_in_date, setCin] = useState();
    const [check_out_date, setCout] = useState('');
    const [guest_amount, setGuestAmount] = useState(0);
    const [room_amount, setRoomAmount] = useState(0);
    const [price, setPrice] = useState(0); 
    const {roominfor} = useParams();

    const submitClick = () => {
        alert(destination + check_in_date + check_out_date + guest_amount + room_amount);
        navigate('/successPage');
    }
    
    function CaculatePrice() {
        const d1 = new Date(check_in_date);
        const d2 = new Date(check_out_date);
        const dif = Math.abs(d2 - d1);
        const days = Math.ceil(dif / (1000 * 60 * 60 * 24));
        const res = days * roominfor * room_amount;
        return(res);
    }

        return (
            <div className='CreatBooking'>
            <div className='Booking'>
                <form className='mb-3 '>
                    {/* <h3>Destination:</h3>
                    <input 
                        className="form-control" 
                        list='city' 
                        type='text' 
                        name='destination' 
                        value={destination}
                        onChange = {(e) => setDes(e.target.value)}
                        />
                    
                    <datalist id="city">
                        <option value="Hà Nội"/>
                        <option value="Sài Gòn"/>
                        <option value="Đà Nẵng"/>
                    </datalist> */}
                    
                    <h3>Check-in:</h3>
                    <input  
                        className="form-control" 
                        type='date' 
                        name='check_in_date' 
                        value={check_in_date}
                        onChange = {(e) => setCin(e.target.value)}
                        />
                    <h3>Check-out</h3>
                    <input  
                        className="form-control" 
                        type='date' 
                        name='check_out_date' 
                        value={check_out_date}
                        onChange = {(e) => setCout(e.target.value)}
                        />
                    {/* <h3>How many guest:</h3>
                    <input  
                        className="form-control" 
                        type="number" min="1" 
                        step="1" 
                        name='guest_amount' 
                        value={guest_amount}
                        onChange = {(e) => setGuestAmount(e.target.value)}
                        /> */}
                    <h3>How many room:</h3>
                    <input  
                        className="form-control" 
                        type="number"   
                        min="1" 
                        step="1" 
                        name='room_amount' 
                        value={room_amount}
                        onChange = {(e) => setRoomAmount(e.target.value)}
                        />
                    <div className='submit'>
                    <div className='cost'>                    
                        <h3>Total cost:</h3>
                        <div className='display-4'>
                            {CaculatePrice()}
                        </div>
                        <span>VND</span>
                    </div>
                    <button
                        className='btn btn-primary'  
                        onClick={submitClick}
                        >
                            submit
                    </button>
                    </div>
                </form>
            </div>
            </div>
        )
    }


export default CreatBooking;