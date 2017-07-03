import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CategoriesTileComponent from "./CategoriesTileComponent";
import Carousel from "./CarouselComponent";

const HeroContainer = styled.div`
  width: 100%;
  background: #1a1458;
  padding-bottom: 40px;
  margin-top: -30px;
  overflow: wrap;
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const TextHolder = styled.div`
  font-family: 'roboto';
  font-family: 500;
  font-size: 32px;
  float: left;
  min-width: 320px;
  color: #fff;
  padding: 40px 0 0 5%;
`;

const ServiceTypeLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1000px;
  justify-content: space-between;
  color: #fff;
  text-decoration: none;

  @media (max-width: 750px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
`;

const CarouselHolder = styled.div`
  min-width: 320px;
  max-width: 600px;
  padding: 55px;

  @media (max-width: 767px) {
    flex-flow: column wrap;
    padding: 0;
    margin-left: 0;
  }
`;

const ParaHolder = styled.div`font-size: 16px;`;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comingSoonIndex: 0,
      maintenanceIndex: 0
    };
    this.serviceTypeHandler = this.serviceTypeHandler.bind(this);
  }

  generateServiceCategoryList = array => {
    return this.renderServiceTypeTileFromArray(
      array.filter(item => {
        return item.serviceTypeCategory !== "All";
      })
    );
  };

  renderServiceTypeTileFromArray = array => {
    return array.map(arrayItem => {
      return (
        <div key={arrayItem.serviceTypeCategory}>
          <Link
            style={{ textDecoration: "none" }}
            to="/catalogue"
            onClick={() =>
              this.serviceTypeHandler(arrayItem.serviceTypeCategory)}
          >
            <CategoriesTileComponent categories={arrayItem} />
          </Link>
        </div>
      );
    });
  };

  serviceTypeHandler = value => {
    this.props.serviceCategory(value);
  };

  render() {
    return (
      <div>
        <HeroContainer>
          <TextHolder>
            <h3> Welcome to the ADC Portal </h3>
            <ParaHolder>
              {this.props.description.split("\n").map((item, key) => {
                return (
                  <p key={key}>
                    {item}
                  </p>
                );
              })}
            </ParaHolder>
          </TextHolder>
          <CarouselHolder className="carouselHolder">
            <Carousel carousel={this.props.carouselData} />
          </CarouselHolder>
        </HeroContainer>
        <ServiceTypeLinkContainer>
          {this.generateServiceCategoryList(this.props.serviceDetails)}
        </ServiceTypeLinkContainer>
      </div>
    );
  }
}

export default HomePage;
