import React, { Component } from "react";
import styled from "styled-components";
import DescriptionCard from "./DescriptionCard";
import CardListing from "./CardListing";
import "../App.css";

const Container = styled.div`
  flex: 1;
  max-height: 260px;
  overflow-y: auto;
  margin-right: 30px;
`;

const Name = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

class HomePage extends Component {
  render() {
    return (
      <div>
        <DescriptionCard description={this.props.description} />
        <Name>
          <Container>
            <CardListing listArray={this.props.comingSoon} />
          </Container>

          <Container>
            <CardListing listArray={this.props.issues} />
          </Container>
        </Name>
      </div>
    );
  }
}

export default HomePage;
