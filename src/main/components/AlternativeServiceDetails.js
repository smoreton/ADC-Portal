import React, { Component } from "react";
import { Card } from "material-ui/Card";
import TextField from "material-ui/TextField";
import styled from "styled-components";

const EntryField = styled(TextField)`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  color: #A8A8A8 !important;
  background-color: #ffffff !important;
  border: 1px solid #A8A8A8 !important;
  border-radius: 25px !important;
  overflow: hidden !important;   
  padding-left: 20px !important;
  margin-bottom: 5px !important;
  padding-right: 40px !important;
  width: 25% !important;
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
      serviceJustification: ""
    };
    this.ownerEmail = this.ownerEmail.bind(this);
    this.enteredServiceJustification = this.enteredServiceJustification.bind(
      this
    );
  }

  ownerEmail = value => {
    this.setState({ ownerEmail: value.target.value });
    this.props.setJustificationOwnerEmail(value.target.value);
  };

  enteredServiceJustification = value => {
    this.setState({ serviceJustification: value.target.value });
    this.props.setServiceJustification(value.target.value);
  };

  render() {
    return (
      <DataCaptureCard>
        <FlexBox>
          <EntryField hintText="Owner Email" onChange={this.ownerEmail} />
          <EntryField
            hintText="Service Justification"
            onChange={this.enteredServiceJustification}
          />
        </FlexBox>
      </DataCaptureCard>
    );
  }
}

export default AlternativeServiceDetails;
