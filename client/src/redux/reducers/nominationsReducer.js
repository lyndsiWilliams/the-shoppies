import {
  GET_NOMINATIONS,
  POST_NOMINATION,
  DELETE_NOMINATION
} from '../actions';

const initialState = {
  nominations: []
};

export function nominationsReducer(state=initialState, action) {
  switch(action.type) {
    case GET_NOMINATIONS:
      return { ...state };
    case POST_NOMINATION:
      return {
        ...state,
        nominations: state.nominations.concat(action.payload)
      };
    case DELETE_NOMINATION:
      return (console.log("action.payload", action.payload, "state", state.nominations),{
        ...state,
        nominations: state.nominations.filter(nomination => nomination.id !== action.payload)
      })
    default:
      return state;
  };
};