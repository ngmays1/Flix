import axios from 'axios';

//const url = 'https://blog-tempalte.herokuapp.com/users';
const url = 'http://localhost:5000/users';


export const fetchPosts = () => axios.get(url);
export const createPost = (newUser) => axios.post(url, newUser);
export const updatePost = (id, updatedUser) => axios.patch(`${url}/${id}`, updatedUser);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)