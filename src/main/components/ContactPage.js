import React, { Component } from "react";
import styled from "styled-components";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

import "../App.css";

const GridLayout = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

const GridBox = styled.div`
width: 33.333333333%;
min-height: 33%;
padding: 0.25em;
box-sizing: border-box;
`;

const ContactLayout = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-top: 55px;
`;

class ContactPage extends Component {
  render() {
    return (
      <div>
        <GridLayout>
          {this.props.contactList.map(contactItem => (
            <GridBox key={contactItem.id}>
              <ContactCard contact={contactItem} />
            </GridBox>
          ))}
        </GridLayout>

        <ContactLayout>
          <ContactForm />
        </ContactLayout>
      </div>
    );
  }
}

export default ContactPage;
