import React, { Component } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import FlatButton from "material-ui/FlatButton";
import Checkbox from "material-ui/Checkbox";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

import TextField from "material-ui/TextField";
import UserDetails from "../model/userDetails";

const Entryfield = styled(TextField)`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  color: #A8A8A8 !important;
  background-color: #ffffff !important;
  border: 1px solid #A8A8A8 !important;
  border-radius: 25px !important;
  overflow: hidden !important;   
  padding-left: 20px !important;
`;

//Include font size, colour etc.
const NoUserDetailsText = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  min-width: 100px;
`;

const MarginSpace = styled.div`margin-top: 2%;`;

const styles = {
  block: {
    maxWidth: 500
  },
  checkbox: {
    marginBottom: 16,
    marginTop: 10
  }
};

class UserDetailsEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manFullName: "",
      manUserName: "",
      manEmail: "",
      checked: false,
      services: []
    };

    this.setManFullName = this.setManFullName.bind(this);
    this.setManUserName = this.setManUserName.bind(this);
    this.setManEmail = this.setManEmail.bind(this);
    this.manualAddUser = this.manualAddUser.bind(this);
  }

  //------ RENDER TABLE CONTENT ------
  renderNoUserDetails = () => {
    return (
      <TableRow>
        <TableRowColumn>
          <NoUserDetailsText className="conditional">
            No User Details Added
          </NoUserDetailsText>
        </TableRowColumn>
      </TableRow>
    );
  };

  renderUserDetailsTable = () => {
    return this.props.usersAdded.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn>
            {item.userFullName}
          </TableRowColumn>
          <TableRowColumn>
            {item.userName}
          </TableRowColumn>
          <TableRowColumn>
            {item.userEmail}
          </TableRowColumn>
        </TableRow>
      );
    });
  };
  //------ RENDER TABLE CONTENT ------

  setManFullName = (event, value) => {
    this.setState({ manFullName: value });
  };

  setManUserName = (event, value) => {
    this.setState({ manUserName: value });
  };

  setManEmail = (event, value) => {
    this.setState({ manEmail: value });
  };

  addServiceTitles = (event, value) => {
    this.setState({ services: this.state.services.concat(value) });
  };

  manualAddUser = () => {
    let newUser = new UserDetails(
      this.state.manFullName,
      this.state.manUserName,
      this.state.manEmail,
      this.state.services
    );
    this.props.onAdd(newUser);
    this.setState({
      manFullName: "",
      manUserName: "",
      manEmail: "",
      checked: false,
      services: []
    });
  };

  removeUser = user => {
    this.props.onRemove(user);
  };

  updateCheck() {
    this.setState(oldState => {
      return {
        checked: !oldState.checked
      };
    });
  }

  render() {
    return (
      <div>
        <ReactTooltip />
        <Table displaySelectAll={false}>
          <TableHeader />
          <TableBody displayRowCheckbox={false}>
            {this.props.usersAdded[0]
              ? this.renderUserDetailsTable()
              : this.renderNoUserDetails()}
          </TableBody>
        </Table>
        <FlexBox>
          <Entryfield
            hintText="Full Name"
            value={this.state.manFullName}
            onChange={this.setManFullName}
          />
          <Entryfield
            hintText="Username"
            value={this.state.manUserName}
            onChange={this.setManUserName}
          />
          <Entryfield
            hintText="E-mail"
            value={this.state.manEmail}
            onChange={this.setManEmail}
          />
        </FlexBox>
        <MarginSpace>
          Select the Service(s) You want a user to have access too
        </MarginSpace>
        <FlexBox>
          {this.props.servicesSelected.map(item => {
            return (
              <Checkbox
                key={item.service.serviceTitle}
                label={item.service.serviceTitle}
                style={styles.checkbox}
                onCheck={() =>
                  this.addServiceTitles(
                    event.target.value,
                    item.service.serviceTitle
                  )}
              />
            );
          })}
          <FlatButton
            label="Add User"
            onTouchTap={this.manualAddUser}
            style={{ align: "flex-end" }}
            data-tip="Adds a user to the list of access for the service(s) selected"
          />
        </FlexBox>
      </div>
    );
  }
}

export default UserDetailsEntry;
