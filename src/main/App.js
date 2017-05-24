import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import HomeTest from './components/HomeTest';
import CatalogueTest from './components/CatalogueTest';
import ContactTest from './components/ContactTest';
import CartTest from './components/CartTest';

import injectTapEventPlugin from 'react-tap-event-plugin';

import AppNavBar from './components/AppNavBar';



let comingSoon = [
    {dateTime:'23 March 2017',header:'Jira is coming to us soon :)',description:'As an agreement has been reached with Jira, we will soon be able to offer their serviecs to projects'},
    {dateTime:'12 January 1998',header:'Confluence is coming to us soon :)',description:'As an agreement has been reached with Confluence, we will soon be able to offer their serviecs to projects'},
    {dateTime:'11 January 2016',header:'We have started a new Project',description:'This project (ADC) will be a good training ground'},
    {dateTime:'1 January 2016',header:'Happy New Years',description:'As seen above'}
];

let issues = [
    {dateTime:'23 March 2017',header:'There are major problems',description:'We are currently having major issues with our systems and will not abe able to process any requests'},
    {dateTime:'19 September 2017',header:'There are minor problems',description:'We are currently having minor issues with our systems and will not abe able to process any requests'},
    {dateTime:'21 July 2016',header:'No problems today',description:'End of testing information'},
    {dateTime:'1 January 2017',header:'Happy New Years',description:'As seen above'}
];
comingSoon.sort(function(a, b) {
    let dateA = new Date(a.dateTime), dateB = new Date(b.dateTime);
    return dateB -  dateA;
});

issues.sort(function(a, b) {
    let dateA = new Date(a.dateTime), dateB = new Date(b.dateTime);
    return dateB - dateA;
});

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

              <Route path="/" exact render={props => <HomeTest comingSoon={comingSoon} issues={issues}/>} />
              <Route path="/catalogue" exact component={CatalogueTest} />
              <Route path="/contact" exact component={ContactTest} />
              <Route path="/cart" component={CartTest} />

          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
