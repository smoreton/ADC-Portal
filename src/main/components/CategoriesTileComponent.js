import React, { Component } from "react";
import styled from "styled-components";

const Tile = styled.div`
  height: 175px;
  width: 175px;
  margin-top: 30px;
  background: #fff;
  background-size: contain;
  borderRadius: 100%;
  border: 1px solid #00BCD4;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 auto;
  margin-top: 30px;
`;

const Centralised = styled.div`
  text-align:center;
`;

const BulletContainer = styled.div`
  display: flex;
  margin-top: 10px;
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

class CategoriesTileComponent extends Component {
  constructor(props) {
    super(props);

    this.getColor = this.getColor(this);
  }

  getColor() {
    switch (this.props.categories.category) {
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
      <Centralised>

        <Tile src={this.props.categories.logoSource} />

        <BulletContainer>
          <Bullet style={this.getColor}>
            <div className="serviceCat">{this.props.categories.category}</div>
          </Bullet>
        </BulletContainer>

      </Centralised>
    );
  }
}

export default CategoriesTileComponent;
