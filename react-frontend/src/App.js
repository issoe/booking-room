import './App.css';
import CreatBooking from './component/CreatBooking';
import LoginPage from './component/LoginPage';
import AdminPage from './component/AdminPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HotelsRoom from './component/HotelsRoom';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' exact element={<LoginPage/>} />  */}
        {/* <Route path='/creatbooking' exact element={<CreatBooking />} />  */}
        <Route path='/AdminPage' exact element={<AdminPage />} /> 
        {/* <Route path='/HotelsRoom/:hotelID' element={<HotelsRoom />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
