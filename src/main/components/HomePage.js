import React, { Component } from "react";
import styled from "styled-components";
import DescriptionCard from "./DescriptionCard";
import CardListing from "./CardListing";
import "../App.css";

const Container = styled.div`
  flex: 1;
  max-height: 260px;
  overflow-y: auto;
`;

class HomePage extends Component {
  render() {
    return (
      <div>
        <DescriptionCard description={this.props.description} />

        <CardListing listArray={this.props.comingSoon} />

        <CardListing listArray={this.props.issues} />

      </div>
    );
  }
}

export default HomePage;
