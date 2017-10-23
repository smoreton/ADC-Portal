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

class AlternativeServiceDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerEmail: "",
      serviceJustification: "",
      hasBeenEnabled: false
    };
    this.ownerEmail = this.ownerEmail.bind(this);
    this.enteredServiceJustification = this.enteredServiceJustification.bind(
      this
    );
  }

  componentWillMount = () => {
    this.props.updateEnabledButton();
  };

  ownerEmail = value => {
    this.setState({ ownerEmail: value.target.value });
    this.props.setJustificationOwnerEmail(value.target.value);
    this.canProceed();
  };

  enteredServiceJustification = value => {
    this.setState({ serviceJustification: value.target.value });
    this.props.setServiceJustification(value.target.value);
    this.canProceed();
  };

  canProceed = () => {
    if (
      this.state.serviceJustification.length > 0 &&
      this.state.ownerEmail.length > 0
    ) {
      if (!this.state.hasBeenEnabled) {
        this.props.updateEnabledButton();
        this.setState({ hasBeenEnabled: true });
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
            data-tip="Users Email address who requires access to PaaS / IaaS Service(s)"
          />
          <InputMultiField
            placeholder="Service Justification"
            onChange={this.enteredServiceJustification}
          />
        </FlexBox>
      </DataCaptureCard>
    );
  }
}

export default AlternativeServiceDetails;
