import React, { Component } from 'react';
import { Column } from 'react-foundation';
import NewsCard from './NewsCard';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';


import '../App.css';

const Container = styled.div`
  flex: 1;
  max-height: 260px;
  overflow-y: auto;
  
`;

let issues = [
    {dateTime:'20/05/2017',header:'There are major problems',description:'We are currently having major issues with our systems and will not abe able to process any requests'},
    {dateTime:'19/05/2017',header:'There are minor problems',description:'We are currently having minor issues with our systems and will not abe able to process any requests'},
    {dateTime:'02/05/2017',header:'No problems today',description:'End of testing information'},
    {dateTime:'01/01/2016',header:'Happy New Years',description:'As seen above'}
];

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
                <CardListing listArray={this.comingSoon} />
            </Container>
            <Container>
                <CardListing listArray={issues} />
            </Container>
        </Row>
    );
  }
}

export default HomeTest;
