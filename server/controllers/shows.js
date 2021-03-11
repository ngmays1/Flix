import mongoose from 'mongoose';
import Show from '../models/show.js';
import { authenticateToken } from './users.js';


export const getShows = /*(authenticateToken) =>*/ async (req, res) => {
    try {
        const showMessage = await Show.find();

        console.log(showMessage);

        res.status(200).json(showMessage);
    } catch (error) {
        res.status(404).json({message: error });
    }
}

export const getShow = async (req, res) => {

    const { id } = req.params;
    try {
        const show = await Show.findById(id);

        console.log(show);

        res.status(200).json(show);
    } catch (error) {
        res.status(404).json({message: error });
    }

}

export const createShows = async (req, res) => {
    const show = req.body;

    const newShow = new Show(show);

    try {
        await newShow.save();

        res.status(201).json(newShow);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const createShow = async (req, res) => {
    const show = req.body;

    const newShow = new Show(show);

    try {
        await newShow.save();

        res.status(201).json(newShow);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updateShow = async (req, res) => {
    const { id: _id } = req.params;
    //const show = req.body;
    const show = req.body;
    console.log(show);

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No show with that id');

    const updatedShow = await Show.findByIdAndUpdate(_id, { ...show }, { new: true });

    res.json(updatedShow);
}

export const deleteShow = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No show with that id');

    await Show.findByIdAndRemove(id);

    res.json({message: 'Post deleted successfully' });
}

export const likeShow = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No show with that id');

    const show = await Show.findById(id);
    const updatedShow = await Show.findByIdAndUpdate(id, { likeCount: show.likeCount +1}, { new: true });

    res.json(updatedShow)
}