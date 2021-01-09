// React
import { useState } from 'react';
import { connect } from 'react-redux';
// Actions
import { getNominations, postNomination, deleteNomination } from '../redux/actions';

const SearchResults = props => {
  console.log("props in SearchResults: ", props)

  const [disButton, setDisButton] = useState(false);

  const addNomination = nominatedMovie => {
    console.log("Nominated movie: ", nominatedMovie);
    if(props.nominations.includes(nominatedMovie)) {
      alert("This movie has already been nominated!");
    } else if(props.nominations.length === 5) {
      alert("You can only nominate 5 movies.")
    } else {
      props.postNomination(nominatedMovie);
      handleDisable(nominatedMovie);
    };
  };

  const deleteNomination = (movie) => {
    if(props.nominations.includes(movie)) {
      props.deleteNomination(movie);
    } else {
      alert("This movie is not in your nomination list.");
    };
  };

  // NOT WORKING YET
  const handleDisable = nominatedMovie => {
    props.getNominations();
    if(props.nominations.includes(nominatedMovie)) {
      setDisButton(true)
    }
  }

  return (
    props.movies && !props.isFetching && props.movies.map(movie => (
      <div key={movie.imdbID}>
        <p>
          Title: {movie.Title} | Year: {movie.Year}
        </p>
        <button disabled={disButton} onClick={() => addNomination(movie.Title)}>Nominate</button>
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
  { getNominations, postNomination, deleteNomination }
)(SearchResults);