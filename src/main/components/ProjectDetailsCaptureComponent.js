import React, { Component } from "react";
import { Card } from "material-ui/Card";
import TextField from "material-ui/TextField";
import styled from "styled-components";

const Entryfield = styled(TextField)`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  color: #A8A8A8 !important;
  background-color: #ffffff !important;
  border: 1px solid #A8A8A8 !important;
  border-radius: 25px !important;
  overflow: hidden !important;   
  padding-left: 20px !important;
`;

const DataCaptureCard = styled(Card)`
  width: 90%;
  margin: auto;
  padding:20px;
  margin-top: 5%;
`;

const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: auto;
  width: 90%;
  min-width: 100px;
`;

class ProjectDetailsCaptureComponent extends Component {
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
    this.setState({ projectName: value.target.value });
    this.props.setProjectName(value.target.value);
  };

  projectCode = value => {
    this.setState({ projectCode: value.target.value });
    this.props.setProjectCode(value.target.value);
  };

  ownerEmail = value => {
    this.setState({ ownerEmail: value.target.value });
    this.props.setOwnerEmail(value.target.value);
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
        <FlexBox>
          <Entryfield
            className="ProjectInput"
            hintText="Project Name"
            onChange={this.projectName}
          />
          <Entryfield hintText="Project Code" onChange={this.projectCode} />
          <Entryfield hintText="Owner Email" onChange={this.ownerEmail} />
        </FlexBox>
      </DataCaptureCard>
    );
  }
}

export default ProjectDetailsCaptureComponent;
