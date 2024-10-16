import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserSignUp from './Pages/UserSignUp';
import SignLog from './Pages/SignLog';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ServicePage from './Pages/ServicePage';
import Servicesearch from './Pages/ServiceSearch';
import UserProfile from './Pages/UserProfile';

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
        
      </Routes>
    </Router>
  );
}

export default App;
