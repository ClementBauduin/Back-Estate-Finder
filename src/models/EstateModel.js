import mongoose from "mongoose";

const EstateSchema = new mongoose.Schema({
    seller: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["house", "apartment", "villa"],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rooms: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        default: [],
        required: true,
    },
},{timestamps: true});

const EstateModel = mongoose.model("Estate",EstateSchema);

export default EstateModel;