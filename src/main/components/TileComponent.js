/**
 * Created by tsadler on 25/05/2017.
 */
import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";

const Tile = styled.div`
    padding-top: 2em;
    height: 15em;
    width: 15em;
    margin: 3em;
    background: #fff;
    background-size: contain;
    borderRadius: 50%;
    border: 5px solid #00BCD4;

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

          <h1>{this.props.service.serviceTitle}</h1>

          <RaisedButton label="More Information" primary={true} />

        </Centralised>

      </Link>
    );
  }
}

export default TileComponent;
