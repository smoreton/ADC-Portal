import React, { Component } from "react";
import { Card } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";

import ProjectDetails from "../model/projectDetails";

const DataCaptureCard = styled(Card)`
width: 90%;
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

    this.projectName = this.projectName.bind(this);
    this.projectCode = this.projectCode.bind(this);
    this.ownerEmail = this.ownerEmail.bind(this);
  }

  projectName = value => {
    this.setState({ projectName: value });
    this.props.setProjectName(value);
  };

  projectCode = value => {
    this.setState({ projectCode: value });
    this.props.setProjectCode(value);
  };

  ownerEmail = value => {
    this.setState({ ownerEmail: value });
    this.props.setOwnerEmail(value);
  };

  renderUserUpload = () => {
    if (this.state.viewUserUpload === true) {
      this.setState({ viewUserUpload: false }, () => {
        this.props.onViewUserUpload(this.state.viewUserUpload);
      });
    } else {
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
