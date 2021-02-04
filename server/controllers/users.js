import mongoose from 'mongoose';
import User from '../models/showUser.js';

export const getUsers = async (req, res) => {
    try {
        const user = await User.find();

        console.log(user);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error });
    }

}

export const setSesh = async (req, res) => {
    const { id } = req.params;
    //const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const user = await User.findById(id);
    const updatedUser = await PostMessage.findByIdAndUpdate(id, { session: localStorage.token}, { new: true });

    res.json(updatedUser);
}

export const createUser = async (req, res) => {
    //const { id } = req.params;
    //const user = req.body;
    const user = req.body;
    const newUser = new User(user);

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        //res.status(409).json({ message: error });
    }
/*
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        session: ''
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.json({ message: error });
    } */
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
