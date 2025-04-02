import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="black" variant="dark" className="shadow-lg">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-warning">
          ⚡ Monthly Challenge App
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white fw-bold mx-2">
              🏠 Home
            </Nav.Link>
            <Nav.Link as={Link} to="/add-challenge" className="text-white fw-bold mx-2">
              ➕ Add Challenge
            </Nav.Link>
            <Nav.Link as={Link} to="/challenges" className="text-white fw-bold mx-2">
              📋 List Challenges
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
