
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserHistory} from 'react-router';
import HomeTest from './components/HomeTest';
import CatalogueTest from './components/CatalogueTest';
import ContactTest from './components/ContactTest';
import CartTest from './components/CartTest';




class App extends Component {

    render() {
        let browserHistory = BrowserHistory;
        return (

            <Router history={browserHistory}>
                <div>
                    <Route path="/" component={HomeTest}/>
                    <Route path="/catalogue" component={CatalogueTest}/>
                    <Route path="/contact" component={ContactTest}/>
                    <Route path="/cart" component={CartTest}/>
                </div>

            </Router>

        )
            ;
    }
}
export default App;