import express from 'express';
import RegisterUser from './routes/register.js';
import IsUserRegistered from './middleware/IsUserRegistered.js';
import UserExist from './middleware/UserExist.js';
import Login from './routes/login.js';
import ConfirmSignUp from './routes/confirmSignUp.js';
import whoami from './routes/whoAmI.js';
import { validateToken } from './jwt/jwt.js';
import { logout } from './routes/logout.js';
import {saveEstateImg} from './middleware/saveEstateImg.js';
import saveEstateDb from './middleware/saveEstateDb.js';
import getUserEstate from './middleware/getUserEstate.js';
import getEstate from './middleware/getEstate.js';
import getEstates from './middleware/getEstates.js';
import deleteEstate from './middleware/deleteEstate.js';
import editEstate from './middleware/editEstate.js';

const router = express.Router();

router.post("/api/register",IsUserRegistered,RegisterUser)
router.post("/api/login",UserExist,Login)
router.post("/api/newestate",validateToken,saveEstateImg,saveEstateDb)

router.get("/api/confirm/:confirmationCode",ConfirmSignUp)
router.get("/api/logout",logout)
router.get("/api/whoami",validateToken,whoami)
router.get("/api/userestates/:username",validateToken,getUserEstate)
router.get("/api/estate/:id",getEstate)
router.get("/api/estates",getEstates)

router.delete("/api/deleteEstate/:id",validateToken,deleteEstate)

router.patch("/api/editEstate/:id",validateToken,editEstate)
export default router;
