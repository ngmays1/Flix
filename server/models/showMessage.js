import mongoose from 'mongoose';

const showSchema = mongoose.Schema({
    title: String,
    rating: Number,
    genre: String,
    tags: [String],
    image: String,
    likes: {
        type: Number,
        default: 0
    },
    addedOn: {
        type: Date,
        default: new Date()
    },
});

const ShowMessage = mongoose.model('shows', showSchema);

export default ShowMessage;