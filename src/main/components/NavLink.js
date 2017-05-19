import React, { Component, Link } from 'react';
import { Link as ALink } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../App.css';

class NavLink extends Component {
  render() {
    const { link, name, key } = this.props;
    return (
      <Link key={key} style={{ marginLeft: 3, color: '#FFFFFF' }}>
        <ALink to={link} className="navLink">{name}</ALink>
      </Link>
    );
  }
}

NavLink.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  key: PropTypes.any
}

export default NavLink;
