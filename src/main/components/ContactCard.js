import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";

const ContactCardWrapper = styled(Card)`
margin: 20px;
max-height:150px;
min-height:150px;
max-width:95%;
min-width:95%;
padding:10px;
`;

const TextBlock = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
`;

class ContactCard extends Component {
  render() {
    return (
      <ContactCardWrapper>

        <TextBlock>
          <div className="name">Name: {this.props.contact.name}</div>
        </TextBlock>

        <TextBlock>
          <div className="aboutMe">
            About Me: {this.props.contact.description}
          </div>
          <div className="email">Email: {this.props.contact.email}</div>
          <div className="phoneNo">
            Phone Number: {this.props.contact.phoneNumber}
          </div>
        </TextBlock>
      </ContactCardWrapper>
    );
  }
}

export default ContactCard;
