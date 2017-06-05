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

class TileComponent extends Component {
  render() {
    return (
      <Centralised>

        <Tile src={this.props.service.logoSource} />

        <ServiceName>{this.props.service.serviceTitle}</ServiceName>

      </Centralised>
    );
  }
}

export default TileComponent;
