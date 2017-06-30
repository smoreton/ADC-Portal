import React, { Component } from "react";
import styled from "styled-components";

import { Card } from "material-ui/Card";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

const UserDetailsCard = styled(Card)`
  width: 90%;
  margin: auto;
  padding: 10px;
`;

const NoUserDetailsText = styled.div`

`;

class UserDetailsEntry extends Component {
  //------ RENDER TABLE CONTENT ------
  renderNoUserDetails = () => {
    return <NoUserDetailsText>No User Details Added</NoUserDetailsText>;
  };

  renderUserDetailsTable = () => {
    this.props.userList.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn>{item.userFullName}</TableRowColumn>
          <TableRowColumn>{item.userName}</TableRowColumn>
          <TableRowColumn>{item.userEmail}</TableRowColumn>
        </TableRow>
      );
    });
  };
  //------ RENDER TABLE CONTENT ------

  addUser = value => {
    this.props.onAdd(value);
  };

  removeUser = value => {
    this.props.onRemove(value);
    //------ COMPLETE METHOD TO REMOVE USER DETAILS FROM TABLE
  };

  render() {
    return (
      <UserDetailsCard>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Full Name</TableHeaderColumn>
              <TableHeaderColumn>User Name</TableHeaderColumn>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.userList
              ? this.renderUserDetailsTable()
              : this.renderNoUserDetails()}
          </TableBody>
        </Table>

      </UserDetailsCard>
    );
  }
}

export default UserDetailsEntry;
