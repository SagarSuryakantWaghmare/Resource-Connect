import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const tradespersonSchema = new mongoose.Schema(
    {
        phone: {
            type: String,
            required: true,
            validate: [validator.isMobilePhone, 'Invalid phone number']
        },
        professions: {
            type: [String], // Array of professions
            default: []
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
        }
    },
    {
        timestamps: true
    }
);

tradespersonSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }
});

tradespersonSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

tradespersonSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, userType: this.userType }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

const Tradesperson = mongoose.model('Tradesperson', tradespersonSchema);

module.exports = Tradesperson;