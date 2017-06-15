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

const ServiceName = styled.h1`
  color: black;
  text-decoration: underline;
  font-size: 25px;
`;

const Centralised = styled.div`
  text-align:center;
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

class TileComponent extends Component {
  render() {
    return (
      <Centralised>

        <Tile src={this.props.service.logoSource} />

        <ServiceName>
          <div className="serviceName">{this.props.service.serviceTitle}</div>
        </ServiceName>

        <BulletContainer>
          <Bullet>
            <div className="serviceCat">{this.props.service.category}</div>
          </Bullet>
        </BulletContainer>

      </Centralised>
    );
  }
}

export default TileComponent;
