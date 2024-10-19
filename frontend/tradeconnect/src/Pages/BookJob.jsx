import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function BookJob() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        id,
        jobType: "",
        additionalDetails: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const token = Cookies.get("accessToken");
            // console.log('Form Data:', formData);
            const response = await axios.post("/api/v1/users/job-post", formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 201) {
                navigate("/my-bookings");
            } else {
                setError("Failed to submit job request");
            }
        } catch (error) {
            console.error("Error submitting job request:", error);
            setError("Failed to submit job request");
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans p-4">
            <div className="rounded-lg w-full max-w-[800px] text-center bg-white p-6 shadow-xl shadow-gray-600 relative">
                <Link to={`/${id}/profile`}><button className="absolute top-2 left-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-[rgb(0,0,0,0.8)]">Back</button></Link>
                <h1 className="text-2xl font-bold text-gray-700 mb-4">Book Job</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-left text-gray-700">Job Type</label>
                        <div className="flex flex-wrap gap-2">
                            {["plumber", "electrician", "handyman", "mover", "cleaning", "painting"].map((job) => (
                                <label
                                    key={job}
                                    className={`flex items-center justify-center w-32 h-12 border border-gray-300 rounded-md cursor-pointer ${formData.jobType === job ? 'bg-blue-400' : ''}`}
                                >
                                    <input
                                        type="radio"
                                        name="jobType"
                                        value={job}
                                        onChange={handleInputChange}
                                        className={`hidden`}
                                    />
                                    <span className={`${formData.jobType === job ? 'text-white bold' : 'text-gray-700'}`}>{job.charAt(0).toUpperCase() + job.slice(1)}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <textarea
                        name="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleInputChange}
                        placeholder="Additional Details"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="mt-2 h-[45px] w-full bg-stdBlue text-white rounded-md">
                        Submit Job Request
                    </button>
                </form>
            </div>
        </div>
    );
}