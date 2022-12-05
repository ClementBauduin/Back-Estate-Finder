import mongoose from "mongoose";

const EstateSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    room: {
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
        type: Number,
        required: true,
    }
},{timestamps: true});

const EstateModel = mongoose.model("Estate",EstateSchema);

export default EstateModel;