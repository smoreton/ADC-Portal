import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "material-ui/Card";

const CardNewsItem = styled(Card)`
  padding: 10px;
  margin: 20px;  
`;

const DateTime = styled.div`
  font-style: italic;
  margin-left: 30%;
`;

const Heading = styled.div`
  font-weight: bold
  margin-left: 30%;
`;
const Title = styled.div`
  font-weight: bold
  text-decoration: underline;
`;
class CardListing extends Component {
  render() {
    return (
      <CardNewsItem>
        <Title>{this.props.listItem.title}</Title>
        <DateTime>{this.props.listItem.dateTime}</DateTime>
        <Heading>{this.props.listItem.header}</Heading>
        <DateTime>{this.props.listItem.description}</DateTime>
      </CardNewsItem>
    );
  }
}

export default CardListing;
