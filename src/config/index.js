import express from 'express';
const app = express();
import cors from "cors";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();
import router from '../router.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors({credentials: true, origin: 'https://estate-finder-clement-bauduin.onrender.com/'}))
app.use(morgan('tiny'))
app.use(cookieParser())
app.use(router)
app.use(express.static(path.join(__dirname, '../uploads')));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {app.listen(process.env.PORT || 5000,() => console.log("Server on"))})
    .catch((err) => console.log(err))
