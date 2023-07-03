import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Grant Tracker</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link as={NavLink} to="/">Home</Nav.Link> */}
          {/* <Nav.Link as={NavLink} to="/more" >More</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
