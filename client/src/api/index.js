import axios from 'axios';

//const show_url = 'https://blog-tempalte.herokuapp.com/shows';
const show_url = 'http://localhost:5000/shows';

export const fetchShows = () => axios.get(show_url);
export const createShow = (newShow) => axios.show(show_url, newShow);
export const updateShow = (id, updatedShow) => axios.patch(`${show_url}/${id}`, updatedShow);
export const deleteShow = (id) => axios.delete(`${show_url}/${id}`);
export const likeShow = (id) => axios.patch(`${show_url}/${id}/likeShow`);