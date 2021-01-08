// React
import { useState } from 'react';
import { connect } from 'react-redux';
// Actions
import { postNomination } from '../redux/actions';

const SearchResults = props => {
  console.log("props in SearchResults: ", props)
  
  const [nominations, setNominations] = useState([]);

  const addNomination = nominatedMovie => {
    console.log("Nominated movie: ", nominatedMovie);
    if(props.nominations.includes(nominatedMovie)) {
      alert("This movie has already been nominated!");
    } else if(props.nominations.length === 5) {
      alert("You can only nominate 5 movies.")
    } else {
      props.postNomination(nominatedMovie);
    }
    console.log("nominations", nominations);
  };

  const deleteNomination = movie => {
    if(nominations.includes(movie)) {
      const newArr = [...nominations];
      const movieIndex = nominations.indexOf(movie);
      newArr.splice(movieIndex, 1);
      setNominations(newArr);
    } else {
      alert("This movie is not in your nomination list.")
    }
  };

  return (
    props.movies && !props.isFetching && props.movies.map(movie => (
      <div key={movie.imdbID}>
        <p>
          Title: {movie.Title} | Year: {movie.Year}
        </p>
        <button onClick={() => addNomination(movie.Title)}>Nominate</button>
        <button onClick={() => deleteNomination(movie.Title)}>Remove</button>
      </div>
    ))
  );
};

const mapStateToProps = state => ({
  nominations: state.nominationsReducer.nominations
});


export default connect (
  mapStateToProps,
  { postNomination }
)(SearchResults);