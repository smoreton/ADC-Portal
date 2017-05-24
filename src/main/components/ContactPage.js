import React, { Component } from "react";
import ContactCard from "./ContactCard";

import "../App.css";

class ContactPage extends Component {
  render() {
    let contact = this.props.contactList.map(contactList => {
      return (
        <ContactCard
          profilePicture={contactList.profilePicture}
          name={contactList.name}
          location={contactList.location}
          description={contactList.description}
          email={contactList.email}
          phoneNumber={contactList.phoneNumber}
        />
      );
    });
    return <div>{contact}</div>;
  }
}

export default ContactPage;
