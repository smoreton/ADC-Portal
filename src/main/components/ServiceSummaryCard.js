import React, { Component } from "react";
import { Card } from "material-ui/Card";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

import styled from "styled-components";

const SummaryCard = styled(Card)`
width: 90%;
margin: auto;
padding:10px;
margin-top:5%;
`;

//define styled components for material ui table elements to remove styles defined in state

class ServiceSummaryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: "300px"
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

  handleChange = event => {
    this.setState({ height: event.target.value });
  };

  //function to generate dropdown menu within table for BU & user range

  //manipulate selectedService object to include BU & user range

  render() {
    return (
      <SummaryCard>

        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="Service">Service</TableHeaderColumn>
              <TableHeaderColumn tooltip="UserRange">
                User Range
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Business unit">
                Business Unit
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Cost">Cost Rate</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.serviceData.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.serviceName}</TableRowColumn>
                <TableRowColumn>{row.userRange}</TableRowColumn>
                <TableRowColumn>{row.businessUnit}</TableRowColumn>
                <TableRowColumn>{row.serviceCost}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </SummaryCard>
    );
  }
}

export default ServiceSummaryCard;
