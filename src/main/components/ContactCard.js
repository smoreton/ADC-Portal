import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";

const ContactItem = styled(Card)`
    margin: 20px;
`;

const RowStyle = styled.div`
flex:1;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const ColumnStyle = styled.div`
flex:1;
display: flex;
flex-direction: column;
`;

class ContactCard extends Component {
  render() {
    return (
      <div>
        <ContactItem>
          <RowStyle>
            <img src={this.props.profilePicture} alt={this.props.name} />
            <ColumnStyle>
              <div>Name: {this.props.name}</div>
              <div>Location: {this.props.location}</div>
            </ColumnStyle>
          </RowStyle>

          <div>About Me: {this.props.description}</div>

          <RowStyle>
            <div>Email: {this.props.email}</div>
            <div>Phone Number: {this.props.phoneNumber}</div>
          </RowStyle>
        </ContactItem>
      </div>
    );
  }
}

export default ContactCard;
