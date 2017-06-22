import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "material-ui/Checkbox";
import { Card } from "material-ui/Card";
import Paper from "material-ui/Paper";

/**
 * ----- Flexbox Styled Components -----
 */
const GridBoxWrapper = styled(Card)`
width: 90%;
margin: 20px;
max-height:260px;
min-height:260px;
max-width:95%;
min-width:95%;
padding:10px;
`;

const ServiceName = styled.h1`
  color: black;

  font-size: 18px;
`;

const ServiceDescription = styled.div`
  color: black;
  font-size: 13px;
  max-height: 75px;
  min-height: 75px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const BulletContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`;

const Bullet = styled.div`
  background-color: #00BCD4;
  padding: 5px 15px;
  color:black;
  border-radius: 25px;
`;

const AddedToCart = styled.div`
color: green;
`;

const CheckBoxRow = styled.div`  
margin-top: 5px;
 width: 60%;
 height: 50%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`;

const NameContainer = styled.div`  
justify-content: flex-end;
text-align:center;
`;

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
    return <AddedToCart>Service Added to Cart</AddedToCart>;
  }

  render() {
    return (
      <GridBoxWrapper>
        <NamePictureContainer>
          <Paper style={imgStyle} zDepth={1} circle={true}>
            <img
              src={this.props.service.logoSource}
              style={{ width: "100%", height: "auto" }}
            />
          </Paper>

          <NameContainer>
            <ServiceName>
              <div className="serviceName">
                {this.props.service.serviceTitle}
              </div>
            </ServiceName>

            <BulletContainer>
              <Bullet>
                <div className="serviceCat">{this.props.service.category}</div>
              </Bullet>
            </BulletContainer>
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
