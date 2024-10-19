import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './components/Navbar';
import UserSignUp from './Pages/UserSignUp';
import SignLog from './Pages/SignLog';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import Services from './Pages/Services';
import Dashboard from './Pages/Dashboard'; // Import the Dashboard component
import Footer from './components/Footer.jsx';
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
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add the new Dashboard route */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
