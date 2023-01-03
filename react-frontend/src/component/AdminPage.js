import React from 'react';
import HotelCards from './Cards/HotelCards';
import './AdminPage.css';

function AdminPage() {
    return ( 
        <div className='background' >
            <h2 className='text-center display-2'>Hotels:</h2>
            <HotelCards/>
        </div>
     );
}

export default AdminPage;