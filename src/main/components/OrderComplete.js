import React, { Component } from "react";
import styled from "styled-components";
import complete from "../../../public/img/Group.png";
import Boxes from "../../../public/img/bg-people-boxes.jpg";
import { withRouter } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";

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

const StyledButton = styled(RaisedButton)` 
  display: flex;
  flex-flow: row wrap;
  color: #00BFFF !important;
  border: 2px solid #448AC9  !important;
  margin: 20px;
  border-radius: 25px !important;
  overflow: hidden !important
`;

class OrderComplete extends Component {
  routeToHome = () => {
    window.location.href = "/";
  };

  render() {
    return (
      <FlexBox>
        <CheckoutCompletion>
          <TextPos>
            <h1>Order Submitted</h1>
            <SuccessLogo>
              <img src={complete} alt="Success" />
            </SuccessLogo>
            {this.props.location.state.jiraResponse}
          </TextPos>
          <BoxLogo>
            <img src={Boxes} alt="Success" />
          </BoxLogo>
        </CheckoutCompletion>
        <StyledButton label="Complete" onTouchTap={this.routeToHome} />
      </FlexBox>
    );
  }
}
export default withRouter(OrderComplete);
