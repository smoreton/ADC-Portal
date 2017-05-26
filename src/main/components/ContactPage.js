import React, { Component } from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

import "../App.css";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <ContactCard contactList={this.props.contactList} />

        <ContactForm />
      </div>
    );
  }
}

export default ContactPage;
