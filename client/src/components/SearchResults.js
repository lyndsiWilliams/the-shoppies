// React
import { useEffect } from 'react';
import { connect } from 'react-redux';
// Actions
import { getMovies, getNominations, postNomination, deleteNomination } from '../redux/actions';
// Components
import MovieCard from './MovieCard';


const SearchResults = props => {
  console.log("props in SearchResults: ", props)

  // const [tempNoms, setTempNoms] = useState({});

  const propNoms = [...props.nominations];
  console.log("propNoms", propNoms)

  useEffect(() => {
    props.getNominations();
    console.log("getNoms in USEEFFECT", props.nominations)
  }, [propNoms])

  const addNomination = (nominatedMovie) => {
    if(props.nominations.includes(nominatedMovie)) {
      alert("This movie has already been nominated!");
    } else if(props.nominations.length === 5) {
      alert("You can only nominate 5 movies.")
    } else {
      props.postNomination(nominatedMovie);
    };
    console.log("Nominated movie: ", nominatedMovie);
    // console.log("NOM in ADDNOMINATION ", nom);
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
    console.log(nominatedMovie)
    nominatedMovie.nominated = !nominatedMovie.nominated
  }

  const newMovieList = props.movies.map(movie => {
    const newMovie = {...movie};
    newMovie.nominated = false;
    return newMovie;
  })

  console.log("newMovieList: ", newMovieList);

  // const nom = Object.create({});
  
  // const nomMaker = (title, id) => {
  //   nom.title = title;
  //   nom.id = id;
  //   nom.nominated = true;
  //   console.log("nom in nomMaker: ", nom);
  // };

  const handleClick = (title, id) => {
    /*
    - pass in the nominated movie
      - by id? nom list will filter original movie list by id
      - need to get whole object to pass in, not just id
    - disable nomination button
      - make movie.nominated = !movie.nominated
    */
    const nomination = getMovies().filter(nom => nom.id = id)
    // nomMaker(title, id);
    // addNomination(nom);
    // handleDisable(nom);
    console.log("nom in handleClick: ", nomination);
  };

  return (
    <div>
      <h2>Search results</h2>
      <div className="results">
        {props.movies.length < 1 ? <h4>Enter a movie in the search bar</h4> : null}
        {props.movies && !props.isFetching && newMovieList.map(movie => (
          <div key={movie.imdbID}>
            <MovieCard movie={movie} />
            <button onClick={() => handleClick(movie.imdbID)}>Nominate</button>
            {/* PUT NOMINATE BUTTON HERE */}
          </div>
          
          // <div key={movie.imdbID}>
          //   <p>
          //     Title: {movie.Title} | Year: {movie.Year}
          //   </p>
          //   <button disabled={movie.nominated ? true : false} onClick={() => handleClick(movie.Title, movie.imdbID)}>Nominate</button>
          //   <button onClick={() => deleteNomination(movie.imdbID)}>Remove</button>
          // </div>
        ))}
      </div>
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
  { getMovies, getNominations, postNomination, deleteNomination }
)(SearchResults);