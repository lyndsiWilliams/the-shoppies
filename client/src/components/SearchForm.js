// React
import { useState } from 'react';
import { connect } from 'react-redux';
// Actions
import { getMovies } from '../redux/actions';
// Components
import SearchResults from './SearchResults';
import Nominations from './Nominations';
import MovieCard from './MovieCard';


const SearchForm = props => {
  console.log("Props in SearchForm:", props);

  const [query, setQuery] = useState({ title: '' });

  const handleSubmit = event => {
    event.preventDefault();
    props.getMovies(query);
    setQuery({ title: '' });
  };

  const handleChanges = event => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  return (
    <div className="App">
      <div className="search-form">
        <span className="title-text"><h1>The Shoppies</h1></span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Search for a movie by title..."
            onChange={handleChanges}
            value={query.title}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="results-noms">
        <SearchResults movies={props.movies} />
        <Nominations />
        <MovieCard />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.moviesReducer.movies,
  error: state.moviesReducer.error,
  isFetching: state.moviesReducer.isFetching
});


export default connect (
  mapStateToProps,
  { getMovies }
)(SearchForm);