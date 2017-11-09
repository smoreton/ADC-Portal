import React, { Component } from "react";
import { Card } from "material-ui/Card";
//import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";
import EmailPostUtil from "..//utils/EmailPostUtil";

const QueryCard = styled(Card)`
  width: 50%;
  margin: auto;
  padding: 15px;
`;

const InputField = styled.input`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  max-width: 40%;
  width: 40%;
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
  line-height: 20px;
  max-width: 100%;
  width: 100%;
  height: 50px;
  font-family: Roboto-Light;
  font-size: 13px;
  color: #4a4a4a;
  letter-spacing: 0.75px;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 100px;
`;

const StyledButton = styled(RaisedButton)`
  display: flex;
  flex-flow: row wrap;
  color: #00bfff !important;
  margin: 20px;
  border-radius: 25px !important;
  overflow: hidden !important;
`;

const ButtonPosition = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

const Text = styled.div`
  justify-content: center;
  text-align: center;
  color: #00bfff;
  font-size: 250%;
`;

const QuerySection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5%;
`;

const QueryTextArea = styled.div`
  padding: 0.25em;
  margin-top: 5%;
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersName: "",
      usersEmail: "",
      usersQuery: ""
    };
  }

  //handleSubmit = event => {};

  setUsersName = value => {
    this.setState({ usersName: value.target.value });
  };

  setUsersEmail = value => {
    this.setState({ usersEmail: value.target.value });
  };

  setUsersQuery = value => {
    this.setState({ usersQuery: value.target.value });
  };

  postEmailQuery = () => {
    let APIResponseCode;
    // let usersName = this.state.usersName;
    let usersEmail = this.state.usersEmail;
    let usersQuery = this.state.usersQuery;

    return EmailPostUtil.postEmailQuery(
      //Put Form Data Here
      usersEmail,
      usersQuery
    ).then(result => {
      APIResponseCode = result.statusCode;
      console.log(result.statusCode);
    });
  };

  render() {
    return (
      <QueryCard>
        <Text>Send Us Your Questions</Text>

        <form>
          <QuerySection>
            <InputField placeholder="Name" onChange={this.setUsersName} />
            <InputField placeholder="E-mail" onChange={this.setUsersEmail} />
          </QuerySection>

          <QueryTextArea>
            <InputMultiField
              placeholder="Enter your Query here and this will be sent to our HelpDesk Inbox..."
              onChange={this.setUsersQuery}
            />
          </QueryTextArea>

          <ButtonPosition>
            <StyledButton
              label="SEND"
              primary={true}
              onTouchTap={this.postEmailQuery}
            />
          </ButtonPosition>
        </form>
      </QueryCard>
    );
  }
}

export default ContactForm;
