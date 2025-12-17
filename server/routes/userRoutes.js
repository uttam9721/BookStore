import express from 'express'
import { login, register } from '../controller/User.js';
// import { Authenticated } from '../middleware/Authenticated.js';

const router=express.Router();


router.post('/register',register);
router.post('/login',login);

export default router;