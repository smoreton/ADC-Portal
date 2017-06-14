import React, { Component } from "react";
import { Card } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";

const DataCaptureCard = styled(Card)`
width: 50%;
margin: auto;
padding:20px;
margin-top:2%
`;

const DataCaptureSection = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`;

class CartDataCapture extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = event => {};
  addUser = event => {};

  render() {
    return (
      <DataCaptureCard>
        <form>
          <DataCaptureSection>

            <TextField hintText="Project Name" />
            <TextField hintText="Project Code" />
            <TextField hintText="Owner Email" />
            <RaisedButton
              name="RaisedButtonStyle"
              label="Add User Emails"
              primary={true}
              onTouchTap={this.addUser}
              style={{
                boxShadow: "none",
                marginTop: "1%",
                width: "100%",
                maxWidth: "256px"
              }}
            />

          </DataCaptureSection>

        </form>
      </DataCaptureCard>
    );
  }
}

export default CartDataCapture;
