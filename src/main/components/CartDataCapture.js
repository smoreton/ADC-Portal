import React, { Component } from "react";
import { Card } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";

const DataCaptureCard = styled(Card)`
width: 50%;
margin: auto;
padding: 20px;
margin-top: 5%
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

    this.state = {
      viewUserUpload: false,
      projectName: "",
      projectCode: "",
      ownerEmail: ""
    };
  }

  renderUserUpload = () => {
    console.log("CartDataCapture --> renderUserUpload");
    if (this.state.viewUserUpload === true) {
      console.log("in if");
      this.setState({ viewUserUpload: false }, () => {
        this.props.onViewUserUpload(this.state.viewUserUpload);
      });
    } else {
      console.log("in else");
      this.setState({ viewUserUpload: true }, () => {
        this.props.onViewUserUpload(this.state.viewUserUpload);
      });
    }
  };

  render() {
    return (
      <DataCaptureCard>
        <DataCaptureSection>

          <TextField
            hintText="Project Name"
            value={this.state.projectName}
            onChange={this.projectName}
          />
          <TextField
            hintText="Project Code"
            value={this.state.projectCode}
            onChange={this.projectCode}
          />
          <TextField
            hintText="Owner Email"
            value={this.state.ownerEmail}
            onChange={this.ownerEmail}
          />
          <RaisedButton
            label="Add User Emails"
            onTouchTap={this.renderUserUpload}
          />

        </DataCaptureSection>
      </DataCaptureCard>
    );
  }
}

export default CartDataCapture;
