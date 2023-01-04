import React, { useEffect, useState } from 'react';
import  './RegisterPage.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
    const navigate = useNavigate();
    const [data, setData] = useState(
        {
            fullName:"",
            email:"",
            address:"",
            cccd:"",
            username:"",
            password:"",
            phoneNum:""
        }
    );

    function handle(e){
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }

    function submit(e) {
        e.preventDefault();
        const newAccount = data;

        axios.post('http://localhost:8082/signup', newAccount)
                .then(res => {
                    if (res.status === 200) {
                        if (res.data === "Add new customer successfully") {
                            console.log("Add new customer successfully at REACT")
                            navigate('/');
                        }
                    }
                })
                .catch((error) => console.log(error))
    }

    return (
        <div className='RegisterPage'>
        <div className="register">

        <h1 className="text-center">Please fill out the form</h1>
        
        <form className="needs-validation" onSubmit={(e)=>submit(e)}>
            <div className="form-group was-validated">
                <label className="form-label" for="fullName">Your fullname:</label>
                <input onChange={(e)=>handle(e)} className="form-control" type="fullName" id="fullName" required />
                <div className="invalid-feedback">
                    Please enter your fullname
                </div>
                <label className="form-label" for="email">Email address:</label>
                <input onChange={(e)=>handle(e)} className="form-control" type="email" id="email" required />
                <div className="invalid-feedback">
                    Please enter your email address
                </div>
                <label className="form-label" for="address">Address:</label>
                <input onChange={(e)=>handle(e)} className="form-control" type="address" id="address" required />
                <div className="invalid-feedback">
                    Please enter your address
                </div>
                <label className="form-label" for="cccd">CCCD:</label>
                <input /*onChange={(e)=>handle(e)}*/ className="form-control" type="cccd" id="cccd" required />
                <div className="invalid-feedback">
                    Please enter your cccd 
                </div>
                <label className="form-label" for="username">Username:</label>
                <input onChange={(e)=>handle(e)} className="form-control" type="username" id="username" required />
                <div className="invalid-feedback">
                    Please enter your username 
                </div>
                <label className="form-label" for="password">Password</label>
                <input onChange={(e)=>handle(e)} className="form-control" type="password" id="password" required />
                <div className="invalid-feedback">
                    Please enter your password
                </div>
                <label className="form-label" for="phoneNum">Phone number</label>
                <input onChange={(e)=>handle(e)} className="form-control" type="phoneNum" id="phoneNum" required />
                <div className="invalid-feedback">
                    Please enter your phone number
                </div>
            </div>
            <input 
                className="btn btn-success w-100" 
                type="submit" 
                value="Submit" 
                onClick={() => {navigate('/');}}/>
            
        </form>
        </div>
        </div>
      );
}

export default RegisterPage;