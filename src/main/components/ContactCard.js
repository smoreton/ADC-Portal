import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";

/**
 * ----- Flexbox Styled Components -----
 */
const GridBoxWrapper = styled(Card)`
border: 20px;
width: 90%;
height: 100%;
margin: 20px;
`;

/**
 * ----- Contact Display Styled Components -----
 */

const TextBlock = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
`;

class ContactCard extends Component {
  render() {
    return (
      <GridBoxWrapper>

        <TextBlock>
          <div>Name: {this.props.contact.name}</div>
        </TextBlock>

        <TextBlock>
          <div>About Me: {this.props.contact.description}</div>
          <div>Email: {this.props.contact.email}</div>
          <div>Phone Number: {this.props.contact.phoneNumber}</div>
        </TextBlock>
      </GridBoxWrapper>
    );
  }
}

export default ContactCard;
