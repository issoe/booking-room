import React from 'react';
import  './LoginPage.css';
import {useNavigate} from 'react-router-dom';

function SuccessPage() {
   const navigate = useNavigate();
    return (
        <div className='d-flex justify-content-center '> 
            <div className='mt-5'>
                <h1>Success!</h1>
                <button 
                    onClick={() => {navigate('/AdminPage')}} 
                    className='btn btn-primary'
                >
                    Go back to Hotel
                </button>
            </div>
        </div>     
      );
}

export default SuccessPage;