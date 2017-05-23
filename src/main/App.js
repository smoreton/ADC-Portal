
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserHistory} from 'react-router';
import HomeTest from './components/HomeTest';
import CatalogueTest from './components/CatalogueTest';
import ContactTest from './components/ContactTest';
import CartTest from './components/CartTest';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './components/NavBar';

// These arrays will contain the information for Coming Soon(tm) and Issues cards. 
// This information might be coming from somewhere else in the future
// comingsoonarray[0][0] = "24/05/2017";
// comingsoonarray[0][1] = "Jira is coming to us soon :)";
// comingsoonarray[0][2] = "As an agreement has been reached with Jira, we will soon be able to offer their serviecs to projects";

// comingsoonarray[1][0] = "23/05/2017";
// comingsoonarray[1][1] = "Confluence is coming to us soon :)";
// comingsoonarray[1][2] = "As an agreement has been reached with Confluence, we will soon be able to offer their serviecs to projects";

// issuesarray[0][0] = "20/05/2017";
// issuesarray[0][1] = "There are major problems";
// issuesarray[0][2] = "We are currently having major issues with our systems and will not abe able to process any requests";

// issuesarray[1][0] = "19/05/2017";
// issuesarray[1][1] = "There are minor problems";
// issuesarray[1][2] = "We are currently having minor issues with our systems and will not abe able to process any requests";

let comingSoon = [
     {dateTime:'24/05/2017',header:'Jira is coming to us soon :)',description:'As an agreement has been reached with Jira, we will soon be able to offer their serviecs to projects'},
     {dateTime:'23/05/2017',header:'Confluence is coming to us soon :)',description:'As an agreement has been reached with Confluence, we will soon be able to offer their serviecs to projects'},
     {dateTime:'22/05/2017',header:'We have started a new Project',description:'This project (ADC) will be a good training ground'},
     {dateTime:'01/01/2016',header:'Happy New Years',description:'As seen above'}
]; 

let issues = [
     {dateTime:'20/05/2017',header:'There are major problems',description:'We are currently having major issues with our systems and will not abe able to process any requests'},
     {dateTime:'19/05/2017',header:'There are minor problems',description:'We are currently having minor issues with our systems and will not abe able to process any requests'},
     {dateTime:'02/05/2017',header:'No problems today',description:'End of testing information'},
     {dateTime:'01/01/2016',header:'Happy New Years',description:'As seen above'}
]; 

//End of testing information


class App extends Component {
  render() {
    let browserHistory = BrowserHistory;
    return (
      <MuiThemeProvider>
        <div>
          <Router history={browserHistory}>
            <div>
              <NavBar />
              <Route path="/" component={HomeTest} />
              <Route path="/catalogue" component={CatalogueTest} />
              <Route path="/contact" component={ContactTest} />
              <Route path="/cart" component={CartTest} />
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
