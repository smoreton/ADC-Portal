import React, { Component } from "react";

import CssMixin from "../model/cssMixin";

import { GridLayout, GridBox } from "./FlexBox";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import AppNavBar from "./AppNavBar";
let mixin = new CssMixin();
mixin.addCssProperty("margin-top", "55px");

class ContactPage extends Component {
  render() {
    return (
      <div>
        <AppNavBar auth={this.props.auth} />
        <GridLayout>
          {this.props.contactList.map(contactItem =>
            <GridBox key={contactItem.id}>
              <ContactCard contact={contactItem} />
            </GridBox>
          )}
        </GridLayout>

        <GridLayout mixin={mixin}>
          <ContactForm />
        </GridLayout>
      </div>
    );
  }
}

export default ContactPage;
