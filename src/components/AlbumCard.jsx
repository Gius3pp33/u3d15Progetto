import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, toggleLike } from '../redux/actions';
import { Card, Button } from 'react-bootstrap';

const AlbumCard = ({ song }) => {
  const dispatch = useDispatch();
  const likes = useSelector(state => state.likes);
  const isLiked = likes.some(like => like.id === song.id);

  const handlePlay = () => {
    dispatch(setCurrentSong(song));
  };

  const handleLike = () => {
    dispatch(toggleLike(song));
  };

  return (
    <Card className="text-center">
      <Card.Img variant="top" src={song.album.cover_medium} alt="track" />
      <Card.Body>
        <Card.Text>
          Track: "{song.title}"<br />
          Artist: {song.artist.name}
        </Card.Text>
        <Button variant="primary" onClick={handlePlay}>Play</Button>
        <Button variant="outline-secondary" onClick={handleLike} className="ml-2">
          {isLiked ? 'Unlike' : 'Like'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AlbumCard;
