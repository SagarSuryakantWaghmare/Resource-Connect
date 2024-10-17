import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Axios from './axiosConfig';
import Cookies from 'js-cookie';
import checkLogin from '../utils/checkLogin';

export default function LandingPageUser() {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            checkLogin(navigate);

            try {
                const token = Cookies.get('accessToken');
                const response = await axios.get('/api/v1/users/current-user', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                });
                if (response.status === 200) {
                    setUserName(response.data.data.fullName);
                } else {
                    throw new Error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await Axios.get(`/search?query=${searchQuery}`);
            setSearchResults(response.data.results);
        } catch (error) {
            console.error('Error performing search:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-stdBg flex items-center justify-center min-h-screen font-stdFont p-4'>
            <div className="rounded-2xl w-full max-w-[450px] md:h-[65%] h-auto text-center bg-white p-6">
                <h1 className='text-3xl md:text-4xl font-bold text-stdYellow'>Welcome, {userName}!</h1>
                <form onSubmit={handleSearchSubmit} className='mt-4'>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Search..."
                        className='w-full p-2 border border-gray-300 rounded-md'
                    />
                    <button
                        type="submit"
                        className='mt-2 h-[45px] w-full bg-stdBlue rounded-full text-[18px] font-bold text-stdYellow'
                    >
                        Search
                    </button>
                </form>
                {searchResults.length > 0 && (
                    <div className='mt-4'>
                        <h2 className='text-2xl font-bold'>Search Results:</h2>
                        <ul>
                            {searchResults.map((result, index) => (
                                <li key={index} className='mt-2'>
                                    {result}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}