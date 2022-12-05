import express from 'express';
const app = express();
import cors from "cors";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config()
import router from '../router.js';


app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors())
app.use(morgan('tiny'))
app.use(cookieParser())
app.use(router)


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {app.listen(process.env.PORT || 5000,() => console.log("Server on"))})
    .catch((err) => console.log(err))
