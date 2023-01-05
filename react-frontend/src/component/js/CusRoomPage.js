import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import '../css/AdminRoomPage.css';

export default function CusRoomPage() {
    const navigate = useNavigate();
    const [rooms, setRoom] = useState([]);
    const { hotelID } = useParams();
    const [roomNumber, setRoomNumber] = useState('');
    const [theStatus, setStatus] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [myStatus, setMyStatus] = useState(true);

    const addNewRoom = () => {
        const form = document.getElementsByClassName('newRoom');
        if (myStatus == true) {
            form[0].style.display = 'block';
            setMyStatus(false);
        } else {
            form[0].style.display = 'none';
            setMyStatus(true);
        }
    }

    const handleSubmit = () => {
        if (roomNumber === '' || theStatus === '' || price === '' || description === '')
            console.log("4 fields must be filled")
        else {
            const adminAccount = {
                "roomNumber": roomNumber,
                "status": theStatus,
                "price": price,
                "description": description,
                "hotelId": hotelID
            }

            axios.post('http://localhost:8082/room', adminAccount)
                .then(res => {
                    if (res.status === 200) {
                        console.log("Add new room successfully by admin")
                        // const form = document.getElementsByClassName('newRoom');
                        // form[0].style.display = 'none';
                    }
                })
                .catch((error) => console.log(error))
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8082/rooms', { params: { "id": hotelID } })
            .then((response) => {
                setRoom(response.data);
            })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className='background' >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" style={{ marginBottom: '16px' }}>
                <Container>
                    <Navbar.Brand href="#">Room-Customer page</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#" onClick={addNewRoom}>New room</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="/" >Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='newRoom'>
                <form className='mb-3'>
                    <input className="form-control" type="text" id="roomNumber" value={roomNumber}
                        onChange={(e) => { setRoomNumber(e.target.value) }}
                        placeholder='Room number' required />

                    <input className="form-control" type="text" id="phone" value={theStatus}
                        onChange={(e) => { setStatus(e.target.value) }}
                        placeholder='Status' required />

                    <input className="form-control" type="text" id="email" value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                        placeholder='Price' required />

                    <input className="form-control" type="text" id="address" value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        placeholder='Description' required />

                    <button className='btn btn-primary' onClick={handleSubmit}>New Room</button>
                </form>
            </div>

            <div className="RoomCards">
                {rooms.map((room, index) => {
                    return (
                        <div key={index} className="roomContainer" >
                            <div
                                className="CompactRoomCard"
                                // layoutId="expandableCard"
                                onClick={() => navigate('/CusCreateBooking')}
                            // onClick={console.log("navigate to next page")}
                            >
                                <div className="infor">
                                    <img src="http://bob.codegym.vn/assets/images/Codegym-bob-RIGHTxWH200.png" className='rounded'></img>
                                    <div >
                                        <h5>Room number: {room.roomNumber}</h5>
                                        <span>Status: {room.status}</span>
                                        <br></br>
                                        <span>Price: {room.price}</span>
                                        <br></br>
                                        <span>Description: {room.description}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}