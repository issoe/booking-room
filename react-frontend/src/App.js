import CusCreateBooking from './component/js/CusCreateBooking';
import LoginPage from './component/js/LoginPage';
import AdminHotelPage from './component/js/AdminHotelPage';
import CusHotelPage from './component/js/CusHotelPage';
import OwnerHotelPage from './component/js/OwnerHotelPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminRoomPage from './component/js/AdminRoomPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<LoginPage />} />
        <Route path='/CusCreateBooking' exact element={<CusCreateBooking />} />
        <Route path='/AdminHotelPage' exact element={<AdminHotelPage />} />
        <Route path='/CusHotelPage' exact element={<CusHotelPage />} />
        <Route path='/OwnerHotelPage' exact element={<OwnerHotelPage />} />
        <Route path='/AdminRoomPage/:hotelID' element={<AdminRoomPage />} />
      </Routes>
    </Router>
  );
}
export default App;
