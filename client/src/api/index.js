import axios from 'axios';

//const show_url = 'https://blog-tempalte.herokuapp.com/shows';
const show_url = 'http://localhost:5000/shows';
const user_url = 'http://localhost:5000/users';

export const fetchShows = () => axios.get(show_url);
export const createShow = (newShow) => axios.post(show_url, newShow);
export const updateShow = (id, updatedShow) => axios.patch(`${show_url}/${id}`, updatedShow);
export const deleteShow = (id) => axios.delete(`${show_url}/${id}`);
export const likeShow = (id) => axios.patch(`${show_url}/${id}/likeShow`);
export const fetchUsers = () => axios.get(user_url);
export const createUser = (newUser) => axios.post(user_url, newUser);
export const updateUser = (id, updatedUser) => axios.patch(`${user_url}/${id}`, updatedUser);
export const updateSesh = (id, updatedSesh) => axios.patch(`${user_url}/${id}`, updatedSesh);
