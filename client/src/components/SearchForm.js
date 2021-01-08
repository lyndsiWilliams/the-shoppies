// React
import { useState } from 'react';
import { connect } from 'react-redux';
// Actions
import { getMovies } from '../redux/actions';
// Components
import Nominations from './Nominations';
import SearchResults from './SearchResults';


const SearchForm = props => {
  console.log("Props in SearchForm:", props);

  const [query, setQuery] = useState({ title: '' });
  const [nominations, setNominations] = useState([]);
  console.log("nominations", nominations);

  const handleSubmit = event => {
    event.preventDefault();
    props.getMovies(query);
    setQuery({ title: '' });
  };

  const handleChanges = event => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const deleteNomination = movie => {
    const newArr = [...nominations];
    const movieIndex = nominations.indexOf(movie);
    newArr.splice(movieIndex, 1);
    setNominations(newArr);
  };

  return (
    <div className="search-form">
      <h1>The Shoppies</h1>
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
      <SearchResults movies={props.movies} />
      <Nominations />
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