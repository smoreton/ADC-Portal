import React, { Component, Link } from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class NavLink extends Component {
  render() {
    const { link, name } = this.props;
    console.log('has been found - ' + link + ' ' + name);
    return (
      <Link to={link}>
        {name}
      </Link>
    );
  }
}

NavLink.propTypes = {
  link: PropTypes.any,
  name: PropTypes.any
}

export default NavLink;
