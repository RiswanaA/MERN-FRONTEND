

import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/carSlider.css";

const CarSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="car__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent Rs 1000 per day</h4>
            <h1 className="text-light mb-4">Book Now and Get 20% Off</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent Rs 1000 per day</h4>
            <h1 className="text-light mb-4">Book Now and Get 20% Off</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent Rs 1000 per day</h4>
            <h1 className="text-light mb-4">Book Now and Get 20% Off</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Book Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default CarSlider;