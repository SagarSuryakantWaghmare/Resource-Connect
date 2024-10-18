import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import checkLogin from '../utils/checkLogin';

export default function LandingPageUser() {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [serviceProviders, setServiceProviders] = useState([]);
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
                    const user = response.data.data;
                    setUserName(user.fullName);
                    fetchServiceProviders(user.city);
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

        const fetchServiceProviders = async (city) => {
            try {
                // http://localhost:8000/api/v1/service-providers/get-by-city?city=Sambhajinagar
                const response = await axios.get(`/api/v1/service-providers/get-by-city?city=${city}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.status === 200) {
                    setServiceProviders(response.data.data);
                } else {
                    throw new Error('Failed to fetch service providers');
                }
            } catch (error) {
                console.error('Error fetching service providers:', error);
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
            const response = await axios.get(`/api/v1/search?query=${searchQuery}`);
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

    const getInitials = (name) => {
        const names = name.split(' ');
        const initials = names.map(n => n[0]).join('');
        return initials.toUpperCase();
    };

    const getGradient = () => {
        const gradients = [
            'bg-gradient-to-r from-gray-700 to-gray-900',
            // 'bg-gradient-to-r from-gray-800 to-gray-600',
            // 'bg-gradient-to-r from-gray-900 to-gray-700',
        ];
        return gradients[Math.floor(Math.random() * gradients.length)];
    };

    const getGradient2 = () => {
        const gradients = [
            // 'bg-gradient-to-r from-pink-500 to-yellow-500',
            // 'bg-gradient-to-r from-green-400 to-blue-500',
            // 'bg-gradient-to-r from-red-400 to-yellow-400',
            // 'bg-gradient-to-r from-blue-400 to-indigo-400',
            // 'bg-gradient-to-r from-teal-400 to-green-500',
            'bg-gradient-to-r from-stdYellow to-stdBlue',
        ];
        return gradients[Math.floor(Math.random() * gradients.length)];
    };

    return (
        <div className='bg-stdBg flex flex-col gap-0 items-center justify-center min-h-screen font-stdFont p-4'>
            <div className="rounded-tl-2xl rounded-tr-2xl w-full md:h-[65%] h-auto text-center bg-white p-6">
                <h1 className='text-3xl md:text-4xl font-bold text-stdYellow'>Welcome, {userName}!</h1>
                <form onSubmit={handleSearchSubmit} className='mt-4'>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Search..."
                        className='w-full p-2 border border-gray-300 rounded-md max-w-[450px]'
                    />
                    <br />
                    <button
                        type="submit"
                        className='mt-2 h-[45px] w-full bg-stdBlue rounded-full text-[18px] font-bold text-stdYellow max-w-[250px]'
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

            <div className="rounded-bl-2xl rounded-br-2xl w-full md:h-[65%] h-auto text-center bg-white p-6">

                <div className='mt-4'>
                    <h2 className='text-2xl font-bold'>Service Providers in Your City:</h2>
                    <ul className='grid grid-cols-2 gap-8 justify-items-center'>
                        {serviceProviders.map((provider, index) => (
                            <li key={index} className='mt-4 min-w-[520px]'>
                                <div className='border p-4 rounded-md relative'>
                                    {
                                        provider.coverImage ? (
                                            <img
                                                src={provider.coverImage}
                                                alt={`${provider.fullName}'s cover`}
                                                className='cover-image h-32 w-full rounded-t-md'
                                            />
                                        ) : (
                                            <div className={`cover-image h-32 w-full ${getGradient2()} rounded-t-md`}></div>
                                        )
                                    }
                                    {/* <div className='cover-image h-32 w-full bg-gray-300 rounded-t-md'></div> */}
                                    {serviceProviders?.avatar ? (
                                        <img
                                            src={serviceProviders.avatar}
                                            alt={`${provider.fullName}'s avatar`}
                                            className='w-24 h-24 rounded-full mx-auto mb-4'
                                        />
                                    ) : (
                                        <div className={`avatar absolute top-16 left-5 border-full border-4 border-white w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold ${getGradient()}`}>
                                            {getInitials(provider.fullName || '')}
                                        </div>
                                    )}
                                    <div className='m-4'>
                                        <h3 className='text-xl font-bold'>{provider.fullName}</h3>
                                        <p className='text-lg'>{provider.businessName}</p>
                                        <p className='text-sm text-gray-600'>{provider.email}</p>
                                        <div className='flex gap-4 mt-4 justify-center'>
                                            <Link to={`/${provider._id}/profile`}>
                                                <button className='bg-stdBlue text-white px-4 py-2 rounded-md'>Profile</button>
                                            </Link>
                                            <Link to={`/${provider._id}/message`}>
                                                <button className='bg-stdYellow text-stdBlue px-4 py-2 rounded-md'>Message</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </div>
    );
}