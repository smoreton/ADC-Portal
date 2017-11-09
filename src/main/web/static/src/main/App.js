import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {MuiThemeProvider} from "material-ui/styles";
import "react-router"
import CheckoutProcess from "./utils/CheckoutProcessUtils";
import "./App.css";
import "babel-polyfill";
import JWT_Client from "./utils/client"
/**
 * Component Imports
 */
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Catalogue from "./components/CataloguePage";
import ContactPage from "./components/ContactPage";
import CheckoutPage from "./components/CheckoutPage";
import FAQPage from "./components/FAQPage";
import Admin from "./components/Admin"

/**
 * Model Imports
 */
import ServiceInformation from "./model/serviceInformation";
import ServiceCategory from "./model/serviceCategory";
import DropDownData from "./model/dropDownData";
import ProjectDetails from "./model/projectDetails";
import NetworkDetails from "./model/networkDetailsModel";

/**
 * App Data Imports
 */
const contactsJson = require("./data/contacts.json");
const serviceValuesJson = require("./data/service.json");
const serviceTypeValuesJson = require("./data/serviceCategory.json");
const questionsJson = require("./data/questions.json");
const dropDownJson = require("./data/dropDownData.json");

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

//-------- SET APP THEME PROPERTIES --------
document.body.style.backgroundColor = "#F5F5F5";

//-------- PROJECT DETAILS --------
let projectDetails = new ProjectDetails();

//---------NETWORK DETAILS----------
let networkDetails = new NetworkDetails();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedServices: [],
      selectedServiceType: "All",
      userDetails: [],
      projectDetails: {projectDetails},
      networkDetails: {networkDetails},
      atlassianServices: [],
      auth: false,
      roles:""
    };

    this.addService = this.addService.bind(this);
    this.removeService = this.removeService.bind(this);
    this.updateService = this.updateService.bind(this);
    this.addUser = this.addUser.bind(this);
    this.serviceTypeHandler = this.serviceTypeHandler.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.loginRoute = this.loginRoute.bind(this);
    this.jwt = new JWT_Client(localStorage, "http://localhost:8080/");
  }

  componentDidMount() {
    //this.doLogin("useradmin","password");
  }


  //-------- Security -----------------
  doLogin(username, password) {
    console.log("Login called");
    this.jwt.doLogin(username, password);
    let token = this.jwt.getJwtToken();
    let r=this.jwt.getRoles();
    if (token) {
      this.setState({auth: true});
      this.setState({roles:r})
    }
  }

  //-------- Security -----------------


  //-------- SELECTED SERVICE STATE METHODS --------
  addService(newSelectedService) {
    //Only adds Network and Atlassian service - To Be Used for checkboxes
    if (newSelectedService.service.category !== "PaaS / IaaS") {
      this.setState({
        atlassianServices: this.state.atlassianServices.concat([
          newSelectedService
        ])
      });
    }

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

    this.setState({
      atlassianServices: this.state.atlassianServices.filter(item => {
        return item.serviceName !== serviceDeselected.serviceTitle;
      })
    });
  }

  updateService(array) {
    this.setState({selectedServices: array});
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
    this.setState({userDetails: this.state.userDetails.concat([newUser])});
  }

  removeUser(removedUser) {
    this.setState({
      userDetails: this.state.userDetails.filter(item => {
        return item.userName !== removedUser.userName;
      })
    });
  }

  loginRoute() {
    if (!this.state.auth) {
      return (
        <Route path="/login" exact render={props => (<LoginPage doLogin={this.doLogin} auth={this.state.auth}/>)}/>
      )
    } else {
      return (
        (null)
      )
    }
  }

  adminRoute() {
    if (this.state.auth) {
      return (
        <Route path="/admin" exact render={props => (<Admin auth={this.state.auth} roles={this.state.roles}/>)}/>
      )
    }
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

  //-------- NETWORK DETAILS METHOD --------

  setNetworkOwnerEmail(ownerEmail) {
    networkDetails.enteredOwnerEmail = ownerEmail;
  }

  setNetworkJustification(justification) {
    networkDetails.enteredJustification = justification;
  }

  //-------- NETOWRK DETAILS METHOD --------

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            {this.loginRoute()}
            {this.adminRoute()}
            <Route path="/" exact render={props => (<HomePage auth={this.state.auth}/>)}/>
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
                  auth={this.state.auth}
                />
              )}
            />
            <Route
              path="/contact"
              exact
              render={props => <ContactPage contactList={contactList} auth={this.state.auth}/>}
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
                  atlassianServiceArray={this.state.atlassianServices}
                  userList={this.state.userDetails}
                  onProjectName={this.setProjectName}
                  onProjectCode={this.setProjectCode}
                  onOwnerEmail={this.setOwnerEmail}
                  networkUserEmail={networkDetails.enteredOwnerEmail}
                  progressSteps={CheckoutProcess(
                    this.state.selectedServices,
                    "step"
                  )}
                  checkoutPaths={CheckoutProcess(
                    this.state.selectedServices,
                    "path"

                  )}
                  networkOwnerEmail={this.setNetworkOwnerEmail}
                  networkJustification={this.setNetworkJustification}
                  projectDetails={projectDetails}
                  networkDetails={networkDetails}
                  auth={this.state.auth}
                />
              )}
            />

            <Route
              path="/faq"
              exact
              render={props => <FAQPage questions={faqArray} auth={this.state.auth}/>}
            />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
