// Axios
import axios from 'axios';
// Destructure the command names to avoid typos in the reducer
// MOVIES
export const FETCH_MOVIES_START = "FETCH_MOVIES_START";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";
// NOMINATIONS
export const GET_NOMINATIONS = "GET_NOMINATIONS";
export const POST_NOMINATION = "POST_NOMINATION";
export const DELETE_NOMINATION = "DELETE_NOMINATION";


// ---------- MOVIES ----------

export const getMovies = query => dispatch => {
  dispatch({ type: FETCH_MOVIES_START });
  axios.get(`https://www.omdbapi.com/?s=${query.title}&apikey=7232becf&type=movie`)
    .then(response => {
      dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data.Search });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCH_MOVIES_FAILURE, payload: error });
    });
};

// ---------- NOMINATIONS ----------

export const getNominations = () => dispatch => {
  dispatch({ type: GET_NOMINATIONS });
};

export const postNomination = nomination => dispatch => {
  dispatch({ type: POST_NOMINATION, payload: nomination });
};

export const deleteNomination = nominationID => dispatch => {
  dispatch({ type: DELETE_NOMINATION, payload: nominationID });
};