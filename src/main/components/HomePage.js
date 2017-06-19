import React, { Component } from "react";
import styled from "styled-components";
import DescriptionCard from "./DescriptionCard";
import CardListing from "./CardListing";
import { Link } from "react-router-dom";
import CategoriesTileComponent from "./CategoriesTileComponent";

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
  renderCardListingFromArray = array => {
    return array.map(arrayItem => {
      return (
        <div key={arrayItem}>
          <CardListing listItem={arrayItem} />
        </div>
      );
    });
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

          {this.props.services.map(service => {
            let serviceDetail = Object.assign(
              {},
              this.props.serviceDetails[service]
            );
            return (
              <TileContainer key={service}>

                <Link to={"/catalogue/"}>
                  <CategoriesTileComponent service={serviceDetail} />
                </Link>

              </TileContainer>
            );
          })}

        </Row>
      </div>
    );
  }
}

export default HomePage;
