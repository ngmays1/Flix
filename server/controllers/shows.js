import mongoose from 'mongoose';
import ShowMessage from '../models/showMessage.js';

export const getShows = async (req, res) => {
    try {
        const showMessage = await ShowMessage.find();

        console.log(showMessage);

        res.status(200).json(showMessage);
    } catch (error) {
        res.status(404).json({message: error });
    }

}

export const createShows = async (req, res) => {
    const show = req.body;

    const newShow = new ShowMessage(show);

    try {
        await newPost.save();

        res.status(201).json(newShow);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updateShows = async (req, res) => {
    const { id: _id } = req.params;
    const show = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No show with that id');

    const updatedShow = await ShowMessage.findByIdAndUpdate(_id, { ...show, _id }, { new: true });

    res.json(updatedShow);
}

export const deleteShow = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No show with that id');

    await ShowMessage.findByIdAndRemove(id);

    res.json({message: 'Post deleted successfully' });
}

export const likeShow = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No show with that id');

    const show = await ShowMessage.findById(id);
    const updatedShow = await ShowMessage.findByIdAndUpdate(id, { likeCount: show.likeCount +1}, { new: true });

    res.json(updatedShow)
}