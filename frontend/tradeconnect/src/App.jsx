import React, { useState, useEffect } from 'react';
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
import MyBookings from './Pages/MyBookings';
import WorkerSignUp from './Pages/WorkerSignUp';
import ServiceProviderProfile from './Pages/serviceProviderProfile';
import LandingPageSP from './Pages/LandingPageSP';
import LandingPageAdmin from './Pages/LandingPageAdmin';
import EditServiceProfile from './Pages/EditProfile';
import BookJob from "./Pages/BookJob.jsx";

function App() {

    return (
        <Router>
            {/* <Navbar isAuthenticated={isAuthenticated} userTYpe={userType} /> */}
            <Navbar />
            <Routes>
                {/* Before Login Links are the following */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<UserSignUp />} />
                <Route path="/signlog" element={<SignLog />} />
                <Route path="/services" element={<Services />} />
                <Route path="/signup-w" element={<WorkerSignUp />} />

                {/* After Login Routes are these ones */}
                <Route path="/home" element={<LandingPageUser />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/my-bookings" element={<MyBookings />} />
                <Route path="/:id/profile" element={<ServiceProviderProfile />} />
                <Route path="/home-service-provider" element={<LandingPageSP />} />
                <Route path="/home-admin" element={<LandingPageAdmin />} />
                <Route path="/account/:id" element={<EditServiceProfile />} />
                <Route path="/book/:id" element={<BookJob />} />
        </Routes>
        </Router >
    );
}

export default App;
