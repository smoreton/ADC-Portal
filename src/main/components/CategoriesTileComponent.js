import React, { Component } from "react";
import styled from "styled-components";

import Paper from "material-ui/Paper";

const Centralised = styled.div`
  margin-top: 80px;

  :last-child {
    margin-bottom: 15px;
  }
`;

const Bullet = styled.div`
  display: flex;
  font-size: 20px;
  margin-top: -5px;
  color: #fff;
  background-color: #00bcd4;
  padding: 5px 15px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const imgStyle = {
  width: 250,
  height: 180,
  margin: 0
};

class CategoriesTileComponent extends Component {
  render() {
    return (
      <Centralised>
        <Paper style={imgStyle} zDepth={1} circle={false}>
          <img
            src={this.props.categories.logoSource}
            style={{ width: 250, height: 180 }}
            alt={this.props.serviceTitle}
          />
          <Bullet
            style={{
              backgroundColor: this.props.categories.serviceCategoryColor,
              cursor: "pointer"
            }}
            className="serviceCat"
          >
            {this.props.categories.serviceTypeCategory}
          </Bullet>
        </Paper>
      </Centralised>
    );
  }
}

export default CategoriesTileComponent;
