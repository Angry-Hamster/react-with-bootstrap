import React from "react";

import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item style={{ height: "800px" }}>
          {/* <img src={Itachi} alt="img" className="d-block w-100" style={{background: 'no-repiat',background: 'fixed'}}/> */}
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
