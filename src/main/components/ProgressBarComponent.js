import React, { Component } from "react";
import Stepper from "./Stepper";
import styled from "styled-components";

const Clicker = styled.div`
  cursor: pointer;
  cursor: hand;
`;

class ProgressBarComponent extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        {
          title: "Cart",
          href: "http://example1.com",
          onClick: e => {
            e.preventDefault();
            console.log("onClick", 1);
          }
        },
        {
          title: "User Details",
          href: "http://example2.com",
          onClick: e => {
            e.preventDefault();
            console.log("onClick", 2);
          }
        },
        {
          title: "Project Details",
          href: "http://example3.com",
          onClick: e => {
            e.preventDefault();
            console.log("onClick", 3);
          }
        },
        {
          title: "Done",
          href: "http://example4.com",
          onClick: e => {
            e.preventDefault();
            console.log("onClick", 4);
          }
        }
      ],

      currentStep: 0
    };
  }

  render() {
    const { steps, currentStep } = this.state;
    const buttonStyle = {
      background: "#E0E0E0",
      width: 200,
      padding: 16,
      textAlign: "center",
      margin: "0 auto",
      marginTop: 32
    };

    return (
      <div>
        <Stepper steps={steps} activeStep={this.props.counter} />
      </div>
    );
  }
}

export default ProgressBarComponent;
