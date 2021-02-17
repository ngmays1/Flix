import { FETCH_ALL, FETCH_USER, CREATE, DELETE, UPDATE } from '../constants/actionTypes';

export default (users = [], action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload;
        case CREATE:
            return [...users, action.payload];
        case UPDATE:
            return users.map((user) => user._id === action.payload._id ? action.payload : user);
        case DELETE:
            return users.filter((user) => user._id !== action.payload )
        default:
            return users;
    }
}