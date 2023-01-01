import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;
const url = process.env.REACT_APP_API_URL;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass
    }
});

export default function sendConfirmationCode(name,email,confirmationCode) {
    transporter.sendMail({
        from: user,
        to: email,
        subject:"Please confirm your email",
        html: `<h1>Hello ${name}</h1>
        <p>Thank you for registering on our website. Please click the link below to confirm your email.</p>
        <a href="${url}api/confirm/${confirmationCode}">Confirm email</a>`
    })
}
