/**
 * Created by tsadler on 25/05/2017.
 */
import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Chip from "material-ui/Chip";

const Tile = styled.div`
  padding-top: 2em;
  height: 15em;
  width: 15em;
  margin: 3em;
  background: #fff;
  background-size: contain;
  borderRadius: 100%;
  border: 1px solid #00BCD4;

`;

const Picture = styled.div`
  background-size: contain;
  width: 90%;
  height: 90%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  borderRadius: 35%;
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
      <Link to={"/service/" + this.props.service.id}>
        <Centralised>

          <Tile>
            <Picture src={this.props.service.logoSource} />
          </Tile>

          <ServiceName>{this.props.service.serviceTitle}</ServiceName>

          <Chip backgroundColor={"#00BCD4"}>
            {this.props.service.category}
          </Chip>

        </Centralised>

      </Link>
    );
  }
}

export default TileComponent;
