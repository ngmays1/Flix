import axios from 'axios';

//const url = 'https://blog-tempalte.herokuapp.com/users';
const url = 'http://localhost:5000/users';


export const fetchUsers = () => axios.get(url);
export const createUser = (newUser) => axios.post(url, newUser);
export const updateUser = (id, updatedUser) => axios.patch(`${url}/${id}`, updatedUser);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);
//export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)