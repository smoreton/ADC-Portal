import React, { Component } from "react";
import { Card } from "material-ui/Card";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";

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

const styles = {
  propContainer: {
    width: 200,
    overflow: "hidden",
    margin: "20px auto 0"
  },
  propToggleHeader: {
    margin: "20px auto 10px"
  }
};

const tableData = [
  {
    Service: "Confluence",
    UserRange: "15 users or less",
    BU: "AD&I",
    Cost: "£75"
  },
  {
    Service: "Jira",
    UserRange: "51 to 100",
    BU: "HMRC",
    Cost: "£300"
  },
  {
    Service: "Atlassian",
    UserRange: "16 to 25",
    BU: "CBS",
    Cost: "£179"
  }
];

class ServiceSummaryCard extends Component {
  state = {
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

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

  handleChange = event => {
    this.setState({ height: event.target.value });
  };

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
              <TableHeaderColumn tooltip="Cost">Cost</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map((row, index) =>
              <TableRow key={index}>
                <TableRowColumn>{row.Service}</TableRowColumn>
                <TableRowColumn>{row.UserRange}</TableRowColumn>
                <TableRowColumn>{row.BU}</TableRowColumn>
                <TableRowColumn>{row.Cost}</TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>

      </SummaryCard>
    );
  }
}

export default ServiceSummaryCard;
