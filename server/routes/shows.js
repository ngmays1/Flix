import express from 'express';
import { getShows as getShows, createShows, updateShows, deleteShow, likeShow } from '../controllers/Shows.js'
 
const router = express.Router();

//localhost:5000/Shows
router.get('/', getShows );
router.post('/', createShows );
router.patch('/:id', updateShows);
router.delete('/:id', deleteShow);
router.patch('/:id/likePost', likeShow);

export default router;