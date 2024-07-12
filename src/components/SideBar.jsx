import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import logo from '../assets/logo/logo.png';  // Importa il logo dalla cartella assets

const Sidebar = () => {
  const likes = useSelector(state => state.likes);

  return (
    <aside className="col col-2">
      <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
        <Navbar.Brand href="index.html">
          <img src={logo} alt="Spotify Logo" width="131" height="40" /> {/* Utilizza il logo importato */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <Nav.Link href="#">
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-book-fill"></i>&nbsp; Your Library
            </Nav.Link>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <Button variant="outline-secondary" className="btn-sm h-100">
                  GO
                </Button>
              </div>
            </div>
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
