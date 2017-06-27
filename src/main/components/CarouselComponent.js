/**
 * Created by SCMORETO on 26/06/2017.
 */
import Slider from "react-slick";
import React, { Component } from "react";
import CardListing from "./CardListing";

class CarouselComponent extends Component {
  constructor(props) {
    super(props);

    //this.renderCardListing = this.renderCardListing.bind(this);
  }

  renderCardListing = array => {
    return array.map((item, index) => {
      return (
        <div key={item.id}>
          <CardListing listItem={item} />
        </div>
      );
    });
  };

  render() {
    //Defines some basic settings for the slider to work
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000
    };

    return (
      <div>
        <Slider {...settings}>
          {this.renderCardListing(this.props.carousel)}
        </Slider>
      </div>
    );
  }
}

export default CarouselComponent;
