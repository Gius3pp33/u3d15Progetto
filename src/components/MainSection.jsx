import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../redux/actions';
import MusicSection from './MusicSection';
import { Nav } from 'react-bootstrap';

const MainSection = () => {
    const dispatch = useDispatch();
    const searchResults = useSelector(state => state.search.songs);
    const [searchSections, setSearchSections] = useState([]);
  
    useEffect(() => {
      dispatch(fetchSongs('queen'));
      dispatch(fetchSongs('katyperry'));
      dispatch(fetchSongs('eminem'));
    }, [dispatch]);
  
    useEffect(() => {
      const newSearchSections = Object.keys(searchResults)
        .filter(artist => !searchSections.some(section => section.artist === artist)) // Filtra artisti già presenti
        .map(artist => ({
          title: `Section of "${artist}"`,
          artist,
          sectionId: `searchSection_${artist}`
        }));
  
      if (newSearchSections.length > 0) {
        setSearchSections(prevSections => [...newSearchSections, ...prevSections]);
      }
    }, [searchResults, searchSections]);

  return (
    <div className="mainPage col-md-9 offset-md-3">
      <Nav className="mainLinks d-none d-md-flex">
        <Nav.Link href="#">TRENDING</Nav.Link>
        <Nav.Link href="#">PODCAST</Nav.Link>
        <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
        <Nav.Link href="#">NEW RELEASES</Nav.Link>
        <Nav.Link href="#">DISCOVER</Nav.Link>
      </Nav>
      
      {searchSections.map(section => (
        <MusicSection 
          key={section.sectionId}
          title={section.title}
          artist={section.artist}
          sectionId={section.sectionId}
        />
      ))}
      
    </div>
  );
};

export default MainSection;
