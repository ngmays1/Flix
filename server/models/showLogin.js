import mongoose from 'mongoose';

const loginSchema = mongoose.Schema({
    uname: String,
    password: String,
});

const User = mongoose.model('users', loginSchema);

export default User;