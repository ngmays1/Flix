import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes';

export default (shows = [], action) => {
    //console.log(shows, action);
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...shows, action.payload];
        case UPDATE:
            return shows.map((show) => show._id === action.payload._id ? action.payload : show);
        case DELETE:
            return shows.filter((show) => show._id !== action.payload )
        default:
            return shows;
    }
}