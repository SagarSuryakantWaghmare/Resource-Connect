import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    tradesperson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tradesperson",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewDescription: {
        type: String,
        required: true
    },
    isApproved: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);