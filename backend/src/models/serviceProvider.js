import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const serviceProvider = new mongoose.Schema(
    {
        professions: {
            type: [String], // Array of professions
            default: [],
            required: true,
            enum: ['plumber', 'electrician', 'handyman', 'mover', 'cleaning', 'painting']
        },
        experience: {
            type: Number,
            required: true,
            min: 0
        },
        location: {
            type: String,
            required: true
        },
        minHourlyRate: {
            type: Number,
            required: true,
        },
        maxHourlyRate: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        availability: {
            type: Boolean,
            default: true
        },
        additionalDetails: {
            type: Map,
            of: String,
            default: {}
        },
        badges: {
            type: [String],
            default: [],
            enum: ["elite", "pro", "verified", "featured", "top-rated", "new", "experienced", "local", "remote", "onsite", "online", "emergency", "24x7", "discount", "free-consultation", "free-quote", "free-visit", "free-trial", "free-estimate", "free-delivery", "free-shipping", "free-installation", "free-setup", "free-repair", "free-replacement", "free-maintenance", "free-support", "free-upgrade", "free-training", "free-consultation", "free-advice", "free-counseling", "free-coaching", "free"],
        }
    },
    {
        timestamps: true
    }
);

serviceProvider.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }
});

serviceProvider.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

serviceProvider.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, userType: this.userType }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

const serviceProvider = mongoose.model('Tradesperson', serviceProvider);

module.exports = serviceProvider;