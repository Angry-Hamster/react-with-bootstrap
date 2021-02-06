import React from "react";
import { Jumbotron, Container } from 'react-bootstrap/'
import styled from "styled-components";

// import logo from "../images/Logo.png";

const Style = styled.div`
.jumbo {
    background: no-repiat fixed;
    background-position: 50% 50%;
    // background-image: url();
    background-size: cover;
    color: white;
    height: 600px;
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
          <h1>Text</h1>
        </Container>
      </Jumbotron>
    </Style>
  );
}

export default Jumbo;
