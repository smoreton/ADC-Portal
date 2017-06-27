import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DescriptionCard from "./DescriptionCard";
import CategoriesTileComponent from "./CategoriesTileComponent";
import Carousel from "./CarouselComponent";

const Container = styled.div`
    width:100%;
`;

const InfoContainer = styled.div`
    min-height: 0;
    max-width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
`;

const Info = styled.div`
     width: 90%;
     margin: auto;
 `;

const ServiceTypeLinkContainer = styled.div`
    margin: auto;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

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
        <Container>
          <DescriptionCard description={this.props.description} />
        </Container>

        <ServiceTypeLinkContainer>
          {this.generateServiceCategoryList(this.props.serviceDetails)}
        </ServiceTypeLinkContainer>

        <InfoContainer>
          <Info>
            <Carousel carousel={this.props.carouselData} />
          </Info>
        </InfoContainer>
      </div>
    );
  }
}

export default HomePage;
