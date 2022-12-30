import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import {createToken} from "../jwt/jwt.js";

export default async function Login(req, res) {
    const { usernameEmail, password } = req.body;

    try {
        
        const user = await UserModel.findOne({$or : [{username : usernameEmail},{email : usernameEmail}]});
        
        if (user.status !== "Active") {
             return res.status(400).json({ message: "User not active. Please activate your account by clicking the link in the mail you received." });
        } 
        else {
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
                return res.status(400).json({ message: "Invalid Password" });
            } else {
                const token = createToken(user);
                res.cookie("accessToken", token,{ httpOnly: true,sameSite: "None", domain: ".onrender.com" });
                res.setHeader('Access-Control-Allow-Origin', 'https://estate-finder-clement-bauduin.onrender.com');
                res.setHeader('Access-Control-Allow-Credentials', true);
                res.status(200).json({ message: "Login successful" });
                
            }

        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }     
       
}
