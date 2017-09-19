import React, { Component } from "react";
import { Switch, Route, Link, Redirect, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ServiceSummaryCard from "./ServiceSummaryCard";
import UserDetailsUpload from "./UserDetailsUpload";
import UserDetailsEntry from "./UserDetailsEntry";
import AlternativeServiceDetails from "./AlternativeServiceDetails";
import OrderComplete from "./OrderComplete";
import OrderFailed from "./OrderFailed";

import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";
import { Card } from "material-ui/Card";
import CartDataCapture from "./ProjectDetailsCaptureComponent";
import CheckoutRequest from "../api/CheckoutRequest";
import AppNavBar from "./AppNavBar";

import ProgressBar from "react-stepper-horizontal";
const history = createHistory();

const StyledButton = styled(RaisedButton)` 
 display: flex;
  flex-flow: row wrap;
  color: #00BFFF !important;
  border: 1px solid #A8A8A8  !important;
  margin: 20px;
  border-radius: 25px !important;
  overflow: hidden !important;
`;

const CheckoutInformationContainer = styled.div`
  max-width: 80%;
  padding: 20px;
  margin: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;

const ButtonSpacing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 25%;
`;

const UserEntry = styled(Card)`
  width: 100%;
  margin: auto;
  padding: 10px;
`;

let transitionTo = Router.transitionTo;

class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkoutProgressCount: 0,
      checkoutNextStep: 0,
      checkoutPreviousStep: 0
    };
    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.viewUserUpload = this.viewUserUpload.bind(this);
    this.setProjectName = this.setProjectName.bind(this);
    this.setProjectCode = this.setProjectCode.bind(this);
    this.setOwnerEmail = this.setOwnerEmail.bind(this);
    this.deselectedService = this.deselectedService.bind(this);
    this.setJustification = this.setJustification.bind(this);
    this.setJustificationEmail = this.setJustificationEmail.bind(this);
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

  nextButton = checkoutProgress => {
    let nextPath = this.props.checkoutPaths[checkoutProgress].pathName;

    return (
      <Link to={nextPath}>
        <StyledButton label="Next" onTouchTap={this.checkoutNextProgressStep} />
      </Link>
    );
  };

  previousButton = checkoutProgress => {
    let previousPath = this.props.checkoutPaths[checkoutProgress].pathName;

    return (
      <Link to={previousPath}>
        <StyledButton
          label="Previous"
          onTouchTap={this.checkoutPreviousProgressStep}
        />
      </Link>
    );
  };

  checkout = () => {
    let APIResponseCode;
    let currentStep = this.state.checkoutProgressCount;
    this.checkoutNextProgressStep();

    console.log(currentStep);
    let checkoutDetails = {
      projectDetails: this.props.projectDetails,
      selectedServices: this.props.selectedServices,
      usersDetails: this.props.userList,
      networkDetails: this.props.networkDetails
    };
    console.log(checkoutDetails);

    return new Promise((resolve, reject) => {
      CheckoutRequest.postCheckoutSummary(checkoutDetails)
        .then(result => {
          //object = result;
          APIResponseCode = result;
          this.completeOrFail(currentStep, APIResponseCode);
          console.log(APIResponseCode);
        })
        .then(resolve)
        .catch(error => {
          console.log("[ERROR]");
          console.log(error);
          resolve();
        });
    });
  };

  completeOrFail = (step, value) => {
    console.log("step is : " + step);
    console.log("Within comp or fail value is: " + value);
    if (value === 200) {
      //history.push('/checkout/ordercomplete');
      window.location = "/checkout/ordercomplete";

      //window.location = "/checkout/ordercomplete";
    } else {
      window.location = "/checkout/orderfailed";
    }
  };

  checkoutNextProgressStep = () => {
    let checkoutProgressCount = this.state.checkoutProgressCount + 1;
    this.setState({
      checkoutProgressCount: checkoutProgressCount
    });
    let nextCheckoutStep = this.state.checkoutNextStep + 1;
    this.setState({ checkoutNextStep: nextCheckoutStep });
  };

  checkoutPreviousProgressStep = () => {
    let checkoutProgressCount = this.state.checkoutProgressCount - 1;
    this.setState({
      checkoutProgressCount: checkoutProgressCount
    });
    let previousCheckoutStep = this.state.checkoutProgressCount - 1;
    this.setState({ checkoutPreviousStep: previousCheckoutStep });
    let nextCheckoutStep = this.state.checkoutNextStep - 1;
    this.setState({ checkoutNextStep: nextCheckoutStep });
  };

  doneButton = () => {
    return <StyledButton label="Done" onTouchTap={this.checkout} />;
  };

  serviceCategoryCheck = () => {
    let network = false;
    let standard = false;

    this.props.selectedServices.forEach(item => {
      if (
        item.service.category === "PaaS / IaaS" ||
        item.service.category === "Networks"
      ) {
        network = true;
      }

      if (item.service.category === "Tools/Software") {
        standard = true;
      }
    });

    if (network && !standard) {
      return false;
    } else {
      return true;
    }
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

  setJustification = value => {
    this.props.networkJustification(value);
  };

  setJustificationEmail = value => {
    this.props.networkOwnerEmail(value);
  };

  setOwnerEmail = value => {
    this.props.onOwnerEmail(value);
  };

  deselectedService = value => {
    this.props.onServiceDeselected(value);
  };

  render() {
    return (
      <div>
        <AppNavBar />
        <ProgressBar
          steps={this.props.progressSteps}
          activeStep={this.state.checkoutProgressCount}
        />
        <Switch>
          <Route
            path="/checkout/servicesummary"
            render={props =>
              <CheckoutInformationContainer>
                <ServiceSummaryCard
                  serviceData={this.props.selectedServices}
                  userRanges={this.props.userRangeValues}
                  businessUnits={this.props.businessUnitValues}
                  onServiceUpdate={this.updateSelectedService}
                  onUnchecked={this.deselectedService}
                />
                <ButtonGroup>
                  <ButtonSpacing>
                    {this.nextButton(this.state.checkoutNextStep)}
                  </ButtonSpacing>
                </ButtonGroup>
              </CheckoutInformationContainer>}
          />

          <Route
            path="/checkout/userentry"
            render={props =>
              <CheckoutInformationContainer>
                {this.props.selectedServices.length === 0
                  ? <Redirect to="/checkout/servicesummary" />
                  : <CheckoutInformationContainer>
                      <UserEntry>
                        <UserDetailsEntry
                          usersAdded={this.props.userList}
                          onAdd={this.addUser}
                          onRemove={this.removeUser}
                          servicesSelected={this.props.selectedServices}
                        />
                        <UserDetailsUpload
                          onUserUpload={this.addUser}
                          userDetails={this.viewUserUpload}
                        />
                      </UserEntry>
                      <ButtonGroup>
                        <ButtonSpacing>
                          {this.previousButton(this.state.checkoutPreviousStep)}
                          {this.nextButton(this.state.checkoutNextStep)}
                        </ButtonSpacing>
                      </ButtonGroup>
                    </CheckoutInformationContainer>}
              </CheckoutInformationContainer>}
          />

          <Route
            path="/checkout/networkrequest"
            render={props =>
              <CheckoutInformationContainer>
                {this.props.selectedServices.length === 0
                  ? <Redirect to="/checkout/servicesummary" />
                  : <CheckoutInformationContainer>
                      <AlternativeServiceDetails
                        setJustificationOwnerEmail={this.setJustificationEmail}
                        setServiceJustification={this.setJustification}
                      />
                      {this.serviceCategoryCheck()
                        ? <ButtonGroup>
                            <ButtonSpacing>
                              {this.previousButton(
                                this.state.checkoutPreviousStep
                              )}
                              {this.nextButton(this.state.checkoutNextStep)}
                            </ButtonSpacing>
                          </ButtonGroup>
                        : <ButtonGroup>
                            <ButtonSpacing>
                              {this.previousButton(
                                this.state.checkoutPreviousStep
                              )}
                              {this.doneButton()}
                            </ButtonSpacing>
                          </ButtonGroup>}
                    </CheckoutInformationContainer>}
              </CheckoutInformationContainer>}
          />

          <Route
            path="/checkout/projectinfo"
            render={props =>
              <CheckoutInformationContainer>
                {this.props.selectedServices.length === 0
                  ? <Redirect to="/checkout/servicesummary" />
                  : <CheckoutInformationContainer>
                      <CartDataCapture
                        onViewUserUpload={this.viewUserUpload}
                        setProjectName={this.setProjectName}
                        setProjectCode={this.setProjectCode}
                        setOwnerEmail={this.setOwnerEmail}
                      />
                      <ButtonGroup>
                        <ButtonSpacing>
                          {this.previousButton(this.state.checkoutPreviousStep)}
                          {this.doneButton()}
                        </ButtonSpacing>
                      </ButtonGroup>
                    </CheckoutInformationContainer>}
              </CheckoutInformationContainer>}
          />

          <Route
            path="/checkout/ordercomplete"
            render={props =>
              <CheckoutInformationContainer>
                <OrderComplete />
              </CheckoutInformationContainer>}
          />

          <Route
            path="/checkout/orderfailed"
            render={props =>
              <CheckoutInformationContainer>
                <OrderFailed />
              </CheckoutInformationContainer>}
          />
        </Switch>
      </div>
    );
  }
}

export default CheckoutPage;
