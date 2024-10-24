import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import logo from '../components/Assets/logo.png';
export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get('accessToken')) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/v1/users/current-user', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('accessToken')}`
          }
        });
        if (response.status === 200) {
          setIsAuthenticated(true);
          setUserType(response.data.data.userType);
          setUserId(response.data.data._id);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUserType('unauthorized');
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const token = Cookies.get('accessToken');
      await axios.post('/api/v1/users/logout', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      Cookies.set('accessToken', '', { expires: 0 });
      setIsAuthenticated(false);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const getHomeLink = () => {
    switch (userType) {
      case 'user':
        return '/home';
      case 'serviceProvider':
        return '/dashboard';
      case 'admin':
        return '/dashboard-admin';
      default:
        return '/';
    }
  };

  return (
    <nav className='flex justify-between items-center h-[70px] border-b-2 px-5 w-full font-stdFont bg-white shadow-md'>
      <Link to={getHomeLink()}>
        <div className="flex ml-5" id='Logo'>
          <img src={logo} alt="" style={{ width: '120px', height: '60px' }} />
        </div>
      </Link>

      <div className="flex items-center space-x-8">
        {isAuthenticated ? (
          <>
            {userType === 'user' && (
              <>
                <Link to="/home" className='text-[18px] font-semibold hover:text-stdBlue transition'>Home</Link>
                <Link to="/BookingPage" className='text-[18px] font-semibold hover:text-stdBlue transition'>Bookings</Link>
                <Link to="/my-bookings" className='text-[18px] font-semibold hover:text-stdBlue transition'>My Bookings</Link>
                <Link to="/chat" className='text-[18px] font-semibold hover:text-stdBlue transition'>Chat</Link>
              </>
            )}
            {userType === 'serviceProvider' && (
              <>
                <Link to="/dashboard" className='text-[18px] font-semibold hover:text-stdBlue transition'>Dashboard</Link>
                <Link to="/my-jobs" className='text-[18px] font-semibold hover:text-stdBlue transition'>My Jobs</Link>
                <Link to="/chat" className='text-[18px] font-semibold hover:text-stdBlue transition'>Chat</Link>
              </>
            )}
            {userType === 'admin' && (
              <>
                <Link to="/dashboard-admin" className='text-[18px] font-semibold hover:text-stdBlue transition'>Admin Dashboard</Link>
                <Link to="/manage-users" className='text-[18px] font-semibold hover:text-stdBlue transition'>Manage Users</Link>
                <Link to="/manage-services" className='text-[18px] font-semibold hover:text-stdBlue transition'>Manage Services</Link>
              </>
            )}
            <Link to={`/account/${userId}`}>
              <button className='text-[14px] font-semibold p-2 bg-stdYellow text-white rounded-lg hover:bg-yellow hover:text-white transition'>
                Account
              </button>
            </Link>
            <Link to="/user-dashboard" className='text-[24px] text-stdBlue'>
              <FaUserCircle />
            </Link>
            <button
              onClick={handleLogout}
              className='text-[14px] font-semibold p-2 bg-stdBlue text-white rounded-lg'
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup-w">
              <button className='text-[18px] font-semibold p-2 text-stdBlue hover:text-stdYellow transition'>
                Become a Pro
              </button>
            </Link>
            <Link to="/services" className='text-[18px] font-semibold hover:text-stdBlue transition'>Service</Link>
            <Link to="/signlog">
              <button className='text-[18px] font-semibold p-2 bg-stdYellow text-white rounded-lg hover:bg-stdBlue hover:text-stdYellow transition'>
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}