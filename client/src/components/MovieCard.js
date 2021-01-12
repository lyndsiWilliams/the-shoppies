import { Card, Image } from 'semantic-ui-react'
import placeholder from './images/placeholder.jpg'


const MovieCard = props => {
  const {
    Poster,
    Title,
    Year,
    // imdbID,
    // nominated,
  } = props.movie;

  const handleImg = img => {
    console.log(img)
    if(img ==='N/A') {
      img='/images/wireframe/image.png'
    } else {
      img=img
    }
  }

  return (
    <Card>
      <Image src={Poster == 'N/A' ? placeholder : Poster} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{Title}</Card.Header>
        <Card.Meta>{Year}</Card.Meta>
      </Card.Content>
    </Card>
  );
};


export default MovieCard;