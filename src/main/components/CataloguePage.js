import React, { Component } from "react";
import styled from "styled-components";
import TileComponent from "./CatalogueCardComponent";

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
  flex: 1;
  min-width: 33%;
  max-width: 33%;
  min-height: 33%;
  max-height: 33%;

`;

class CataloguePage extends Component {
  render() {
    return (
      <Row>
        {this.props.serviceDetails.map(serviceDetail => {
          return (
            <Container key={serviceDetail.serviceTitle}>
              <Contain>
                <TileComponent service={serviceDetail} />
              </Contain>
            </Container>
          );
        })}

      </Row>
    );
  }
}
export default CataloguePage;
