import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "material-ui/Checkbox";
import { Card } from "material-ui/Card";
import Paper from "material-ui/Paper";

import SelectedService from "../model/selectedService";

const CatalogueCard = styled(Card)`
margin: 20px;
max-height:260px;
min-height:260px;
max-width:95%;
min-width:95%;
padding:10px;
`;

const CatalogueCardHeader = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin-bottom:20px;
`;

const ServiceName = styled.h1`
  color: black;
  font-size: 18px;
`;

const Bullet = styled.div`
  height: 20px;
  display: flex;
  background-color: #00BCD4;
  padding: 5px 15px;
  border-radius: 25px;
  color: "#FFF";
  text-decoration: none;
`;

const CatalogueCardDescription = styled.div`
  font-size: 13px;
  max-height: 75px;
  min-height: 75px;
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
`;

const ConditionalElement = styled.div`
color: green;
`;

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
    //this.renderAddedToCart = this.renderAddedToCart.bind(this);
    //this.saveService = this.saveService.bind(this);
    //this.removeService = this.removeService.bind(this);
  }

  handleCheck(service, status) {
    if (status) {
      this.setState({
        serviceChecked: false
      });
      this.removeService(service);
    } else {
      this.setState({
        serviceChecked: true
      });
      this.saveService(service);
    }
  }

  saveService = service => {
    let newSelectedService = new SelectedService(service);
    this.props.onChecked(newSelectedService);
    console.log("saveService --> serviceChecked");
    console.log(this.state.serviceChecked);
  };

  removeService = service => {
    this.props.onUnchecked(service);
    console.log("removeService --> serviceChecked");
    console.log(this.state.serviceChecked);
  };

  renderAddedToCart = () => {
    return <ConditionalElement>Service Added to Cart</ConditionalElement>;
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
            <div className="serviceCat">{this.props.service.category}</div>
          </Bullet>
        </CatalogueCardHeader>

        <CatalogueCardDescription className="serviceDescription">
          {this.props.service.description}
        </CatalogueCardDescription>

        <CheckBoxRow className="checkBoxDiv">
          <div style={styles.block}>
            <Checkbox
              style={styles.checkbox}
              onCheck={() =>
                this.handleCheck(this.props.service, this.state.serviceChecked)}
            />
          </div>
          {/** Renders an element based on the condition of the checkbox*/
          this.state.serviceChecked ? this.renderAddedToCart : null}
        </CheckBoxRow>
      </CatalogueCard>
    );
  }
}

export default CatalogueCardComponent;
