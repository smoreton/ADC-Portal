import React, { Component } from "react";
import styled from "styled-components";

import Paper from "material-ui/Paper";

const Centralised = styled.div`
  text-align:center;
`;

const Bullet = styled.div`
  height: 20px;
  display: flex;
  padding: 5px 15px;
  border-radius: 25px;
  margin-top:10px;
  color:black;
  text-decoration: underline;
  justify-content: center;
  color: #FFF;
  text-decoration: none;
`;

const imgStyle = {
  height: 110,
  width: 110,
  margin: 0,
  display: "inline-block",
  overflow: "hidden"
};

class CategoriesTileComponent extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD

    this.getColor = this.getColor(this);
  }

  getColor() {
    switch (this.props.categories.category) {
      case "Networks":
        return {
          backgroundColor: "#7E57C2",
          color: "#FFF",
          textDecoration: "none"
        };
      case "Infrastructure":
        return {
          backgroundColor: "#5C6BC0",
          color: "#FFF",
          textDecoration: "none"
        };
      default:
        return {
          backgroundColor: "#26A69A",
          color: "#FFF",
          textDecoration: "none"
        };
    }
=======
>>>>>>> Refactored how tag color is picked
  }

  render() {
    return (
      <Centralised>

        <Paper style={imgStyle} zDepth={1} circle={true}>
          <img
            src={this.props.categories.logoSource}
            style={{ width: "100%", height: "auto" }}
            alt={this.props.serviceTitle}
          />
        </Paper>

        <Bullet
          style={{
            backgroundColor: this.props.categories.serviceCategoryColor
          }}
          className="serviceCat"
        >
          {this.props.categories.serviceTypeCategory}
        </Bullet>

      </Centralised>
    );
  }
}

export default CategoriesTileComponent;
