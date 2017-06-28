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

import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";

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
      height: "300px",

      userRangeValue: 0,
      businessUnitValue: 0
    };

    this.handleUserRange = this.handleUserRange.bind(this);
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

  handleChange = event => {
    this.setState({ height: event.target.value });
  };

  generateDropDownList = array => {
    return array.map((item, uniqueKey) => {
      return (
        <MenuItem
          key={uniqueKey}
          value={item.dropDownId}
          primaryText={item.dropDownValue}
        />
      );
    });
  };

  handleUserRange = (event, key, value) => {
    console.log("handleUserRange --> event");
    console.log(event);

    console.log("handleUserRange --> key");
    console.log(key);

    console.log("handleUserRange --> value");
    console.log(value);

    console.log("this.state.userRangeValue --> before setState");
    console.log(this.state.userRangeValue);
    this.setState({ userRangeValue: value });
    console.log("this.state.userRangeValue --> after setState");
    console.log(this.state.userRangeValue);
  };

  handleBusinessUnit = (object, value) => {};

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
            {this.props.serviceData.map((item, index) => (
              <TableRow key={index}>
                <TableRowColumn>{item.serviceName}</TableRowColumn>
                <TableRowColumn>
                  <SelectField
                    maxHeight={160}
                    value={this.state.userRangeValue}
                    onChange={() => this.handleUserRange(item)}
                  >
                    {this.generateDropDownList(this.props.userRanges)}
                  </SelectField>
                </TableRowColumn>
                <TableRowColumn>
                  <SelectField
                    maxHeight={160}
                    value={this.state.businessUnitValue}
                    onChange={() => this.handleBusinessUnit(item)}
                  >
                    {this.generateDropDownList(this.props.businessUnits)}
                  </SelectField>
                </TableRowColumn>
                <TableRowColumn>{item.serviceCost}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </SummaryCard>
    );
  }
}

export default ServiceSummaryCard;
