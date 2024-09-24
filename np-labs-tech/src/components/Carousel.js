import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="carousel-section">
      <h2>Our Solutions</h2>
      <Slider {...settings}>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/300" alt="Solution 1" />
          <p>Solution 1 Description</p>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/300" alt="Solution 2" />
          <p>Solution 2 Description</p>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/300" alt="Solution 3" />
          <p>Solution 3 Description</p>
        </div>
      </Slider>
    </section>
  );
};

export default Carousel;
