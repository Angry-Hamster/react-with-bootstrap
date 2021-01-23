import React from "react";

import img1 from "../images/1.jpg";
import img2 from "../images/2.png";
import img3 from "../images/3.jpg";
import img4 from "../images/4.png";
import img5 from "../images/5.jpg";
import img6 from "../images/6.png";
import img7 from "../images/7.jpg";

import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item style={{ height: "800px" }}>
          <img src={img1} alt="img" className="d-block w-100" />
          <Carousel.Caption>
            <h2>Title</h2>
            <p>Description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "800px" }}>
          <img src={img2} alt="img" className="d-block w-100" />
          <Carousel.Caption>
            <h2>Title</h2>
            <p>Description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "800px" }}>
          <img src={img3} alt="img" className="d-block w-100" />
          <Carousel.Caption>
            <h2>Title</h2>
            <p>Description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "800px" }}>
          <img src={img4} alt="img" className="d-block w-100" />
          <Carousel.Caption>
            <h2>Title</h2>
            <p>Description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "800px" }}>
          <img src={img5} alt="img" className="d-block w-100" />
          <Carousel.Caption>
            <h2>Title</h2>
            <p>Description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "800px" }}>
          <img src={img6} alt="img" className="d-block w-100" />
          <Carousel.Caption>
            <h2>Title</h2>
            <p>Description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "800px" }}>
          <img src={img7} alt="img" className="d-block w-100" />
          <Carousel.Caption>
            <h2>Title</h2>
            <p>Description</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
