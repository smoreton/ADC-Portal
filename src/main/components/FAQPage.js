import React, { Component } from "react";
import CardListing from "./CardListing";

class FAQPage extends Component {
  renderFaqElements = array => {
    return array.map(item => {
      return <CardListing key={item.id} listItem={item} />;
    });
  };

  render() {
    return (
      <div>
        {this.renderFaqElements(this.props.questions)}
      </div>
    );
  }
}

export default FAQPage;
