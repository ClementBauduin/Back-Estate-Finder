import UserModel from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import sendConfirmationCode from '../config/nodemailer.config.js';

export default async function RegisterUser(req, res) {
  const { username, password,email } = req.body;
  let saltRounds = 10;

  try {
    let token = '';
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 25; i++) {
      token += characters[Math.floor(Math.random() * characters.length )];
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password,salt);
    const user = new UserModel({ username:username, password:hash,email:email,confirmationCode:token });
    await user.save((err => {
      if (err) {
        res.status(500).json({ message: err });
      } else {
        res.status(200).json({message:"User registered, please check your email to activate your account"});
        sendConfirmationCode(username,email,user.confirmationCode);
      }
    }));
    

  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error"});
  }
}