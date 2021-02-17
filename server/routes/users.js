import express from 'express';
//import { updateUser } from '../../client/src/actions/users.js';
import { getUsers, setSesh, createUser, updateUser, getUser } from '../controllers/users.js'
 
const router = express.Router();

//localhost:5000/users
router.get('/', getUsers );
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', setSesh);
//router.patch('/:id', updateUser);
//router.post('/', createLogin );

export default router;