import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LoginPage from './component/js/LoginPage';

import AdminHotelPage from './component/js/AdminHotelPage';
import AdminRoomPage from './component/js/AdminRoomPage';

import CusHotelPage from './component/js/CusHotelPage';
import CusRoomPage from './component/js/CusRoomPage';
import CusCreateBooking from './component/js/CusCreateBooking';

import OwnerHotelPage from './component/js/OwnerHotelPage';
import OwnerRoomPage from './component/js/OwnerRoomPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<LoginPage />} />

        <Route path='/AdminHotelPage' exact element={<AdminHotelPage />} />
        <Route path='/AdminRoomPage/:hotelID' element={<AdminRoomPage />} />

        <Route path='/CusHotelPage' exact element={<CusHotelPage />} />
        <Route path='/CusRoomPage/:hotelID' element={<CusRoomPage />} />
        <Route path='/CusCreateBooking' exact element={<CusCreateBooking />} />
      
        <Route path='/OwnerHotelPage' exact element={<OwnerHotelPage />} />
        <Route path='/OwnerRoomPage/:hotelID' element={<OwnerRoomPage />} />
      </Routes>
    </Router>
  );
}
export default App;
