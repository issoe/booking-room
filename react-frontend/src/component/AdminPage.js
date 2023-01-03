import React from 'react';
import Cards from './Cards/Cards';
import './AdminPage.css';

function AdminPage() {
    return ( 
        <div className='background' >
            <h2 className='text-center display-2'>Hotels:</h2>
            <Cards/>
        </div>
     );
}

export default AdminPage;