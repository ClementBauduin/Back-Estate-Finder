import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

export function createToken  (user) {
    const accessToken = jwt.sign({id: user._id, username: user.username}, process.env.JWT_SECRET);
    return accessToken;
}

export function validateToken (req, res, next) {
    const token = req.cookies.accessToken;
    
    if (!token) {
        console.log(token)
        return res.status(200).json({ user: false });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if (decoded) {
            req.user = decoded;  
            return next();
        }
    } catch (error) {
        return res.status(400).json({ message: "Unauthorized" +error});
    }
}
