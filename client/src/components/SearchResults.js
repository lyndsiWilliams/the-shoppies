// React
import { useState } from 'react';
import { connect } from 'react-redux';
// Actions
import { getNominations, postNomination, deleteNomination } from '../redux/actions';

const SearchResults = props => {
  console.log("props in SearchResults: ", props)

  const [disButton, setDisButton] = useState(false);

  const addNomination = (nominatedMovie) => {
    props.getNominations();
    console.log("Nominated movie: ", nominatedMovie);
    console.log("props.nominations: ", props);
    if(props.nominations.includes(nominatedMovie)) {
      alert("This movie has already been nominated!");
    } else if(props.nominations.length === 5) {
      alert("You can only nominate 5 movies.")
    } else {
      props.postNomination(nominatedMovie);
      handleDisable(nominatedMovie);
    };
  };

  const deleteNomination = id => {
    // console.log("props.nominations", props.nominations)
    // if(props.nominations.includes(id)) {
      props.deleteNomination(id);
    // } else {
    //   alert("This movie is not in your nomination list.");
    // };
  };

  // NOT WORKING YET
  const handleDisable = nominatedMovie => {
    props.getNominations();
    console.log(nominatedMovie)
    if(props.nominations.includes(nominatedMovie)) {
      // setDisButton(true)
    }
  }

  const movieObj = Object.create({});

  const movieMaker = (movie) => {
    // console.log(movie)
    movieObj.Poster = movie.Poster;
    movieObj.Title = movie.Title;
    movieObj.Type = movie.Type;
    movieObj.Year = movie.Year;
    movieObj.imdbID = movie.imdbID;
    movieObj.nominated = false;
    // console.log("movieObj", movieObj);
  }

  const newMovieList = props.movies.map(movie => movieMaker(movie))

  // console.log("Array.from", Array.from(props.movies, movie => movieMaker(movie)))

  console.log("newMovieList: ", newMovieList);

  const nom = Object.create({});
  
  const nomMaker = (title, id) => {
    nom.title = title;
    nom.id = id;
    nom.nominated = false;
    console.log("nom in nomMaker: ", nom);
  };

  const handleClick = (title, id) => {
    nomMaker(title, id);
    nom.nominated = !nom.nominated;
    console.log("nom in handleClick: ", nom);
    addNomination(nom);
  };

  return (
    props.movies && !props.isFetching && props.movies.map(movie => (
      <div key={movie.imdbID}>
        <p>
          Title: {movie.Title} | Year: {movie.Year}
        </p>
        <button disabled={disButton} onClick={() => handleClick(movie.Title, movie.imdbID)}>Nominate</button>
        <button onClick={() => deleteNomination(movie.imdbID)}>Remove</button>
      </div>
    ))
  );
};

const mapStateToProps = state => ({
  nominations: state.nominationsReducer.nominations,
});


export default connect (
  mapStateToProps,
  { getNominations, postNomination, deleteNomination }
)(SearchResults);