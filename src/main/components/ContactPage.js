import React, { Component } from "react";
import ContactCard from "./ContactCard";
import styled from "styled-components";

import "../App.css";

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

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
    return <Row>{contact}</Row>;
  }
}

export default ContactPage;
