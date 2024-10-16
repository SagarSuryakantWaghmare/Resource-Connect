import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './components/Navbar';
import UserSignUp from './Pages/UserSignUp';
import SignLog from './Pages/SignLog';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import Services from './Pages/Services';
import LandingPageUser from './Pages/LandingPageUser';
import UserProfile from './Pages/UserProfile';
import ChatPage from './Pages/ChatPage';
import BookPage from './Pages/BookPage';
import MyBookings from './Pages/MyBookings';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/signlog" element={<SignLog />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/home" element={<LandingPageUser />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/my-bookings" element={<MyBookings />} />

      </Routes>
    </Router>
  );
}

export default App;
