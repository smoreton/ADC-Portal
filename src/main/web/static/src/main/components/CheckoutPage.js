import React, { Component } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import ServiceSummaryCard from "./ServiceSummaryCard";
import UserDetailsUpload from "./UserDetailsUpload";
import UserDetailsEntry from "./UserDetailsEntry";
import AlternativeServiceDetails from "./NetworkDetailsCaptureComponent";
import OrderComplete from "./OrderComplete";
import OrderFailed from "./OrderFailed";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";
import { Card } from "material-ui/Card";
import CartDataCapture from "./ProjectDetailsCaptureComponent";
import ApiUtility from "..//utils/ApiPostUtil";
import AppNavBar from "./AppNavBar";

import ProgressBar from "react-stepper-horizontal";

const CheckoutCompletion = styled.div`padding: 30px;`;

const StyledButton = styled(RaisedButton)` 
  display: flex;
  flex-flow: row wrap;
  color: #00BFFF !important;
  border: 2px solid #448AC9  !important;
  margin: 20px;
  border-radius: 25px !important;
  overflow: hidden !important
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

class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkoutProgressCount: 0,
      checkoutNextStep: 0,
      checkoutPreviousStep: 0,
      atlassianNetworkServices: [],
      nextButtonEnabled: true,
      checkoutButtonEnabled: true,
      networkEmail: "",
      networkJustification: "",
      projectOwnerEmail: "",
      projectCode: "",
      projectName: "",
      BUEntry: ""
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
    this.postCheckoutRequest = this.postCheckoutRequest.bind(this);
    this.updateCheckoutButtonEnabledProperty = this.updateCheckoutButtonEnabledProperty.bind(
      this
    );
  }

  persistBuState = value => {
    this.setState({ BUEntry: value });
  };

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
        <StyledButton
          label="Next"
          disabled={this.state.nextButtonEnabled}
          onTouchTap={this.checkoutNextProgressStep}
        />
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

  postCheckoutRequest = () => {
    let APIResponseCode = {};
    let APIResponseBody = {};
    this.checkoutNextProgressStep();
    return ApiUtility.postCheckoutSummary(
      this.props.projectDetails,
      this.props.selectedServices,
      this.props.userList,
      this.props.networkDetails
    ).then(result => {
      APIResponseCode = result.statusCode;
      APIResponseBody = result.jiraResponse;
      this.completeOrFail(APIResponseCode, APIResponseBody);
    });
  };

  completeOrFail = (responseCode, jiraId) => {
    if (responseCode === 200) {
      this.props.history.push({
        pathname: "/checkout/ordercomplete",
        state: { jiraResponse: jiraId }
      });
    } else {
      this.props.history.push("/checkout/orderfailed");
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
    return (
      <div>
        <StyledButton
          label="Checkout"
          disabled={this.state.checkoutButtonEnabled}
          onTouchTap={this.postCheckoutRequest}
        />
      </div>
    );
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
    this.setState({ projectName: value });
    this.props.onProjectName(value);
  };
  setProjectCode = value => {
    this.setState({ projectCode: value });
    this.props.onProjectCode(value);
  };

  setJustification = value => {
    this.setState({ networkJustification: value });
    this.props.networkJustification(value);
  };

  setJustificationEmail = value => {
    this.setState({ networkEmail: value });
    this.props.networkOwnerEmail(value);
  };

  setOwnerEmail = value => {
    this.setState({ projectOwnerEmail: value });
    this.props.onOwnerEmail(value);
  };

  deselectedService = value => {
    this.props.onServiceDeselected(value);
  };

  updateNextButtonEnabledProperty = value => {
    this.setState({ nextButtonEnabled: value });
  };

  updateCheckoutButtonEnabledProperty = value => {
    this.setState({ checkoutButtonEnabled: value });
  };

  render() {
    return (
      <div>
        <AppNavBar auth={this.props.auth}/>
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
                  updateNextEnabledProperty={
                    this.updateNextButtonEnabledProperty
                  }
                  updateBuState={this.persistBuState}
                  persistedBU={this.state.BUEntry}
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
                          atlassianServices={this.props.atlassianServiceArray}
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
                        atlassianServices={this.props.atlassianServiceArray}
                        setJustificationOwnerEmail={this.setJustificationEmail}
                        setServiceJustification={this.setJustification}
                        networkEmail={this.state.networkEmail}
                        networkJustification={this.state.networkJustification}
                        updateNextEnabledProperty={
                          this.updateNextButtonEnabledProperty
                        }
                        updateCheckoutEnabledProperty={
                          this.updateCheckoutButtonEnabledProperty
                        }
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
                        projectOwnerEmail={this.state.projectOwnerEmail}
                        projectCode={this.state.projectCode}
                        projectName={this.state.projectName}
                        updateCheckoutEnabledProperty={
                          this.updateCheckoutButtonEnabledProperty
                        }
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
            exact
            render={props =>
              <CheckoutCompletion>
                <OrderComplete />
              </CheckoutCompletion>}
          />

          <Route
            path="/checkout/orderfailed"
            render={props =>
              <CheckoutCompletion>
                <OrderFailed />
              </CheckoutCompletion>}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(CheckoutPage);
