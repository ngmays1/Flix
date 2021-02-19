import express from 'express';
import { getShows as getShows, getShow, createShow, updateShow, deleteShow, likeShow } from '../controllers/Shows.js'
import { authenticateToken } from '../controllers/users.js';
 
const router = express.Router();

//localhost:5000/Shows
router.get('/', authenticateToken, getShows ); //tested
router.get('/:id', getShow); //tested
router.post('/', createShow ); //tested
router.patch('/:id', updateShow); //tested
router.delete('/:id', deleteShow); //tested
router.patch('/:id/likeShow', likeShow);

export default router;