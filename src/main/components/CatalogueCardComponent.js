import React, { Component } from "react";

import ImgPathVar from "../../../public/img/Cart.png";
import styled from "styled-components";
import { Card } from "material-ui/Card";
import Paper from "material-ui/Paper";

import SelectedService from "../model/selectedService";

const CatalogueCard = styled(Card)`
  margin: 20px;
  max-height:260px;
  min-height:260px;
  width:95%;
  padding:10px;
`;

const CatalogueCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ServiceName = styled.h1`
  color: black;
  font-size: 18px;
`;

const Bullet = styled.div`
  height: 20px;
  color: white;
  display: flex;
  background-color: #00bcd4;
  padding: 5px 15px;
  border-radius: 25px;
  text-decoration: none;
`;

const CatalogueCardDescription = styled.div`
  font-size: 13px;
  height: 75px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const CheckBoxRow = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
    background-image: url($\{ImgPathVar});
`;

const ConditionalElement = styled.div`color: green;`;

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

const imgStyle = {
  height: 110,
  width: 110,
  margin: 0,
  display: "inline-block",
  overflow: "hidden"
};

class CatalogueCardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceChecked: false
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.renderAddedToCart = this.renderAddedToCart.bind(this);
    this.saveService = this.saveService.bind(this);
    this.removeService = this.removeService.bind(this);
  }

  handleCheck(event, checked) {
    if (checked) {
      this.setState({
        serviceChecked: true
      });
      this.saveService(this.props.service);
    } else {
      this.setState({
        serviceChecked: false
      });
      this.removeService(this.props.service);
    }
  }

  saveService = service => {
    let newSelectedService = new SelectedService(service);
    this.props.onChecked(newSelectedService);
  };

  removeService = service => {
    this.props.onUnchecked(service);
  };

  renderAddedToCart = () => {
    return <ConditionalElement>Added to Cart</ConditionalElement>;
  };

  render() {
    return (
      <CatalogueCard>
        <CatalogueCardHeader>
          <Paper style={imgStyle} zDepth={1} circle={true}>
            <img
              src={this.props.service.logoSource}
              style={{ width: "100%", height: "auto" }}
              alt={this.props.serviceTitle}
            />
          </Paper>

          <ServiceName className="serviceName">
            {this.props.service.serviceTitle}
          </ServiceName>

          <Bullet style={{ backgroundColor: this.props.tag }}>
            <div className="serviceCat">
              {this.props.service.category}
            </div>
          </Bullet>
        </CatalogueCardHeader>

        <CatalogueCardDescription className="serviceDescription">
          {this.props.service.description}
        </CatalogueCardDescription>

        <CheckBoxRow className="checkBoxDiv">
          <div style={styles.block}>
            <img
              src={ImgPathVar}
              alt=""
              checked={this.state.serviceChecked}
              onClick={this.handleCheck}
            />

          </div>
          {/** Renders an element based on the condition of the checkbox*/
          this.state.serviceChecked ? this.renderAddedToCart() : null}
        </CheckBoxRow>
      </CatalogueCard>
    );
  }
}

export default CatalogueCardComponent;
