import { Nav, Navbar, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from '../assets/logo/logo.png';
import { HouseDoorFill, BookFill } from 'react-bootstrap-icons';
import { fetchSongs } from '../redux/actions';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    // Definisco lo stato locale searchTerm per memorizzare il termine di ricerca
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  // Funzione per gestire la ricerca quando il form viene inviato
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    if (searchTerm.trim()) {
      dispatch(fetchSongs(searchTerm));
    }
    setSearchTerm('');
  };

  // Funzione per aggiornare lo stato searchTerm quando l'input cambia
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <aside className="col col-2">
      <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/">
              <HouseDoorFill /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/your-library">
              <BookFill /> Your Library
            </Nav.Link>
            <Form onSubmit={handleSearch}>
              <Form.Group className="input-group w-75 mt-3">
                <Form.Control
                  type="text"
                  placeholder="Search "
                  value={searchTerm}
                  onChange={handleChange}
                />
                <Button variant="outline-secondary" type="submit" className="h-100">
                  GO
                </Button>
              </Form.Group>
            </Form>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
