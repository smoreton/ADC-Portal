import React, { Component } from 'react';
import { Column, Row, ButtonGroup, Link } from 'react-foundation';

import NavLink from './NavLink';

import '../App.css';

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      navLinks: [{
        link: '/',
        name: 'Home'
      },{
        link: '/catalogue',
        name: 'Service Catalogue'
      },{
        link: '/contact',
        name: 'Contact Us'
      },{
        link: '/cart',
        name: 'Service Cart'
      }] 
    };
  }
  render() {
    return (
      <Row className="display">
        <Column small={3}>
          <img src="/img/ADC-logo.gif" alt="ADC Logo" />
        </Column>
        <Column small={9}>
          <Row>
            <ButtonGroup>
              {this.state.navLinks.map((link, key) => {
                return (
                  <Link key={key} to={link.to} style={{ marginLeft: 3 }}>
                    {link.name}
                  </Link>
                );
              })}
            </ButtonGroup>
          </Row>
        </Column>
      </Row>
    );
  }
}

export default NavBar;
