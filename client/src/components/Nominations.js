const Nominations = props => {
  console.log("Props in Nominations: ", props);
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


export default Nominations;