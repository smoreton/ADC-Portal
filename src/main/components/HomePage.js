import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import DescriptionCard from "./DescriptionCard";
import CardListing from "./CardListing";
import CategoriesTileComponent from "./CategoriesTileComponent";
import Carousel from "./CarouselComponent";

const Container = styled.div`
    width:100%;
`;

// const Heading = styled.h3`
//     text-align: center;
// `;

const InfoContainer = styled.div`
    min-height: 0;
    min-width: 0;
    width: 500px;
    max-width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
`;

const Info = styled.div`
     width: 60%;
     margin: auto;
 `;

const ServiceTypeLinkContainer = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comingSoonIndex: 0,
      maintenanceIndex: 0
    };

    // this.selectMaintenanceItem = this.selectMaintenanceItem.bind(this);
    // this.selectComingSoonItem = this.selectComingSoonItem.bind(this);
    this.serviceTypeHandler = this.serviceTypeHandler.bind(this);
    // this.renderCardListsIntoSlider = this.renderCardListsIntoSlider.bind(this);
  }

  // selectMaintenanceItem = (event, value) => {
  //   this.setState({ maintenanceIndex: value });
  // };
  //
  // selectComingSoonItem = (event, value) => {
  //   this.setState({ comingSoonIndex: value });
  // };

  // renderCardListsIntoSlider = array => {
  //     return array.map(item => {
  //         return (
  //             <CardListing key={item.id} listItem={item}/>
  //         );
  //     });
  // };

  renderServiceTypeTileFromArray = array => {
    return array.map(arrayItem => {
      return (
        <div key={arrayItem.category}>
          <Link
            to="/catalogue"
            onClick={() => this.serviceTypeHandler(arrayItem.category)}
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
          {this.renderServiceTypeTileFromArray(this.props.serviceDetails)}

        </ServiceTypeLinkContainer>

        <InfoContainer>
          <Info>
            <Carousel />
          </Info>
        </InfoContainer>
      </div>
    );
  }
}

export default HomePage;
