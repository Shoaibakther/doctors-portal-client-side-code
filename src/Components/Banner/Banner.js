import React from 'react';
import { Carousel } from 'react-bootstrap';
import Photo1 from '../../Images/Slider/Slider-1.jpg'
import photo2 from '../../Images/Slider/Slider-2.jpg'
import photo3 from '../../Images/Slider/Slider-3.jpg'

const Banner = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Photo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Banner;