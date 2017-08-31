import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserHistory } from "react-router";
import { MuiThemeProvider } from "material-ui/styles";
import injectTapEventPlugin from "react-tap-event-plugin";

import "./App.css";

/**
 * Component Imports
 */
import HomePage from "./components/HomePage";
import Catalogue from "./components/CataloguePage";
import ContactPage from "./components/ContactPage";
import CheckoutPage from "./components/CheckoutPage";
import FAQPage from "./components/FAQPage";

/**
 * Model Imports
 */
import ServiceInformation from "./model/serviceInformation";
import ServiceCategory from "./model/serviceCategory";
import DropDownData from "./model/dropDownData";
import ProjectDetails from "./model/projectDetails";

/**
 * App Data Imports
 */
const contactsJson = require("./data/contacts.json");
const serviceValuesJson = require("./data/service.json");
const serviceTypeValuesJson = require("./data/serviceCategory.json");
const questionsJson = require("./data/questions.json");
const dropDownJson = require("./data/dropDownData.json");
const checkoutSteps = require("./data/checkoutProgressSteps.json");

//-------- START FAQ OBJECT SETUP --------
const questionsText = Object.values(questionsJson.questions);

let makeServiceInformationArray = array => {
  return array.map(item => {
    return new ServiceInformation(
      item.id,
      item.category,
      item.dateTime,
      item.header,
      item.description
    );
  });
};

let faqArray = makeServiceInformationArray(questionsText);
//-------- END FAQ OBJECT SETUP --------

//-------- START SERVICE OBJECT SETUP --------
const serviceValues = Object.values(serviceValuesJson.services);
//-------- END SERVICE OBJECT SETUP --------

//-------- START SERVICE CATEGORY OBJECT SETUP --------
const serviceTypes = Object.values(serviceTypeValuesJson.serviceTypes);

let makeServiceCategoryArray = array => {
  return array.map(item => {
    return new ServiceCategory(
      item.id,
      item.logoSource,
      item.category,
      item.serviceCategoryColor
    );
  });
};

let serviceCategoryArray = makeServiceCategoryArray(serviceTypes);
//-------- END SERVICE CATEGORY OBJECT SETUP --------

//-------- START CONTACTS OBJECT SETUP --------
const contactList = Object.values(contactsJson.contacts);
//-------- END CONTACTS OBJECT SETUP ----------

//-------- START DROP DOWN DATA SETUP --------
let userRangeValues = Object.values(dropDownJson.userRange);
let businessUnitValues = Object.values(dropDownJson.businessUnits);

let dropDownDataSetup = array => {
  return array.map(item => {
    return new DropDownData(item.id, item.key, item.value);
  });
};

let userRangeArray = dropDownDataSetup(userRangeValues);
let businessUnitArray = dropDownDataSetup(businessUnitValues);
//-------- END DROP DOWN DATA SETUP --------

//-------- START PROGRESS BAR STEPS SETUP --------
const progressBarContent = Object.values(checkoutSteps.progressSteps);
const completeProgressBarContent = Object.values(
  checkoutSteps.completeProgressSteps
);
const networkProgressBarContent = Object.values(
  checkoutSteps.networkProgressSteps
);
//-------- START PROGRESS BAR STEPS SETUP --------

//-------- START CHECKOUT PATH SETUP --------
const checkoutPaths = Object.values(checkoutSteps.checkoutMainPath);
const completeCheckoutPaths = Object.values(checkoutSteps.checkoutCompletePath);
const checkoutNetworkPath = Object.values(checkoutSteps.checkoutNetworkPath);
//-------- START CHECKOUT PATH SETUP --------

//-------- SET APP THEME PROPERTIES --------
document.body.style.backgroundColor = "#F5F5F5";

