import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPageUser() {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {

            try {
                const token = document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];
                if (!token) {
                    throw new Error('No token found');
                }

                axios.get('http://localhost:8000/api/v1/users/current-user', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                }).then((response) => {
                    if (response.status === 200) {
                        setUserName(response.data.data.fullName);
                    } else {
                        throw new Error('Failed to fetch user data');
                    }
                }).catch((error) => {
                    console.error('Error fetching user data:', error);
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    // const handleLogout = async () => {
    //     try {
    //         const token = document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];
    //         if (!token) {
    //             throw new Error('No token found');
    //         }

    //         const response = await fetch('http://localhost:8000/api/v1/users/logout', {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         if (response.ok) {
    //             document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    //             navigate('/login');
    //         } else {
    //             throw new Error('Logout failed');
    //         }
    //     } catch (error) {
    //         console.error('Error logging out:', error);
    //     }
    // };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-stdBg flex items-center justify-center min-h-screen font-stdFont p-4'>
            <div className="rounded-2xl w-full max-w-[450px] md:h-[65%] h-auto text-center bg-white p-6">
                <h1 className='text-3xl md:text-4xl font-bold text-stdYellow'>Welcome, {userName}!</h1>
                {/* <button onClick={handleLogout} className='mt-5 h-[45px] w-[120px] bg-stdBlue rounded-full text-[18px] font-bold text-stdYellow'>
                    Logout
                </button> */}
            </div>
        </div>
    );
}
