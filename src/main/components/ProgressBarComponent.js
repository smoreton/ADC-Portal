import React, { Component } from "react";
import Stepper from "./Stepper";

class ProgressBarComponent extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        {
          title: "Cart"
        },
        {
          title: "User Details"
        },
        {
          title: "Project Details"
        },
        {
          title: "Done"
        }
      ],

      currentStep: 0
    };
  }

  render() {
    const { steps } = this.state;

    return (
      <div>
        <Stepper steps={steps} activeStep={this.props.counter} />
      </div>
    );
  }
}

export default ProgressBarComponent;
