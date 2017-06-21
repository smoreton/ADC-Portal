import React, { Component } from "react";
import CartDataCapture from "./CartDataCapture";
import ServiceSummaryCard from "./ServiceSummaryCard";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";

const CartCard = styled.div`
width:90%;
margin:auto;
`;

const ButtonGroup = styled.div`
margin-right: 15%;
margin-top: 1%;
display: flex;
flex-direction: row;
justify-content:flex-end ;
`;

const ButtonSpacing = styled.div`
justify-content:flex-end;
width:225px;
display: flex;
flex-direction: row;
padding:10px;
`;

class CartPage extends Component {
  render() {
    return (
      <CartCard>

        <ServiceSummaryCard serviceData={this.props.selectedServices} />

        <CartDataCapture />

        <ButtonGroup>
          <ButtonSpacing>
            <RaisedButton label="Submit" /**onTouchTap={this.submitForm}*/ />
          </ButtonSpacing>
        </ButtonGroup>
      </CartCard>
    );
  }
}

export default CartPage;
