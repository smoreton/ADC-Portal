import React, { Component } from "react";
import { Card } from "material-ui/Card";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import styled from "styled-components";

const DataCaptureCard = styled(Card)`
width: 50%;
margin: auto;
padding:15px;
`;

const DataCaptureSection = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`;

class CartDataCapture extends Component {
  handleSubmit = event => {};

  render() {
    return (
      <DataCaptureCard>
        <form onSubmit={this.handleSubmit}>
          <DataCaptureSection>

            <TextField hintText="Project Name" />
            <TextField hintText="Project Code" />
            <TextField hintText="Owner Email" />
            <FlatButton label="User Emails" />

          </DataCaptureSection>

        </form>
      </DataCaptureCard>
    );
  }
}

export default CartDataCapture;
