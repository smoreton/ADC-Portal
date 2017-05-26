import React, { Component } from "react";

class ContactForm extends Component {
  handleSubmit(event) {
    //set state with form data
  }

  render() {
    render(
      <form onSubmit={this.handleSubmit}>
        <div>form data</div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;
