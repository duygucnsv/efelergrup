import React from "react";
import { Container } from "react-bootstrap";
import SliderCarousel from "./slider-carousel";

const Slider = () => {
  return (
    <div className="slider">
      <Container>
        <SliderCarousel />
      </Container>
    </div>
  );
};

export default Slider;
