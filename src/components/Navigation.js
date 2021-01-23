import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import styeld from "styled-components";

const Styles = styeld.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: red;
    padding: 5px;
    &:hover {
      color: cyan;
    }
  }
`;

function Navigation() {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link>
                  <Link to='/'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/about'>About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/contacts'>Contacts</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}

export default Navigation;
