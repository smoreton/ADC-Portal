import React, { Component } from "react";
import { Card } from "material-ui/Card";

import styled from "styled-components";

const SummaryCard = styled(Card)`
width: 90%;
margin: auto;
padding:10px;
margin-top:5%;
`;

const Container = styled.div`
  flex: 1;
  max-height: 350px;
  overflow-y: auto;
`;

class ServiceSummaryCard extends Component {
  render() {
    return (
      <SummaryCard>

        <Container />

      </SummaryCard>
    );
  }
}

export default ServiceSummaryCard;
