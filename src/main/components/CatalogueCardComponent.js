import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "material-ui/Checkbox";
import { Card } from "material-ui/Card";
import Paper from "material-ui/Paper";

//Applies styling and Sizing to the Card component
const GridBoxWrapper = styled(Card)`
margin: 20px;
max-height:260px;
min-height:260px;
max-width:95%;
min-width:95%;
padding:10px;
`;

//Styles the Service Title
const ServiceName = styled.h1`
  color: black;
  font-size: 18px;
`;

//Applies the styling and sizing for our description
const ServiceDescription = styled.div`
  color: black;
  font-size: 13px;
  max-height: 75px;
  min-height: 75px;
  overflow-y: auto;
  overflow-x: hidden;
`;

//Applies the blue baclground and styling to te category tag
const Bullet = styled.div`
  text-align:center;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  background-color: #00BCD4;
  padding: 5px 15px;
  color:black;
  border-radius: 25px;
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

//Wraps around the service title and logo to give the structure of the service title above the category
const NameContainer = styled.div`
 margin-right: 30px;
 text-align:center;
`;

//Applies a flex style - applied so we can structure the styling of the logo and title/category
const NamePictureContainer = styled.div`
 flex-direction: row;
 justify-content: space-between;
 display: flex;
 margin-bottom:20px;
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

class TileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceChecked: false
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.renderAddedToCart = this.renderAddedToCart(this);
    this.getColor = this.getColor(this);
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

  getColor() {
    switch (this.props.service.category) {
      case "Networks":
        return {
          backgroundColor: "#7E57C2",
          color: "#FFF",
          textDecoration: "none"
        };
      case "Infrastructure":
        return {
          backgroundColor: "#5C6BC0",
          color: "#FFF",
          textDecoration: "none"
        };
      default:
        return {
          backgroundColor: "#26A69A",
          color: "#FFF",
          textDecoration: "none"
        };
    }
  }

  render() {
    return (
      <GridBoxWrapper>
        <NamePictureContainer>

          <Paper style={imgStyle} zDepth={1} circle={true}>
            <img
              src={this.props.service.logoSource}
              style={{ width: "100%", height: "auto" }}
              alt={this.props.serviceTitle}
            />
          </Paper>

          <NameContainer>

            <ServiceName>
              <div className="serviceName">
                {this.props.service.serviceTitle}
              </div>
            </ServiceName>

            <Bullet style={this.getColor}>
              <div className="serviceCat">{this.props.service.category}</div>
            </Bullet>

          </NameContainer>
        </NamePictureContainer>

        <ServiceDescription>
          <div className="serviceDescription">
            {this.props.service.description}
          </div>
        </ServiceDescription>

        <CheckBoxRow className="checkBoxDiv">
          <div style={styles.block}>
            <Checkbox
              style={styles.checkbox}
              onCheck={() =>
                this.handleCheck(this.props.service, this.state.serviceChecked)}
            />
          </div>
          {this.state.serviceChecked ? this.renderAddedToCart : null}
        </CheckBoxRow>

      </GridBoxWrapper>
    );
  }
}

export default TileComponent;
