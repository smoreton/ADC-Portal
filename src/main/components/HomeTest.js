import React, { Component } from 'react';
import NewsCard from './NewsCard';
import { Row } from 'react-flexbox-grid';
import styled from 'styled-components';


import '../App.css';

const Container = styled.div`
  flex: 1;
  max-height: 260px;
  overflow-y: auto;
  
`;


let CardListing = React.createClass({
     render: function() {
        let listCard = this.props.listArray.map(function (listArray) {
        return <NewsCard dateTime={listArray.dateTime} header={listArray.header}
        description={listArray.description}> </NewsCard>;
        });

        return <div>{listCard}</div>;
     }
 });


class HomeTest extends Component {
  render() {
    return(
        <Row around="xs">
            <Container>
                <CardListing listArray={this.props.comingSoon} />
            </Container>
            <Container>
                <CardListing listArray={this.props.issues} />
            </Container>
        </Row>
    );
  }
}

export default HomeTest;
