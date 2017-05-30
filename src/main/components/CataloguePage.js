/**
 * Created by CSHEFIK on 18/05/2017.
 */
import React, { Component } from "react";
import styled from "styled-components";
import TileComponent from "./TileComponent";

const Contain = styled.div`
 margin: auto;
 `;

const Row = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-around;
 `;

class CataloguePage extends Component {
  render() {
    return (
      <Row>
        {this.props.services.map(service => (
          <Contain key={service.id}>
            <TileComponent service={service} />
          </Contain>
        ))}
      </Row>
    );
  }
}
export default CataloguePage;
