import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../actions';

const initialState = {
  movies: [],
  error: "",
  isFetching: false
};

export function moviesReducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_MOVIES_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        movies: action.payload
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  };
};