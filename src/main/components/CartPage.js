/**
 * Created by CSHEFIK on 18/05/2017.
 */
import React, { Component } from "react";
import TileComponent from "./TileComponent";

class CartPage extends Component {
  render() {
    return (
      <div>
        <TileComponent
          logoSource={this.props.logoSource}
          title={this.props.serviceTitle}
          link={this.props.link}
        />
      </div>
    );
  }
}

export default CartPage;
