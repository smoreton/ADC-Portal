import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "material-ui";

const CardNewsItem = styled(Card)`
  padding: 10px;
  margin: 20px;
  margin-left: 75px;
`;

const DateTime = styled.div`
  font-style: italic;
`;

const Heading = styled.div`
  font-weight: bold
`;

class CardListing extends Component {
  render() {
    return (
      <div>
        <CardNewsItem>
          <DateTime>{this.props.listItem.dateTime}</DateTime>
          <Heading>{this.props.listItem.header}</Heading>
          <div>{this.props.listItem.description}</div>
        </CardNewsItem>
      </div>
    );
  }
}

export default CardListing;
