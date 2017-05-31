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
        {this.props.listArray.map(listArray => (
          <div key={listArray.id}>
            <CardNewsItem>

                <DateTime>{listArray.dateTime}</DateTime>
                <Heading>{listArray.header}</Heading>
                <div>{listArray.description}</div>

            </CardNewsItem>
          </div>
        ))}
      </div>
    );
  }
}

export default CardListing;