//-------- PROJECT DETAILS --------
let projectDetails = new ProjectDetails();

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      selectedServices: [],
      selectedServiceType: "All",
      userDetails: [],
      projectDetails: { projectDetails }
    };

    this.addService = this.addService.bind(this);
    this.removeService = this.removeService.bind(this);
    this.updateService = this.updateService.bind(this);
    this.addUser = this.addUser.bind(this);
    this.serviceTypeHandler = this.serviceTypeHandler.bind(this);
  }

  //-------- SELECTED SERVICE STATE METHODS --------
  addService(newSelectedService) {
    this.setState({
      selectedServices: this.state.selectedServices.concat([newSelectedService])
    });
  }

  removeService(serviceDeselected) {
    this.setState({
      selectedServices: this.state.selectedServices.filter(item => {
        return item.serviceName !== serviceDeselected.serviceTitle;
      })
    });
  }

  updateService(array) {
    this.setState({ selectedServices: array });
  }

  //-------- SELECTED SERVICE STATE METHODS --------

  //-------- SERVICE CATEGORY STATE METHOD --------
  serviceTypeHandler(value) {
    this.setState({
      selectedServiceType: value
    });
  }

  //-------- SERVICE CATEGORY STATE METHOD --------

  //-------- USER DETAILS STATE METHODS --------
  addUser(newUser) {
    this.setState({ userDetails: this.state.userDetails.concat([newUser]) });
  }

  removeUser(removedUser) {
    this.setState({
      userDetails: this.state.userDetails.filter(item => {
        return item.userName !== removedUser.userName;
      })
    });
  }

  //-------- USER DETAILS STATE METHODS --------

  //-------- PROJECT DETAILS METHOD --------
  setProjectName(projectName) {
    projectDetails.enteredProjectName = projectName;
  }

  setProjectCode(projectCode) {
    projectDetails.enteredProjectCode = projectCode;
  }

  setOwnerEmail(ownerEmail) {
    projectDetails.enteredOwnerEmail = ownerEmail;
  }

  //-------- PROJECT DETAILS METHOD --------

  //------ DIFFERENT CHECKOUT PROCESS STEPS ------
  checkoutProcessSteps = array => {
    let network = false;
    let standard = false;

    array.forEach(item => {
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
      return networkProgressBarContent;
    } else if (!network && standard) {
      return progressBarContent;
    } else {
      return completeProgressBarContent;
    }
  };

  //------ DIFFERENT CHECKOUT PROCESS STEPS ------

  //------ DIFFERENT CHECKOUT PROCESS PATHS ------
  checkoutProcessPaths = array => {
    let network = false;
    let standard = false;

    array.forEach(item => {
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
      return checkoutNetworkPath;
    } else if (!network && standard) {
      return checkoutPaths;
    } else {
      return completeCheckoutPaths;
    }
  };

  //------ DIFFERENT CHECKOUT PROCESS PATHS ------

  render() {
    let browserHistory = BrowserHistory;
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <div>
            <Route path="/" exact component={HomePage} />

            <Route
              path="/catalogue"
              exact
              render={props => (
                <Catalogue
                  serviceDetails={serviceValues}
                  serviceCategories={serviceCategoryArray}
                  onServiceCategoryChange={this.serviceTypeHandler}
                  selectedServiceCategory={this.state.selectedServiceType}
                  onServiceSelected={this.addService}
                  onServiceDeselected={this.removeService}
                  selectedServices={this.state.selectedServices}
                />
              )}
            />

            <Route
              path="/contact"
              exact
              render={props => <ContactPage contactList={contactList} />}
            />

            <Route
              path="/checkout"
              render={props => (
                <CheckoutPage
                  selectedServices={this.state.selectedServices}
                  userRangeValues={userRangeArray}
                  businessUnitValues={businessUnitArray}
                  onServiceDeselected={this.removeService}
                  onServiceCategoryChange={this.serviceTypeHandler}
                  onSelectedServiceUpdate={this.updateService}
                  onUserAdded={this.addUser}
                  onUserRemoved={this.removeUser}
                  userList={this.state.userDetails}
                  onProjectName={this.setProjectName}
                  onProjectCode={this.setProjectCode}
                  onOwnerEmail={this.setOwnerEmail}
                  progressSteps={this.checkoutProcessSteps(
                    this.state.selectedServices
                  )}
                  checkoutPaths={this.checkoutProcessPaths(
                    this.state.selectedServices
                  )}
                />
              )}
            />

            <Route
              path="/faq"
              exact
              render={props => <FAQPage questions={faqArray} />}
            />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
