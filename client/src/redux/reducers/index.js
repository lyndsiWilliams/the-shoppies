import { combineReducers } from 'redux';
// Reducers
import { moviesReducer } from './moviesReducer';
import { nominationsReducer } from './nominationsReducer';


export default combineReducers({
  moviesReducer,
  nominationsReducer
});