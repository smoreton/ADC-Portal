import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";
import AppNavBar from "./AppNavBar";
import failed from "../../../public/img/Group 4.png";
import boxes from "../../../public/img/bg-people-boxes.jpg";

const OrderCard = styled(Card)`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  text-align: center;
`;

const BoxPicture = styled.div`
  position: absolute;
  width: 80%;
  padding-top: 20%
  margin-left: 10%;
  margin-right:10%;
  background-image: url(${boxes});
  background-position: center; 
  background-repeat: no-repeat;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
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

        <BoxPicture />
      </div>
    );
  }
}
export default OrderFailed;
