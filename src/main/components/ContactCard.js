import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";

/**
 * ----- Flexbox Styled Components -----
 */
const GridLayout = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

const GridBox = styled.div`
width: 33.333333333%;
height: 250px;
padding: 0.25em;
box-sizing: border-box;
`;

const GridBoxWrapper = styled(Card)`
border: 20px;
width: 100%;
height: 100%;
`;

/**
 * ----- Contact Display Styled Components -----
 */
const ImageBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const TextBlock = styled.div`
display: flex;
flex-direction: column;
`;

class ContactCard extends Component {
  render() {
    return (
      <GridLayout>
        {this.props.contactList.map(contactItem => (
          <GridBox>
            <GridBoxWrapper>
              <div key={contactItem.name}>
                <ImageBlock>
                  <img
                    src={contactItem.profilePicture}
                    alt={contactItem.name}
                  />
                  <TextBlock>
                    <div>Name: {contactItem.name}</div>
                    <div>Location: {contactItem.location}</div>
                  </TextBlock>
                </ImageBlock>
                <TextBlock>
                  <div>About Me: {contactItem.description}</div>
                  <div>Email: {contactItem.email}</div>
                  <div>Phone Number: {contactItem.phoneNumber}</div>
                </TextBlock>
              </div>
            </GridBoxWrapper>
          </GridBox>
        ))}
      </GridLayout>
    );
  }
}

export default ContactCard;
