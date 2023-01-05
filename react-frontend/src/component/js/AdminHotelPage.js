import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios, { formToJSON } from "axios"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import '../css/AdminHotelPage.css';

function AdminHotelPage() {
    const [cards, setCards] = useState([]);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [myStatus, setMyStatus] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (name === '' || phone === '' || email === '' || address === '')
            console.log("4 fields must be filled")
        else {
            const adminAccount = {
                "name": email,
                "phone": phone,
                "email": email,
                "address": address,
                "hotelOwnerId": 1,
                "adminId": 1
            }

            axios.post('http://localhost:8082/hotel', adminAccount)
                .then(res => {
                    if (res.status === 200) {
                        const form = document.getElementsByClassName('newHotel');
                        form[0].style.display = 'none';
                        // console.log("Add new hotel successfully by admin")
                    }
                })
                .catch((error) => console.log(error))
        }
    }

    const addNewHotel = () => {
        const form = document.getElementsByClassName('newHotel');
        // console.log(form[])

        if (myStatus == true) {
            form[0].style.display = 'block';
            setMyStatus(false);
        } else {
            form[0].style.display = 'none';
            setMyStatus(true);
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8082/hotels')
            .then((response) => { setCards(response.data); })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className='background' >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" style={{ marginBottom: '16px' }}>
                <Container>
                    <Navbar.Brand href="#">Hotel-Admin page</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" onClick={addNewHotel}>New hotel</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/" >Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='newHotel'>
                <form className='mb-3'>
                    <input className="form-control" type="text" id="name" value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        placeholder='Name of hotel' required />

                    <input className="form-control" type="text" id="phone" value={phone}
                        onChange={(e) => { setPhone(e.target.value) }}
                        placeholder='Phone' required />

                    <input className="form-control" type="text" id="email" value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder='Email' required />

                    <input className="form-control" type="text" id="address" value={address}
                        onChange={(e) => { setAddress(e.target.value) }}
                        placeholder='Address' required />

                    <button className='btn btn-primary' onClick={handleSubmit}>New Hotel</button>
                </form>
            </div>
            {/* <h2 className='text-center display-2'>Hotels - Admin page</h2> */}
            <div className="HotelCards">
                {cards.map((card, index) => {
                    return (
                        <div key={index} className="parentContainer">
                            <div className="CompactHotelCard"
                                onClick={e => { navigate('/AdminRoomPage/' + card.id) }}>
                                {/* <img src='../img/img.png' className='rounded' /> */}

                                <img src="http://bob.codegym.vn/assets/images/Codegym-bob-RIGHTxWH200.png" className='rounded'></img>
                                <div className="detail">
                                    <h6>{card.name}</h6>
                                    <span>Tel: {card.phone}</span>
                                    <span>Email: {card.email}</span>
                                    <span>Address: {card.address}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AdminHotelPage;