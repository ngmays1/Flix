import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes';
import * as api from '../api';

//Action creators > function that returns an action
export const getShows = () => async (dispatch) => {
    try {
        const { data } = await api.fetchShows();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createShow = (show) => async (dispatch) => {
    try {
        const { data } = await api.createShow(show);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateShow = (id, show) => async (dispatch) => {
    try {
        const { data } = await api.updateShow(id, show);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteShow = (id) => async (dispatch) => {
    try {
        await api.deleteShow(id);

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const likeShow = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeShow(id);

        dispatch({ type: UPDATE, payload: data });         
    } catch (error) {
        console.log(error);
    }
}