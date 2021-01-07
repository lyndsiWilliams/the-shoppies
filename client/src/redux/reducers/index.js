import { combineReducers } from 'redux';
// Reducers
import { moviesReducer } from './moviesReducer';


export const rootReducer = combineReducers({
  moviesReducer,
});