import './App.css';
import CreatBooking from './component/CreatBooking';
import LoginPage from './component/LoginPage';
import AdminPage from './component/AdminPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HotelsRoom from './component/HotelsRoom';
import RegisterPage from './component/RegisterPage';
import SuccessPage from './component/SuccessPage';

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
      </Routes>
    </Router>
  );
}

export default App;
