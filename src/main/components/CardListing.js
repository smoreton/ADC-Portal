import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "material-ui";

const CardNewsItem = styled(Card)`
  padding: 10px;
  margin: 20px;
  margin-left: 75px;
`;

class CardListing extends Component {
  render() {
    return (
      <div>
        {this.props.listArray.map(listArray => (
          <div key={listArray.id}>
            <CardNewsItem>
              <li>
                {listArray.dateTime}
                <div>{listArray.header}</div>
                <div>{listArray.description}</div>
              </li>
            </CardNewsItem>
          </div>
        ))}
      </div>
    );
  }
}

export default CardListing;
