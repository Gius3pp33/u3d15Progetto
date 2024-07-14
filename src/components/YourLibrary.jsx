import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Col, Row } from "react-bootstrap";
import { setCurrentSong, toggleLike } from "../redux/actions";
import { Heart, HeartFill, PlayCircleFill } from "react-bootstrap-icons";

const YourLibrary = () => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likes);

  const handlePlay = (song) => {
    dispatch(setCurrentSong(song));
  };

  const handleLike = (song) => {
    dispatch(toggleLike(song));
  };

  return (
    <div className="mainPage col-md-9 offset-md-3 yourLibrary">
      <h2 className="text-white mb-5">Your Library/Your Liked Songs</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {likedSongs.map((song) => (
          <Col key={song.id}>
            <Card className="text-center cardAlbum">
              <Card.Img
                variant="top"
                className="imgCard"
                src={song.album.cover_medium}
                alt="track"
              />
              <Card.Body className="bodyCard">
                <Card.Text className="textcard">
                  Track: {song.title}
                  <br />
                  Artist: {song.artist.name}
                </Card.Text>
                <Button
                  variant="outline-secondary"
                  size="lg"
                  className="border-0"
                  onClick={() => handlePlay(song)}
                >
                  <PlayCircleFill />
                </Button>
                <Button
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => handleLike(song)}
                  className="ml-2 border-0"
                >
                  {likedSongs.some((like) => like.id === song.id) ? (
                    <HeartFill />
                  ) : (
                    <Heart />
                  )}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default YourLibrary;
