// React
import { useState } from 'react';
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

  const handleSubmit = event => {
    event.preventDefault();
    props.getMovies(query);
    setQuery({ title: '' });
  };

  const handleChanges = event => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const addNomination = nominatedMovie => {
    console.log("Nominated movie: ", nominatedMovie);
    if(nominations.includes(nominatedMovie)) {
      alert("This movie has already been nominated!");
    } else if(nominations.length === 5) {
      alert("You can only nominate 5 movies.")
    } else {
      setNominations([ ...nominations, nominatedMovie ]);
    }
    console.log("nominations", nominations);
  };

  const deleteNomination = movie => {
    const newArr = [...nominations];
    newArr.pop(movie);
    setNominations(newArr);
  }

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
            Title: {movie.Title} | Year: {movie.Year}
          </p>
          <button onClick={() => addNomination(movie.Title)}>Nominate</button>
          <button onClick={() => deleteNomination(movie.Title)}>Remove</button>
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