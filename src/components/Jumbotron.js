import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";

import img from "../images/6.png";

const Style = styled.div`
  .jumbo {
    background: url(${img}) no-repiat fixed bottom;
    background-size: cover;
    color: white;
    height: 500px;
    position: relative;
    z-index: -2;
  }
  .owerlay {
    background: black;
    opacity: 0.7;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

function Jumbo() {
  return (
    <Style>
      <Jumbotron className="jumbo" fluid>
        <div className="owerlayty"></div>
        <Container>
          <h1>Main Title</h1>
          <p>lorem</p>
        </Container>
      </Jumbotron>
    </Style>
  );
}

export default Jumbo;
