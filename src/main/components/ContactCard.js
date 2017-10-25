import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";

const ContactCardWrapper = styled(Card)`
margin: 20px;
max-height:200px;
min-height:200px;
max-width:95%;
min-width:95%;
padding:10px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  & > img {
    max-width: 20%;
    max-height: 100px;
  }
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
          <div className="name">
            Name: {this.props.contact.name}
          </div>
        </TextBlock>

        <FlexContainer>
          <img src={this.props.contact.profilePicture} alt="" />
        </FlexContainer>

        <TextBlock>
          <div className="aboutMe">
            About Me: {this.props.contact.description}
          </div>
          <div className="email">
            Email:{" "}
            <a href={"mailto:" + this.props.contact.email}>
              {this.props.contact.email}
            </a>
          </div>
        </TextBlock>
      </ContactCardWrapper>
    );
  }
}

export default ContactCard;
