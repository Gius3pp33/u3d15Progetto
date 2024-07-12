import React from 'react';
import { useSelector } from 'react-redux';
import AlbumCard from './AlbumCard';
import { Container, Row, Col } from 'react-bootstrap';
import { makeSelectSongsByArtist } from '../redux/reducers/searchReducer';


const MusicSection = ({ title, artist, sectionId }) => {
  const selectSongsByArtist = React.useMemo(() => makeSelectSongsByArtist(artist), [artist]);
  const songs = useSelector(selectSongsByArtist);

  return (
    <Container id={sectionId} className="my-4">
      <h2 className="text-white">{title}</h2>
      <Row className="imgLinks py-3">
        {songs.slice(0, 4).map(song => (
          <Col key={song.id} xs={12} sm={6} lg={3}>
            <AlbumCard song={song} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MusicSection;
