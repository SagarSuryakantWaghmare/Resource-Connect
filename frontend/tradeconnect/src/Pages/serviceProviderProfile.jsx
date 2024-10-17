import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ServiceProviderProfile() {
    const { id } = useParams(); // Assuming the service provider ID is passed as a URL parameter
    const [serviceProvider, setServiceProvider] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServiceProviderDetails = async () => {
            try {
                const response = await axios.get(`/api/v1/service-providers/${id}`);
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

        const fetchData = async () => {
            setLoading(true);
            await fetchServiceProviderDetails();
            await fetchReviews();
            setLoading(false);
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!serviceProvider) {
        return <div>Service provider not found</div>;
    }

    return (
        <div className='bg-stdBg flex items-center justify-center min-h-screen font-stdFont p-4'>
            <div className="rounded-2xl w-full max-w-[800px] text-center bg-white p-6">
                <div className='cover-image h-48 w-full bg-gray-300 rounded-t-md mb-4'></div>
                <div className='avatar mx-auto h-24 w-24 rounded-full border-4 border-white bg-gray-200 mb-4'></div>
                <h1 className='text-3xl font-bold text-stdYellow'>{serviceProvider.fullName}</h1>
                <p className='text-xl'>{serviceProvider.businessName}</p>
                <p className='text-sm text-gray-600'>{serviceProvider.email}</p>
                <p className='text-sm text-gray-600'>{serviceProvider.contact}</p>
                <p className='text-sm text-gray-600'>{serviceProvider.address}</p>
                <div className='mt-4'>
                    <h2 className='text-2xl font-bold'>Reviews</h2>
                    {reviews.length > 0 ? (
                        <ul className='mt-2'>
                            {reviews.map((review, index) => (
                                <li key={index} className='border p-4 rounded-md mb-2'>
                                    <p className='text-lg font-bold'>{review.reviewerName}</p>
                                    <p className='text-sm text-gray-600'>{review.comment}</p>
                                    <p className='text-sm text-gray-600'>Rating: {review.rating}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No reviews available</p>
                    )}
                </div>
            </div>
        </div>
    );
}