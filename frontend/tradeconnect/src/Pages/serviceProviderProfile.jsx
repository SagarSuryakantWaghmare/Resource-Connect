import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ServiceProviderProfile() {
    const { id } = useParams(); // Assuming the service provider ID is passed as a URL parameter
    const [serviceProvider, setServiceProvider] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchServiceProviderDetails = async () => {
            try {
                const response = await axios.get(`/api/v1/service-providers/${id}`);
                // console.log("response", response);
                if (response.status === 200) {
                    setServiceProvider(response.data.data);
                } else {
                    throw new Error('Failed to fetch service provider details');
                }
            } catch (error) {
                console.error('Error fetching service provider details:', error);
            }
        };

        const fetchReviews = async () => {
            try {
                const response = await axios.get(`/api/v1/service-providers/${id}/reviews`);
                if (response.status === 200) {
                    setReviews(response.data.data);
                } else {
                    throw new Error('Failed to fetch reviews');
                }
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchServiceProviderDetails();
        fetchReviews();
        setLoading(false);
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const getInitials = (name) => {
        const names = name.split(' ');
        const initials = names.map(n => n[0]).join('');
        return initials.toUpperCase();
    };

    const getRandomGradient = () => {
        const gradients = [
            'bg-gradient-to-r from-gray-700 to-gray-900',
            'bg-gradient-to-r from-gray-800 to-gray-600',
            'bg-gradient-to-r from-gray-900 to-gray-700',
        ];
        return gradients[Math.floor(Math.random() * gradients.length)];
    };

    return (
        <div className='bg-gray-100 flex flex-col items-center justify-center min-h-screen font-sans p-4'>
            <div className="rounded-lg w-full max-w-[800px] text-center bg-white p-6 shadow-md">
                <h1 className='text-2xl font-bold text-gray-700 mb-4'>{serviceProvider?.fullName}</h1>
                {serviceProvider?.avatar ? (
                    <img
                        src={serviceProvider.avatar}
                        alt={`${serviceProvider.fullName}'s avatar`}
                        className='w-24 h-24 rounded-full mx-auto mb-4'
                    />
                ) : (
                    <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold ${getRandomGradient()}`}>
                        {getInitials(serviceProvider?.fullName || '')}
                    </div>
                )}
                <p className='text-gray-600'>{serviceProvider?.businessName}</p>
                <p className='text-gray-600'>{serviceProvider?.email}</p>
                <p className='text-gray-600'>{serviceProvider?.contact}</p>
                <p className='text-gray-600'>{serviceProvider?.city}, {serviceProvider?.state}</p>
                {serviceProvider?.additionalDetails ? (
                    <div className="text-gray-600 mt-4">
                        <h2 className='text-xl font-bold text-gray-700 mb-2'>Additional Details</h2>
                        <div className='grid grid-cols-1 w-[fit-content] m-auto sm:grid-cols-3 gap-4'>
                            {serviceProvider?.additionalDetails.map((detail, index) => (
                                <div key={index} className={`p-2 w-[fit-content] h-10 rounded-md bg-slate-400 text-white`}>
                                    {detail}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (<></>)}

                {serviceProvider?.badges ? (
                    <div className="text-gray-600 mt-4">
                        <h2 className='text-xl font-bold text-gray-700 mb-2'>Badges</h2>
                        <div className='grid grid-cols-1 w-[fit-content] m-auto sm:grid-cols-5 gap-4'>
                            {serviceProvider?.badges.map((detail, index) => (
                                <div key={index} className={`p-2 w-[fit-content] h-10 rounded-md bg-slate-400 text-white`}>
                                    {detail}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (<></>)}

                <div className='mt-4'>
                    <h2 className='text-xl font-bold text-gray-700 mb-2'>Reviews</h2>
                    {reviews.length > 0 ? (
                        reviews.map(review => (
                            <div key={review._id} className='border-b border-gray-300 py-2'>
                                <p className='text-gray-600'>{review.comment}</p>
                                <p className='text-gray-500 text-sm'>- {review.user.fullName}</p>
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-600'>No reviews yet.</p>
                    )}
                </div>

                <div className='mt-6 flex justify-center gap-4'>
                    <button
                        onClick={() => navigate('/book')}
                        className='bg-stdBlue text-white px-4 py-2 rounded-md'
                    >
                        Hire
                    </button>
                    <button
                        onClick={() => navigate('/message')}
                        className='bg-stdYellow text-white px-4 py-2 rounded-md'
                    >
                        Message
                    </button>
                </div>

            </div>
        </div>
    );
}