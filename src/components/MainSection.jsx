import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSongs } from '../redux/actions';
import MusicSection from './MusicSection';
import { Nav } from 'react-bootstrap';

const MainSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs('fabri fibra'));
    dispatch(fetchSongs('katyperry'));
    dispatch(fetchSongs('eminem'));
  }, [dispatch]);

  return (
    <div className="mainPage col-md-9 offset-md-3">
      <Nav className="mainLinks d-none d-md-flex">
        <Nav.Link href="#">TRENDING</Nav.Link>
        <Nav.Link href="#">PODCAST</Nav.Link>
        <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
        <Nav.Link href="#">NEW RELEASES</Nav.Link>
        <Nav.Link href="#">DISCOVER</Nav.Link>
      </Nav>
      <MusicSection title="Rock Classics" artist="queen" sectionId="rockSection" />
      <MusicSection title="Pop Culture" artist="katyperry" sectionId="popSection" />
      <MusicSection title="#HipHop" artist="eminem" sectionId="hipHopSection" />
    </div>
  );
};

export default MainSection;
