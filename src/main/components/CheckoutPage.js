import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import ServiceSummaryCard from "./ServiceSummaryCard";
import UserDetailsUpload from "./UserDetailsUpload";
import UserDetailsEntry from "./UserDetailsEntry";
import OrderComplete from "./OrderComplete";
import OrderFailed from "./OrderFailed";

import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";
import { Card } from "material-ui/Card";
import CartDataCapture from "./ProjectDetailsCaptureComponent";

import AppNavBar from "./AppNavBar";

import ProgressBar from "react-stepper-horizontal";

const StyledButton = styled(RaisedButton)`
    color: #00BFFF !important;
    border: 2px solid #00BFFF !important;
    border-radius: 25px !important;
    overflow: hidden !important;
`;

const CheckoutInformationContainer = styled.div`
  width: 75%;
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

const UserEntry = styled(Card)`
  width: 90%;
  margin: auto;
  padding: 10px;
`;

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myCount: 0
    };
    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.viewUserUpload = this.viewUserUpload.bind(this);
    this.setProjectName = this.setProjectName.bind(this);
    this.setProjectCode = this.setProjectCode.bind(this);
    this.setOwnerEmail = this.setOwnerEmail.bind(this);
    this.deselectedService = this.deselectedService.bind(this);
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

  nextButton = () => {
    return (
      <ButtonGroup>
        <ButtonSpacing>
          <Link to="">
            <StyledButton label="Submit" onTouchTap={this.handleNext} />
          </Link>
        </ButtonSpacing>
      </ButtonGroup>
    );
  };

  previousButton = () => {
    return (
      <ButtonGroup>
        <ButtonSpacing>
          <Link to="">
            <StyledButton label="Submit" onTouchTap={this.previousStep} />
          </Link>
        </ButtonSpacing>
      </ButtonGroup>
    );
  };

  doneButtonDisplay = () => {
    return (
      <ButtonGroup>
        <ButtonSpacing>
          <Link to="/">
            <StyledButton label="Done" />
          </Link>
        </ButtonSpacing>
      </ButtonGroup>
    );
  };

  updateSelectedService = newArray => {
    this.props.onSelectedServiceUpdate(newArray);
  };

  setProjectName = value => {
    this.props.onProjectName(value);
  };
  setProjectCode = value => {
    this.props.onProjectCode(value);
  };

  setOwnerEmail = value => {
    this.props.onOwnerEmail(value);
  };

  deselectedService = value => {
    this.props.onServiceDeselected(value);
  };

  handleNext = () => {
    const count = this.state.myCount + 1;

    this.setState({
      myCount: count
    });
  };

  previousStep = () => {
    const count = this.state.myCount - 1;

    this.setState({
      myCount: count
    });
  };

  render() {
    return (
      <div>
        <AppNavBar />
        <ProgressBar
          steps={this.props.progressSteps}
          currentStep={this.state.myCount}
        />

        <Switch>
          <Route
            path="/checkout/servicesummary"
            render={props => (
              <CheckoutInformationContainer>
                <ServiceSummaryCard
                  serviceData={this.props.selectedServices}
                  userRanges={this.props.userRangeValues}
                  businessUnits={this.props.businessUnitValues}
                  onServiceUpdate={this.updateSelectedService}
                  onUnchecked={this.deselectedService}
                />
                {this.nextButton()}
              </CheckoutInformationContainer>
            )}
          />

          <Route
            path="/checkout/userentry"
            render={props => (
              <CheckoutInformationContainer>
                <UserEntry>
                  <UserDetailsEntry
                    usersAdded={this.props.userList}
                    onAdd={this.addUser}
                    onRemove={this.removeUser}
                  />
                  <UserDetailsUpload
                    onUserUpload={this.addUser}
                    userDetails={this.viewUserUpload}
                  />
                  {this.nextButton()}
                  {this.previousButton()}
                </UserEntry>
              </CheckoutInformationContainer>
            )}
          />

          <Route
            path="/checkout/projectinfo"
            render={props => (
              <CheckoutInformationContainer>
                <CartDataCapture
                  onViewUserUpload={this.viewUserUpload}
                  setProjectName={this.setProjectName}
                  setProjectCode={this.setProjectCode}
                  setOwnerEmail={this.setOwnerEmail}
                />
                {this.nextButton()}
                {this.previousButton()}
              </CheckoutInformationContainer>
            )}
          />

          <Route path="/checkout/ordercomplete" component={OrderComplete} />
          <Route path="/checkout/orderfailed" component={OrderFailed} />
        </Switch>

      </div>
    );
  }
}

export default CheckoutPage;
