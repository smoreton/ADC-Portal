import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Tile = styled.div`
  height: 250px;
  width: 250px;
  margin-top: 30px;
  background: #fff;
  background-size: contain;
  borderRadius: 100%;
  border: 1px solid #00BCD4;
`;

const Picture = styled.div`
  background-size: contain;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  borderRadius: 50%;
  background-position: center center;
  margin: 0 auto;
`;

const ServiceName = styled.h1`
  color: black;
  text-decoration: underline;
`;

const Centralised = styled.div`
  text-align:center;
`;

class TileComponent extends Component {
  render() {
    return (
      <Centralised>

        <Tile>
          <Picture src={this.props.service.logoSource} />
        </Tile>

        <ServiceName>{this.props.service.serviceTitle}</ServiceName>

      </Centralised>
    );
  }
}

export default TileComponent;
