/**
 * Created by tsadler on 25/05/2017.
 */
import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "material-ui";
import { Link } from "react-router-dom";

const Tile = styled(Card)`
    padding-top: 2em;
    height: 20em;
    width: 20em;
    margin: 3em;
    background: #fff;
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    
`;

const Centralised = styled.div`
    text-align:center;
`;

class TileComponent extends Component {
  render() {
    return (


        <Centralised>
          <Tile src={this.props.service.logoSource} />
          <h1>{this.props.service.serviceTitle}</h1>
        </Centralised>

      </Link>
    );
  }
}

export default TileComponent;
