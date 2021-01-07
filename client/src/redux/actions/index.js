// Axios
import axios from 'axios';
// Destructure the command names to avoid typos in the reducer
// GET
export const FETCH_MOVIES_START = "FETCH_MOVIES_START";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";


export const getMovies = () => dispatch => {
  dispatch({ type: FETCH_MOVIES_START });
  axios.get("http://www.omdbapi.com/?s=inception&apikey=7232becf")
    .then(response => {
      console.log(response.data);
      dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data.Search });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_MOVIES_FAILURE, payload: error });
    });
};