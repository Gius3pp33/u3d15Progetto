import { useSelector } from 'react-redux';
import { Container, Row, Col, ProgressBar, Image } from 'react-bootstrap';
import shuffleIcon from '../assets/playerbuttons/shuffle.png';
import prevIcon from '../assets/playerbuttons/prev.png';
import playIcon from '../assets/playerbuttons/play.png';
import nextIcon from '../assets/playerbuttons/next.png';
import repeatIcon from '../assets/playerbuttons/repeat.png';

const Player = () => {
  const currentSong = useSelector(state => state.player.currentSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              {currentSong ? (
                <>
                  <p>Now Playing: {currentSong.title} by {currentSong.artist.name}</p>
                  <div className="d-flex justify-content-center">
                    <Image src={shuffleIcon} alt="shuffle" className="mx-1" />
                    <Image src={prevIcon} alt="prev" className="mx-1" />
                    <Image src={playIcon} alt="play" className="mx-1" />
                    <Image src={nextIcon} alt="next" className="mx-1" />
                    <Image src={repeatIcon} alt="repeat" className="mx-1" />
                  </div>
                  <ProgressBar now={60} />
                </>
              ) : (
                <p>Select a song to play</p>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
