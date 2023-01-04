import React, {useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (email === '' || password === '') console.log("Account or password is empty")
        else {
            const adminAccount = {
                "username": email,
                "password": password
            }
            axios.post('http://localhost:8082/login', adminAccount)
                .then(res => {
                    if (res.status === 200) {
                        if (res.data === "Admin login successfully") {
                            console.log("Admin login successfully at REACT")
                            navigate('/AdminPage');
                        } else if (res.data === "Customer login successfully") {
                            console.log("Customer login successfully at REACT")
                            navigate('/AdminPage');
                        }
                        else {
                            console.log("HotelOwner login successfully at REACT")
                            navigate('/AdminPage');
                        }
                    }

                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <div className='LoginPage'>
            <div className="login">
                <h1 className="text-center">Hello Again!</h1>
                <form className="needs-validation">
                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="email">Username</label>
                        <input className="form-control" type="email" id="email" value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required />
                        <div className="invalid-feedback"> Please enter your username</div>
                    </div>
                    <div className="form-group was-validated">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-control" type="text" id="password" value={password}
                            onChange={(e) => { setPassword(e.target.value) }} required />
                        <div className="invalid-feedback"> Please enter your password </div>
                    </div>
                    <div className="form-group form-check">
                        <input className="form-check-input" type="checkbox" id="check" />
                        <label className="form-check-label" htmlFor="check">Remember me</label>
                    </div>

                    <input
                        className="btn btn-success w-100"
                        type="submit"
                        value="SIGN IN"
                        onClick={handleSubmit}
                    />
                </form>
            </div>
        </div>
    );
}