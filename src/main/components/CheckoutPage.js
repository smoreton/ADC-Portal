import React, { Component } from "react";
import CartDataCapture from "./CartDataCapture";
import ServiceSummaryCard from "./ServiceSummaryCard";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";

import UserDetailsUpload from "./UserDetailsUpload";
import { Popup } from "./Popup";

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

class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewUserUpload: false
    };
  }

  viewUserUpload = value => {
    this.setState({ viewUserUpload: value });
  };

  renderUserUpload = () => {
    return (
      <Popup>
        <UserDetailsUpload />
      </Popup>
    );
  };

  updateSelectedService = newArray => {
    this.props.onSelectedServiceUpdate(newArray);
  };

  render() {
    return (
      <CartCard>
        <ServiceSummaryCard
          serviceData={this.props.selectedServices}
          userRanges={this.props.userRangeValues}
          businessUnits={this.props.businessUnitValues}
          onServiceUpdate={this.updateSelectedService}
        />

        <CartDataCapture onViewUserUpload={this.viewUserUpload} />

        {this.state.viewUserUpload ? this.renderUserUpload() : null}

        <ButtonGroup>
          <ButtonSpacing>
            <RaisedButton label="Submit" /**onTouchTap={this.submitForm}*/ />
          </ButtonSpacing>
        </ButtonGroup>
      </CartCard>
    );
  }
}

export default CheckoutPage;
