import React, { Component } from "react";
import AppNavBar from "./AppNavBar";
import styled from "styled-components";
import { Card } from "material-ui/Card";
import Collapsible from "react-collapsible";
//import FloatingActionButton from "material-ui/FloatingActionButton";
//import ContentAdd from "material-ui/svg-icons/content/expand-more";
import Expand from "../../../public/img/expandMedium.png";

const PositionPlus = styled.div`
  margin-top: 2px;
  margin-left: 10px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 3%;
`;

const PositionHeader = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 150%;
`;

const DescriptionText = styled.div`
  display: flex;
  width: 90%;
  padding: 10px;
  text-align: left;
`;

const Container = styled.div`margin-top: 3%;`;

const Wrapper = styled(Card)`
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
  
 border-style: solid
 border-width: 1px;
 
 margin-top: 1%;
 margin-left: 20%;
 
 max-height:12%;
 min-height:12%;
 
 max-width:60%;
 min-width:60%;
`;

const style = {
  marginRight: 20
};

class FAQPage extends Component {
  renderFaqElements = array => {
    return array.map(item => {
      return (
        <Wrapper key={item.id}>
          <Collapsible
            trigger={
              <Header>
                <PositionHeader>
                  {item.header}
                </PositionHeader>
                <PositionPlus>
                  <img src={Expand} alt="" />
                </PositionPlus>
              </Header>
            }
          >
            <DescriptionText>
              {item.description}
            </DescriptionText>
          </Collapsible>
        </Wrapper>
      );
    });
  };

  render() {
    return (
      <div>
        <AppNavBar />
        <Container>
          {this.renderFaqElements(this.props.questions)}
        </Container>
      </div>
    );
  }
}

export default FAQPage;
