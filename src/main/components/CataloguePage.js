import React, { Component } from "react";
import styled from "styled-components";
import TileComponent from "./TileComponent";
import { Link } from "react-router-dom";
import FilterByCategory from "./FilterByCategory";

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
  max-width: 33%;
  max-height: 33%;
`;

const DropDownContainer = styled.div`
 width:100%;
  margin:auto;
  display: flex;
  flex-direction: row;
  justify-content:flex-end ;
  background:white;
  padding-right:10px;
  `;

class CataloguePage extends Component {
  render() {
    return (
      <Row>

        <DropDownContainer>
          <FilterByCategory />
        </DropDownContainer>

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
