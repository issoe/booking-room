import React from 'react';
import HotelCards from './Cards/HotelCards';
import './AdminPage.css';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
    const navigate = useNavigate();
    return ( 
        <div className='background' >
            <h2 className='text-center display-2'>Hotels:</h2>
            <button className='btn btn-primary mx-3' onClick={()=>{navigate('/AddHotelForm')}}>
                Add new Hotel
            </button>
            <HotelCards/>
        </div>
     );
}

export default AdminPage;