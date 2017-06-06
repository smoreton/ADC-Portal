import React, { Component } from "react";
import styled from "styled-components";
import TileComponent from "./TileComponent";
import { Link } from "react-router-dom";

const Contain = styled.div`
  margin: auto;
  overflow: hidden;
 `;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
 `;

const Container = styled.div`
  border: dotted rgba(0,0,0,0.2) 1px;
  flex: 1;
  min-width: 33%;
  height: 50%;
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
            <Container key={service}>

              <Contain>
                <Link to={"/service/" + service}>
                  <TileComponent service={serviceDetail} />
                </Link>
              </Contain>
            </Container>
          );
        })}

      </Row>
    );
  }
}
export default CataloguePage;
