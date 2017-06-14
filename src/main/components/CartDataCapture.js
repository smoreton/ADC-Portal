import React, { Component } from "react";
import { Card } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";

const RaisedButtonStyle = () =>
  <RaisedButton
    name="RaisedButtonStyle"
    label="User Emails"
    primary={true}
    style={{
      boxShadow: "none"
    }}
  />;

const DataCaptureCard = styled(Card)`
width: 50%;
margin: auto;
padding:15px;
margin-top:30px
`;

const DataCaptureSection = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
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
            <RaisedButtonStyle />

          </DataCaptureSection>

        </form>
      </DataCaptureCard>
    );
  }
}

export default CartDataCapture;
