import express from 'express';
import { getLogin, createLogin } from '../controllers/login.js'
 
const router = express.Router();

//localhost:5000/login
router.get('/', getLogin );
router.post('/', createLogin );

export default router;