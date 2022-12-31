import React, { useEffect, useState } from 'react';
import  './LoginPage.css';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
    const [adminAcount, setAdmin] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getAdmin = async () => {
            const res = await fetch('http://localhost/php_assignment/user.php');
            const getdata = await res.json();
            setAdmin(getdata);
        }
        getAdmin();
    },[]);
    
    return (
        <div className='LoginPage'>
        <div className="login">

        <h1 className="text-center">Hello Again!</h1>
        
        <form className="needs-validation">
            <div className="form-group was-validated">
                <label className="form-label" for="email">Email address</label>
                <input className="form-control" type="email" id="email" required />
                <div className="invalid-feedback">
                    Please enter your email address
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" for="password">Password</label>
                <input className="form-control" type="password" id="password" required />
                <div className="invalid-feedback">
                    Please enter your password
                </div>
            </div>
            <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" id="check" />
                <label className="form-check-label" for="check">Remember me</label>
            </div>
            
            <input 
                className="btn btn-success w-100" 
                type="submit" 
                value="SIGN IN" 
                onClick={() => {navigate('/creatbooking');}}/>
            
        </form>
        </div>
        </div>
      );
}

export default LoginPage;