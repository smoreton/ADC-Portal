import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";
import AppNavBar from "./AppNavBar";
import failed from "../../../public/img/Group 4.png";

const OrderCard = styled(Card)`
    width: 95%;
    align: center;
`;

class OrderFailed extends Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <OrderCard>
          <div>
            <img src={failed} alt="Failure" />
            <h1>Order Failed</h1>
            Please try again
          </div>
        </OrderCard>
      </div>
    );
  }
}
export default OrderFailed;
