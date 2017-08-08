import React, { Component } from "react";
import Paper from "material-ui/Paper";
import styled from "styled-components";
import AppNavBar from "./AppNavBar";
import complete from "../../../public/img/Group.png";
import Boxes from "../../../public/img/bg-people-boxes.jpg";

const TextPos = styled.div`
  left: 45%;
`;

const BoxLogo = styled.div`
  position: absolute;
  top: 55%;
  left: 25%;
`;

const Logo = styled.div`

  top: 33%;
  left: 50%;
`;

const style = {
  width: "100%",
  maxWidth: "none",
  height: 700,
  maxHeight: "none",
  textAlign: "center",
  display: "inline-block"
};

class OrderComplete extends Component {
  render() {
    return (
      <div>
        <AppNavBar />

        <Paper style={style} zDepth={1}>
          <h1>Order Submitted</h1>
          <Logo>
            <img src={complete} alt="Success" />
          </Logo>

          The ADC team will contact you shortly to complete the order

          <BoxLogo>
            <img src={Boxes} alt="Success" />

          </BoxLogo>
        </Paper>
      </div>
    );
  }
}
export default OrderComplete;
