import React, { Component } from 'react';
import { Column, Row, ButtonGroup, Link } from 'react-foundation';
import { Link as ALink } from 'react-router-dom';

// import NavLink from './NavLink'; // TODO: move link references into this component

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
                console.log(link);
                return (
                  <ALink to={link.link} className="navLink">
                    <Link key={key} style={{ marginLeft: 3, color: '#FFFFFF' }}>
                      {link.name}
                    </Link>
                  </ALink>
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
