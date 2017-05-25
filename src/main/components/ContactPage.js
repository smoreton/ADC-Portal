import React, { Component } from "react";
import ContactCard from "./ContactCard";
//import styled from "styled-components";

import "../App.css";
/**
const GridLayout = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

const GridBox = styled.div`
width: 33.333333333333%;
height: 250px;
padding: 0.25em;
box-sizing: border-box;
`;

const GridBoxWrapper = styled.div`
width: 100%;
height: 100%;
`;
*/
class ContactPage extends Component {
  render() {
    return <ContactCard contactList={this.props.contactList} />;
  }
}

export default ContactPage;
