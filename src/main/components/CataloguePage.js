import React, { Component } from "react";
import styled from "styled-components";
import TileComponent from "./TileComponent";
import { Link } from "react-router-dom";

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

        {this.props.services.map(service => {
          let serviceDetail = Object.assign(
            {},
            this.props.serviceDetails[service],
            { id: service }
          );
          return (
            <Contain key={service}>
              <Link to={"/service/" + service}>
                <TileComponent service={serviceDetail} />
              </Link>
            </Contain>
          );
        })}

      </Row>
    );
  }
}
export default CataloguePage;
