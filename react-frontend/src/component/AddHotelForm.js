import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AddHotelForm.css';

function AddHotelForm() {
    const navigate = useNavigate();
    const [address, setAdress] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [ownerID, setOwnerID] = useState('');
    
    function submitClick() {
        navigate('/SuccessPage');
    }
    
        return (
            <div className='AddHotelForm'>
            <div className='HotelsInfo'>
                <form className='mb-3 '>
                    <h3>Address:</h3>
                    <input  
                        className="form-control" 
                        type='address' 
                        name='address' 
                        value={address}
                        onChange = {(e) => setAdress(e.target.value)}
                        />
                    <h3>Name:</h3>
                    <input  
                        className="form-control" 
                        type='name' 
                        name='name' 
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                        />
                    <h3>Phone number:</h3>
                    <input  
                        className="form-control" 
                        type='phone' 
                        name='phone' 
                        value={phone}
                        onChange = {(e) => setPhone(e.target.value)}
                        />
                    <h3>Email:</h3>
                    <input  
                        className="form-control" 
                        type='email' 
                        name='email' 
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                        />
                    <h3>Owner ID:</h3>
                    <input  
                        className="form-control" 
                        type='ownerID' 
                        name='ownerID' 
                        value={ownerID}
                        onChange = {(e) => setOwnerID(e.target.value)}
                        />
        
                    <div className='submit d-flex justify-content-center'>
                    
                    <button
                        className='btn btn-primary mt-5'  
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


export default AddHotelForm;