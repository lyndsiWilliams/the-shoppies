// React
import { connect } from 'react-redux';
// Actions
import { getMovies } from '../redux/actions';


const SearchForm = props => {
  console.log("Props in SearchForm:", props);

  return(
    <div>
      <button onClick={props.getMovies}>Get movies</button>
      {props.movies && !props.isFetching && props.movies.map(movie => (
        <div key={movie.imdbID}>
          <p>Title: {movie.Title} | Year: {movie.Year} <button>Nominate</button></p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  error: state.error,
  isFetching: state.isFetching
});


export default connect (
  mapStateToProps,
  { getMovies }
)(SearchForm);