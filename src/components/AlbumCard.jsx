import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, toggleLike } from '../redux/actions';
import { Card, Button } from 'react-bootstrap';
import {  Heart, HeartFill, PlayCircleFill } from 'react-bootstrap-icons';

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
    <Card className="text-center cardAlbum">
      <Card.Img variant="top" className='imgCard' src={song.album.cover_medium} alt="track" />
      <Card.Body className='bodyCard'>
        <Card.Text className='textcard'>
          Track: {song.title}<br />
          Artist: {song.artist.name}
        </Card.Text>
        <Button variant="outline-secondary"size='lg' className='border-0' onClick={handlePlay}><PlayCircleFill  /></Button>
        <Button variant="outline-secondary " onClick={handleLike} className="ml-2 border-0">
          {isLiked ?  <HeartFill /> : <Heart />}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AlbumCard;
