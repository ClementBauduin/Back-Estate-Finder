import UserModel from "../models/UserModel.js";

export default async function IsUserRegistered(req, res,next) {
  const { username,email } = req.body;
  const user = await UserModel.findOne({ $or: [{ username: username }, { email: email }] });
  
  if (user) {
    if (user.status === "Pending") {
      return res.status(200).json({ message: "User already registered, please check your email to activate your account" });
    } else {
      return res.status(200).json({ message: "User already registered" });
    }
    
  } else {
    next();
  }
}