import express from 'express';
import RegisterUser from './routes/register.js';
import IsUserRegistered from './middleware/IsUserRegistered.js';
import UserExist from './middleware/UserExist.js';
import Login from './routes/login.js';
import ConfirmSignUp from './routes/confirmSignUp.js';
import whoami from './routes/whoami.js';
import { validateToken } from './jwt/jwt.js';
import { logout } from './routes/logout.js';

const router = express.Router();

router.post("/api/register",IsUserRegistered,RegisterUser)
router.post("/api/login",UserExist,Login)
router.get("/api/confirm/:confirmationCode",ConfirmSignUp)
router.get("/api/logout",logout)
router.get("/api/whoami",validateToken,whoami)

export default router;