import { Nav, Navbar, Button, Form } from 'react-bootstrap'; // Aggiungi Form da react-bootstrap
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from '../assets/logo/logo.png';
import { HouseDoorFill, BookFill } from 'react-bootstrap-icons';
import { fetchSongs } from '../redux/actions';

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault(); // Evita il comportamento di default del submit
    console.log('Searching for:', searchTerm);
    if (searchTerm.trim()) {
      dispatch(fetchSongs(searchTerm));
    }
    setSearchTerm(''); // Resetta il campo di ricerca dopo la ricerca
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <aside className="col col-2">
      <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
        <Navbar.Brand href="index.html">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <Nav.Link href="#">
              <HouseDoorFill /> Home
            </Nav.Link>
            <Nav.Link href="#">
              <BookFill /> Your Library
            </Nav.Link>
            
            <Form onSubmit={handleSearch}>
              <Form.Group className="input-group w-75  mt-3">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleChange}
                />
                <Button variant="outline-secondary" type="submit" className=" h-100">
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
