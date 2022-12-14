import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Active"],
        default: "Pending",
    },
    confirmationCode: {
        type: String,
        unique: true,
    }
},{timestamps: true});

const UserModel = mongoose.model("User",UserSchema);

export default UserModel;