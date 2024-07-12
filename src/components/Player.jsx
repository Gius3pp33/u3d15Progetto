import { useSelector } from 'react-redux';
import { Container, Row, Col, ProgressBar, Image } from 'react-bootstrap';
import shuffleIcon from '../assets/playerbuttons/shuffle.png';
import prevIcon from '../assets/playerbuttons/prev.png';
import playIcon from '../assets/playerbuttons/play.png';
import nextIcon from '../assets/playerbuttons/next.png';
import repeatIcon from '../assets/playerbuttons/repeat.png';
import { HeartFill, Heart, ExclamationSquareFill } from 'react-bootstrap-icons'; 
import { selectCurrentSong } from '../redux/reducers/playerReducer';

const Player = () => {
     // Ottengo la canzone corrente dallo stato globale usando `selectCurrentSong` 
  const currentSong = useSelector(selectCurrentSong);
  // Ottiengo la lista dei "mi piace" dallo stato globale e verifica se la canzone corrente è nei "mi piace"
  const likes = useSelector(state => state.likes);
  const isLiked = currentSong ? likes.some(like => like.id === currentSong.id) : false;


  if (!currentSong) {
    return (
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <p className="text-white text-center mt-4">
              Select a song to play <ExclamationSquareFill />
            </p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 align-items-center">
            <Col xs={6} md={3} className="text-white text-center d-flex mb-3">
              <Image src={currentSong.artist.picture_small} alt="Artist" className="artist-image mt-2" />
              <p className="mt-4 ms-2">{currentSong.artist.name}</p>
              <p className="mt-4 ms-2">{currentSong.album.title}</p>
              <div className="ml-auto ms-2 mt-4">
                {isLiked ? <HeartFill className="ml-3" /> : <Heart className="ml-3" />}
              </div>
            </Col>
            <Col xs={6} md={5} className="playerControls">
              <p className="text-white text-center">
                {currentSong.title} by {currentSong.artist.name}
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <Image src={shuffleIcon} alt="shuffle" className="mx-3" />
                <Image src={prevIcon} alt="prev" className="mx-3" />
                <Image src={playIcon} alt="play" className="mx-3" />
                <Image src={nextIcon} alt="next" className="mx-3" />
                <Image src={repeatIcon} alt="repeat" className="mx-3" />
              </div>
              <ProgressBar now={0} className="mt-3" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
