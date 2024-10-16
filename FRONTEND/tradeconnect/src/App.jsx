import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './components/Navbar';
import UserSignUp from './Pages/UserSignUp';
import SignLog from './Pages/SignLog';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import Services from './Pages/Services'; // Assuming your Services component is located in the Pages folder
import LandingPageUser from './Pages/LandingPageUser'; // Assuming your UserLandingPage component is located in the Pages folder

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
      </Routes>
    </Router>
  );
}

export default App;
