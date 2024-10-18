import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get('accessToken')) { setIsAuthenticated(true) }
    else { setIsAuthenticated(false) }
  }, [navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      await axios.get('/api/v1/users/current-user', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('accessToken')}`
        }
      }).then(response => {
        if (response.status === 200) {
          setIsAuthenticated(true);
          setUserType(response.data.data.userType);
          setUserId(response.data.data._id);
        }
      }).catch(error => {
        setIsAuthenticated(false);
        setUserType('unauthorized');
      })
    }
    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    const token = Cookies.get('accessToken');
    if (!token) {
      throw new Error('Unauthorized request!! No token found');
    }

    await axios.post('/api/v1/users/logout', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (response.status === 200) {
        // document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        Cookies.set('accessToken', '', { expires: 0 });
      } else {
        throw new Error('Logout failed');
      }
    }).catch(error => {
      console.error('Error logging out:', error);
    }).finally(() => {
      setIsAuthenticated(false);
      navigate('/login');
    })
  };

  const getHomeLink = () => {
    // console.log('userType:', userType);
    if (userType === 'user') {
      return '/home';
    } else if (userType === 'serviceProvider') {
      return '/home-service-provider';
    } else if (userType === 'admin') {
      return '/home-admin';
    } else if (userType === 'unauthorized') {
      return '/';
    }
  };

  return (
    <>
      <nav className='flex justify-between items-center h-[70px] border-b-2 w-full font-stdFont '>
        <Link to={getHomeLink()}>
          <div className="flex ml-5" id='Logo'>
            <button className='bg-Btn-color2 h-[40px] w-[80px] rounded-l-lg text-[18px] font-bold bg-stdYellow text-stdBlue pl-3'>
              Trade
            </button>
            <button className='bg-Btn-color1 h-[40px] w-[90px] rounded-r-lg text-[18px] font-bold bg-stdBlue text-stdYellow'>
              Connect
            </button>
          </div>
        </Link>

        <div className="justify-center text-center flex gap-16 items-center">
          {isAuthenticated ? (
            <>
              {userType === 'user' && (
                <>
                  <Link to="/home" className='text-[18px] font-semibold'>
                    Home
                  </Link>
                  <Link to="/my-bookings" className='text-[18px] font-semibold'>
                    My Bookings
                  </Link>
                  <Link to="/chat" className='text-[18px] font-semibold'>
                    Chat
                  </Link>
                </>
              )}
              {userType === 'serviceProvider' && (
                <>
                  <Link to="/home-service-provider" className='text-[18px] font-semibold'>
                    Dashboard
                  </Link>
                  <Link to="/my-jobs" className='text-[18px] font-semibold'>
                    My Jobs
                  </Link>
                  <Link to="/chat" className='text-[18px] font-semibold'>
                    Chat
                  </Link>
                </>
              )}
              {userType === 'admin' && (
                <>
                  <Link to="/home-admin" className='text-[14px] font-semibold'>
                    Admin Dashboard
                  </Link>
                  <Link to="/manage-users" className='text-[14px] font-semibold'>
                    Manage Users
                  </Link>
                  <Link to="/manage-services" className='text-[14px] font-semibold'>
                    Manage Services
                  </Link>
                </>
              )}
              <Link to={`/account/${userId}`}>
                <button className='text-[14px] font-semibold mr-7 p-1 w-[90px] bg-stdYellow rounded-lg'>
                  Account
                </button>
              </Link>
              <Link>
                <button onClick={handleLogout} className='text-[14px] font-semibold mr-3 p-1 w-[90px] bg-stdBlue text-white rounded-lg'>
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup-w">
                <button className='text-[18px] font-semibold mr-7 p-1 w-[auto] rounded-lg text-ellipsis'>
                  Become a Pro
                </button>
              </Link>
              <Link to="/services" className='text-[18px] font-semibold'>
                Service
              </Link>
              <Link to="/signlog">
                <button className='text-[18px] font-semibold mr-7 p-1 w-[90px] bg-stdYellow rounded-lg'>
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
