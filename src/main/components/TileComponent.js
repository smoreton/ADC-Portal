import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "material-ui/Checkbox";
import Avatar from "material-ui/Avatar";
import ListItem from "material-ui/List/ListItem";

const ServiceName = styled.h1`
  color: black;
  text-decoration: underline;
  font-size: 20px;
`;

const ServiceDescription = styled.div`
  color: black;
  font-size: 13px;
  max-height: 20%;
`;
const Centralised = styled.div`
  text-align:center;
  max-height: 33%;
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
  text-decoration: underline ;
  border-radius: 25px;
`;

const AddedToCart = styled.div`
color: green;
`;

const Row = styled.div`
 width: 60%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;

 
`;

// const Container = styled.div`
// position: absolute;
// bottom:0;
// `;

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

const style = { margin: 5 };

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
      <Centralised>
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              src={this.props.service.logoSource}
              size={100}
              style={style}
            />
          }
        />

        <ServiceName>
          <div className="serviceName">{this.props.service.serviceTitle}</div>
        </ServiceName>

        <BulletContainer>
          <Bullet>
            <div className="serviceCat">{this.props.service.category}</div>
          </Bullet>
        </BulletContainer>

        <ServiceDescription>
          <div className="serviceDescription">
            {this.props.service.description}
          </div>
        </ServiceDescription>

        <Row className="checkBoxDiv">

          <div style={styles.block}>
            <Checkbox
              style={styles.checkbox}
              onCheck={() =>
                this.handleCheck(this.props.service, this.state.serviceChecked)}
            />
          </div>
          {this.state.serviceChecked ? this.renderAddedToCart : null}

        </Row>

      </Centralised>
    );
  }
}

export default TileComponent;
