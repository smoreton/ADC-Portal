import React, { Component } from "react";
import styled from "styled-components";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";
import TileComponent from "./CatalogueCardComponent";

const Contain = styled.div`
  margin: auto;
  overflow: hidden;
 `;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
 `;

const Container = styled.div`
  flex: 1;
  min-width: 33%;
  max-width: 33%;
  min-height: 35%;
  max-height: 35%;

`;

const DropDownContainer = styled.div`
 width:100%;
  margin:auto;
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
  padding-right:10px;
  `;

class CataloguePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    let newCategory;
    switch (value) {
      case 0:
        newCategory = "all";
        break;
      case 1:
        newCategory = "Tools/Software";
        break;
      case 2:
        newCategory = "Infrastructure";
        break;
      case 3:
        newCategory = "Networks";
        break;
      default:
        newCategory = "all";
    }

    this.props.onServiceCategoryChange(newCategory);
    this.setState({ value: value });
  };

  renderServiceCatalogueCards = array => {
    return array.map(item => {
      return (
        <Container key={item.serviceTitle}>
          <Contain>
            <TileComponent service={item} />
          </Contain>
        </Container>
      );
    });
  };

  createFilteredServiceArray = (array, category) => {
    if (category === "all") {
      return this.renderServiceCatalogueCards(array);
    } else {
      return this.renderServiceCatalogueCards(
        array.filter(item => {
          if (item.category === category) {
            return item;
          }
        })
      );
    }
  };

  render() {
    return (
      <Row>
        <DropDownContainer>
          <div>
            <SelectField
              floatingLabelStyle={{ color: "#00bcd4" }}
              floatingLabelText="Category Type"
              maxHeight={175}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={"all"} primaryText="All Categories" />
              <MenuItem value={"Tools/Software"} primaryText="Tools/Software" />
              <MenuItem value={"Infrastructure"} primaryText="Infrastructure" />
              <MenuItem value={"Networks"} primaryText="Networks" />
            </SelectField>
          </div>
        </DropDownContainer>

        {this.createFilteredServiceArray(
          this.props.serviceDetails,
          this.props.selectedServiceCategory
        )}
      </Row>
    );
  }
}
export default CataloguePage;
