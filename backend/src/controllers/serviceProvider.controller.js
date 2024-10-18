import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Review } from "../models/review.model.js";

// Controller for fetching service providers by city
const getServiceProviderByCity = asyncHandler(async (req, res) => {
    const { city } = req.query;
    const serviceProviders = await User.find({ city, userType: 'serviceProvider' });
    return res.status(200).json(new ApiResponse(200, serviceProviders, "Service Providers fetched successfully"));
});

const getServiceProviderDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    // const serviceProvider = await User.findById(id).populate('serviceProviderDetails');
    const serviceProvider = await User.findById(id);
    if (!serviceProvider) {
        throw new ApiError(404, "Service Provider not found");
    }
    return res.status(200).json(new ApiResponse(200, serviceProvider, "Service Provider details fetched successfully"));
});

const getServiceProviderReviews = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const reviews = await Review.find({ tradesperson: id }).populate('user', 'fullName');
    return res.status(200).json(new ApiResponse(200, reviews, "Reviews fetched successfully"));
});

export { getServiceProviderByCity, getServiceProviderDetails, getServiceProviderReviews };