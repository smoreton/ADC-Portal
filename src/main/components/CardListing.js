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
            <div>
              {listArray.header}
            </div>
            <div>
              {listArray.description}
            </div>
          </li>
        </CardNews>
      );
    });
    return <div>{userComponents}</div>;
  }
}

export default CardListing;
