import React, { Component } from "react";
import { Card } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";

const QueryCard = styled(Card)`
width: 50%;
margin: auto;
padding:15px;
`;

const QuerySection = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`;

const QueryTextArea = styled.div`
padding: 0.25em;
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = event => {};

  handleChange = event => {};

  render() {
    return (
      <QueryCard>
        <form>
          <QuerySection>

            <TextField hintText="Name" />
            <TextField hintText="E-mail" />

            <TextField hintText="Business Unit" />
            <TextField hintText="Username" />

          </QuerySection>

          <QueryTextArea>
            <TextField
              hintText="Enter your Query here and this will be sent to our HelpDesk Inbox..."
              fullWidth={true}
              multiLine={true}
              rows={1}
              rowsMax={10}
            />
          </QueryTextArea>

          <RaisedButton
            label="SEND"
            primary={true}
            onTouchTap={this.handleSubmit}
          />
        </form>
      </QueryCard>
    );
  }
}

export default ContactForm;
