import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function EditServiceProfile() {
    const { id } = useParams(); // Assuming the service provider ID is passed as a URL parameter
    const [profileData, setProfileData] = useState({
        businessName: '',
        email: '',
        fullName: '',
        contact: '',
        zipcode: '',
        avatar: '', // user avatar image
        coverImage: '', // user cover image
        state: '',
        city: '',
        professions: '', // user select tag to select from the following: ['plumber', 'electrician', 'handyman', 'mover', 'cleaning', 'painting']
        experience: '', // minimum allowed is 0 years
        location: '',
        availability: '', // true or false
        additionalDetails: '', // description
        badges: '' // from the following: ["elite", "pro", "verified", "featured", "top-rated", "new", "experienced", "local", "remote", "onsite", "online", "emergency", "24x7", "discount", "free-consultation", "free-quote", "free-visit", "free-trial", "free-estimate", "free-delivery", "free-shipping", "free-installation", "free-setup", "free-repair", "free-replacement", "free-maintenance", "free-support", "free-upgrade", "free-training", "free-consultation", "free-advice", "free-counseling", "free-coaching", "free"]
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get(`/api/v1/service-providers/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Cookies.get('accessToken')}`
                    }
                });
                if (response.status === 200) {
                    setProfileData(response.data.data);
                    setUserType(response.data.data.userType);
                } else {
                    throw new Error('Failed to fetch profile data');
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
                setError('Failed to fetch profile data');
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setProfileData({ ...profileData, [name]: files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {

            const token = Cookies.get('accessToken');
            const formData = new FormData();
            Object.keys(profileData).forEach(key => {
                formData.append(key, profileData[key]);
            });
            console.log('Profile Data:', profileData);

            const response = await axios.patch(`/api/v1/save-sp-details`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                navigate(`/home-service-provider`);
            } else {
                setError('Failed to update profile');
            }

            // const response = await axios.patch(`/api/v1/service-providers/update/${id}`, profileData, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${Cookies.get('accessToken')}`
            //     }
            // });

            // if (response.status === 200) {
            //     navigate(`/service-provider/${id}/profile`);
            // } else {
            //     setError('Failed to update profile');
            // }
        } catch (error) {
            console.error('Error updating profile:', error);
            setError('Failed to update profile');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-gray-100 flex items-center justify-center min-h-screen font-sans p-4'>
            <div className="rounded-lg w-full max-w-[800px] text-center bg-white p-6 shadow-md">
                <h1 className='text-2xl font-bold text-gray-700 mb-4'>Edit Profile</h1>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input
                        type="text"
                        name="fullName"
                        value={profileData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className='w-full p-2 border border-gray-300 rounded-md'
                    />
                    <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className='w-full p-2 border border-gray-300 rounded-md'
                    />
                    <input
                        type="text"
                        name="businessName"
                        value={profileData.businessName}
                        onChange={handleInputChange}
                        placeholder="Business Name"
                        className='w-full p-2 border border-gray-300 rounded-md'
                    />
                    <input
                        type="text"
                        name="contact"
                        value={profileData.contact}
                        onChange={handleInputChange}
                        placeholder="Contact"
                        className='w-full p-2 border border-gray-300 rounded-md'
                    />
                    <input
                        type="text"
                        name="zipcode"
                        value={profileData.zipcode}
                        onChange={handleInputChange}
                        placeholder="Zipcode"
                        className='w-full p-2 border border-gray-300 rounded-md'
                    />
                    <input
                        type="file"
                        name="avatar"
                        onChange={handleFileChange}
                        className='w-full p-2 border border-gray-300 rounded-md'
                    />
                    <input
                        type="file"
                        name="coverImage"
                        onChange={handleFileChange}
                        className='w-full p-2 border border-gray-300 rounded-md'
                    />
                    <input
                        type="text"
                        name="state"
                        value={profileData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        className='w-full p-2 border border-gray-300 rounded-md'
                    />
                    <input
                        type="text"
                        name="city"
                        value={profileData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        className='w-full p-2 border border-gray-300 rounded-md'
                    />
                    {userType === 'serviceProvider' && (
                        <>
                            <select
                                name="professions"
                                value={profileData.professions}
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded-md'
                            >
                                <option value="">Select Profession</option>
                                <option value="plumber">Plumber</option>
                                <option value="electrician">Electrician</option>
                                <option value="handyman">Handyman</option>
                                <option value="mover">Mover</option>
                                <option value="cleaning">Cleaning</option>
                                <option value="painting">Painting</option>
                            </select>
                            <input
                                type="number"
                                name="experience"
                                value={profileData.experience}
                                onChange={handleInputChange}
                                placeholder="Experience (years)"
                                min="0"
                                className='w-full p-2 border border-gray-300 rounded-md'
                            />
                            <input
                                type="text"
                                name="location"
                                value={profileData.location}
                                onChange={handleInputChange}
                                placeholder="Location"
                                className='w-full p-2 border border-gray-300 rounded-md'
                            />
                            <select
                                name="availability"
                                value={profileData.availability}
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded-md'
                            >
                                <option value="">Select Availability</option>
                                <option value="true">Available</option>
                                <option value="false">Not Available</option>
                            </select>
                            <textarea
                                name="additionalDetails"
                                value={profileData.additionalDetails}
                                onChange={handleInputChange}
                                placeholder="Additional Details"
                                className='w-full p-2 border border-gray-300 rounded-md'
                            />
                            <select
                                name="badges"
                                value={profileData.badges}
                                onChange={handleInputChange}
                                className='w-full p-2 border border-gray-300 rounded-md'
                            >
                                <option value="">Select Badge</option>
                                <option value="elite">Elite</option>
                                <option value="pro">Pro</option>
                                <option value="verified">Verified</option>
                                <option value="featured">Featured</option>
                                <option value="top-rated">Top Rated</option>
                                <option value="new">New</option>
                                <option value="experienced">Experienced</option>
                                <option value="local">Local</option>
                                <option value="remote">Remote</option>
                                <option value="onsite">Onsite</option>
                                <option value="online">Online</option>
                                <option value="emergency">Emergency</option>
                                <option value="24x7">24x7</option>
                                <option value="discount">Discount</option>
                                <option value="free-consultation">Free Consultation</option>
                                <option value="free-quote">Free Quote</option>
                                <option value="free-visit">Free Visit</option>
                                <option value="free-trial">Free Trial</option>
                                <option value="free-estimate">Free Estimate</option>
                                <option value="free-delivery">Free Delivery</option>
                                <option value="free-shipping">Free Shipping</option>
                                <option value="free-installation">Free Installation</option>
                                <option value="free-setup">Free Setup</option>
                                <option value="free-repair">Free Repair</option>
                                <option value="free-replacement">Free Replacement</option>
                                <option value="free-maintenance">Free Maintenance</option>
                                <option value="free-support">Free Support</option>
                                <option value="free-upgrade">Free Upgrade</option>
                                <option value="free-training">Free Training</option>
                                <option value="free-advice">Free Advice</option>
                                <option value="free-counseling">Free Counseling</option>
                                <option value="free-coaching">Free Coaching</option>
                            </select>
                        </>
                    )}
                    {error && <p className='text-red-500'>{error}</p>}
                    <button type="submit" className='mt-2 h-[45px] w-full bg-blue-500 text-white rounded-md'>
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );

    // return (
    //     <div className='bg-stdBg flex items-center justify-center min-h-screen font-stdFont p-4'>
    //         <div className="rounded-2xl w-full max-w-[800px] text-center bg-white p-6">
    //             <h1 className='text-3xl font-bold text-stdYellow'>Edit Profile</h1>
    //             <form onSubmit={handleSubmit} className='mt-4'>
    //                 <input
    //                     type="text"
    //                     name="fullName"
    //                     value={profileData.fullName}
    //                     onChange={handleInputChange}
    //                     placeholder="Full Name"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="email"
    //                     name="email"
    //                     value={profileData.email}
    //                     onChange={handleInputChange}
    //                     placeholder="Email"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="text"
    //                     name="businessName"
    //                     value={profileData.businessName}
    //                     onChange={handleInputChange}
    //                     placeholder="Business Name"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="text"
    //                     name="contact"
    //                     value={profileData.contact}
    //                     onChange={handleInputChange}
    //                     placeholder="Contact"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="text"
    //                     name="zipcode"
    //                     value={profileData.zipcode}
    //                     onChange={handleInputChange}
    //                     placeholder="Zipcode"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="text"
    //                     name="avatar"
    //                     value={profileData.avatar}
    //                     onChange={handleInputChange}
    //                     placeholder="Avatar URL"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="text"
    //                     name="coverImage"
    //                     value={profileData.coverImage}
    //                     onChange={handleInputChange}
    //                     placeholder="Cover Image URL"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="text"
    //                     name="state"
    //                     value={profileData.state}
    //                     onChange={handleInputChange}
    //                     placeholder="State"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="text"
    //                     name="city"
    //                     value={profileData.city}
    //                     onChange={handleInputChange}
    //                     placeholder="City"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <select
    //                     name="professions"
    //                     value={profileData.professions}
    //                     onChange={handleInputChange}
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 >
    //                     <option value="">Select Profession</option>
    //                     <option value="plumber">Plumber</option>
    //                     <option value="electrician">Electrician</option>
    //                     <option value="handyman">Handyman</option>
    //                     <option value="mover">Mover</option>
    //                     <option value="cleaning">Cleaning</option>
    //                     <option value="painting">Painting</option>
    //                 </select>
    //                 <input
    //                     type="number"
    //                     name="experience"
    //                     value={profileData.experience}
    //                     onChange={handleInputChange}
    //                     placeholder="Experience (years)"
    //                     min="0"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="text"
    //                     name="location"
    //                     value={profileData.location}
    //                     onChange={handleInputChange}
    //                     placeholder="Location"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="number"
    //                     name="minHourlyRate"
    //                     value={profileData.minHourlyRate}
    //                     onChange={handleInputChange}
    //                     placeholder="Min Hourly Rate"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="number"
    //                     name="maxHourlyRate"
    //                     value={profileData.maxHourlyRate}
    //                     onChange={handleInputChange}
    //                     placeholder="Max Hourly Rate"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <input
    //                     type="number"
    //                     name="rating"
    //                     value={profileData.rating}
    //                     onChange={handleInputChange}
    //                     placeholder="Rating (0 to 5)"
    //                     min="0"
    //                     max="5"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <select
    //                     name="availability"
    //                     value={profileData.availability}
    //                     onChange={handleInputChange}
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 >
    //                     <option value="">Select Availability</option>
    //                     <option value="true">Available</option>
    //                     <option value="false">Not Available</option>
    //                 </select>
    //                 <textarea
    //                     name="additionalDetails"
    //                     value={profileData.additionalDetails}
    //                     onChange={handleInputChange}
    //                     placeholder="Additional Details"
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 />
    //                 <select
    //                     name="badges"
    //                     value={profileData.badges}
    //                     onChange={handleInputChange}
    //                     className='w-full p-2 border border-gray-300 rounded-md mb-2'
    //                 >
    //                     <option value="">Select Badge</option>
    //                     <option value="elite">Elite</option>
    //                     <option value="pro">Pro</option>
    //                     <option value="verified">Verified</option>
    //                     <option value="featured">Featured</option>
    //                     <option value="top-rated">Top Rated</option>
    //                     <option value="new">New</option>
    //                     <option value="experienced">Experienced</option>
    //                     <option value="local">Local</option>
    //                     <option value="remote">Remote</option>
    //                     <option value="onsite">Onsite</option>
    //                     <option value="online">Online</option>
    //                     <option value="emergency">Emergency</option>
    //                     <option value="24x7">24x7</option>
    //                     <option value="discount">Discount</option>
    //                     <option value="free-consultation">Free Consultation</option>
    //                     <option value="free-quote">Free Quote</option>
    //                     <option value="free-visit">Free Visit</option>
    //                     <option value="free-trial">Free Trial</option>
    //                     <option value="free-estimate">Free Estimate</option>
    //                     <option value="free-delivery">Free Delivery</option>
    //                     <option value="free-shipping">Free Shipping</option>
    //                     <option value="free-installation">Free Installation</option>
    //                     <option value="free-setup">Free Setup</option>
    //                     <option value="free-repair">Free Repair</option>
    //                     <option value="free-replacement">Free Replacement</option>
    //                     <option value="free-maintenance">Free Maintenance</option>
    //                     <option value="free-support">Free Support</option>
    //                     <option value="free-upgrade">Free Upgrade</option>
    //                     <option value="free-training">Free Training</option>
    //                     <option value="free-advice">Free Advice</option>
    //                     <option value="free-counseling">Free Counseling</option>
    //                     <option value="free-coaching">Free Coaching</option>
    //                 </select>
    //                 {error && <p className='text-red-500'>{error}</p>}
    //                 <button type="submit" className='mt-2 h-[45px] w-full bg-stdBlue rounded-full text-[18px] font-bold text-stdYellow'>
    //                     Save Changes
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // );
}