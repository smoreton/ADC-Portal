import React, { Component } from "react";
import styled from "styled-components";
import complete from "../../../public/img/Group.png";
import Boxes from "../../../public/img/bg-people-boxes.jpg";

const TextPos = styled.div`
  justify-content: center;
  text-align: center;
`;

const SuccessLogo = styled.div`
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

const CheckoutCompletion = styled.div`
  opacity: 0.89;
  width: 100%;
  height: auto;
  background: #ffffff;
  border: 1px solid rgba(151, 151, 151, 0.25);
`;

//Centrally positions the component
const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

class OrderComplete extends Component {
  render() {
    return (
      <FlexBox>
        <CheckoutCompletion>
          <TextPos>
            <h1>Order Submitted</h1>
            <SuccessLogo>
              <img src={complete} alt="Success" />
            </SuccessLogo>
            The ADC team will contact you shortly to complete the order
          </TextPos>
          <BoxLogo>
            <img src={Boxes} alt="Success" />
          </BoxLogo>
        </CheckoutCompletion>
      </FlexBox>
    );
  }
}
export default OrderComplete;
