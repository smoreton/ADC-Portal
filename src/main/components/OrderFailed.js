import React, { Component } from "react";
import Paper from "material-ui/Paper";
import styled from "styled-components";
import AppNavBar from "./AppNavBar";
import failed from "../../../public/img/Group 4.png";
import Boxes from "../../../public/img/bg-people-boxes.jpg";

const TextPos = styled.div`top: 5%;`;

const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center img {
    max-width: 50%;
    height: auto;
  }
`;

const BoxLogo = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  img {
    max-width: 70%;
    height: auto;
  }
`;

//Centrally positions the component
const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const style = {
  width: "90%",
  maxWidth: "none",
  height: 500,
  maxHeight: "none",
  textAlign: "center",
  display: "inline-block"
};

class OrderComplete extends Component {
  render() {
    return (
      <FlexBox>
        <Paper style={style} zDepth={1}>
          <TextPos>
            <h1>Order Failed</h1>
            <Logo>
              <img src={failed} alt="Success" />
            </Logo>
            Something went wrong and the order has not been submitted. Please
            try again.
          </TextPos>
          <BoxLogo>
            <img src={Boxes} alt="Success" />
          </BoxLogo>
        </Paper>
      </FlexBox>
    );
  }
}
export default OrderComplete;
