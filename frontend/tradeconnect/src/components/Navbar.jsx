import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the accessToken is present in cookies
    const token = Cookies.get('accessToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // const handleLogout = async () => {
  //     const token = document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];
  //     if (!token) {
  //       throw new Error('No token found');
  //       navigate('/login');
  //     }

  //     axios.post('http://localhost:8000/api/v1/users/logout', {
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       }
  //     }).then((response) => {
  //       if (response.status === 200) {
  //         document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  //         navigate('/login');
  //       } else {
  //         throw new Error('Logout failed');
  //       }
  //     }).catch((error) => {
  //       console.error('Error logging out:', error);
  //     });
  // };

  const handleLogout = async () => {
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch('http://localhost:8000/api/v1/users/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        navigate('/login');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      <nav className='flex justify-between items-center h-[70px] border-b-2 w-full font-stdFont '>
        <Link to="/home">
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
              <Link to="/book" className='text-[18px] font-semibold'>
                Book
              </Link>
              <Link to="/my-bookings" className='text-[18px] font-semibold'>
                My Bookings
              </Link>
              <Link to="/chat" className='text-[18px] font-semibold'>
                Chat
              </Link>
              <Link to="/account">
                <button className='text-[18px] font-semibold mr-7 p-1 w-[90px] bg-stdYellow rounded-lg'>
                  Account
                </button>
              </Link>
              <Link>
                <button onClick={handleLogout} className='text-[18px] font-semibold mr-3 p-1 w-[90px] bg-stdBlue text-white rounded-lg'>
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
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
