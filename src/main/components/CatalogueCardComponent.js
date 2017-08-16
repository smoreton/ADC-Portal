import React, { Component } from "react";

import ImgPathVar from "../../../public/img/Cart.png";
import styled from "styled-components";
import { Card } from "material-ui/Card";
import ReactStars from "react-stars";
import SelectedService from "../model/selectedService";
import Checkbox from "material-ui/Checkbox";

const CatalogueCard = styled(Card)`
  margin: 20px;
  max-height:525px;
  min-height:260px;
  width:95%;
  padding:10px;
`;

const CatalogueCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ServiceName = styled.h1`
  color: black;
  font-size: 30px;
  font-weight: bold;
`;

const CategoryType = styled.div`
  font-size: 16px;
  color: #0975df;
  display: flex;
`;

const CatalogueCardDescription = styled.div`
  font-size: 13px;
  height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const CheckBoxRow = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const CheckBoxOuter = styled.div`
  display: block;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
`;

const ImageOuter = styled.div`
  z-index: 1;
  display: block;
  position: relative;
`;

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  height: auto;
  width: 100%;
  justify-content: center;
`;

const ServicePicture = styled.div`
  height: 150px;
  width: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.src});
`;

const ConditionalElement = styled.div`color: green;`;

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

class CatalogueCardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceChecked: false
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.renderAddedToCart = this.renderAddedToCart.bind(this);
    this.saveService = this.saveService.bind(this);
    this.removeService = this.removeService.bind(this);
  }

  handleCheck(event, checked) {
    if (checked) {
      this.setState({
        serviceChecked: true
      });
      this.saveService(this.props.service);
    } else {
      this.setState({
        serviceChecked: false
      });
      this.removeService(this.props.service);
    }
  }

  saveService = service => {
    //defaults the user ranger and business unit to a value
    let userRange = "0-15";
    let businessUnit = "CBS";

    let newSelectedService = new SelectedService(
      service,
      userRange,
      businessUnit
    );
    this.props.onChecked(newSelectedService);
  };

  removeService = service => {
    this.props.onUnchecked(service);
  };

  renderAddedToCart = () => {
    return <ConditionalElement>Added to Cart</ConditionalElement>;
  };

  componentDidMount = () => {
    for (let i = 0; i < this.props.checkedService.length; i++) {
      if (
        this.props.checkedService[i].serviceName ===
        this.props.service.serviceTitle
      ) {
        this.setState({ serviceChecked: true });
      }
    }
  };

  render() {
    return (
      <CatalogueCard>
        <CatalogueCardHeader>
          <FlexContainer>
            <ServicePicture src={this.props.service.logoSource} />
          </FlexContainer>

          <ServiceName className="serviceName">
            {this.props.service.serviceTitle}
          </ServiceName>

          <CategoryType>
            <div className="serviceCat">
              {this.props.service.category}
            </div>
          </CategoryType>

        </CatalogueCardHeader>

        <CatalogueCardDescription className="serviceDescription">
          {this.props.service.description}
        </CatalogueCardDescription>

        <CheckBoxRow className="checkBoxDiv">
          <div style={styles.block}>
            <CheckBoxOuter>
              <Checkbox
                checked={this.state.serviceChecked}
                onCheck={this.handleCheck}
              />
            </CheckBoxOuter>
            <ImageOuter>
              <img src={ImgPathVar} alt="" />
            </ImageOuter>
          </div>

          {/** Renders an element based on the condition of the checkbox*/
          this.state.serviceChecked ? this.renderAddedToCart() : null}
          <ReactStars
            count={this.props.service.starRating}
            size={24}
            color1={"#DAA520"}
            color2={"#DAA520"}
          />
        </CheckBoxRow>
      </CatalogueCard>
    );
  }
}

export default CatalogueCardComponent;
