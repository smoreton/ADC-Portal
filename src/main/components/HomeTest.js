import React, { Component } from 'react';
import { Column, Row } from 'react-foundation';
import DescriptionCard from './DescriptionCard';
import '../App.css';

const title = "ADC Confluence";
const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in elit a turpis rhoncus commodo ac eu lorem. Nam auctor urna libero, mollis luctus diam euismod vitae. Nam auctor aliquam massa, tincidunt aliquet massa pretium eget. Aenean vitae tellus tincidunt, lacinia lectus vitae, volutpat nibh. Maecenas iaculis leo elit, semper pulvinar nisl dignissim lacinia. Proin dignissim dapibus augue, id ultricies odio. Pellentesque blandit nisi ante, ac commodo lacus dictum quis. Duis hendrerit nec enim non iaculis.";
class HomeTest extends Component {
  render() {
    return (
        <div>

            <DescriptionCard description={desc} title={title}></DescriptionCard>
        </div>
    );
  }
}

export default HomeTest;
