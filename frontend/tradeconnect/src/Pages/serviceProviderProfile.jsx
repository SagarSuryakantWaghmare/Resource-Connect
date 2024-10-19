import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';

export default function ServiceProviderProfile() {
    const { id } = useParams(); // Assuming the service provider ID is passed as a URL parameter
    const [serviceProvider, setServiceProvider] = useState('');
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchServiceProviderDetails = async () => {
            try {
                const response = await axios.get(`/api/v1/service-providers/${id}`);
                if (response.status === 200) {
                    // console.log('res',response.data.data);
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
                const response = await axios.get(`/api/v1/service-providers/get-reviews/${id}`);
                if (response.status === 200) {
                    setReviews(response.data.data);
                    console.log('Reviews:', response.data.data);
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
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="loader border-t-4 border-b-4 border-gray-900 rounded-full w-12 h-12"></div>
            </div>
        );
    }

    const getInitials = (name) => {
        const names = name.split(' ');
        const initials = names.map((n) => n[0]).join('');
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

    const refreshPage = () => {
        window.location.reload();
    }

    const addReview = () => {
        return async (e) => {
            e.preventDefault();
            const rating = e.target.rating.value;
            console.log('Rating:', rating);
            const reviewDescription = e.target.reviewDescription.value;
            try {
                const response = await axios.post(`/api/v1/service-providers/set-sp-review`, {
                    serviceProviderId: id,
                    rating,
                    reviewDescription,
                });
                if (response.status === 201) {
                    alert('Review added successfully');
                    refreshPage();
                } else {
                    throw new Error('Failed to add review');
                }
            } catch (error) {
                console.error('Error adding review:', error);
            }
        };
    }

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen font-sans p-4">
            {/* Cover Image (Only visible for serviceProvider) */}
            {serviceProvider?.userType === 'serviceProvider' && (
                <div className="w-full max-w-[800px] h-[200px] bg-cover bg-center rounded-t-lg relative">
                    {serviceProvider?.coverImage ? (
                        <img
                            src={serviceProvider.coverImage}
                            alt="Cover"
                            className="w-full h-full object-cover rounded-t-lg"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-r from-gray-500 to-gray-700 rounded-t-lg"></div>
                    )}
                    <button
                        className="absolute bottom-3 right-3 bg-white text-gray-600 px-4 py-2 rounded-md shadow-lg"
                        onClick={() => alert('Upload cover image')}
                    >
                        Change Cover Image
                    </button>
                </div>
            )}

            <div className="rounded-lg w-full max-w-[800px] text-center bg-white p-6 shadow-md mt-4">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">{serviceProvider?.fullName}</h1>

                {/* Avatar or Initials */}
                {serviceProvider?.avatar ? (
                    <img
                        src={serviceProvider.avatar}
                        alt={`${serviceProvider.fullName}'s avatar`}
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                ) : (
                    <div
                        className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold ${getRandomGradient()}`}
                    >
                        {getInitials(serviceProvider?.fullName || '')}
                    </div>
                )}

                {/* Basic Info */}
                <p className="text-gray-600">{serviceProvider?.businessName}</p>
                <p className="text-gray-600">{serviceProvider?.email}</p>
                <p className="text-gray-600">{serviceProvider?.contact}</p>
                <p className="text-gray-600">
                    {serviceProvider?.city}, {serviceProvider?.state}
                </p>

                {/* Additional Details */}
                {serviceProvider?.additionalDetails && (
                    <div className="text-gray-600 mt-4">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Additional Details</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {serviceProvider?.additionalDetails.map((detail, index) => (
                                <div
                                    key={index}
                                    className="p-2 border border-gray-400 rounded-md"
                                >
                                    {detail}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Badges */}
                {serviceProvider?.badges && (
                    <div className="text-gray-600 mt-4">
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Badges</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {serviceProvider?.badges.map((badge, index) => (
                                <div
                                    key={index}
                                    className="p-2 border border-gray-400 rounded-md"
                                >
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex justify-center gap-20">
                    <button
                        onClick={() => navigate('/book/' + serviceProvider?.userId)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Hire Me
                    </button>
                    <button
                        onClick={() => navigate('/message')}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                    >
                        Message
                    </button>
                </div>

                {/* Reviews */}
                <div className="mt-4">
                    <h2 className="text-xl font-bold text-gray-700 mb-2">Reviews</h2>
                    {reviews.length > 0 ? (
                        <div className="space-y-4">
                            {reviews.map((review) => (
                                <div key={review._id} className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">

                                    {/* User Avatar or Initials */}
                                    {review.userId?.avatar ? (
                                        <img
                                            src={review.userId.avatar}
                                            alt={`${review.userId.fullName}'s avatar`}
                                            className="w-10 h-10 rounded-full"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                                            {review.userId?.fullName
                                                ? review.userId.fullName
                                                    .split(' ')
                                                    .map((n) => n[0])
                                                    .join('')
                                                    .toUpperCase()
                                                : 'U'}
                                        </div>
                                    )}

                                    {/* Review Content */}
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <span className="font-semibold text-gray-800">
                                                <span>
                                                    {review.userId?.fullName || 'Anonymous'}
                                                </span>
                                                <span className='ml-4'>
                                                    {review.rating} ⭐
                                                </span>
                                            </span>
                                            <span className="text-gray-500 text-sm">
                                                {new Date(review.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mt-1">
                                            {review.reviewDescription}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <p className="text-gray-600">No reviews yet.</p>
                        </div>
                    )}
                </div>


                <div className='m-4 p-4 rounded-xl shadow-2xl'>
                    {/* add review section */}
                    <form onSubmit={addReview()} className="mt-4">
                        <div className="flex flex-col items-center">
                            <label className="text-gray-700 font-bold mb-2">Give you Rating:</label>
                            <input
                                type="number"
                                name="rating"
                                placeholder='Rating (0-5)'
                                min="1"
                                max="5"
                                className="w-80 p-2 pl-8 border border-gray-300 rounded-md mb-4"
                                required
                            />
                            <label className="text-gray-700 font-bold mb-2">Review Description:</label>
                            <textarea
                                name="reviewDescription"
                                rows="4"
                                className="w-full max-w-md p-2 border border-gray-300 rounded-md mb-4"
                                required
                            ></textarea>
                            <button
                                type='submit'
                                className="flex items-center gap-2 border border-gray-700 rounded-full p-1 w-40 m-auto justify-center mt-4 hover:bg-black hover:text-white transition-all"
                            >
                                <span className="text-xl">+</span> Add Review
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
