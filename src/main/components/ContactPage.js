import React, { Component } from "react";
import ContactCard from "./ContactCard";

import "../App.css";

class ContactPage extends Component {
  render() {
    return <ContactCard contactList={this.props.contactList} />;
  }
}

export default ContactPage;
