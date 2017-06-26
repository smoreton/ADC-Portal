import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "material-ui/Card";

const CardNewsItem = styled(Card)`
  padding: 10px;
  margin: 20px;
`;

const DateTime = styled.div`
  font-style: italic;
`;

const Heading = styled.div`
  font-weight: bold
`;
const Title = styled.div`
`;
class CardListing extends Component {
  render() {
    return (
      <CardNewsItem>
        <DateTime>{this.props.listItem.dateTime}</DateTime>
        <Heading>{this.props.listItem.header}</Heading>
        <div>{this.props.listItem.description}</div>
      </CardNewsItem>
    );
  }
}

export default CardListing;
