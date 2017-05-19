import React, { Component } from "react";
import { Column, Row } from 'react-foundation';

import '../App.css';

class NavBar extends Component {
    render() {
        return (
            <Row className="display">
                <Column small={3}>
                    <img src="/img/ADC-logo.gif" alt="ADC Logo" />
                </Column>
                <Column small={9}>9 columns</Column>
            </Row>
        );
    }
}

export default NavBar;
