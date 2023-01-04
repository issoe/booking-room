import './App.css';
import CreatBooking from './component/CreatBooking';
import LoginPage from './component/LoginPage';
import AdminPage from './component/AdminPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HotelsRoom from './component/HotelsRoom';
import RegisterPage from './component/RegisterPage';
import SuccessPage from './component/SuccessPage';
import AddHotelForm from './component/AddHotelForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<LoginPage/>} /> 
        <Route path='/creatbooking/:roominfor' exact element={<CreatBooking />} /> 
        <Route path='/AdminPage' exact element={<AdminPage />} /> 
        <Route path='/HotelsRoom/:hotelID' element={<HotelsRoom />} /> 
        <Route path='/RegisterPage' exact element={<RegisterPage />} /> 
        <Route path='/SuccessPage' exact element={<SuccessPage />} /> 
        <Route path='/AddHotelForm' exact element={<AddHotelForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
