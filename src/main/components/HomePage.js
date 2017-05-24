import React, { Component } from "react";
import DescriptionCard from "./DescriptionCard";
import "../App.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <DescriptionCard description={this.props.description} />
      </div>
    );
  }
}

export default HomePage;
