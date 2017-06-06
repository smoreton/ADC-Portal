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

const Heading = styled.h3`
    text-align: center; 
`;

class HomePage extends Component {
  render() {
    return (
      <div>
        <DescriptionCard description={this.props.description} />
        <Name>
          <Container>
            <Heading>Coming Soon:</Heading>
            {this.props.comingSoon.map(comingSoonItem => (
              <div key={comingSoonItem}>
                <CardListing listItem={comingSoonItem} />
              </div>
            ))}
          </Container>

          <Container>
            <Heading>Maintenance:</Heading>
            {this.props.issues.map(issueItem => (
              <div key={issueItem}>
                <CardListing listItem={issueItem} />
              </div>
            ))}
          </Container>
        </Name>
      </div>
    );
  }
}

export default HomePage;
