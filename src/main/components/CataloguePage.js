/**
 * Created by CSHEFIK on 18/05/2017.
 */
import React, { Component } from "react";
import styled from "styled-components";
import { Card, CardMedia } from "material-ui";
import TileComponent from "./TileComponent";


const Row = styled.div`
 display: flex;
 flex-direction: row;
 `;

const _Center = styled.div`
 margin: auto;
 `;

class CataloguePage extends Component {
  render() {
      let service = this.props.services.map(services => {

    return(
        <_Center>
          <TileComponent
              logoSource={services.logoSource}/>
        </_Center>

    );
             });
      return <Row>{service}</Row>;
  }
}
export default CataloguePage;
