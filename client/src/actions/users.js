import { FETCH_ALL, CREATE, DELETE, UPDATE, FETCH_USER, LOGIN } from '../constants/actionTypes';
import * as api from '../api';
//import User from '../../../server/models/showUser';
//const User = require('../../../server/models/showUser');
//Action creators > function that returns an action
export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        console.log(data);
        dispatch({ type: FETCH_USER, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const authUser = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        console.log(data);
        dispatch({ type: FETCH_USER, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const addUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);
        console.log(data);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = (user) => async (dispatch) => {
    try{
        console.log(user);
        const { data } = await api.updateSesh(user);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const login = (creds) => async (dispatch) => {
    try {
        const { data } = await api.login(creds);
        console.log(data);
        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

