import React, {Component} from 'react';
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';
import styled from "styled-components";
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';
import Cart from './components/Cart';
import NavLinks from './components/NavLinks';

const NavBar = styled.div`
//insert styling here
`;

class App extends Component {

    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <NavBar>
                        <NavLinks/>
                    </NavBar>
                    <Route path="/" component={Home}/>
                    <Route path="/catalogue" component={Catalogue}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/cart" component={Cart}/>
                </div>
            </Router>

        );
    }
}

export default App;