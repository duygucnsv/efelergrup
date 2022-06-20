import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import SliderCarousel from './SliderCarousel'


const Slider = () => {
  return (
      <div className="slider">

    <Container>
        <SliderCarousel/>
    </Container>

    </div>
  )
}

export default Slider;