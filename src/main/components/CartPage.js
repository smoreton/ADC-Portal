/**
 * Created by CSHEFIK on 18/05/2017.
 */
import React, { Component } from "react";

class CartPage extends Component {
  render() {
    let service = this.props.serviceDetails[this.props.service];
    return (
      <div>
        {service.serviceTitle}

      </div>
    );
  }
}

export default CartPage;
