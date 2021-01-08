// React
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Actions
import { getMovies } from '../redux/actions';
// Components
import Nominations from './Nominations';


const SearchForm = props => {
  console.log("Props in SearchForm:", props);

  const [query, setQuery] = useState({ title: '' });
  const [nominations, setNominations] = useState([]);
  console.log("nominations", nominations);

  // useEffect(() => {
  //   props.getMovies(query);
  // }, [query])

  const handleSubmit = event => {
    event.preventDefault();
    props.getMovies(query);
    setQuery({
      title: ''
    });
  };

  const handleChanges = event => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const addNomination = (nominatedMovie) => {
    console.log("Nominated movie: ", nominatedMovie);
    if(nominations.includes(nominatedMovie)) {
      alert("This movie has already been nominated!");
    } else {
      setNominations([ ...nominations, nominatedMovie ]);
    }
    console.log("nominations", nominations);
  };

  return (
    <div>
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
      {props.movies && !props.isFetching && props.movies.map(movie => (
        <div key={movie.imdbID}>
          <p>
            Title: {movie.Title} | Year: {movie.Year} <button onClick={() => addNomination(movie.Title, movie.imdbID)}>Nominate</button>
          </p>
        </div>
      ))}
      <Nominations nominations={nominations} />
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