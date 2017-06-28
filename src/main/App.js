import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserHistory } from "react-router";
import { MuiThemeProvider } from "material-ui/styles";
import injectTapEventPlugin from "react-tap-event-plugin";

/**
 * Component Imports
 */
import AppNavBar from "./components/AppNavBar";
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

/**
 * App Data Imports
 */
const contactsJson = require("./data/contacts.json");
const serviceValuesJson = require("./data/service.json");
const serviceTypeValuesJson = require("./data/serviceCategory.json");
const carouselData = require("./data/carousel.json");
const questionsJson = require("./data/questions.json");
const dropDownJson = require("./data/dropDownData.json");

const descriptionText =
  "The ADC employs leading edge techniques and accelerators in order to support the visioning and design process; along with the development and implementation of software solutions for APPS UK projects. " +
  "The ADC is also highly active in supporting sales bids, customer visits and technical demonstration exercises. We have a dedicated technical team of experts who leverage these ADC capabilities to provide the following core services: " +
  "\n - Hosting of projects (technical infrastructure), " +
  "\n - Software engineering support (DevOps), " +
  "\n - Network & server consultancy services," +
  "\nThe market drives us to deliver increased value at lower cost. The ADC offers a fully mutualised, high value and versatile hosting proposition with the ability to react and evolve quickly in order to meet a project's requirements.";

//---------SET UP CAROUSEL DATA ---------------
const carouselArray = Object.values(carouselData.messages);

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

let carouselInfo = makeServiceInformationArray(carouselArray);

let sortServiceInformationArray = array => {
  array.sort(function(a, b) {
    let dateA = new Date(a.dateTime), dateB = new Date(b.dateTime);
    return dateB - dateA;
  });
};

sortServiceInformationArray(carouselInfo);
//---------END CAROUSEL SETUP -----------------

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

//-------- START FAQ OBJECT SETUP --------
const questionsText = Object.values(questionsJson.questions);

let faqArray = makeServiceInformationArray(questionsText);
//-------- END FAQ OBJECT SETUP --------

//-------- START DROP DOWN DATA SETUP --------
let userRangeValues = Object.values(dropDownJson.userRange);
let businessUnitValues = Object.values(dropDownJson.businessUnits);

let dropDownDataSetup = array => {
  return array.map(item => {
    return new DropDownData(item.key, item.value);
  });
};

let userRangeArray = dropDownDataSetup(userRangeValues);
let businessUnitArray = dropDownDataSetup(businessUnitValues);
//-------- END DROP DOWN DATA SETUP --------

//-------- SET APP THEME PROPERTIES --------
document.body.style.backgroundColor = "#F5F5F5";

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      selectedServices: [],
      selectedServiceType: "All"
    };

    this.addService = this.addService.bind(this);
    this.removeService = this.removeService.bind(this);
    this.serviceTypeHandler = this.serviceTypeHandler.bind(this);
  }

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

  serviceTypeHandler(value) {
    this.setState({
      selectedServiceType: value
    });
  }

  render() {
    let browserHistory = BrowserHistory;
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <div>
            <AppNavBar />
            <Route
              path="/"
              exact
              render={props => (
                <HomePage
                  description={descriptionText}
                  carouselData={carouselInfo}
                  serviceDetails={serviceCategoryArray}
                  serviceCategory={this.serviceTypeHandler}
                />
              )}
            />

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
              exact
              render={props => (
                <CheckoutPage
                  selectedServices={this.state.selectedServices}
                  userRangeValues={userRangeArray}
                  businessUnitValues={businessUnitArray}
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
