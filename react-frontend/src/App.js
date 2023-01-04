import CreatBooking from './component/js/CreatBooking';
import LoginPage from './component/js/LoginPage';
import AdminPage from './component/js/AdminPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HotelsRoom from './component/js/HotelsRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<LoginPage />} />
        <Route path='/creatbooking' exact element={<CreatBooking />} />
        <Route path='/AdminPage' exact element={<AdminPage />} />
        <Route path='/HotelsRoom/:hotelID' element={<HotelsRoom />} />
      </Routes>
    </Router>
  );
}
export default App;
