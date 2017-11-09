import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

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

const InputMultiField = styled.textarea`
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  justify-content: center;
  line-height: 50px;
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

class NetworkDetailsCaptureComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerEmail: this.props.networkEmail,
      serviceJustification: this.props.networkJustification
    };

    this.ownerEmail = this.ownerEmail.bind(this);
    this.enteredServiceJustification = this.enteredServiceJustification.bind(
      this
    );
  }

  componentDidMount = () => {
    if (this.props.networkEmail && this.props.networkJustification) {
      this.props.updateNextEnabledProperty(false);
    } else {
      this.props.updateNextEnabledProperty(true);
    }
  };

  ownerEmail = value => {
    this.setState({ ownerEmail: value.target.value });
    this.props.setJustificationOwnerEmail(value.target.value); //, this.state.ownerEmail);
    this.enableButtonProperty();
  };

  enteredServiceJustification = value => {
    this.setState({ serviceJustification: value.target.value });
    this.props.setServiceJustification(value.target.value);
    this.enableButtonProperty();
  };

  enableButtonProperty = () => {
    if (this.state.serviceJustification && this.state.ownerEmail) {
      if (this.props.atlassianServices.length > 0) {
        this.props.updateNextEnabledProperty(false);
      } else {
        this.props.updateCheckoutEnabledProperty(false);
      }
    }
  };

  render() {
    return (
      <DataCaptureCard>
        <ReactTooltip />
        <FlexBox>
          <InputField
            placeholder="User Email"
            onChange={this.ownerEmail}
            value={this.props.networkEmail}
            data-tip="Users Email address who requires access to the PaaS / IaaS Service(s)"
          />
          <InputMultiField
            placeholder="Service Justification"
            onChange={this.enteredServiceJustification}
            value={this.props.networkJustification}
            data-tip="The Justification / Business Case for your access to the PaaS / IaaS Service(s)"
          />
        </FlexBox>
      </DataCaptureCard>
    );
  }
}

export default NetworkDetailsCaptureComponent;
