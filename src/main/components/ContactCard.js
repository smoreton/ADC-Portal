import React, { Component } from "react";
import { Card, CardText } from "material-ui/Card";
import styled from "styled-components";

const ContactListItem = styled(Card)`
    margin: px;
    margin-top: px;
`;

const ContactItem = styled(Card)`
    margin: px;
    margin-top: px;
`;

class ContactCard extends Component {
  render() {
    return (
      <ContactListItem>
        <ContactItem />

        <div>this.props.name</div>
      </ContactListItem>
    );
  }
}

export default ContactCard;
