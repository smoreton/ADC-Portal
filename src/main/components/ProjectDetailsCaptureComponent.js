import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";

const InputField = styled.input`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  max-width: 30%;
  width: 30%;
  height: 50px;
  font-family: Roboto-Light;
  font-size: 13px;
  color: #4a4a4a;
  letter-spacing: 0.75px;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 100px;
`;

const DataCaptureCard = styled(Card)`
  width: 100%;
  margin: auto;
  padding:20px;
  margin-top: auto;
`;

const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: auto;
  width: 100%;
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
    this.enableButtonProperty();
  };

  projectCode = value => {
    this.setState({ projectCode: value.target.value });
    this.props.setProjectCode(value.target.value);
    this.enableButtonProperty();
  };

  ownerEmail = value => {
    this.setState({ ownerEmail: value.target.value });
    this.props.setOwnerEmail(value.target.value);
    this.enableButtonProperty();
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

  enableButtonProperty = () => {
    if (
      this.state.projectName &&
      this.state.ownerEmail &&
      this.state.projectCode
    ) {
      this.props.updateCheckoutEnabledProperty(false);
    } else {
      this.props.updateCheckoutEnabledProperty(true);
    }
  };

  render() {
    return (
      <DataCaptureCard>
        <FlexBox>
          <InputField
            className="ProjectInput"
            placeholder="Project Name"
            value={this.props.projectName}
            onChange={this.projectName}
          />
          <InputField
            placeholder="Project Code"
            onChange={this.projectCode}
            value={this.props.projectCode}
          />
          <InputField
            placeholder="Owner Email"
            onChange={this.ownerEmail}
            value={this.props.projectOwnerEmail}
          />
        </FlexBox>
      </DataCaptureCard>
    );
  }
}

export default ProjectDetailsCaptureComponent;
