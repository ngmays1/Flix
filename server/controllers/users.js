import mongoose from 'mongoose';
import User from '../models/showUser.js';
import jwt from 'jsonwebtoken';
//import dotenv from 'dotenv';
//dotenv.config();


export const getUsers = async (req, res) => {
    try {
        const user = await User.find();

        console.log(user);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error });
    }
}

export const getUser = async (req, res) => {

    const { id } = req.params;
    try {
        const user = await User.findById(id);

        console.log(user);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error });
    }

}

export const setSesh = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');

    //const user = await User.findById(id);
    const updatedUser = await User.findByIdAndUpdate(id, { ...user, session: localStorage.token}, { new: true });

    res.json(updatedUser);
}

export const createUser = async (req, res) => {
    //const { id } = req.params;
    //const user = req.body;
    console.log(req.body);
    const user = req.body;
    const newUser = new User(user);

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        //res.status(409).json({ message: error });
    }
}

export const updateUser = async (req, res) => {
    const { id: _id } = req.params;
    const user = req.body;
    console.log(user);
    console.log(id);
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No show with that id');

    const updatedUser = await User.findByIdAndUpdate(_id, { ...user, _id }, { new: true });

    res.json(udpatedUser);
}

export const updateSesh = async (req, res) => {
    const { id: _id } = req.params;
    const session = req.body;
    console.log(user);
    console.log(id);
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No show with that id');

    const updatedUser = await User.findByIdAndUpdate(_id, { session:session }, { new: true });

    res.json(updatedUser);
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


export const login = async (req, res) => {
    const user = req.body;
    let userfound = null;
    try {
        userfound = await User.findOne({username:user.username, password:user.password});
        //console.log(process.env.ACCESS_TOKEN_SECRET);
        const accessToken = jwt.sign(userfound.toJSON(), process.env.ACCESS_TOKEN_SECRET);
        console.log(accessToken);
        res.json({accessToken: accessToken});
    } catch (error) {
        console.log(error);
    }
}

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null ) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userfound) => {
        if (err) return res.sendStatus(403)
        req.user = userfound;
        next();
    });
}