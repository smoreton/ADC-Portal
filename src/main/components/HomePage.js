import React, { Component } from "react";
import Slider from "material-ui/Slider";
import styled from "styled-components";

import DescriptionCard from "./DescriptionCard";
import CardListing from "./CardListing";

const Container = styled.div`
    width:100%;
`;

const Heading = styled.h3`
    text-align: center; 
`;

const InfoContainer = styled.div`
    width: 100%;
    margin: auto;
    max-width: 500px;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comingSoonIndex: 0,
      maintenanceIndex: 0
    };

    this.selectMaintenanceItem = this.selectMaintenanceItem.bind(this);
    this.selectComingSoonItem = this.selectComingSoonItem.bind(this);
  }

  selectMaintenanceItem = (event, value) => {
    this.setState({ maintenanceIndex: value });
  };

  selectComingSoonItem = (event, value) => {
    this.setState({ comingSoonIndex: value });
  };

  render() {
    return (
      <div>
        <Container>
          <DescriptionCard description={this.props.description} />
        </Container>

        <Container>
          <Heading>Maintenance:</Heading>
          <InfoContainer>
            <CardListing
              listItem={this.props.maintenance[this.state.maintenanceIndex]}
            />
            <Slider
              min={0}
              max={this.props.maintenance.length - 1}
              step={1}
              value={this.state.maintenanceIndex}
              onChange={this.selectMaintenanceItem}
            />
          </InfoContainer>
        </Container>

        <Container>
          <Heading>Coming Soon:</Heading>
          <InfoContainer>
            <CardListing
              listItem={this.props.comingSoon[this.state.comingSoonIndex]}
            />
            <Slider
              min={0}
              max={this.props.comingSoon.length - 1}
              step={1}
              value={this.state.comingSoonIndex}
              onChange={this.selectComingSoonItem}
            />
          </InfoContainer>
        </Container>
      </div>
    );
  }
}

export default HomePage;
