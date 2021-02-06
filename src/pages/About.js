import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Slider from "../components/Slider";



function Abaut() {
  return (
    <>
      <h2>About</h2>
      <Slider />
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        {/* <Row>
          <Col>
            <Card style={{ width: "400px", marginBottom: "20px" }}>
              <Card.Img variant="top" src={img2} style={{ height: "200px" }} />
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "400px", marginBottom: "20px" }}>
              <Card.Img variant="top" src={img2} style={{ height: "200px" }} />
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "400px", marginBottom: "20px" }}>
              <Card.Img variant="top" src={img2} style={{ height: "200px" }} />
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "400px", marginBottom: "20px" }}>
              <Card.Img variant="top" src={img2} style={{ height: "200px" }} />
              <Card.Title>Title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default Abaut;
