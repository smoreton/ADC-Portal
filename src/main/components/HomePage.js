import React, { Component } from "react";
import styled from "styled-components";
import DescriptionCard from "./DescriptionCard";
import CardListing from "./CardListing";
import CategoriesTileComponent from "./CategoriesTileComponent";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  max-height: 260px;
  overflow-y: auto;
  margin-right: 30px;
`;

const Name = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Heading = styled.h3`
    text-align: center; 
`;

const TileContainer = styled.div`
  flex: 1;
  min-width: 33%;
  height: 50%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
 `;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.serviceTypeHandler = this.serviceTypeHandler.bind(this);
  }

  renderCardListingFromArray = array => {
    return array.map(arrayItem => {
      return (
        <div key={arrayItem}>
          <CardListing listItem={arrayItem} />
        </div>
      );
    });
  };

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
        <DescriptionCard description={this.props.description} />
        <Name>
          <Container>
            <Heading>Coming Soon:</Heading>
            {this.renderCardListingFromArray(this.props.comingSoon)}
          </Container>

          <Container>
            <Heading>Maintenance:</Heading>
            {this.renderCardListingFromArray(this.props.issues)}
          </Container>
        </Name>

        <Row>

          {this.renderServiceTypeTileFromArray(this.props.serviceDetails)}

        </Row>

      </div>
    );
  }
}

export default HomePage;
