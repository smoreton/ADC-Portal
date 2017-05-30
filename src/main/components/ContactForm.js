import React, { Component } from "react";
import { Card } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";

const QueryCard = styled(Card)`
width: 50%;
margin: auto;
`;

const QuerySection = styled.div`
display: flex;
flex-direction: row;
`;

const QueryDetailBlock = styled.div`
display: flex;
flex-direction: column;
padding: 0.25em;
`;

const QueryTextArea = styled.div`
padding: 0.25em;
`;

class ContactForm extends Component {
  //constructor

  handleSubmit(event) {}

  handleChange(event) {}

  render() {
    return (
      <QueryCard>
        <form onSubmit={this.handleSubmit}>
          <QuerySection>
            <QueryDetailBlock>
              <TextField hintText="Name" />
              <TextField hintText="E-mail" />
            </QueryDetailBlock>

            <QueryDetailBlock>
              <TextField hintText="Business Unit" />
              <TextField hintText="Username" />
            </QueryDetailBlock>
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

          <RaisedButton label="SEND" primary={true} />
        </form>
      </QueryCard>
    );
  }
}

export default ContactForm;
