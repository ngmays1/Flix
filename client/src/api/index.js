import axios from 'axios';

//const url = 'https://blog-tempalte.herokuapp.com/shows';
const url = 'http://localhost:5000/shows';


export const fetchShows = () => axios.get(url);
export const createShow = (newShow) => axios.show(url, newShow);
export const updateShow = (id, updatedShow) => axios.patch(`${url}/${id}`, updatedShow);
export const deleteShow = (id) => axios.delete(`${url}/${id}`);
export const likeShow = (id) => axios.patch(`${url}/${id}/likeShow`);