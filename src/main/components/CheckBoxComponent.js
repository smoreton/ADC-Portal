/**
 * Created by SCMORETO on 22/08/2017.
 */
import React, { Component } from "react";
import Checkbox from "material-ui/Checkbox";

const styles = {
  block: {
    maxWidth: 500
  },
  checkbox: {
    marginBottom: 16,
    marginTop: 10
  }
};

class CheckBoxComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceChecked: false
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(event, service) {
    if (!this.state.serviceChecked) {
      this.setState({
        serviceChecked: true
      });
      this.props.addServiceTitle(service);
    } else {
      this.setState({
        serviceChecked: false
      });
      this.props.removeServiceTitle(service);
    }
  }

  render() {
    return (
      <Checkbox
        checked={this.state.serviceChecked}
        label={this.props.serviceTitle}
        style={styles.checkbox}
        onCheck={() =>
          this.handleCheck(event.target.value, this.props.serviceTitle)}
      />
    );
  }
}

export default CheckBoxComponent;
