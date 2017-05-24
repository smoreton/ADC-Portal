import React, { Component } from "react";

class CardListing extends Component {
  render() {
    return this.props.listArray.map(function(listArray) {
      return (
        <NewsCard
          dateTime={listArray.dateTime}
          header={listArray.header}
          description={listArray.description}
        >
          {" "}
        </NewsCard>
      );
    });
  }
}

export default CardListing;
