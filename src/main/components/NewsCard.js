import React, { Component } from "react";
import { Card } from "material-ui";
import styled from "styled-components";
import { createCustomClasses } from "react-flexbox-layout";

const CardNews = styled(Card)`
  
  padding: 10px;
  margin: 20px;
  margin-left: 75px;
`;

class NewsCard extends Component {
  render() {
    return (
      <CardNews>
        <li>
          {this.props.dateTime}
          <br />
          <b>{this.props.header}</b>
          <br />
          {this.props.description}
        </li>
      </CardNews>
    );
  }
}

export default NewsCard;
