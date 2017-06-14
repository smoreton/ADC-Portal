import React, { Component } from "react";
import { Card } from "material-ui/Card";

import styled from "styled-components";

const SummaryCard = styled(Card)`
width: 50%;
margin: auto;
padding:20px;
margin-top:2%
`;

class ServiceSummaryCard extends Component {
  render() {
    return <SummaryCard />;
  }
}

export default ServiceSummaryCard;
