import React from 'react'
import { Carousel } from 'react-bootstrap'
import sliderList from '../data/sliderList'


const SliderCarousel = () => {
  return (
    <>
      <Carousel className="carousel-fade" indicators={false} variant="dark">
        {sliderList.map((slider) => (
          <Carousel.Item
            key={slider.id}
            style={{ backgroundImage: `url(${slider.image})` }}
          >
            <Carousel.Caption>
              <div>
                <h3 className="text-light">{slider.title}</h3>
                <p className="bg-dark text-light">{slider.description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default SliderCarousel