/**
 * Created by CSHEFIK on 18/05/2017.
 */
import React, { Component } from "react";
import ContactCard from "./ContactCard";

class ContactPage extends Component {
  render() {
    let contact = this.props.contactList;
    return contact.map(contactList => {
      return (
        <ContactCard
          profilePicture={contactList.profilePicture}
          name={contactList.name}
          description={contactList.description}
          email={contactList.email}
          phoneNo={contactList.phoneNo}
        />
      );
    });
  }
}

export default ContactPage;
