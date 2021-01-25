import mongoose from 'mongoose';
import ShowMessage from '../models/showMessage.js';

export const getLogin = async (req, res) => {
    try {
        const showMessage = await ShowMessage.find();

        console.log(showMessage);

        res.status(200).json(showMessage);
    } catch (error) {
        res.status(404).json({message: error });
    }

}

export const createLogin = async (req, res) => {
    const show = req.body;

    const newShow = new ShowMessage(show);

    try {
        await newPost.save();

        res.status(201).json(newShow);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}
