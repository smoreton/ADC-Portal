import React, { Component } from "react";
import Paper from "material-ui/Paper";
import styled from "styled-components";
import complete from "../../../public/img/Group.png";
import Boxes from "../../../public/img/bg-people-boxes.jpg";

const TextPos = styled.div`top: 5%;`;

const Logo = styled.div`
  top: 33%;
  left: 50%;
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
            <h1>Order Submitted</h1>
            <Logo>
              <img src={complete} alt="Success" />
            </Logo>
            The ADC team will contact you shortly to complete the order
          </TextPos>
          <img src={Boxes} alt="Success" />
        </Paper>
      </FlexBox>
    );
  }
}
export default OrderComplete;
