import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserHistory} from 'react-router';
import { MuiThemeProvider } from 'material-ui/styles';
import HomeTest from './components/HomeTest';
import CatalogueTest from './components/CatalogueTest';
import ContactTest from './components/ContactTest';
import CartTest from './components/CartTest';

import injectTapEventPlugin from 'react-tap-event-plugin';

import AppNavBar from './components/AppNavBar';



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
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <AppNavBar />
            <Route path="/" exact component={HomeTest} />
              <Route path="/" render={props => (<HomeTest comingSoon={comingSoon} issues={issues}/>) } />
              <Route path="/catalogue" exact component={CatalogueTest} />
            <Route path="/contact" exact component={ContactTest} />

          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
