// React
import { useEffect } from 'react';
import { connect } from 'react-redux';
// Actions
import { getMovies, getNominations } from '../redux/actions';

const Nominations = props => {
  console.log("Props in Nominations: ", props);

  const propNoms = [...props.nominations];
  console.log("propNoms", propNoms)

  useEffect(() => {
    props.getNominations();
    // const nominations = getMovies().filter(nom => nom.id = ???)
  }, [propNoms])

  return (
    <div className="nominations">
      <h2>Nominations</h2>
      {props.nominations.length === 5 ? <h4>Your nominations are full!</h4> : <h4>Pick up to 5 nominations.</h4>}
      {props.nominations && props.nominations.map((nom) => (
        <p key={nom.id}>{nom.title}</p>
        // CHANGE THIS TO MOVIE CARD

        // PUT REMOVE NOMINATION BUTTON HERE
        // NOMINATION DISABLE FUNCTIONALITY GOES HERE
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  nominations: state.nominationsReducer.nominations,
  movies: state.moviesReducer.movies,
  error: state.moviesReducer.error,
  isFetching: state.moviesReducer.isFetching
});


export default connect (
  mapStateToProps,
  { getMovies, getNominations }
)(Nominations);