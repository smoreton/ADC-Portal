import React, { Component } from "react";
import { Card, CardText } from "material-ui/Card";
import styled from "styled-components";

const ContactCard = styled(Card)`
    margin: px;
    margin-top: px;
`;

class ContactCard extends Component {
  render() {
    return (
      <ContactCard>
        <div>this.props.name</div>
      </ContactCard>
    );
  }
}

export default ContactCard;
