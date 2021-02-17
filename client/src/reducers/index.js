import { combineReducers } from 'redux';
import shows from './shows';
import users from './users';

export default combineReducers({ shows, users });