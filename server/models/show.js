import mongoose from 'mongoose';

const showSchema = mongoose.Schema({
    title: String,
    rating: Number,
    genre: String,
    tags: [String],
    image: String,
    description: String,
    likes: {
        type: Number,
        default: 0
    },
    addedOn: {
        type: Date,
        default: new Date()
    },
});

const Show = mongoose.model('shows', showSchema);

export default Show;