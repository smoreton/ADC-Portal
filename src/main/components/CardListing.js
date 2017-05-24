import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "material-ui";

const CardNews = styled(Card)`
  
  padding: 10px;
  margin: 20px;
  margin-left: 75px;
`;

class CardListing extends Component {
  render() {
    var userComponents = this.props.listArray.map(function(listArray) {
      return (
        <CardNews>
          <li>
            {listArray.dateTime}
            <br />
            <b>{listArray.header}</b>
            <br />
            {listArray.description}
          </li>
        </CardNews>
      );
    });
    return <div>{userComponents}</div>;
  }
}

export default CardListing;
