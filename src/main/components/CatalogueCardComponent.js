import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "material-ui/Checkbox";
import { Card } from "material-ui/Card";
import Paper from "material-ui/Paper";

//Applies styling and Sizing to the Card component
const CatalogueCard = styled(Card)`
margin: 20px;
max-height:260px;
min-height:260px;
max-width:95%;
min-width:95%;
padding:10px;
`;

//Applies a flex style - applied so we can structure the styling of the logo and title/category
const CatalogueCardHeader = styled.div`  
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin-bottom:20px;
`;

//Styles the Service Title
const ServiceName = styled.h1`
  color: black;
  font-size: 18px;
`;

//Applies the blue background and styling to te category tag
const Bullet = styled.div`
  height: 20px;
  display: flex;
  background-color: #00BCD4;
  padding: 5px 15px;
  border-radius: 25px;
`;

//Applies the styling and sizing for our description
const CatalogueCardDescription = styled.div`
  color: black;
  font-size: 13px;
  max-height: 75px;
  min-height: 75px;
  overflow-y: auto;
  overflow-x: hidden;
`;

//Applies layout styling for the positioning of our check box implementation
const CheckBoxRow = styled.div`  
 margin-top: 5px;
 width: 60%;
 height: 50%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
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
  /**{ margin: 5 }*/
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
  }

  handleCheck(service, status) {
    if (status) {
      this.setState({
        serviceChecked: false
      });
    } else {
      this.setState({
        serviceChecked: true
      });
    }
  }

  renderAddedToCart() {
    return <font color="green">Service Added to Cart</font>;
  }

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

          <Bullet>
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
          {this.state.serviceChecked ? this.renderAddedToCart() : null}
        </CheckBoxRow>
      </CatalogueCard>
    );
  }
}

export default CatalogueCardComponent;
