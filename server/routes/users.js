import express from 'express';
import { getUsers, setSesh, createUser } from '../controllers/users.js'
 
const router = express.Router();

//localhost:5000/users
router.get('/', getUsers );
router.post('/', createUser);
router.patch('/:id', setSesh);
//router.post('/', createLogin );

export default router;