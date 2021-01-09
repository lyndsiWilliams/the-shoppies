// React
import { useEffect } from 'react';
import { connect } from 'react-redux';
// Actions
import { getNominations } from '../redux/actions';

const Nominations = props => {
  console.log("Props in Nominations: ", props);

  useEffect(() => {
    props.getNominations();
  }, [props.nominations])

  return (
    <div>
      <h2>Nominations</h2>
      {props.nominations.length === 5 ? <h4>Your nominations are full!</h4> : <h4>Pick up to 5 nominations.</h4>}
      {props.nominations && props.nominations.map((nom, i) => (
        <p key={i}>{nom}</p>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  nominations: state.nominationsReducer.nominations
});


export default connect (
  mapStateToProps,
  { getNominations }
)(Nominations);