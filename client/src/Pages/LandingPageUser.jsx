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
        return <div className="text-center text-lg">Loading...</div>;
    }

    const getInitials = (name) => {
        const names = name.split(' ');
        const initials = names.map(n => n[0]).join('');
        return initials.toUpperCase();
    };

    const getGradient = () => {
        const gradients = [
            'bg-gradient-to-r from-gray-700 to-gray-900',
        ];
        return gradients[Math.floor(Math.random() * gradients.length)];
    };

    const getGradient2 = () => {
        const gradients = [
            'bg-gradient-to-r from-stdYellow to-stdBlue',
        ];
        return gradients[Math.floor(Math.random() * gradients.length)];
    };

    return (
        <div className='bg-stdBg flex flex-col gap-0 items-center justify-center min-h-screen font-stdFont p-4'>
            {/* Welcome Section */}
            <div className="rounded-tl-2xl rounded-tr-2xl w-full md:h-[65%] h-auto text-center bg-white p-6 shadow-md">
                <h1 className='text-4xl font-bold text-stdYellow'>Welcome, {userName}!</h1>
                <form onSubmit={handleSearchSubmit} className='mt-6'>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Search services..."
                        className='w-full h-[45px] p-2 border border-gray-300 rounded-tl-full rounded-bl-full max-w-[450px] shadow-sm'
                    />
                    <button
                        type="submit"
                        className='mt-4 h-[45px] w-full bg-stdBlue rounded-tr-full rounded-br-full text-[18px] font-bold text-stdYellow max-w-[250px] shadow-md hover:bg-stdYellow hover:text-stdBlue transition relative right-1'
                    >
                        Search
                    </button>
                </form>
                {searchResults.length > 0 && (
                    <div className='mt-6'>
                        <h2 className='text-2xl font-bold'>Search Results:</h2>
                        <ul className='mt-4 space-y-2'>
                            {searchResults.map((result, index) => (
                                <li key={index} className='text-lg'>{result}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Service Providers Section */}
            <div className="rounded-bl-2xl rounded-br-2xl w-full md:h-[65%] h-auto text-center bg-white p-6 mt-4 shadow-md">
                <h2 className='text-2xl font-bold'>Service Providers in Your City:</h2>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                    {serviceProviders.map((provider, index) => (
                        <li key={index} className='w-full'>
                            <div className='border p-4 rounded-md shadow-2xl hover:shadow-lg transition'>
                                {
                                    provider.coverImage ? (
                                        <img
                                            src={provider.coverImage}
                                            alt={`${provider.fullName}'s cover`}
                                            className='cover-image h-32 w-full rounded-t-md object-cover'
                                        />
                                    ) : (
                                        <div className={`cover-image h-32 w-full ${getGradient2()} rounded-t-md`}></div>
                                    )
                                }
                                {provider.avatar ? (
                                    <img
                                        src={provider.avatar}
                                        alt={`${provider.fullName}'s avatar`}
                                        className='w-24 h-24 rounded-full mx-auto mt-[-3rem] border-4 border-white'
                                    />
                                ) : (
                                    <div className={`avatar w-24 h-24 rounded-full mx-auto mt-[-3rem] border-4 border-white flex items-center justify-center text-white text-2xl font-bold ${getGradient()}`}>
                                        {getInitials(provider.fullName || '')}
                                    </div>
                                )}
                                <div className='mt-6'>
                                    <h3 className='text-xl font-bold'>{provider.fullName}</h3>
                                    <p className='text-lg'>{provider.businessName}</p>
                                    <p className='text-sm text-gray-600'>{provider.email}</p>
                                    <div className='flex gap-4 mt-4 justify-center'>
                                        <Link to={`/${provider._id}/profile`}>
                                            <button className='bg-stdBlue text-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition'>
                                                Profile
                                            </button>
                                        </Link>
                                        <Link to={`/${provider._id}/message`}>
                                            <button className='bg-stdYellow text-stdBlue px-4 py-2 rounded-md hover:bg-black hover:text-white transition'>
                                                Message
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
