import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contacts">Contacts</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="primary" className="mr-2" onClick={handleShow}>
                  Login
                </Button>
                <Button variant="primary" onClick={handleShow}>
                  Sing In
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email" />
              <Form.Text className="text-muted">I don't use your email</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPass">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Password" />
              <Form.Text className="text-muted">I don't use your Password</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" placeholder="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navigation;
