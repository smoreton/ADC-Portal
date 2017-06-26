/**
 * Created by SCMORETO on 26/06/2017.
 */
import Slider from "react-slick";
import React, { Component } from "react";

class CarouselComponent extends Component {
  render() {
    //Defines some basic settings for the slider to work
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };

    return (
      <div>
        <Slider {...settings}>
          <div><h3>Hello</h3></div>
          <div><h3>My Name Is Scott</h3></div>
          <div><h3>Nice To Meet You</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
}

export default CarouselComponent;
