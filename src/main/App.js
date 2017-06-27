import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserHistory } from "react-router";
import { MuiThemeProvider } from "material-ui/styles";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";

/**
 * Component Imports
 */
import AppNavBar from "./components/AppNavBar";
import HomePage from "./components/HomePage";
import Catalogue from "./components/CataloguePage";
import ContactPage from "./components/ContactPage";
import ServiceDescription from "./components/ServiceDescription";
import CartPage from "./components/CartPage";

/**
 * Model Imports
 */
import ServiceInformation from "./model/serviceInformation";

/**
 * App Data Imports
 */
const contactsJson = require("./data/contacts.json");
const serviceValuesJson = require("./data/service.json");
const serviceTypeValuesJson = require("./data/serviceCategory.json");
const carouselData = require("./data/carousel.json");

const descriptionText =
  "The ADC employs leading edge techniques and accelerators in order to support the visioning and design process; along with the development and implementation of software solutions for APPS UK projects. " +
  "The ADC is also highly active in supporting sales bids, customer visits and technical demonstration exercises. We have a dedicated technical team of experts who leverage these ADC capabilities to provide the following core services: " +
  "\n - Hosting of projects (technical infrastructure), " +
  "\n - Software engineering support (DevOps), " +
  "\n - Network & server consultancy services," +
  "\nThe market drives us to deliver increased value at lower cost. The ADC offers a fully mutualised, high value and versatile hosting proposition with the ability to react and evolve quickly in order to meet a project's requirements.";

let makeServiceInformationArray = array => {
  return array.map(item => {
    return new ServiceInformation(
      item.id,
      item.title,
      item.dateTime,
      item.header,
      item.description
    );
  });
};

let sortServiceInformationArray = array => {
  array.sort(function(a, b) {
    let dateA = new Date(a.dateTime),
      dateB = new Date(b.dateTime);
    return dateB - dateA;
  });
};

//-------- START SERVICE OBJECT SETUP --------
const serviceValues = Object.values(serviceValuesJson.services);
//-------- END SERVICE OBJECT SETUP --------

//-------- START SERVICE CATEGORY OBJECT SETUP --------
const serviceTypes = Object.values(serviceTypeValuesJson.serviceTypes);
//-------- END SERVICE CATEGORY OBJECT SETUP --------

//-------- START CONTACTS OBJECT SETUP --------
const contactList = Object.values(contactsJson.contacts);
//-------- END CONTACTS OBJECT SETUP ----------

//---------SET UP CAROUSEL DATA ---------------
const carouselArray = Object.values(carouselData.messages);
//---------END CAROUSEL SETUP -----------------

//-------- SET APP THEME PROPERTIES --------
document.body.style.backgroundColor = "#F5F5F5";

const muiTheme = getMuiTheme({
  slider: {
    selectionColor: "#3399ff",
    trackColor: "#3399ff",
    trackColorSelected: "#3399ff",
    handleFillColor: "#3399ff",
    handleColorZero: "#3399ff"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {
      selectedServices: [],
      selectedServiceType: "all"
    };

    this.addService = this.addService.bind(this);
    this.serviceTypeHandler = this.serviceTypeHandler.bind(this);
  }

  addService(newSelectedService) {
    this.setState({
      selectedServices: this.state.selectedServices.concat([newSelectedService])
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
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
          <div>
            <AppNavBar />
            <Route
              path="/"
              exact
              render={props =>
                <HomePage
                  description={descriptionText}
                  carouselData={carouselArray}
                  serviceDetails={serviceTypes}
                  serviceType={this.addService}
                  serviceCategory={this.serviceTypeHandler}
                />}
            />

            <Route
              path="/catalogue"
              exact
              render={props =>
                <Catalogue
                  serviceDetails={serviceValues}
                  onServiceCategoryChange={this.serviceTypeHandler}
                  selectedServiceCategory={this.state.selectedServiceType}
                />}
            />

            <Route
              path="/contact"
              exact
              render={props => <ContactPage contactList={contactList} />}
            />

            <Route
              path="/service/:serviceId"
              exact
              render={props =>
                <ServiceDescription
                  service={props.match.params.serviceId}
                  serviceDetails={serviceValues}
                  onServiceSelected={this.addService}
                />}
            />

            <Route
              path="/checkout"
              exact
              render={props =>
                <CartPage selectedServices={this.state.selectedServices} />}
            />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
