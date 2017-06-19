import React, { Component } from "react";
import styled from "styled-components";
import DescriptionCard from "./DescriptionCard";
import CardListing from "./CardListing";

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

class HomePage extends Component {
  renderCardListingFromArray = array => {
    return array.map(arrayItem => {
      return (
        <div key={arrayItem.id}>
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
            {this.renderCardListingFromArray(this.props.maintenance)}
          </Container>
        </Name>
      </div>
    );
  }
}

export default HomePage;
