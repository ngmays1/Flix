import express from 'express';
//import { updateUser } from '../../client/src/actions/users.js';
import { getUsers, setSesh, createUser, updateUser } from '../controllers/users.js'
 
const router = express.Router();

//localhost:5000/users
router.get('/', getUsers );
router.post('/', createUser);
//router.patch('/:id', setSesh);
router.patch('/:id', updateUser);
//router.post('/', createLogin );

export default router;