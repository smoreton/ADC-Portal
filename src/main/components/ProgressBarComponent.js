import React, { Component } from "react";
import Stepper from "./Stepper";

class ProgressBarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        {
          title: "Service Summary"
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
