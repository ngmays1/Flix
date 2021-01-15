import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import showRoutes from './routes/shows.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/shows', showRoutes);

app.get('/', (req, res) => {
    res.send("welcome to the shows API");
})

// https://wwww.mongodb.com/cloud/atlas 

//const CONNECTION_URL =  'mongodb+srv://nmdreads2:gnZbYOlSd6LnguSd@cluster0.7pxpu.mongodb.net/cluster0?retryWrites=true&w=majority';
const  PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);