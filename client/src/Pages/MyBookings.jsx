import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa'; // Icon for service provider

export default function BookJob() {
    const [error, setError] = useState('');
    const [jobPosts, setJobPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobPosts = async () => {
            try {
                const response = await axios.get('/api/v1/users/get-job-posts', {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('accessToken')}`,
                        'Content-Type': 'application/json'
                    }
                });
                setJobPosts(response.data.data);
            } catch (error) {
                console.error('Error fetching job posts:', error);
                setError('Failed to fetch job posts');
            }
        };

        fetchJobPosts();
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto">
                {/* Error message */}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                {/* Filter buttons */}
                <div className="flex justify-center mb-4">
                    <button className="mx-2 px-4 py-2 bg-stdBlue text-white rounded-full">New</button>
                    <button className="mx-2 px-4 py-2 bg-stdBlue text-white rounded-full">Pending</button>
                    <button className="mx-2 px-4 py-2 bg-stdBlue text-white rounded-full">Completed</button>
                </div>

                {/* Job Posts */}
                <div className="mt-4 space-y-4">
                    {jobPosts.length > 0 ? (
                        jobPosts.map((job) => (
                            <div key={job._id} className="bg-white p-4 rounded-lg shadow flex items-start">
                                {/* Service Provider Icon */}
                                <FaUserCircle className="text-4xl text-stdBlue mr-4" />

                                {/* Job Details */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-stdBlue">
                                        {job.jobType.charAt(0).toUpperCase() + job.jobType.slice(1)} Job
                                    </h3>
                                    <p className="text-gray-700 mb-1">{job.additionalDetails}</p>
                                    <p className="text-sm text-gray-600">Status: <span className="font-semibold">{job.status}</span></p>
                                    <p className="text-sm text-gray-600">Progress: <span className="font-semibold">{job.jobProgress}</span></p>
                                    <p className="text-sm text-gray-600">Time: <span className="font-semibold">{new Date(job.time).toLocaleString()}</span></p>
                                </div>

                                {/* Job Action */}
                                <div className="ml-4">
                                    <Link to={`/job/${job._id}`} className="text-stdYellow font-bold">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No job posts available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
