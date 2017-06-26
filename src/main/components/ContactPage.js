import React, { Component } from "react";

import CssMixin from "../model/cssMixin";

import { GridLayout, GridBox } from "./FlexBox";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

let mixin = new CssMixin();
mixin.addCssProperty("margin-top", "55px");

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

        <GridLayout mixin={mixin}>
          <ContactForm />
        </GridLayout>
      </div>
    );
  }
}

export default ContactPage;
