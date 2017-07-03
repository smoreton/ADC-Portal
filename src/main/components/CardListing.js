import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "material-ui/Card";

const CardNewsItem = styled(Card)`
  padding: 10px;
  margin: 20px;
  max-width: 420px;
  min-height: 120px;
  overflow: auto;
`;

const Category = styled.div`
  font-weight: bold;
  text-decoration: none;
  float: right;
`;

const Heading = styled.div`
  font-weight: normal;
  margin-left: 15px;
  font-size: 28px;
`;

const DateTime = styled.div`
  font-size: 20px;
  margin-left: 15px;
  color: #757575;
`;

const Description = styled.div`
  margin: 10px 0 0 15px;
  font-size: 18px;
`;

class CardListing extends Component {
  render() {
    return (
      <CardNewsItem>
        <Heading>
          {this.props.listItem.header}
        </Heading>
        <DateTime>
          {this.props.listItem.dateTime}
        </DateTime>
        <Description>
          {this.props.listItem.description}
        </Description>
        <Category>
          {this.props.listItem.serviceInformationCategory}
        </Category>
      </CardNewsItem>
    );
  }
}

export default CardListing;
