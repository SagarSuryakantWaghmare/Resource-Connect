import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import UserSignUp from './Pages/UserSignUp';
import SignLog from './Pages/SignLog';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ServicePage from './Pages/ServicePage';
import Servicesearch from './Pages/ServiceSearch';
import UserProfile from './Pages/UserProfile';
import BookingPage from './Pages/BookingPage';
import ProfileAdmin from './Pages/ProfileAdmin';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/signlog" element={<SignLog />} />
        <Route path="/Service" element={<ServicePage />} />
        <Route path="/SearchService" element={<Servicesearch />} />
        <Route path='/UserProfile' element={<UserProfile />} />
        <Route path='/BookingPage' element={<BookingPage />} />   
        <Route path='/ProfileAdmin' element={<ProfileAdmin/>} />  
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
