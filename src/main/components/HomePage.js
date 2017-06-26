import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "material-ui/Slider";
import DescriptionCard from "./DescriptionCard";
import CardListing from "./CardListing";
import CategoriesTileComponent from "./CategoriesTileComponent";

const Container = styled.div`
    width:100%;
`;

const Heading = styled.h3`
    text-align: center; 
`;

const InfoContainer = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Info = styled.div`
    width: 45%;
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

    this.selectMaintenanceItem = this.selectMaintenanceItem.bind(this);
    this.selectComingSoonItem = this.selectComingSoonItem.bind(this);
    this.serviceTypeHandler = this.serviceTypeHandler.bind(this);
  }

  selectMaintenanceItem = (event, value) => {
    this.setState({ maintenanceIndex: value });
  };

  selectComingSoonItem = (event, value) => {
    this.setState({ comingSoonIndex: value });
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
        <Container>
          <DescriptionCard description={this.props.description} />
        </Container>

        <ServiceTypeLinkContainer>
          {this.renderServiceTypeTileFromArray(this.props.serviceDetails)}
        </ServiceTypeLinkContainer>

        <InfoContainer>
          <Info>
            <Heading>Maintenance:</Heading>
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
          </Info>

          <Info>
            <Heading>Coming Soon:</Heading>
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
          </Info>
        </InfoContainer>
      </div>
    );
  }
}

export default HomePage;
