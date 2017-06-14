import React, { Component } from "react";
import CartDataCapture from "./CartDataCapture";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";

const ButtonGroup = styled.div`
margin-right: 15%;
margin-top: 1%;
display: flex;
flex-direction: row;
justify-content:flex-end ;
`;

const ButtonSpacing = styled.div`
justify-content:space-between;
width:225px;
display: flex;
flex-direction: row;
`;

class CartPage extends Component {
  render() {
    return (
      <div>
        <CartDataCapture />

        <ButtonGroup>
          <ButtonSpacing>
            <RaisedButton label="Submit" /**onTouchTap={this.submitForm}*/ />
          </ButtonSpacing>
        </ButtonGroup>
      </div>
    );
  }
}

export default CartPage;
