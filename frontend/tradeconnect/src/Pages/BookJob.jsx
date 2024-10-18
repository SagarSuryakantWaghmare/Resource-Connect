import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
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
            <div className="rounded-lg w-full max-w-[800px] text-center bg-white p-6 shadow-md">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">Book Job</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-left text-gray-700">Job Type</label>
                        <div className="flex flex-wrap gap-2">
                            <label className="flex items-center justify-center w-32 h-12 border border-gray-300 rounded-md cursor-pointer">
                                <input
                                    type="radio"
                                    name="jobType"
                                    value="plumber"
                                    onChange={handleInputChange}
                                    className="hidden"
                                />
                                <span className="text-gray-700">Plumber</span>
                            </label>
                            <label className="flex items-center justify-center w-32 h-12 border border-gray-300 rounded-md cursor-pointer">
                                <input
                                    type="radio"
                                    name="jobType"
                                    value="electrician"
                                    onChange={handleInputChange}
                                    className="hidden"
                                />
                                <span className="text-gray-700">Electrician</span>
                            </label>
                            <label className="flex items-center justify-center w-32 h-12 border border-gray-300 rounded-md cursor-pointer">
                                <input
                                    type="radio"
                                    name="jobType"
                                    value="handyman"
                                    onChange={handleInputChange}
                                    className="hidden"
                                />
                                <span className="text-gray-700">Handyman</span>
                            </label>
                            <label className="flex items-center justify-center w-32 h-12 border border-gray-300 rounded-md cursor-pointer">
                                <input
                                    type="radio"
                                    name="jobType"
                                    value="mover"
                                    onChange={handleInputChange}
                                    className="hidden"
                                />
                                <span className="text-gray-700">Mover</span>
                            </label>
                            <label className="flex items-center justify-center w-32 h-12 border border-gray-300 rounded-md cursor-pointer">
                                <input
                                    type="radio"
                                    name="jobType"
                                    value="cleaning"
                                    onChange={handleInputChange}
                                    className="hidden"
                                />
                                <span className="text-gray-700">Cleaning</span>
                            </label>
                            <label className="flex items-center justify-center w-32 h-12 border border-gray-300 rounded-md cursor-pointer">
                                <input
                                    type="radio"
                                    name="jobType"
                                    value="painting"
                                    onChange={handleInputChange}
                                    className="hidden"
                                />
                                <span className="text-gray-700">Painting</span>
                            </label>
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
                    <button type="submit" className="mt-2 h-[45px] w-full bg-blue-500 text-white rounded-md">
                        Submit Job Request
                    </button>
                </form>
            </div>
        </div>
    );
}