import React, { Component } from "react";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";

import CartDataCapture from "./CartDataCapture";
import ServiceSummaryCard from "./ServiceSummaryCard";
import UserDetailsUpload from "./UserDetailsUpload";
import UserDetailsEntry from "./UserDetailsEntry";
import { Popup } from "./Popup";

import CssMixin from "../model/cssMixin";

let mixin = new CssMixin();
mixin.addCssProperty("flex-direction", "col");

const CartCard = styled.div`
  width: 90%;
  margin: auto;
`;

const ButtonGroup = styled.div`
  margin-right: 15%;
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonSpacing = styled.div`
  justify-content: flex-end;
  width: 225px;
  display: flex;
  flex-direction: row;
  padding: 10px;
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

  addUser = value => {
    this.props.onUserAdded(value);
  };

  removeUser = value => {
    this.props.onUserRemoved(value);
  };

  renderUserUpload = () => {
    return (
      <Popup mixin={mixin}>
        <UserDetailsEntry
          usersAdded={this.props.userList}
          onAdd={this.addUser}
          onRemove={this.removeUser}
        />
        <UserDetailsUpload onUserUpload={this.addUser} />
        {/**<ConfirmUsers onViewUpdate={this.viewUserUpload}/>*/}
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
