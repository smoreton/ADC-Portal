import React, { Component } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import FlatButton from "material-ui/FlatButton";
import Checkbox from "./CheckBoxComponent";

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
  margin-bottom: 5px !important;
  padding-right: 40px !important;
  width: 25% !important;
`;

const AddUserButton = styled(FlatButton)`
  background-color: #5096FF !important;
  color: #ffffff !important
  border: 1px solid #A8A8A8 !important;
  border-radius: 25px !important;
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

class UserDetailsEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manFullName: "",
      manUserName: "",
      manEmail: "",
      services: [],
      pageContent: ""
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
          <TableRowColumn>
            {item.userServices}
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

  addServiceTitles = value => {
    this.setState({ services: this.state.services.concat(value) });
  };

  removeServiceTitle = value => {
    this.setState({
      services: this.state.services.filter(item => {
        return item !== value;
      })
    });
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
      services: []
    });

    this.resetPageContent();
  };

  resetPageContent = () => {
    let newAarray = this.state.pageContent.map((item, index) => {
      return (
        <Checkbox
          id="checkbox"
          key={Math.random()}
          addServiceTitle={this.addServiceTitles}
          serviceTitle={item.props.serviceTitle}
          removeServiceTitle={this.removeServiceTitle}
          checker={false}
        />
      );
    });

    this.setState({
      pageContent: newAarray
    });
  };

  componentWillMount = () => {
    this.setState({
      pageContent: this.props.servicesSelected.map(item => {
        return (
          <Checkbox
            id="checkbox"
            key={item.service.serviceTitle}
            addServiceTitle={this.addServiceTitles}
            serviceTitle={item.service.serviceTitle}
            removeServiceTitle={this.removeServiceTitle}
          />
        );
      })
    });
  };

  removeUser = user => {
    this.props.onRemove(user);
  };

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
          Select the Service(s) you want a user to have access to
        </MarginSpace>
        <FlexBox>
          {this.state.pageContent}
          <AddUserButton
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
